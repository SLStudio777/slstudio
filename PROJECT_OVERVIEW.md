# SL Studio — обзор проекта

> Контекстный документ для Claude-проекта. Кратко: что это за сайт, на чём сделан,
> что уже реализовано и что в работе. Секретов (пароли БД/админки, API-ключи) здесь
> нет намеренно — они хранятся в Vercel Environment Variables и в локальном
> `CLAUDE.md` (в .gitignore). Актуальность: июль 2026.

## Что это

**SL Studio** ([slstudio.pro](https://www.slstudio.pro)) — сайт студии в Варшаве:
сведение (mixing), мастеринг, аранжировка и продакшн для независимых артистов,
удалённо, по всему миру. Владелец — Serhii Lazariev (гитарист, вокалист,
музыкальный продюсер).

**Кто что ведёт:**
- Фронтенд и SEO — сам владелец (без фрилансеров-разработчиков).
- Инфраструктура и сервер — коллега Александр.

## Стек

| Слой | Технология |
|------|-----------|
| Фреймворк | Next.js **16.2.4** (App Router) |
| UI | React **19.2.4** |
| Стили | Tailwind CSS **v4** (`@import "tailwindcss"`, токены в `@theme`) |
| БД | MySQL на AlwaysData (через `mysql2`) |
| Почта | Resend (`resend` v6) |
| Аудио | WaveSurfer.js v7 |
| Иконки | lucide-react v1 |
| Хостинг | Vercel, автодеплой из GitHub при push в `main` |
| Репозиторий | `dneprorudniy777-maker/slstudio` |

Шрифты: **Playfair Display** для заголовков (h1–h3) и **Outfit** для текста —
оба через `next/font/google`. Акцентный цвет — золото `#C9A84C`
(яркий вариант `#f5b942`), фон `#1b1b1b`.

## Структура (упрощённо)

```
src/app/
├── page.js                 Главная (собирает секции)
├── layout.js               Шрифты, Header, Footer, GA4, ScrollToTop
├── globals.css             Tailwind, токены цвета, .blog-prose, .hero-wave, glow
├── api/contact/route.js    Отправка формы через Resend
├── components/
│   ├── sections/           Секции главной (Hero, BeforeAfter, Pricing, ...)
│   ├── blog/               SectionIndicator, RelatedPosts, BlogJsonLd, PostCard
│   └── common/             HeroWave, ScrollToTop
├── blog/                   20 статей + листинг (BlogClient.js) + layout.js
├── mixing-mastering/  arrangement/  contact/
└── data/posts.js           Массив из 20 постов
```

## Что уже сделано

### SEO
- Переписаны title/description ключевых страниц, устранена каннибализация
  заголовков (две EN-статьи про Suno — это разные гайды, не дубли).
- hreflang-пары для RU/EN версий статей про Suno.
- Структурированные данные: Article + BreadcrumbList на статьях,
  ProfessionalService (LocalBusiness, Warsaw) на главной, FAQPage на части статей.
- `metadataBase` + шаблон title `%s | SL Studio`, канонические URL,
  OG/Twitter на всех постах, `lastmod` в sitemap.xml.

### Производительность и безопасность
- Изображения переведены в WebP.
- Аудио (WaveSurfer) грузится лениво — по клику, а не на загрузке страницы.
- Подсказки приоритета для LCP-картинок (`fetchPriority`, `loading`).
- Admin-кука подписана HMAC-SHA256 (Web Crypto) вместо проверки «кука есть/нет».
- Middleware переименован под Next.js 16.

### Функциональность
- Форма обратной связи через **Resend** (`src/app/api/contact/route.js`),
  домен верифицирован (DKIM/SPF/DMARC), пересылка на Gmail через ImprovMX.
- Блок **Related Posts** под статьями.
- Подключён **GA4**-трекинг.
- Исправлен `og:image`.

### Дизайн и UX
- Единая карточная система (радиус `rounded-2xl`), дисциплина золотого акцента,
  амбиентное свечение под заголовками (`.hero-title-glow`).
- Редизайн hero-секций (Home / Mixing & Mastering / Arrangement / Contact),
  общий компонент «дышащей» аудиоволны `HeroWave` как сквозной мотив.
- **Читаемость блога** на уровне шаблона: 18px / line-height 1.7 / яркость 80%,
  увеличенные отступы между абзацами (класс `.blog-prose`).
- **Боковые рейлы статьи** (`SectionIndicator`): слева sticky-оглавление,
  справа точки-навигация с золотой линией прогресса чтения; видны от 1280px,
  на узких экранах вместо них — оглавление-карточка в теле статьи.
- **Листинг блога**: поиск (с крестиком очистки), сегментный переключатель
  языка, фильтр по категориям, счётчик результатов, featured-карточка,
  пагинация; всё состояние — в URL.
- Унификация «тяжёлых» статей про Suno: единый кегль карточек (16px),
  свёрнутая палитра врезок, убраны кнопки «наверх».
- `ScrollToTop`: переход между страницами всегда приземляется на верх
  (обходит глобальный `scroll-behavior: smooth`).

## Что в работе / осталось

- Доделать левую колонку-декорацию в сайдбаре блога.
- Ещё упростить визуальный ритм статей про Suno.
- Переверификация видео для Google Business Profile
  (нужно показать на камеру рукописную надпись «SL Studio»).
- Отметить GA4 `form_submit` как ключевое конверсионное событие.
- Из SEO-плана: Google Business Profile (Warsaw), доработка
  `ai-mixing-mastering-review`, возможный польский лендинг `/pl/mixing-mastering`.

## Важные соглашения кода (частые грабли)

- **Lucide-иконки в `.map()`** — деструктурировать с большой буквы:
  `{ items.map(({ icon: Icon }) => <Icon />) }`. Строчное `<item.icon />`
  рендерится как HTML-тег и ничего не показывает. Касается HowItWorks,
  WhyChoose, Pricing.
- **Server vs Client**: если серверный компонент передаёт Lucide-иконку (или
  любой React-компонент) как проп дочернему — родитель тоже должен быть
  `"use client"`. Компоненты с запросом к БД (`YouTube`, `BeforeAfter`) —
  серверные, `"use client"` в них НЕ добавлять.
- **Tailwind v4**: цветовые токены объявляются в `@theme { --color-gold }` и
  дают утилиты `text-gold` / `bg-gold` / `border-gold` — не хардкодить `#C9A84C`.
- **`SectionIndicator`** смонтирован один раз в `blog/layout.js`, который не
  перемонтируется при переходах внутри `/blog/*` — его эффект завязан на
  `usePathname()`, иначе точки «залипают» со старой статьи.
- **Тексты отзывов** (Testimonials) — реальные цитаты реальных людей, не править.
- **`body { font-family: inherit }`** — не переопределять на Arial, это ломает Outfit.
