import RelatedPosts from "@/app/components/blog/RelatedPosts";
import SunoCta from "@/app/components/blog/SunoCta";
import BlogJsonLd from "@/app/components/blog/BlogJsonLd";
import BlogHeader from "@/app/components/blog/BlogHeader";
import ReadingProgress from "@/app/components/blog/ReadingProgress";

const IMG = "/images/blog/suno-mastering";

export const metadata = {
  title: "Как замастерить трек из Suno для Spotify (гайд 2026)",
  alternates: {
    canonical: "https://www.slstudio.pro/blog/master-suno-track-for-spotify-ru",
    languages: {
      en: "https://www.slstudio.pro/blog/master-suno-track-for-spotify",
      ru: "https://www.slstudio.pro/blog/master-suno-track-for-spotify-ru",
      pl: "https://www.slstudio.pro/pl/blog/master-suno-track-for-spotify",
      "x-default": "https://www.slstudio.pro/blog/master-suno-track-for-spotify",
    },
  },
  description:
    "Трек из Suno звучит на Spotify тихо и плоско? Звукорежиссёр объясняет нормализацию громкости, артефакты ИИ и показывает пошаговое лечение — с реальными настройками из студии.",
  openGraph: {
    title: "Как замастерить трек из Suno для Spotify — гайд звукорежиссёра",
    description:
      "Почему треки из Suno звучат на Spotify тихо и как это исправить: нормализация громкости, артефакты ИИ, бесплатные приёмы и реальные настройки мастеринга.",
    type: "article",
    url: "https://www.slstudio.pro/blog/master-suno-track-for-spotify-ru",
    siteName: "SL Studio",
    images: [`${IMG}/suno-mastering-cover.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Как замастерить трек из Suno для Spotify — гайд звукорежиссёра",
    description:
      "Почему треки из Suno звучат на Spotify тихо и как это исправить: нормализация громкости, артефакты ИИ, бесплатные приёмы и реальные настройки мастеринга.",
  },
  keywords: [
    "мастеринг трека suno",
    "как замастерить трек из suno",
    "suno тихо на spotify",
    "suno lufs spotify",
    "мастеринг ии трека",
    "suno плохо звучит на spotify",
  ],
  other: {
    "article:published_time": "2026-07-18",
  },
};

// ─── Pro Tip ─────────────────────────────────────────────────────────────────
function ProTip({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex gap-3 items-start"
      style={{
        background: "rgba(201,168,76,0.07)",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <span
        className="text-base flex-shrink-0 font-bold"
        style={{ color: "#C9A84C" }}
      >
        ★
      </span>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-1.5"
          style={{ color: "#C9A84C" }}
        >
          Pro Tip
        </p>
        <p className="text-white/70 text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

// ─── Картинка ────────────────────────────────────────────────────────────────
function ArticleImage({ src, alt }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/5">
      <img
        loading="lazy"
        decoding="async"
        src={src}
        alt={alt}
        className="w-full object-cover"
      />
    </div>
  );
}

// ─── Оглавление ──────────────────────────────────────────────────────────────
const TOC = [
  { id: "why-spotify-turns-you-down", label: "Почему Spotify делает твой трек тише" },
  { id: "inside-a-raw-suno-export", label: "Что внутри сырого экспорта из Suno" },
  { id: "free-fixes", label: "Бесплатные приёмы прямо сейчас" },
  { id: "loudness-question", label: "Вопрос громкости: -14 или -7?" },
  { id: "my-chain", label: "Моя цепочка от и до" },
  { id: "when-mastering-cant-save-it", label: "Когда мастеринг уже не спасёт" },
  { id: "checklist", label: "Чек-лист перед загрузкой" },
  { id: "faq", label: "FAQ" },
];

function TableOfContents() {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <p className="text-white font-semibold text-base mb-4">Содержание</p>
      <ol className="flex flex-col gap-2">
        {TOC.map((item, i) => (
          <li key={item.id} className="flex items-baseline gap-2.5">
            <span
              className="text-xs flex-shrink-0 w-5 text-right"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              {i + 1}.
            </span>
            <a
              href={`#${item.id}`}
              className="text-sm text-white/50 hover:text-white transition leading-snug"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ─── Заголовок секции ────────────────────────────────────────────────────────
function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{
          background: "rgba(201,168,76,0.15)",
          color: "#C9A84C",
        }}
      >
        {number}
      </span>
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "На сколько LUFS мастерить трек из Suno для Spotify?",
    a: "Официальная рекомендация Spotify — -14 LUFS integrated и true peak ниже -1 dBTP. На практике большинство коммерческих релизов сидят в районе -7…-9 LUFS, и свои Suno-проекты я мастерю примерно в -7…-8 LUFS с потолком true peak -0,3 дБ. Работают оба подхода — важно, чтобы лимитирование оставалось чистым. Громкий мастер с впечатанными искажениями хуже тихого.",
  },
  {
    q: "Почему мой трек звучит на Spotify хуже, чем в приложении Suno?",
    a: "Складываются три вещи: Spotify делает трек тише (или громче) до своего целевого уровня, файл конвертируется в сжатый формат, а любые превышения true peak при этой конвертации превращаются в слышимые искажения. Если мастер был задавлен под самый 0 дБ, именно на стриминговом кодировании он и разваливается.",
  },
  {
    q: "Скачивать из Suno MP3 или WAV?",
    a: "Всегда WAV, если планируется хоть какая-то обработка. Сжатие MP3 выбрасывает ровно те детали верхних частот, которых ИИ-трекам и так не хватает. Экспорт WAV требует платного тарифа Suno, но если ты выпускаешь музыку коммерчески, платный тариф тебе всё равно нужен ради прав.",
  },
  {
    q: "Обязательно ли сообщать Spotify, что трек сделан с помощью ИИ?",
    a: "Дистрибьюторы всё чаще просят помечать контент, созданный ИИ, и индустрия движется к тому, что маркировка станет нормой. Если трек сгенерирован на платном тарифе Suno, условия сервиса разрешают коммерческий релиз. Мой совет: играй в открытую и конкурируй качеством — хорошо доделанному треку нечего скрывать.",
  },
  {
    q: "Можно ли починить трек, имея только MP3?",
    a: "Можно. Современное разделение на стемы (UVR5 с моделью htdemucs_ft или платные инструменты) раскладывает стереофайл на вокал, барабаны, бас и инструменты достаточно хорошо, чтобы чистить, балансировать и пересобирать. WAV даёт результат лучше, но и MP3 — рабочая отправная точка.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// ─── Чек-лист ────────────────────────────────────────────────────────────────
const checklist = [
  "Экспортирован WAV из новейшей модели Suno (не генерация годичной давности)",
  "Вокал разборчив на тихой громкости",
  "Бас проходит тест в машине — ничего не гудит в районе 100 Гц",
  "Верх гладкий на дешёвых наушниках, без песка и металла",
  "Припев после лимитера всё ещё бьёт сильнее куплета",
  "Потолок true peak на -1 dBTP (или -2, если мастер громкий)",
  "Нигде нет слышимого клиппинга — Spotify его не отменит",
  "Сравнение с коммерческим референсом на выровненной громкости",
];

// ─── Страница ────────────────────────────────────────────────────────────────
export default function MasterSunoTrackForSpotifyRuPage() {
  return (
    <div id="top" className="mt-16 mb-20">
      <BlogJsonLd slug="master-suno-track-for-spotify-ru" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <BlogHeader
          topic="Мастеринг"
          date="18 июля 2026"
          title="Как замастерить трек из Suno для Spotify"
          description="Почему твой ИИ-трек звучит тихо и плоско рядом с коммерческими релизами — и как это исправить: от бесплатных приёмов до точных настроек, которые я использую в студии."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Интро */}
          <div className="flex flex-col gap-5">
            <p>
              Ты закончил трек в Suno. В наушниках он звучал огромно. Потом ты
              его загрузил, открыл Spotify, включил сразу после любимого
              артиста… и твоя песня вошла тихой, худой и какой-то{" "}
              <em>маленькой</em> — будто пришла на стадионный концерт с
              репетиционным комбиком.
            </p>
            <p>
              Это не твои уши и не невезение. Это две вещи, наложенные друг на
              друга:{" "}
              <strong className="text-white">
                нормализация громкости Spotify
              </strong>{" "}
              и{" "}
              <strong className="text-white">
                то, как ИИ-генераторы строят звук
              </strong>
              . Я мастерю треки из Suno для клиентов, так что проведу тебя по
              всей картине — включая настройки из моих собственных сессий, а не
              теорию из учебника.
            </p>
            <ArticleImage
              src={`${IMG}/suno-mastering-cover.jpg`}
              alt="Сырой экспорт из Suno превращается в чистую замастеренную волну"
            />
          </div>

          {/* Оглавление */}
          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          <SunoCta lang="ru" />

          {/* ── 1 ── */}
          <div id="why-spotify-turns-you-down" className="flex flex-col gap-5">
            <SectionHeader
              number="1"
              title="Почему Spotify делает твой трек тише (или отказывается делать громче)"
            />
            <p>
              Spotify играет всё на примерно одинаковой воспринимаемой
              громкости. Цель по умолчанию —{" "}
              <strong className="text-white">-14 LUFS integrated</strong>:
              более громкие мастера приглушаются, более тихие — поднимаются, но
              только настолько, насколько позволяют их пики. Есть и две
              настройки на стороне слушателя, на которые ты не влияешь:{" "}
              <strong className="text-white">Громко</strong> (-11 LUFS, где
              Spotify вешает на тихие треки <em>собственный лимитер</em> — а ты
              не хочешь, чтобы это решение за твой микс принимал робот) и{" "}
              <strong className="text-white">Тихо</strong> (-19 LUFS).
            </p>
            <ArticleImage
              src={`${IMG}/spotify-loudness-normalization.jpg`}
              alt="Нормализация громкости: громкая волна приглушается до контролируемого уровня"
            />
            <p>
              Ещё Spotify просит{" "}
              <strong className="text-white">true peak ниже -1 dBTP</strong>{" "}
              (ниже -2 dBTP, если мастер громче -14 LUFS), потому что
              конвертация в сжатые форматы порождает межсэмпловые пики —
              прижми файл к самому 0 дБ, и кодек добавит треск, которого ты в
              DAW никогда не слышал.
            </p>
            <p>
              А вот правило, объясняющее 90% разочаровывающих загрузок:{" "}
              <strong className="text-white">
                Spotify может изменить твою громкость, но не может отменить
                твои повреждения.
              </strong>{" "}
              Громкость обратима. Клиппинг, жёсткое лимитирование и искажения
              впечатаны в файл навсегда. Задавленный трек приглушат до уровня
              всех остальных — и он сохранит весь свой хруст, потеряв весь свой
              удар.
            </p>
          </div>

          {/* ── 2 ── */}
          <div id="inside-a-raw-suno-export" className="flex flex-col gap-5">
            <SectionHeader
              number="2"
              title="Что на самом деле внутри сырого экспорта из Suno"
            />
            <p>
              Отдадим должное: внутренний баланс Suno часто лучше, чем у многих
              спальных миксов. Но у файла, который выходит из кнопки экспорта,
              очень узнаваемый набор болячек:
            </p>
            <div className="flex flex-col gap-3">
              {[
                [
                  "Мягкие, съеденные транзиенты.",
                  "Бочка теряет щелчок — особенно там, где звучит вокал. Трек ощущается слабее, чем измеряется.",
                ],
                [
                  "Раздутая середина.",
                  "Suno по умолчанию давит на середину — безопасно для динамика телефона, утомительно на чём-либо получше.",
                ],
                [
                  "Потолок на ~18 кГц.",
                  "Выше — ничего. «Воздух» настоящей записи просто не генерируется. Чем лучше твоя система, тем это очевиднее.",
                ],
                [
                  "Грязь в районе 100 Гц.",
                  "Самая капризная частота баса — прячется на колонках ноутбука, а потом гудит в машине.",
                ],
                [
                  "Впечатанный реверб с артефактами.",
                  "Вокал приплывает в зале, который нельзя выключить, вместе с мерцанием, которое ни один де-реверб до конца не уберёт.",
                ],
                [
                  "Металлические хэты и песочные резонансы",
                  "в районе 2–4 кГц — самая громкая визитка «это ИИ».",
                ],
              ].map(([head, body]) => (
                <div
                  key={head}
                  className="rounded-xl p-4 flex gap-3 items-start"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="flex-shrink-0 font-bold"
                    style={{ color: "#C9A84C" }}
                  >
                    •
                  </span>
                  <p className="text-white/65 text-base leading-relaxed">
                    <strong className="text-white">{head}</strong> {body}
                  </p>
                </div>
              ))}
            </div>
            <ArticleImage
              src={`${IMG}/ai-track-anatomy.jpg`}
              alt="Спектр типичного ИИ-трека: перегруженный низ, резкие резонансы, отсутствующий самый верх"
            />
            <p>
              И слушатели это слышат. Может, не осознанно — но слепые тесты раз
              за разом показывают: даже случайная аудитория распознаёт сырой
              ИИ-трек за секунды и слабее на него реагирует. Разница между
              «сгенерировано» и «выпущено» — ровно то, о чём эта статья.
            </p>
          </div>

          {/* ── 3 ── */}
          <div id="free-fixes" className="flex flex-col gap-5">
            <SectionHeader number="3" title="Бесплатные приёмы прямо сейчас" />
            <p>
              До всякого мастеринга выжми из исходника всё, что можно. Это
              бесплатно, а эффект накапливается быстро:
            </p>
            <div className="flex flex-col gap-4">
              {[
                [
                  "Экспортируй лучший возможный исходник.",
                  "WAV, новейшая модель. Если трек сгенерирован на старой модели — сначала жми Remaster (v5, Normal): старые генерации несут лишний шип в верхах и более плоскую стереокартину.",
                ],
                [
                  "Стерео-трюк с Remaster.",
                  "Remaster даёт две почти идентичные копии трека. Оригинал оставь в центре, два ремастера разведи жёстко влево и вправо, опусти их на 4 дБ, срежь низ на 100 Гц и верх примерно на 5 кГц. Поздравляю: ты только что пересобрал стереобока плоского ИИ-экспорта без единого плагина.",
                ],
                [
                  "Проси в промпте сухой вокал.",
                  "Если планируешь постобработку — закажи сухой, близкий вокал прямо в промпте. Убирать впечатанный ИИ-реверб потом — хирургия; не сгенерировать его — бесплатно.",
                ],
                [
                  "Разложи на стемы в UVR5.",
                  "Это бесплатно. Модель htdemucs_ft — для вокала/барабанов/баса/остального. Одно предупреждение: сепарация обожает записывать саксофоны и скрипки в «вокал» — всегда прослушивай стемы, прежде чем их обрабатывать.",
                ],
                [
                  "Достраивай пропавший верх шумом.",
                  "Подмешай капельку белого шума к тусклым хэтам — это реконструирует «воздух», который никогда не был сгенерирован. Тихий слой винилового шума поверх всего трека работает вдвойне: добавляет винтажного клея и маскирует мелкие артефакты. Звукорежиссёры пользовались этим задолго до ИИ.",
                ],
                [
                  "Два реверба, а не один.",
                  "ИИ-экспорты, лишённые артефактов, становятся странно сухими. Один короткий эмбиенс для тела, один длинный хвост для глубины — и трек вдруг дышит как продакшн, а не рендер.",
                ],
              ].map(([head, body], i) => (
                <div key={head} className="flex gap-4 items-start">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-white/65 text-base leading-relaxed">
                    <strong className="text-white">{head}</strong> {body}
                  </p>
                </div>
              ))}
            </div>
            <ArticleImage
              src={`${IMG}/audio-stem-separation.jpg`}
              alt="Смикшированная волна разделяется на четыре стема: вокал, барабаны, бас и инструменты"
            />
            <ProTip>
              Эти шаги доводят приличную генерацию процентов на 70. Остальные
              30% — хирургия транзиентов, чистка артефактов, живые инструменты
              — ручная работа. О том, когда она того стоит, — ниже.
            </ProTip>
          </div>

          {/* ── 4 ── */}
          <div id="loudness-question" className="flex flex-col gap-5">
            <SectionHeader
              number="4"
              title="Вопрос громкости: -14 или -7?"
            />
            <p>
              Вот тут интернет дерётся. Официальная документация Spotify
              говорит: -14 LUFS. При этом кинь любой свежий хит из чартов в
              измеритель — увидишь -7…-9 LUFS. Кто прав?
            </p>
            <p>
              Оба, как ни бесит. Spotify всё равно приглушит мастер с -8 до -14
              на воспроизведении — но <em>плотность переживает приглушение</em>.
              Хорошо сделанный громкий мастер на -14 всё равно ощущается
              монолитнее, чем робкий мастер на -14. Подвох в словах «хорошо
              сделанный»: если ты добираешь эту громкость, вбивая лимитер в
              резкий, непочищенный ИИ-экспорт, получаешь трек громкий{" "}
              <em>и</em> уродливый — который Spotify вежливо приглушит до
              тихого и уродливого.
            </p>
            <p>
              Моя личная практика, хочешь — бери, хочешь — нет:{" "}
              <strong className="text-white">
                я довожу мастера до -7…-8 LUFS integrated
              </strong>{" "}
              — но только после чистки резкостей и всегда с включённым потолком
              true peak. Вот реальная сессия, приборы не врут:
            </p>
            <ArticleImage
              src={`${IMG}/studioone-master-plan-annotated.jpg`}
              alt="Мастеринг-сессия в Studio One: -8.0 LUFS integrated, -7.1 short-term и пик -0.1 дБ"
            />
            <p>
              А вот ступень лимитера, которая делает это безопасным —
              Maximizer в режиме IRC 4 Modern, потолок выхода -0,30 дБ,
              детекция True Peak включена. Громкость добавляется{" "}
              <em>в конце</em>, после чистки эквалайзером, и никогда вместо
              неё:
            </p>
            <ArticleImage
              src={`${IMG}/ozone12-settings-annotated.jpg`}
              alt="Настройки Ozone 12 Maximizer: IRC 4 Modern, выход -0.30 дБ, True Peak включён"
            />
            <ProTip>
              Тест, который закрывает любой спор о громкости: выровняй свой
              мастер по уровню с коммерческим референсом и слушай. Если твой
              трек выигрывает только когда он громче — он не лучше. А если чем
              громче, тем хуже он звучит — ответ никогда не «больше лимитера».
              Ответ — чистка.
            </ProTip>
          </div>

          <SunoCta lang="ru" />

          {/* ── 5 ── */}
          <div id="my-chain" className="flex flex-col gap-5">
            <SectionHeader number="5" title="Моя цепочка от и до" />
            <div className="flex flex-col gap-4">
              {[
                [
                  "Сначала хирургический эквалайзер.",
                  "Срезать грязь (200–400 Гц), укротить ИИ-резонансы (2–4 кГц), взять под контроль район 100 Гц. Ничего не становится громче, пока не убраны уродливые места.",
                ],
                [
                  "Мягкая компрессия для клея.",
                  "1–2 дБ редукции, медленная атака — чтобы уцелевшие транзиенты сохранили свой щелчок.",
                ],
                [
                  "Тональный баланс.",
                  "Лёгкий проход mid/side-стабилизатором: раскрывает бока и успокаивает раздутую середину, не трогая вокал в центре.",
                ],
                [
                  "Maximizer в конце.",
                  "IRC 4 Modern, выход -0,30 дБ, True Peak включён, дожимай до цели, слушая в режиме дельты: как только трек начинает складываться — отступи.",
                ],
                [
                  "Проверка трансляции.",
                  "Динамик телефона, дешёвые наушники, машина. Наушники обнажают резкость вокала, телефон — середину, машина — 100 Гц. Если на всех трёх это звучит музыкально — трек едет на серверы.",
                ],
              ].map(([head, body], i) => (
                <div key={head} className="flex gap-4 items-start">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-white/65 text-base leading-relaxed">
                    <strong className="text-white">{head}</strong> {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 6 ── */}
          <div id="when-mastering-cant-save-it" className="flex flex-col gap-5">
            <SectionHeader number="6" title="Когда мастеринг уже не спасёт" />
            <p>
              Время честности. Мастеринг — это обработка готового стереофайла,
              а часть проблем Suno живёт глубже. Если у бочки нет транзиента,
              который можно подчеркнуть, если вокал металлический в самой своей
              сердцевине, если хэты — чистый песок, — никакой мастеринг не
              исправит генерацию. Это территория <em>финишинга</em>: разделение
              на стемы, чистка артефактов в каждом стеме отдельно, замена
              слабых партий живыми инструментами, а затем сведение и мастеринг
              пересобранного трека. Разница как между полировкой машины и
              ремонтом двигателя.
            </p>
            <p>
              Если хочешь сначала углубиться в саму генерацию — я написал
              полный{" "}
              <a
                href="/blog/suno-guide-2026-ru"
                className="underline hover:text-white transition"
              >
                гайд по Suno
              </a>{" "}
              и{" "}
              <a
                href="/blog/suno-studio-guide-2026"
                className="underline hover:text-white transition"
              >
                гайд по Suno Studio
              </a>{" "}
              — хороший исходник делает каждый шаг выше проще.
            </p>
          </div>

          {/* ── 7 ── */}
          <div id="checklist" className="flex flex-col gap-5">
            <SectionHeader number="7" title="Чек-лист перед загрузкой" />
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {checklist.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 py-1.5"
                  style={{
                    borderBottom:
                      i < checklist.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                  }}
                >
                  <span
                    className="flex-shrink-0 font-bold"
                    style={{ color: "#C9A84C" }}
                  >
                    ✓
                  </span>
                  <p className="text-white/70 text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── FAQ ── */}
          <div id="faq" className="flex flex-col gap-5">
            <SectionHeader number="?" title="FAQ" />
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-2"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-white font-medium text-sm">{item.q}</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <h3 className="text-xl font-semibold text-white">
              Хочешь сразу перейти к готовой версии?
            </h3>
            <p className="text-white/65 text-base max-w-md">
              Я разбираю треки из Suno на части и довожу их руками — стемы,
              чистка артефактов, живые инструменты, мастер. Бесплатное
              обработанное превью до какой-либо оплаты.
            </p>
            <a
              href="/suno-track-finishing"
              className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
              style={{ backgroundColor: "#C9A84C" }}
            >
              Suno Track Finishing →
            </a>
          </div>

          <SunoCta lang="ru" />

          <RelatedPosts slug="master-suno-track-for-spotify-ru" lang="ru" />
        </div>
      </div>
    </div>
  );
}
