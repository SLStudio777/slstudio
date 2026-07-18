import RelatedPosts from "@/app/components/blog/RelatedPosts";
import InteractiveChecklist from "./InteractiveChecklist";
import BlogHeader from "@/app/components/blog/BlogHeader";
import ReadingProgress from "@/app/components/blog/ReadingProgress";

export const metadata = {
  title: "Jak używać Suno AI w 2026: Prompt, Custom Mode i Personas",
  alternates: {
    canonical: "https://www.slstudio.pro/pl/blog/suno-guide-2026",
    languages: {
      pl: "https://www.slstudio.pro/pl/blog/suno-guide-2026",
      en: "https://www.slstudio.pro/blog/suno-guide-2026",
      ru: "https://www.slstudio.pro/blog/suno-guide-2026-ru",
      "x-default": "https://www.slstudio.pro/blog/suno-guide-2026",
    },
  },
  description:
    "Przestań zgadywać przy Generate. Jak producenci naprawdę używają Suno — struktura promptu, nawiasy, Custom Mode, Personas i funkcje v5.5, które zmieniły workflow.",
  openGraph: {
    title: "Jak używać Suno AI w 2026: Prompt, Custom Mode i Personas",
    description:
      "Przestań zgadywać przy Generate. Jak producenci naprawdę używają Suno — struktura promptu, nawiasy, Custom Mode, Personas i funkcje v5.5, które zmieniły workflow.",
    type: "article",
    url: "https://www.slstudio.pro/pl/blog/suno-guide-2026",
    siteName: "SL Studio",
    locale: "pl_PL",
    images: ["/images/blog-suno-cover-pl.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak używać Suno AI w 2026: Prompt, Custom Mode i Personas",
    description:
      "Przestań zgadywać przy Generate. Jak producenci naprawdę używają Suno — struktura promptu, nawiasy, Custom Mode, Personas i funkcje v5.5, które zmieniły workflow.",
  },
  keywords: [
    "suno ai poradnik 2026",
    "jak używać suno ai",
    "suno ai prompt po polsku",
    "suno ai gatunki tagi",
    "suno ai workflow profesjonalny",
  ],
  other: {
    "article:published_time": "2026-04-14",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jak używać Suno AI w 2026: Prompt, Custom Mode i Personas",
  description:
    "Przestań zgadywać przy Generate. Jak producenci naprawdę używają Suno — struktura promptu, nawiasy, Custom Mode, Personas i funkcje v5.5.",
  image: "https://www.slstudio.pro/images/blog-suno-cover-pl.webp",
  author: { "@type": "Person", name: "SL Studio" },
  publisher: {
    "@type": "Organization",
    name: "SL Studio",
    logo: {
      "@type": "ImageObject",
      url: "https://www.slstudio.pro/logo.png",
    },
  },
  datePublished: "2026-04-10",
  inLanguage: "pl",
  url: "https://www.slstudio.pro/pl/blog/suno-guide-2026",
};

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

const TOC = [
  { id: "before-we-start", label: "Zanim zaczniemy" },
  { id: "studio-not-magic", label: "Traktuj Suno jak studio" },
  { id: "interface", label: "Interfejs — trzy przestrzenie robocze" },
  { id: "simple-vs-custom", label: "Simple vs Custom Mode" },
  { id: "writing-prompts", label: "Pisanie promptu, który Suno rozumie" },
  { id: "brackets", label: "Nawiasy są wszystkim" },
  { id: "song-structure", label: "Struktura utworu" },
  { id: "sweet-spot", label: "Sweet Spot — ustawienia" },
  { id: "stop-generating", label: "Przestań klikać Generate bez celu" },
  { id: "extend-cover-upload", label: "Extend, Cover i Upload" },
  { id: "personas", label: "Personas" },
  { id: "demo-machine", label: "Suno to maszyna do dem" },
  { id: "v55-update", label: "Co nowego w v5.5" },
  { id: "checklist", label: "Checklista przed generacją" },
  { id: "faq", label: "FAQ: Instrumental i brak wokalu" },
];

const faqItems = [
  {
    q: "Jak zmusić Suno do wygenerowania ścieżki instrumentalnej — bez wokalu?",
    a: 'Użyj wszystkich trzech dźwigni jednocześnie: włącz przełącznik Instrumental w Custom Mode, dodaj słowo „instrumental" do opisu stylu (np. „jazz rock fusion, smooth and sophisticated, instrumental") i zostaw pole tekstów puste. Jeśli chcesz kontrolować aranżację, wypełnij pole tekstów tylko nawiasowymi tagami struktury, takimi jak [Intro], [Instrumental], [Guitar Solo], [Outro] — nawiasy to polecenia, nie tekst do zaśpiewania.',
  },
  {
    q: 'Dlaczego Suno wciąż dodaje wokal, gdy mój prompt mówi „instrumental"?',
    a: 'Prawie zawsze dlatego, że w polu tekstów jest tekst poza nawiasami kwadratowymi. Suno traktuje wszystko poza nawiasami jako słowa do zaśpiewania — nawet wyrazy „no vocals". Usuń cały tekst bez nawiasów z pola tekstów, zostaw „instrumental" w opisie stylu, a wokal zniknie.',
  },
  {
    q: "Jak uzyskać dłuższe ścieżki instrumentalne w Suno?",
    a: "Najpierw wygeneruj mocną bazę, a następnie używaj Extend, aby rozbudowywać utwór sekcja po sekcji, zamiast liczyć na jedno długie generowanie. W polu tekstów łącz instrumentalne tagi struktury — [Intro], [Instrumental], [Guitar Solo], [Outro] — tak aby każda przedłużona sekcja pozostała bez wokalu.",
  },
  {
    q: "Jak uzyskać mowę lub narrację zamiast śpiewu?",
    a: 'Opisz dostarczenie wokalne wprost w prompcie stylu — „spoken word, narration, no singing". Jeśli zostawisz wokal bez opisu, Suno zdecyduje za ciebie. Wzmocnij to nawiasowymi notatkami produkcyjnymi, takimi jak [spoken word], umieszczonymi przed wierszami, które mają być narrowane.',
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

function TableOfContents() {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <p className="text-white font-semibold text-base mb-4">Spis treści</p>
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

export default function SunoGuidePlPage() {
  return (
    <div id="top" className="mt-16 mb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <BlogHeader
          topic="Poradniki"
          date="14 kwietnia 2026"
          title="Suno AI: Kompletny poradnik dla muzyków — gatunki, tagi i prompty 2026"
          description="Jeśli twój workflow to nadal 'otwórz Suno, wpisz coś, kliknij Generate i miej nadzieję' — grasz w kasynę, nie produkujesz. Ten poradnik zamienia chaos w workflow."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Intro */}
          <div
            className="rounded-2xl p-6 flex gap-4 items-start"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <span className="text-2xl flex-shrink-0">🎯</span>
            <div>
              <p className="text-white font-semibold mb-2">Dla kogo jest ten poradnik</p>
              <p className="text-white/65 text-base leading-relaxed">
                Muzycy, producenci i ciekawi twórcy, którzy chcą{" "}
                <strong className="text-white">przewidywalnych wyników</strong>{" "}
                zamiast przypadkowego szumu. Cel jest prosty: przestań zgadywać i zacznij budować
                utwory świadomie.
              </p>
            </div>
          </div>

          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          {/* Core idea */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-3 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.6)" }}>
              Główna idea
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              Suno nie jest generatorem hitów.
              <br />
              Suno to narzędzie do rozwijania pomysłów.
            </p>
            <p className="text-white/65 text-base max-w-md mx-auto mt-1">
              Kiedy to zrozumiesz, prawie każda dobra decyzja w Suno zaczyna mieć sens.
            </p>
          </div>

          {/* Part 1 */}
          <div id="before-we-start" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>⚡</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Zanim zaczniemy</h2>
            </div>
            <p>
              Jeśli twój aktualny workflow to: otwórz Suno → wpisz coś → kliknij Generate → miej
              nadzieję na najlepsze — tak naprawdę jeszcze nie używasz tego narzędzia. Grasz
              w automat z dźwiękiem. Wypłaca wystarczająco często, żeby nie przestawać klikać,
              nie dając przy tym żadnego realnego postępu.
            </p>
            <p>
              <strong className="text-white">Suno nie tworzy muzyki za ciebie.</strong>{" "}
              Wzmacnia to, co sam wnosisz — pomysły, gust i kierunek. Im lepsze twoje decyzje,
              tym lepszy wynik.
            </p>
            <p>
              Ten poradnik ma sprawić, by ten proces był bardziej świadomy: interfejs, logika,
              ustawienia, workflow i nawyki, które oddzielają użyteczny materiał od przypadkowego szumu.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-1-pl.webp"
                alt="Praca z Suno: to umiejętność, nie tylko wiedza o AI"
                className="w-full object-cover" />
            </div>
          </div>

          {/* Part 2 */}
          <div id="studio-not-magic" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>1</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Traktuj Suno jak studio, nie jak magiczną skrzynkę
              </h2>
            </div>
            <p>
              Oto czego nikt ci nie mówi, gdy po raz pierwszy otwierasz Suno: wygląda skomplikowanie,
              ale to nadal tylko przestrzeń robocza. Tak jak DAW wyglądał groźnie pierwszego dnia,
              Suno wydaje się chaotyczne, dopóki nie zrozumiesz jego logiki.
            </p>
            <p>
              <strong className="text-white">To cyfrowe środowisko. Ty nadal masz kontrolę.</strong>{" "}
              To uczucie mija, gdy przestajesz traktować pierwszy wynik jak odpowiedź ostateczną.
            </p>
            <p>
              Największy błąd początkujących to próba pominięcia krzywej uczenia: ogromny prompt
              pierwszego dnia, maksymalne ustawienia i oczekiwanie gotowego do wydania utworu.
              To jak siadanie do fortepianu pierwszego razu i otwieranie Rachmaninowem.
            </p>
            <div className="rounded-xl p-4 flex gap-3 items-start"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="text-lg flex-shrink-0">💡</span>
              <p className="text-white/65 text-base">
                Zacznij od podstaw. Zrozum narzędzie. Potem idź głębiej. Skrót jest zawsze dłuższy
                niż właściwa droga — zwłaszcza z oprogramowaniem kreatywnym.
              </p>
            </div>
          </div>

          {/* Part 3: Interface */}
          <div id="interface" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>2</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Interfejs — trzy przestrzenie robocze
              </h2>
            </div>
            <p>Suno ma trzy obszary robocze warte poznania na początku.</p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-2-pl.webp"
                alt="Create i Library" className="w-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">🎙️</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Create — Twoja główna scena</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Tu rodzą się utwory — pomysły, dema, eksperymenty. Wszystko zaczyna się tutaj.
                    Traktuj to jak kabinę nagraniową. Nie musisz być gotowy w 100%, gdy wchodzisz.
                    Potrzebujesz tylko kierunku.
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">📚</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Library — Twoje osobiste archiwum</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Każdy kiedykolwiek wygenerowany utwór mieszka tutaj. Możesz lajkować, dislajkować
                    i tworzyć playlisty. Kluczowa rzecz, którą wiele osób pomija:{" "}
                    <strong className="text-white">to nie są polubienia społecznościowe</strong>.
                    Nikt ich nie widzi poza tobą. To system filtrowania — i bardzo ważny.
                  </p>
                  <div className="mt-3 flex flex-col gap-1">
                    <p className="text-white/50 text-sm">👍 Lajk → utwór zostaje widoczny i łatwy do znalezienia</p>
                    <p className="text-white/50 text-sm">👎 Dislajk → utwór się chowa (ale nie usuwa)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-3-pl.webp"
                alt="Workspace" className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-5 flex gap-4 items-start"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
              <span className="text-xl flex-shrink-0">📁</span>
              <div>
                <p className="text-white font-semibold text-base mb-2">Workspace — System folderów projektów</p>
                <p className="text-white/65 text-base leading-relaxed">
                  Jeśli robisz jeden rodzaj muzyki okazjonalnie, możesz to pominąć. Ale gdy masz
                  jednocześnie wiele gatunków, projekty klienckie, pomysły na YouTube i koncepcje
                  albumów — Workspace to jedyna rzecz, która zachowuje zdrowie psychiczne.
                </p>
              </div>
            </div>
          </div>

          {/* Part 4: Simple vs Custom */}
          <div id="simple-vs-custom" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>3</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Simple Mode vs Custom Mode — gdzie prawie wszyscy popełniają błąd
              </h2>
            </div>
            <p>
              Gdy otwierasz Suno, widzisz dwa tryby. I prawie wszyscy od razu klikają w{" "}
              <strong className="text-white">Custom Mode</strong>, bo wydaje się potężniejszy.
              Więcej opcji, więcej kontroli, bardziej profesjonalny interfejs.
            </p>
            <p>To pułapka.</p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-4-pl.webp"
                alt="Simple vs Custom Mode" className="w-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-white font-semibold text-base">✅ Simple Mode — zacznij tutaj</p>
                <p className="text-white/65 text-base leading-relaxed">
                  Szybki punkt wejścia. Jeden pomysł, jedna linijka, bez przemyślania.
                  Istnieje dokładnie na ten moment, gdy jeszcze nie wiesz czego chcesz.
                  Używaj go, żeby sprawdzić czy pomysł gatunkowy w ogóle działa.
                </p>
                <p className="text-sm" style={{ color: "#C9A84C" }}>
                  Jak muzyk grający melodię przed zaplanowaniem aranżacji.
                </p>
              </div>
              <div className="rounded-xl p-5 flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-white font-semibold text-base">⚙️ Custom Mode — używaj po</p>
                <p className="text-white/65 text-base leading-relaxed">
                  Na wtedy, gdy już znasz swój kierunek — gatunek, nastrój, klimat wokalu,
                  ogólna struktura — i chcesz kontrolować szczegóły.
                </p>
                <p className="text-white/45 text-base mt-1">
                  Więcej opcji to więcej sposobów na precyzyjny błąd.
                </p>
              </div>
            </div>
            <ProTip>
              Spędź pierwsze 5–10 generowań w Simple Mode dla każdego nowego projektu.
              Gdy jedno z nich poczuje się właściwie — wtedy otwórz Custom Mode. Nie wcześniej.
            </ProTip>
          </div>

          {/* Part 5: Prompts */}
          <div id="writing-prompts" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>4</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Pisanie promptu, który Suno naprawdę rozumie
              </h2>
            </div>
            <p>Prompt to nie opis. To instrukcja.</p>
            <p>
              Suno nie czyta między wierszami. Pracuje z dokładnie tym, co mu dajesz.
              Jeśli prompt jest sprzeczny, improwizuje — i rzadko to wersja, na którą liczyłeś.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-5-pl.webp"
                alt="Strukturyzuj swój prompt" className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-5 flex flex-col gap-3"
              style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <p className="text-white font-semibold text-base">✅ Działająca formuła</p>
              <div className="rounded-lg p-3 font-mono text-sm text-center"
                style={{ background: "rgba(0,0,0,0.3)", color: "#C9A84C" }}>
                GENRE & MOOD → VOCALS → KEY INSTRUMENTS → MIX & FEEL
              </div>
              <p className="text-white/65 text-base leading-relaxed">
                Najpierw definiujesz terytorium, potem charakter, potem konkretne elementy.
                Ta kolejność ma znaczenie, bo Suno priorytetyzuje od góry do dołu.
              </p>
            </div>
            <div className="rounded-xl p-4 flex gap-3 items-start"
              style={{ background: "rgba(255,100,100,0.05)", border: "1px solid rgba(255,100,100,0.15)" }}>
              <span className="text-lg flex-shrink-0">🚨</span>
              <div>
                <p className="text-white font-semibold text-base mb-1">Zawsze opisuj wokal</p>
                <p className="text-white/65 text-base leading-relaxed">
                  Choćby krótko. Płeć, styl podania, intensywność emocjonalna. Jeśli zostawisz
                  puste, przekazujesz tę decyzję Suno — możesz dostać sopranową operową
                  interpretację nad twoim death metalem.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-6-pl.webp"
                alt="Suno priorytetyzuje strukturę, nie tylko słowa" className="w-full object-cover" />
            </div>
          </div>

          {/* Part 6: Brackets */}
          <div id="brackets" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>5</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Nawiasy są wszystkim</h2>
            </div>
            <p>Ta jedna zasada oszczędzi ci ogromnej frustracji.</p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-7-pl.webp"
                alt="Nawiasy to instrukcje" className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <p className="text-white font-semibold mb-2 text-center">Jedna zasada, która ratuje wszystko</p>
              <p className="text-center text-white/80 text-base leading-relaxed">
                Wszystko w <strong className="text-white">[nawiasach kwadratowych]</strong> = polecenie dla Suno.<br />
                Wszystko poza nawiasami = tekst do zaśpiewania na głos.<br /><br />
                Tyle. To cała zasada.
              </p>
            </div>
            <p>
              Jeśli wpiszesz{" "}
              <code className="text-sm px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.08)", color: "#C9A84C" }}>
                energetic guitar solo
              </code>{" "}
              w pole tekstów bez nawiasów, Suno chętnie{" "}
              <em>zaśpiewa te słowa</em>. Na głos. Na twoim utworze.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {["[Intro]","[Verse]","[Pre-Chorus]","[Chorus]","[Bridge]","[Guitar Solo]","[Instrumental]","[Outro]"].map((tag, i) => (
                <div key={i} className="rounded-lg px-3 py-2.5 text-center font-mono text-sm"
                  style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Part 7: Song Structure */}
          <div id="song-structure" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>6</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Struktura utworu — dlaczego ma znaczenie
              </h2>
            </div>
            <p>
              Jeśli nie podasz Suno struktury, wymyśli ją sam. Czasem wychodzi pięknie.
              Często nie — zwłaszcza gdy potrzebujesz konkretnej długości lub planujesz
              edycję w DAW.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-8-pl.webp"
                alt="Struktura utworu" className="w-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-9-pl.webp"
                alt="Produkcja muzyki: struktura utworu" className="w-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-white font-semibold text-base">🎵 Klasyczna struktura pop</p>
                <p className="text-white/65 text-base leading-relaxed">
                  Intro → Verse → Chorus → Verse → Chorus → Bridge → Final Chorus → Instrumental Outro.
                  Pełny rozwój. To architektura tysiąca hitów — działa.
                </p>
              </div>
              <div className="rounded-xl p-5 flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-white font-semibold text-base">📱 Nowoczesna struktura streamingowa</p>
                <p className="text-white/65 text-base leading-relaxed">
                  Lżejsza, szybsza. Dotarcie do chorusa w pierwszych 30 sekundach.
                  Dane streamingowe pokazują, że większość decyduje się zostać lub odejść w intro.
                </p>
              </div>
            </div>
          </div>

          {/* Part 8: Sweet Spot */}
          <div id="sweet-spot" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>7</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Sweet Spot — Weirdness i Style Influence
              </h2>
            </div>
            <p>Dwa ustawienia, które większość albo całkowicie ignoruje, albo kręci do maksimum. Oba to błędy.</p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-10-pl.webp"
                alt="Znajdź Sweet Spot" className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-4 flex gap-3"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-lg">🔑</span>
              <p className="text-white/65 text-base leading-relaxed">
                Podstawowa zasada:{" "}
                <strong className="text-white">im więcej chaosu wprowadzasz na etapie generowania,
                tym trudniej pracować z wynikiem później.</strong>{" "}
                Generuj czysto, bądź kreatywny w DAW.
              </p>
            </div>
          </div>

          {/* Part 9: Stop Generating */}
          <div id="stop-generating" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>8</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Przestań klikać Generate jak na automacie
              </h2>
            </div>
            <p>Oto nawyk, który najszybciej zabija postęp:</p>
            <div className="rounded-xl p-5" style={{ background: "rgba(255,80,80,0.05)", border: "1px solid rgba(255,80,80,0.15)" }}>
              <p className="text-white font-semibold text-base mb-2">🚫 Pętla, która nigdzie nie prowadzi</p>
              <p className="text-white/65 font-mono text-[15px] leading-relaxed">
                Generuj → nie podoba się → zamknij → generuj znowu → powtarzaj aż sfrustrowany
                → stwierdź, że Suno jest złe → otwórz jutro i tak
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-11-pl.webp"
                alt="Nie zaczynaj od zera za każdym razem" className="w-full object-cover" />
            </div>
            <p>
              Suno działa najlepiej, gdy{" "}
              <strong className="text-white">rozwijasz to, co znalazłeś</strong>{" "}
              zamiast ciągle szukać czegoś nowego. Celem jest doskonalenie, nie loteria.
            </p>
          </div>

          {/* Part 10: Extend/Cover/Upload */}
          <div id="extend-cover-upload" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>9</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Extend, Cover, Upload — twój zestaw narzędzi do rozwoju
              </h2>
            </div>
            <p>Trzy narzędzia. Naucz się ich, używaj stale. To funkcje, które oddzielają casual-użytkowników od tych, którzy rzeczywiście kończą utwory.</p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-12-pl.webp"
                alt="Extend · Cover · Upload" className="w-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">▶️</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Extend — kontynuuj to, co działa</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Extend kontynuuje istniejący utwór zachowując jego charakter. To nie nowe
                    generowanie — to kontynuacja. Za każdym razem, gdy chciałbyś generować nowy
                    utwór od zera bo obecny jest za krótki — użyj Extend.
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">🔄</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Cover — test A/B twojego utworu</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Cover tworzy alternatywną wersję tego samego pomysłu — inne podanie, inne
                    uczucie, to samo DNA. Używaj gdy lubisz strukturę, ale coś w wykonaniu
                    nie gra.
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">⬆️</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Upload Audio — gdzie robi się naprawdę ciekawie</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Możesz wgrać nuconą melodię, riff gitarowy lub wzorzec rytmiczny — a Suno go
                    rozwinie. Tu AI przestaje być generatorem i staje się współpracownikiem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 11: Personas */}
          <div id="personas" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>10</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Personas — blokowanie swojego brzmienia</h2>
            </div>
            <p>
              Gdy już znalazłeś brzmienie, które lubisz, możesz zapisać je jako{" "}
              <strong className="text-white">Persona</strong>.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-13-pl.webp"
                alt="Personas: zapisywanie twojego brzmienia" className="w-full object-cover" />
            </div>
            <p>Persona to nie kopia. To punkt odniesienia — zapisana tożsamość dźwiękowa.</p>
            <div className="rounded-xl p-4 flex gap-3"
              style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <span className="text-lg">🎯</span>
              <p className="text-white/65 text-base leading-relaxed">
                Personas są szczególnie użyteczne dla{" "}
                <strong className="text-white">projektów albumowych, kanałów YouTube i pracy klienckiej</strong>{" "}
                — wszędzie tam, gdzie potrzebujesz rozpoznawalnego, spójnego brzmienia.
              </p>
            </div>
          </div>

          {/* Part 12: Demo Machine */}
          <div id="demo-machine" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>11</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Suno to maszyna do dem. Bardzo dobra maszyna do dem
              </h2>
            </div>
            <p>Bądźmy całkowicie szczerzy w jednej kwestii.</p>
            <p>
              Bez względu na to jak dobrze brzmi twój utwór z Suno w odtwarzaczu, to nadal
              demo. Dobra demo — czasem świetna demo — ale demo. Finalny wynik rodzi się
              w postprodukcji.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-14-pl.webp"
                alt="Suno = Demo, nie release" className="w-full object-cover" />
            </div>
            <p>
              Słuchacze nie dbają o to, jak utwór powstał. Dbają tylko o to, jak brzmi.
              Utwór z Suno z profesjonalnym{" "}
              <a href="/pl/mixing-mastering" style={{ color: "#C9A84C", textDecoration: "underline" }}>
                miksem i masteringiem
              </a>{" "}
              brzmi lepiej niż tradycyjnie nagrany utwór, który nigdy nie został właściwie
              zmikssowany.
            </p>
            <p>
              Stems to miejsce, gdzie ta praca się zaczyna. Budowanie czystszego
              instrumentalu z Advanced Split{" "}
              <a href="/blog/suno-advanced-split-clean-instrumental"
                style={{ color: "#C9A84C", textDecoration: "underline" }}>
                (EN)
              </a>{" "}
              omawia tryby separacji i sposób składania części z powrotem.
            </p>
          </div>

          {/* Part 13: v5.5 */}
          <div id="v55-update" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>🆕</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Co nowego w v5.5 — głos, styl i gust
              </h2>
            </div>
            <div className="rounded-xl p-4 flex gap-3 items-start"
              style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <span className="text-lg flex-shrink-0">📅</span>
              <p className="text-white/65 text-base leading-relaxed">
                Suno v5.5 wydane 26 marca 2026. To nie aktualizacja silnika audio — to zmiana
                filozofii. Trzy nowe funkcje:{" "}
                <strong className="text-white">Voices, Custom Models, My Taste</strong>.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">🎤 Voices — twój głos w twoich utworach</h3>
              <p>
                Najbardziej wyczekiwana funkcja w historii Suno. Możesz teraz wgrać nagranie
                swojego głosu — a Suno będzie generować utwory z nim. Nie losowy wokalista AI. Ty.
              </p>
              <div className="rounded-2xl overflow-hidden border border-white/5">
                <img loading="lazy" decoding="async" src="/images/suno-16-pl.webp"
                  alt="Voices w Suno v5.5" className="w-full object-cover" />
              </div>
              <div className="rounded-xl p-4 flex gap-3 items-start"
                style={{ background: "rgba(255,100,80,0.06)", border: "1px solid rgba(255,100,80,0.2)" }}>
                <span className="text-lg flex-shrink-0">⚠️</span>
                <div>
                  <p className="text-white font-semibold text-base mb-1">Przeczytaj przed aktywacją</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Aktywacja Voices wymaga zgody na użycie danych twojego głosu do trenowania
                    modeli Suno. Bez tego funkcja nie działa. Tylko konta Pro i Premier.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-2">
              <h3 className="text-lg font-semibold text-white">🎛️ Custom Models — Suno wytrenowane na twojej muzyce</h3>
              <p>
                Wgraj własne utwory, a model nauczy się twojego stylu. Dostępne do 3 modeli
                na konto. Pro i Premier.
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-2">
              <h3 className="text-lg font-semibold text-white">✨ My Taste — Suno, które cię poznaje</h3>
              <p>
                Bezpłatne dla wszystkich. Suno śledzi co generujesz, jakie gatunki wybierasz
                i stopniowo buduje profil preferencji. Działa tym lepiej, im uczciwiej
                filtrujesz swoją Library.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div id="checklist" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>✓</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Checklista przed generacją</h2>
            </div>
            <p>
              Przed kliknięciem Generate przejdź przez tę listę. Zawsze. Zajmuje trzydzieści
              sekund i ratuje cię przed generowaniem utworów, które od razu wyrzucisz.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-15-pl.webp"
                alt="Checklista" className="w-full object-cover" />
            </div>
            <InteractiveChecklist />
          </div>

          {/* FAQ */}
          <div id="faq" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>?</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                FAQ: Ścieżki instrumentalne i brak wokalu
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <div key={i} className="rounded-xl p-5 flex flex-col gap-2"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-white font-medium text-sm">{item.q}</p>
                  <p className="text-white/65 text-base leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final thought */}
          <div className="flex flex-col gap-1">
            <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="rounded-2xl p-8 flex flex-col gap-4 mt-4"
              style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <h3 className="text-xl font-semibold text-white">Końcowa myśl</h3>
              <p className="text-white/65 text-base leading-relaxed">
                Praca z Suno to umiejętność. Nie hack promptu, nie tajna formuła — umiejętność.
                Taka, która rozwija się przez regularne ćwiczenie, uczciwe słuchanie i chęć
                zrozumienia narzędzia zamiast walki z nim.
              </p>
              <p className="text-white font-semibold mt-2 text-lg">Idź i zrób coś.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <h3 className="text-xl font-semibold text-white">Nie wiesz czego potrzebuje twój utwór?</h3>
            <p className="text-white/65 text-base max-w-md">
              Wyślij go i posłuchaj bezpłatnego 60-sekundowego podglądu — uczciwa ocena
              i konkretna cena, bez zobowiązań.
            </p>
            <a href="/pl/free-track-preview"
              className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
              style={{ backgroundColor: "#C9A84C" }}>
              Uzyskaj bezpłatny podgląd →
            </a>
          </div>

          <RelatedPosts slug="suno-guide-2026" />
        </div>
      </div>
    </div>
  );
}
