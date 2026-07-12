# ТЗ: страница «Free Track Preview» с загрузкой файлов

Задача: создать страницу `/free-track-preview`, где посетитель загружает свой аудиофайл
прямо на сайте и получает бесплатный обработанный фрагмент. Плюс подключить ссылки на
неё из уже существующих мест сайта.

Проект: Next.js 16 (App Router), Tailwind v4, деплой на Vercel, почта через Resend.
Тариф Vercel: **бесплатный (Hobby)**. Это осознанное решение, апгрейд не предлагать.

---

## 0. КРИТИЧНО — ПРОЧИТАТЬ ПЕРЕД НАПИСАНИЕМ КОДА

Vercel Blob недавно перешёл на новую модель авторизации, и большинство примеров в
интернете (и в твоих обучающих данных) **устарели**. Поэтому:

**НЕ ПИСАТЬ КОД ПО ПАМЯТИ.** Сначала:
1. Установить пакет: `npm install @vercel/blob`
2. Открыть и прочитать типы прямо в установленном пакете:
   `node_modules/@vercel/blob/dist/index.d.ts` и
   `node_modules/@vercel/blob/dist/client.d.ts`
3. Убедиться в точных сигнатурах функций `handleUploadPresigned`, `uploadPresigned`,
   `issueSignedToken`, `presignUrl`, `put`, `del`, `list`.
   Если каких-то из них в пакете нет — значит версия пакета старая,
   обновить (`npm install @vercel/blob@latest`) и перечитать типы.

Типы в `node_modules` — источник истины. Всё, что ниже, — описание задачи, а не
дословный код.

---

## 1. АРХИТЕКТУРА ЗАГРУЗКИ

**Проблема:** у Vercel жёсткий лимит 4.5 МБ на тело запроса к серверной функции.
Аудиофайл через обычную форму НЕ пройдёт (ошибка 413 FUNCTION_PAYLOAD_TOO_LARGE).

**Что уже настроено в проекте (руками, в дашборде Vercel):**
- Создано Blob-хранилище с типом доступа **private** (изменить нельзя).
- Vercel сам добавил переменные окружения:
  `BLOB_STORE_ID`, `VERCEL_OIDC_TOKEN`, `BLOB_WEBHOOK_PUBLIC_KEY`.
- **Переменной `BLOB_READ_WRITE_TOKEN` НЕТ и не будет.** Хранилище работает на OIDC.

**Из этого следует главное ограничение:**
Метод `handleUpload` (старый способ клиентских загрузок) **требует долгоживущий
read-write токен и с OIDC не работает**. Использовать его НЕЛЬЗЯ.

**Правильный способ — подписанные ссылки (Vercel Signed URLs):**
- сервер: `handleUploadPresigned` (из `@vercel/blob/client`) + `issueSignedToken`
  (из `@vercel/blob`) — сервер по OIDC получает короткоживущий ключ и выдаёт браузеру
  подписанную ссылку на загрузку;
- браузер: `uploadPresigned` (из `@vercel/blob/client`) — грузит файл напрямую
  в хранилище по этой ссылке, минуя сервер.
- везде указывать `access: 'private'`.

**ВТОРОЙ ВАЖНЫЙ НЮАНС.** Колбэк завершения загрузки (`onUploadCompleted`) **не
срабатывает на localhost** — Vercel физически не может достучаться до машины
разработчика. Поэтому НЕ строить отправку письма на этом колбэке.

Схема в три шага (работает и локально, и в бою):
1. Браузер вызывает `uploadPresigned()` → файл летит в приватное хранилище.
2. Функция возвращает результат с `pathname` и `url` загруженного файла.
3. Только ПОСЛЕ этого браузер шлёт обычный POST на `/api/preview` с метаданными
   (имя, email, услуга, комментарий, `pathname`, имя и размер файла).
   Этот роут генерирует **временную подписанную ссылку на скачивание (GET)**
   и отправляет письмо через Resend.

---

## 2. ЧТО НУЖНО СДЕЛАТЬ

### 2.1. Локальные переменные окружения
Владелец выполнит `vercel env pull .env.local`, чтобы подтянуть OIDC-токен.
Проверить, что `.env.local` в `.gitignore`.
Если `BLOB_STORE_ID` или `VERCEL_OIDC_TOKEN` отсутствуют — падать с внятной ошибкой,
а не молча.

### 2.2. Роут выдачи подписанной ссылки на загрузку
`src/app/api/preview-upload/route.js`

- Использовать `handleUploadPresigned` из `@vercel/blob/client`.
- Ограничения, которые нужно вшить в подписанную ссылку:
  - `access: 'private'`
  - разрешённые типы: аудио и архивы —
    `audio/wav`, `audio/x-wav`, `audio/mpeg`, `audio/mp4`, `audio/aiff`,
    `audio/x-aiff`, `audio/flac`, `audio/x-flac`, `audio/ogg`, `audio/webm`,
    `video/mp4`, `application/zip`, `application/x-zip-compressed`,
    `application/octet-stream`
  - максимальный размер: **100 МБ** → вынести в именованную константу
    `MAX_UPLOAD_BYTES = 100 * 1024 * 1024` с комментарием «владелец меняет это число».
- Путь файла формировать как `previews/<timestamp>-<безопасное-имя-файла>`.
  Имя файла санитизировать (убрать кириллицу, пробелы, спецсимволы) — иначе
  ломаются URL.
- Колбэк завершения загрузки, если он предусмотрен API, оставить с простым
  `console.log` — на него мы не полагаемся.

**Безопасность.** Авторизации нет — загружать может любой посетитель, это by design
(это публичный оффер). Защита строится на трёх вещах:
ограничение типов файлов, ограничение размера, и honeypot-поле в форме
(в существующей форме `/contact` уже есть скрытое поле `website` — скопировать приём).

### 2.3. Роут письма
`src/app/api/preview/route.js`

Взять за образец существующий `src/app/api/contact/route.js`
(Resend, отправитель `noreply@slstudio.pro`, получатель `serhii@slstudio.pro`).

Принимает JSON: `{ name, email, service, message, pathname, fileName, fileSize, link, website }`
- `website` — honeypot: если заполнено, тихо вернуть успех и НЕ слать письмо.
- Валидация: `email` обязателен; должен присутствовать либо `pathname` (файл загружен),
  либо `link` (внешняя ссылка, см. 2.4).
- **Если есть `pathname`:** сгенерировать подписанную GET-ссылку на скачивание
  сроком **7 дней** (`issueSignedToken` + `presignUrl`, или тем методом, который
  реально есть в типах пакета) и вставить её в письмо.
- Тема письма: `Free preview request — {name}`.
- Тело письма: все поля формы + кликабельная ссылка на скачивание + пометка
  «ссылка действует 7 дней; после этого файл можно скачать из дашборда Vercel
  (Storage → Blob → Browser)».

### 2.4. Страница
`src/app/free-track-preview/page.js` → импортирует
`src/app/components/pages/free-track-preview/Hero.jsx` (`"use client"`, состояние формы).
Структура — как у других страниц проекта.

**Блоки сверху вниз:**

**A. Hero**
- Надзаголовок (мелкий, uppercase, `tracking-[0.3em]`): `FREE PREVIEW · NO OBLIGATION`
- H1: `Hear Your Track, Free.` — золотым выделить `Free.`
  (не должен совпадать с H1 других страниц: главная — «From Raw to Ready.»,
  /mixing-mastering — «Mixing & Mastering», /contact — «Let's Work.»)
- `<HeroWave />` — общий компонент, как на других страницах.
- Подзаголовок: `Send me your track and I'll process a section of it — free.
  A rough demo, a phone recording, stems, an old track that never sounded right.
  You hear what it can become before you decide anything.`
- Три «чипа» доверия в ряд (иконка + текст, стиль как у trust bullets на главной):
  `1–2 days` / `No card, no account` / `No obligation`

**B. Форма загрузки** — главный элемент, сразу под hero, `id="upload"`,
`scrollMarginTop: 80px`.

Поля:
- Name (text)
- Email (email, required)
- What do you need? (select): `Mastering` / `Mixing & Mastering` /
  `Arrangement & Production` / `Not sure yet`
- **Зона загрузки файла**: drag-and-drop + кнопка «browse».
  Подпись под ней: `WAV, MP3, AIFF, FLAC or ZIP · up to 100 MB · your file stays private`
- **Запасное поле (обязательно сделать!):** `Or paste a link (Google Drive, Dropbox,
  WeTransfer)` — текстовое. Для тех, у кого файл больше лимита.
  Отправка возможна, если заполнено ЛИБО поле файла, ЛИБО поле ссылки.
- Message / notes (textarea, необязательное): `Anything I should know? Genre,
  reference track, what bothers you about the current sound.`
- Honeypot `website` — скрытое поле, как на `/contact`.
- Кнопка `Send my track →`

**Поведение формы:**
- **Обязательно показывать прогресс загрузки** (полоса или проценты) — файлы большие,
  без прогресса человек решит, что сайт завис. Если API `uploadPresigned` даёт
  колбэк прогресса — использовать его.
- Для файлов больше ~50 МБ включить многочастную загрузку, если API это поддерживает.
- Ошибки — человеческим языком, не техническим:
  - слишком большой файл → `This file is over 100 MB. Paste a link instead
    (Google Drive, Dropbox or WeTransfer) and I'll grab it from there.`
  - неподдерживаемый тип → `Audio files and ZIP archives only.`
  - сбой сети → `Something went wrong. Please try again, or write to me directly
    on Telegram.`
- Экран успеха (заменяет форму, как на `/contact`): `Got it. I'll listen and send
  your preview back within 1–2 days — check your email.`
- GA4-событие после успешной отправки (как уже сделано в форме `/contact`):
  `window.gtag("event", "form_submit", { form_name: "free_preview", service })`

**C. How It Works** — три шага, визуально в духе `sections/HowItWorks.jsx`:
1. `Send what you have` — Drop a file or paste a link. Any format, any quality.
   Rough demos and phone recordings are welcome — that's the whole point.
2. `I work on a section of it` — Not a preset, not an algorithm. I sit down with your
   track and treat it like a paying job.
3. `You hear the difference` — Within 1–2 days you get the processed section back,
   plus honest notes on what the full version needs and exactly what it would cost.

**D. What you get back** — золотая врезка-карточка
(`background: rgba(201,168,76,0.06)`, `border: 1px solid rgba(201,168,76,0.2)`):
- A processed section of your own track (usually 30–60 seconds)
- An honest assessment — what can be fixed, what can't
- An exact price for the full job
- No obligation to book anything

**E. Before you send — чек-лист** (пункты со стрелками `→`, как в статьях блога):
- Send the best version you have — a finished mix, a rough mix, or raw stems.
- If you have separate tracks (stems), zip them and send the archive.
- Leave some headroom, no clipping. If you don't know what that means — send it anyway,
  I'll figure it out.
- If you have a reference track — a song whose sound you're chasing — mention it in the notes.
- If your file is over 100 MB, paste a link instead.

**F. FAQ** — тот же компонент-аккордеон, что на `/mixing-mastering` и `/arrangement`
(`ChevronRight` + `useState(openIndex)`):
- `Is this really free?` → Yes. No card, no account, no automatic charge. If you like
  what you hear, we talk about the full job. If not — keep the preview, no hard feelings.
- `What exactly do you send back?` → A processed section of your track — usually 30–60
  seconds — plus notes on what the full version needs and what it would cost.
- `My recording is really rough. Should I still send it?` → Especially then. Rough demos,
  rehearsal takes and phone recordings are the material I work with most.
- `My file is too big to upload.` → Paste a link instead — Google Drive, Dropbox or
  WeTransfer all work. Same result.
- `What happens to my file?` → It goes into private storage that isn't publicly
  accessible — no one can reach it without a signed link, and I delete it once we're done.
  (ЭТО ПРАВДА только потому, что хранилище private — не менять формулировку.)
- `How long does it take?` → Usually 1–2 days. Telegram is the fastest way to reach me
  if it's urgent.

**G. Финальный CTA** — кнопка, скроллящая наверх к форме (`href="#upload"`).

### 2.5. Метаданные страницы
По образцу `src/app/mixing-mastering/page.js`:
- `title: "Free Track Preview"`
- `description`: `Send your track and hear a free processed preview before you pay
  anything. Rough demos, phone recordings, stems — any format, any quality.
  Warsaw-based mixing, mastering and production studio.`
- `alternates.canonical`: `https://www.slstudio.pro/free-track-preview`
- openGraph + twitter — по тому же шаблону, что на других страницах.

### 2.6. Sitemap
Добавить `/free-track-preview` в `public/sitemap.xml` с текущим `lastmod`.

---

## 3. ПОДКЛЮЧИТЬ ССЫЛКИ (существующие файлы)

1. **`src/app/components/sections/Hero.jsx`** (главная) — золотая ссылка
   `Get a free preview →` сейчас ведёт на `/contact`. Поменять на `/free-track-preview`.
   **Больше в этом файле не трогать НИЧЕГО** — вёрстка выверена по пикселям,
   любое изменение высоты ломает выравнивание фото.

2. **`src/app/components/sections/FinalCTA.jsx`** (низ главной) — кнопка
   `Send Your Track →` ведёт на `/contact`, подпись —
   `First listen is always free. No commitment.`
   Поменять подпись на `Free preview of your track. No commitment.`,
   кнопку — на `/free-track-preview`.

3. **Шапка сайта** (`src/app/components/layout/Header.jsx`) — **НЕ ТРОГАТЬ.**
   Пункты меню выверены, шестой пункт может сломать вёрстку. Отдельное решение владельца.

4. **FAQ на `/mixing-mastering` и `/arrangement`** — в ответах уже упоминается превью.
   Сделать слова `free preview` / `free demo version` ссылкой на `/free-track-preview`
   (золотая, `#C9A84C`, подчёркнутая — как ссылки в статьях блога).

---

## 4. СОГЛАШЕНИЯ ПРОЕКТА (нарушение = баг)

- **Lucide-иконки в `.map()`** деструктурировать с большой буквы:
  `{items.map(({ icon: Icon }) => <Icon />)}`. Строчное `<item.icon />` не рендерится.
- **Tailwind v4**: цвета через токены (`text-gold`, `text-gold2`), не хардкодить `#C9A84C`
  там, где токен есть.
- Золото: `#C9A84C` (основное), `#f5b942` (яркое — hero, цифры). Фон `#1b1b1b`.
- Заголовки h1–h3 — Playfair Display (глобально), текст — Outfit.
- Карточки — `rounded-2xl`.
- Компонент с формой обязан быть `"use client"`.
- **НИКОГДА** не использовать localStorage / sessionStorage.

---

## 5. ЧЕГО НЕ ДЕЛАТЬ

- Не менять вёрстку hero на главной — только адрес ссылки.
- Не добавлять пункт в меню шапки.
- Не трогать блок About me и статистику на главной.
- Не переписывать статьи блога.
- Не предлагать переход на платный тариф Vercel.
- Не использовать `handleUpload` / `BLOB_READ_WRITE_TOKEN` — их в этом проекте нет.

---

## 6. ПОСЛЕ РЕАЛИЗАЦИИ — ПРОВЕРИТЬ

- [ ] Загрузка файла ~5 МБ проходит локально.
- [ ] Загрузка файла 60–80 МБ проходит; прогресс-бар двигается.
- [ ] Файл больше 100 МБ отклоняется человеческим сообщением, а не ошибкой 413.
- [ ] Отправка ТОЛЬКО ссылки, без файла, работает.
- [ ] Письмо приходит на serhii@slstudio.pro; ссылка из письма реально скачивает файл.
- [ ] Прямой доступ к файлу БЕЗ подписи не работает (приватность подтверждена).
- [ ] Honeypot: если заполнить скрытое поле — письмо не приходит.
- [ ] Ссылка с главной ведёт на новую страницу.
- [ ] Вёрстка hero на главной не сдвинулась ни на пиксель.
- [ ] Страница нормально выглядит на телефоне.

---

## 7. ВАЖНО ЗНАТЬ ВЛАДЕЛЬЦУ (не задача для Claude Code)

- Бесплатный тариф даёт **1 ГБ хранилища всего** (накопительно, не на файл).
  При лимите 100 МБ на файл это примерно 10–20 присланных треков.
  **Файлы надо удалять после обработки:**
  Vercel → проект slstudio → Storage → выбрать Blob-хранилище →
  раздел Browser → найти файл → Delete.
- Хранилище приватное: файлы недоступны никому без подписанной ссылки.
  Ссылка в письме живёт 7 дней; если не успел — скачивай из дашборда.
