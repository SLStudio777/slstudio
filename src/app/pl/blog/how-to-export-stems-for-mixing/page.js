import RelatedPosts from "@/app/components/blog/RelatedPosts";
import BlogJsonLd from "@/app/components/blog/BlogJsonLd";
import BlogHeader from "@/app/components/blog/BlogHeader";
import ReadingProgress from "@/app/components/blog/ReadingProgress";
import StemChecklistForm from "@/app/components/blog/StemChecklistForm";

const IMG = "/images/blog/stems";
const PDF = "/downloads/sl-studio-track-prep-checklist-pl.pdf";

export const metadata = {
  title:
    "Jak wyeksportowa\u0107 stemy i przygotowa\u0107 utw\u00f3r do miksu (checklista 2026)",
  alternates: {
    canonical:
      "https://www.slstudio.pro/pl/blog/how-to-export-stems-for-mixing",
    languages: {
      en: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing",
      pl: "https://www.slstudio.pro/pl/blog/how-to-export-stems-for-mixing",
      ru: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing-ru",
      "x-default":
        "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing",
    },
  },
  description:
    "Co wys\u0142a\u0107 realizatorowi miksu: ustawienia WAV, dlaczego limiter musi zej\u015b\u0107 z master busa, jak wyeksportowa\u0107 stemy z FL Studio, Abletona, Logica i Reapera, nazewnictwo plik\u00f3w - i co zrobi\u0107, je\u015bli masz tylko nagranie z telefonu albo eksport z Suno. Darmowa checklista PDF w \u015brodku.",
  openGraph: {
    title:
      "Jak wyeksportowa\u0107 stemy i przygotowa\u0107 utw\u00f3r do miksu",
    description:
      "Ustawienia WAV, stemy z ka\u017cdego DAW, nazewnictwo, wysy\u0142ka - i dlaczego nagranie z telefonu te\u017c jest w porz\u0105dku. Z darmow\u0105 jednostronicow\u0105 checklist\u0105 PDF.",
    type: "article",
    url: "https://www.slstudio.pro/pl/blog/how-to-export-stems-for-mixing",
    siteName: "SL Studio",
    images: [`${IMG}/stems-cover-pl.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jak wyeksportowa\u0107 stemy i przygotowa\u0107 utw\u00f3r do miksu",
    description:
      "Przewodnik praktykuj\u0105cego realizatora: formaty, headroom, stemy z ka\u017cdego DAW, nazewnictwo i wysy\u0142ka. Darmowa checklista PDF.",
  },
  keywords: [
    "jak wyeksportowa\u0107 stemy",
    "jak przygotowa\u0107 utw\u00f3r do miksu",
    "co wys\u0142a\u0107 do miksu i masteringu",
    "wav czy mp3 do miksu",
    "stemy do masteringu",
    "eksport \u015bcie\u017cek do miksu",
  ],
  other: {
    "article:published_time": "2026-07-20",
  },
};

// ─── FAQ ────────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Czy naprawd\u0119 potrzebuj\u0119 stem\u00f3w, czy wystarczy miks stereo?",
    a: "Miks stereo wystarczy na start - do masteringu to wszystko, czego potrzebuj\u0119, a do oceny miksu a\u017c nadto. Stemy po prostu daj\u0105 mi wi\u0119cej kontroli: mog\u0119 poprawi\u0107 balans wokalu, naprawi\u0107 d\u00f3\u0142 pasma albo podmieni\u0107 s\u0142aby d\u017awi\u0119k perkusji, zamiast go obchodzi\u0107. Wy\u015blij to, co masz; je\u015bli stemy naprawd\u0119 zmieni\u0142yby wynik, powiem ci o tym, zanim padnie s\u0142owo o pieni\u0105dzach.",
  },
  {
    q: "A je\u015bli mam tylko mp3 albo nagranie z dyktafonu w telefonie?",
    a: "Wy\u015blij je. M\u00f3wi\u0119 to bez ironii: dem\u00f3wki z telefonu, nagrania z pr\u00f3b i stare mp3 to tutaj normalny punkt wyj\u015bcia, a nie pow\u00f3d do wstydu. Powiem ci szczerze, co da si\u0119 z tym osi\u0105gn\u0105\u0107 - czasem to zaskakuj\u0105co dobra rekonstrukcja, czasem rada, jak tanio dograsz jedn\u0105 parti\u0119. Tak czy inaczej, pytaj\u0105c nic nie tracisz.",
  },
  {
    q: "Jakie ustawienia WAV wybra\u0107 przy eksporcie?",
    a: "WAV 24-bit w cz\u0119stotliwo\u015bci pr\u00f3bkowania, kt\u00f3rej ju\u017c u\u017cywa tw\u00f3j projekt (44,1 albo 48 kHz - nie konwertuj). Wy\u0142\u0105cz limiter i maximizer na master busie, zostaw oko\u0142o 3-6 dB headroomu i wyeksportuj pe\u0142n\u0105 d\u0142ugo\u015b\u0107 razem z ogonem pog\u0142osu na ko\u0144cu.",
  },
  {
    q: "Czy mog\u0119 wys\u0142a\u0107 utw\u00f3r z Suno albo innego generatora AI?",
    a: "Tak - utwory generowane przez AI to normalna cz\u0119\u015b\u0107 mojej pracy. Wy\u015blij eksport w najwy\u017cszej jako\u015bci, jak\u0105 daje platforma (najlepiej WAV), plus tekst piosenki i notk\u0119, co ci przeszkadza w brzmieniu. Je\u015bli platforma pozwala pobra\u0107 stemy - we\u017a je te\u017c, bardzo pomagaj\u0105.",
  },
  {
    q: "Jak wys\u0142a\u0107 du\u017ce pliki?",
    a: "WeTransfer (darmowy do 2 GB, bez konta) albo link do folderu Google Drive dzia\u0142aj\u0105 idealnie. Spakuj folder ze stemami do zipa, \u017ceby nic nie zgin\u0119\u0142o, sprawd\u017a link w oknie incognito i wy\u015blij przez stron\u0119 kontaktow\u0105 z paroma zdaniami o utworze.",
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

// ─── Pro Tip block ───────────────────────────────────────────────────────────────
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

// ─── Image block ─────────────────────────────────────────────────────────────────
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

// ─── Table of contents ────────────────────────────────────────────────────────────
const TOC = [
  { id: "the-only-rule", label: "Jedyna zasada: wyślij to, co masz" },
  { id: "formats", label: "Pliki i formaty: WAV bije wszystko" },
  { id: "limiter", label: "Zdejmij limiter, zostaw headroom" },
  { id: "stems", label: "Stemy: jak je wyeksportować z każdego DAW" },
  { id: "naming", label: "Nazewnictwo plików, żeby nic nie zginęło" },
  { id: "special-cases", label: "Demo z telefonu, próby i utwory AI" },
  { id: "sending", label: "Jak to wysłać (i co napisać)" },
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

// ─── Section header ──────────────────────────────────────────────────────────────────
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

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function HowToExportStemsForMixingPagePl() {
  return (
    <div id="top" className="mt-16 mb-20">
      <BlogJsonLd slug="how-to-export-stems-for-mixing" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <BlogHeader
          topic="Produkcja"
          date="20 lipca 2026"
          title="Jak wyeksportować stemy i przygotować utwór do miksu"
          description="Praktyczny przewodnik bez gatekeepingu: formaty, headroom, stemy z każdego DAW, nazewnictwo plików i wysyłka - plus co zrobić, kiedy masz tylko nagranie z telefonu. W środku darmowa jednostronicowa checklista PDF."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Intro */}
          <div className="flex flex-col gap-5">
            <p>
              <strong className="text-white">
                Najpierw jedno wyjaśnienie: możesz mi wysłać cokolwiek. Notatkę
                głosową z telefonu, zaszumione nagranie z próby, dziesięcioletni
                mp3, eksport z Suno - każda z tych rzeczy jest pełnoprawnym
                punktem wyjścia i żadnej nie trzeba "naprawiać", zanim jej
                posłucham.
              </strong>
            </p>
            <p>
              Po co więc ten przewodnik? Bo przygotowanie to nie bramka
              wejściowa, tylko mnożnik. Ta sama piosenka wysłana na dwa różne
              sposoby daje mi dwie różne ilości przestrzeni do pracy. Każda
              minuta, którą spędzam na odkręcaniu zmiażdżonego eksportu albo
              zgadywaniu, który z pięciu plików jest tym właściwym, to minuta
              nie poświęcona twojemu brzmieniu. Dziesięć minut przygotowań po
              twojej stronie regularnie kupuje słyszalnie lepszy efekt za te
              same pieniądze.
            </p>
            <p>
              Poniżej wszystko, co naprawdę ma znaczenie: formaty, jeden błąd z
              limiterem, który popełnia prawie każdy, eksport stemów z każdego
              DAW, nazewnictwo i wysyłka. A jeśli wolisz mieć to wszystko na
              jednej kartce obok swojego DAW - na końcu czeka{" "}
              <a
                href="#checklist"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                darmowa checklista PDF
              </a>
              .
            </p>
          </div>

          {/* Table of Contents */}
          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          {/* ── 1. Jedyna zasada ── */}
          <div id="the-only-rule" className="flex flex-col gap-5">
            <SectionHeader
              number="1"
              title="Jedyna zasada: wyślij to, co masz"
            />
            <p>
              Mnóstwo studiów publikuje "wymagania dotyczące materiałów", które
              czyta się jak deklarację celną - i mnóstwo muzyków przez nie nigdy
              nigdzie swojej piosenki nie wysyła. Moja zasada jest odwrotna i
              jako jedyna na tej stronie nie ma wyjątków:{" "}
              <strong className="text-white">
                wersja, którą masz teraz, jest wystarczająco dobra, żeby ją
                wysłać.
              </strong>
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>Nagranie z telefonu - ty i gitara? Wyślij.</li>
              <li>Take z sali prób z za głośną perkusją? Wyślij.</li>
              <li>Stary mp3 piosenki, której nigdy nie dokończyłeś? Wyślij.</li>
              <li>Utwór z AI, który brzmi prawie dobrze? Wyślij.</li>
            </ul>
            <p>
              Posłucham i szczerze powiem, co da się z tym zrobić i ile by to
              kosztowało - taka ocena jest darmowa i do niczego nie zobowiązuje.
              Wszystko poniżej tego punktu to po prostu sposób, żeby dać mi{" "}
              <em>więcej</em> materiału do pracy, kiedy możesz.
            </p>
            <ProTip>
              Jeśli wahasz się między wysłaniem surowej wersji dziś a "porządnie
              przygotowanej" kiedyś - wyślij surową dziś. Impet dokończył więcej
              piosenek niż perfekcjonizm kiedykolwiek.
            </ProTip>
          </div>

          {/* ── 2. Formaty ── */}
          <div id="formats" className="flex flex-col gap-5">
            <SectionHeader
              number="2"
              title="Pliki i formaty: WAV bije wszystko"
            />
            <p>
              Kiedy masz wybór, oto kolejność preferencji i ustawienia, które
              mają znaczenie:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">WAV (albo AIFF), 24-bit.</strong>{" "}
                Formaty bezstratne zachowują wszystko, co miał twój projekt.
                24-bit to standard studyjny; 16-bit jest akceptowalny, 32-bit
                float też jest całkowicie w porządku, jeśli to daje twój DAW.
              </li>
              <li>
                <strong className="text-white">
                  Zostaw częstotliwość próbkowania projektu.
                </strong>{" "}
                Sesja w 44,1 kHz - eksportuj 44,1; w 48 - eksportuj 48.
                Konwersja w górę do 96 kHz nie dodaje nic poza rozmiarem pliku,
                a konwersja w dół wyrzuca informacje.
              </li>
              <li>
                <strong className="text-white">
                  Nigdy nie konwertuj mp3 na WAV.
                </strong>{" "}
                To nie przywraca straconej jakości - tylko ukrywa, czym plik
                naprawdę jest. Jeśli masz tylko mp3, wyślij ten mp3, najlepiej
                oryginał o najwyższym bitrate.
              </li>
              <li>
                <strong className="text-white">Eksportuj pełną długość.</strong>{" "}
                Zacznij od samego początku i pozwól ogonowi pogłosu ostatniego
                akordu wybrzmieć do końca, zanim eksport się skończy. Ucięte
                ogony to najczęstszy mały dramat w tym zawodzie.
              </li>
            </ul>
          </div>

          {/* ── 3. Limiter ── */}
          <div id="limiter" className="flex flex-col gap-5">
            <SectionHeader
              number="3"
              title="Zdejmij limiter, zostaw headroom"
            />
            <p>
              Jeśli masz zapamiętać z tej strony dokładnie jedną techniczną
              rzecz, niech to będzie ta. Przed eksportem miksu do dalszej pracy{" "}
              <strong className="text-white">
                wyłącz każdy limiter, maximizer i clipper na master busie.
              </strong>{" "}
              Limiter zgniata szczyty muzyki, żeby było głośno - i tego
              zgniecenia nie da się po mojej stronie cofnąć. Wysłanie
              zlimitowanego pliku to jak nadanie listu, który już przeszedł
              przez niszczarkę: treść technicznie jest, ale nikt z nią nie
              popracuje.
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">Zostaw 3-6 dB headroomu</strong>{" "}
                - najgłośniejszy moment piosenki powinien szczytować gdzieś
                między -6 a -3 dB na mierniku mastera.
              </li>
              <li>
                <strong className="text-white">Nie normalizuj</strong> eksportu
                i nie podbijaj pliku, żeby wyglądał głośniej. Cicho jest okej.
                Cicho jest dobrze.
              </li>
              <li>
                <strong className="text-white">
                  EQ i kompresja na pojedynczych ścieżkach mogą zostać
                </strong>{" "}
                - jeśli są częścią twojego brzmienia. Zejść musi tylko obróbka
                głośności na master busie.
              </li>
            </ul>
            <p>
              Twój eksport będzie brzmiał ciszej niż komercyjne wydania. To nie
              błąd - głośność to dosłownie to, za co mnie wynajmujesz.
            </p>
            <ProTip>
              Szybki autotest: jeśli twoje wyeksportowane audio szczytuje około
              -6 dB i brzmi wyraźnie ciszej niż utwory na Spotify - zrobiłeś
              wszystko dobrze. Jeśli jest dobite do 0 dB i brzmi "skończenie",
              gdzieś nadal wisi limiter.
            </ProTip>
          </div>

          {/* ── 4. Stemy ── */}
          <div id="stems" className="flex flex-col gap-5">
            <SectionHeader
              number="4"
              title="Stemy: jak je wyeksportować z każdego DAW"
            />
            <p>
              Stemy to twój miks wyeksportowany grupami: perkusja jako jeden
              plik, bas jako drugi, gitary, wokale, syntezatory, efekty - każda
              grupa osobno, wszystkie tej samej długości. To różnica między{" "}
              <em>obchodzeniem</em> problemu a jego <em>naprawieniem</em>. W
              każdym DAW obowiązują cztery zasady:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">
                  Każdy stem zaczyna się od taktu 1
                </strong>{" "}
                (0:00) - nawet jeśli instrument wchodzi w trzeciej minucie. Ten
                sam start, ta sama długość dla każdego pliku. Właśnie dzięki
                temu wszystko zepnie się po mojej stronie.
              </li>
              <li>
                <strong className="text-white">
                  Zachowaj swoje kreatywne przetwarzanie.
                </strong>{" "}
                Jeśli zmiażdżony bus perkusji albo wokal z "telefonicznym" EQ to
                część brzmienia - wydrukuj to. W razie wątpliwości wyeksportuj
                dwie wersje, wet i dry, i je opisz.
              </li>
              <li>
                <strong className="text-white">Master bus zostaje pusty</strong>{" "}
                - ta sama zasada co wcześniej: żadnego limitera ani "kleju" na
                wyjściu stereo podczas drukowania stemów.
              </li>
              <li>
                <strong className="text-white">6-12 stemów wystarczy</strong>{" "}
                dla większości piosenek. Stopa, werbel, reszta perkusji, bas,
                gitary, klawisze, wokal główny, chórki, FX - ten poziom
                szczegółowości pokrywa 95% potrzeb miksu.
              </li>
            </ul>
            <p>Gdzie mieszka eksport w wielkiej czwórce DAW:</p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">FL Studio:</strong> File → Export
                → WAV, potem zaznacz "Split mixer tracks" w oknie eksportu.
                Każda ścieżka miksera staje się osobnym plikiem w jednym
                przejściu.
              </li>
              <li>
                <strong className="text-white">Ableton Live:</strong> File →
                Export Audio/Video, ustaw "Rendered Track" na{" "}
                <em>All Individual Tracks</em>, wybierz WAV 24-bit i renderuj.
              </li>
              <li>
                <strong className="text-white">Logic Pro:</strong> File → Export
                → All Tracks as Audio Files - zaznacz "Include Volume/Pan
                Automation" i wybierz 24-bit WAV.
              </li>
              <li>
                <strong className="text-white">Reaper:</strong> File → Render,
                ustaw Source na <em>Stems (selected tracks)</em>, zaznacz
                foldery ścieżek, renderuj w 24-bit.
              </li>
            </ul>
            <ProTip>
              Autotest przed wysyłką: wrzuć wszystkie stemy do pustego projektu,
              nie dotykaj ani jednego fadera i włącz odtwarzanie. Jeśli brzmi
              dokładnie jak twój miks - eksport jest poprawny. Jeśli czegoś
              brakuje albo coś się dubluje, lepiej żebyś odkrył to ty niż ja,
              trzy dni później.
            </ProTip>
          </div>

          {/* ── 5. Nazewnictwo ── */}
          <div id="naming" className="flex flex-col gap-5">
            <SectionHeader
              number="5"
              title="Nazewnictwo plików, żeby nic nie zginęło"
            />
            <p>
              Zdziwiłbyś się, ile czasu studyjnego na świecie schodzi na
              ustalanie, czy <em>final_FINAL_v3_ten.wav</em> jest nowszy niż{" "}
              <em>final_v3_FINAL_naprawde.wav</em>. Trzydzieści sekund
              dyscypliny rozwiązuje to na zawsze:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">Folder:</strong>{" "}
                Artysta_Tytul_120bpm_Am - artysta, piosenka, tempo i tonacja w
                nazwie folderu odpowiadają na połowę moich pytań z pierwszego
                dnia.
              </li>
              <li>
                <strong className="text-white">Stemy:</strong> numerowane i
                oczywiste - 01_Kick, 02_Snare, 03_Drums_Rest, 04_Bass, 05_Gtr_L,
                06_Gtr_R, 07_LeadVox, 08_BVs, 09_FX. Żadnych wewnętrznych żartów
                - przyszły ty też ich nie zapamięta.
              </li>
              <li>
                <strong className="text-white">
                  Jedna piosenka = jeden zip.
                </strong>{" "}
                Spakuj folder przed wysłaniem - nic nie zginie po drodze, a ja
                dostanę twoją strukturę plików dokładnie taką, jaką zrobiłeś.
              </li>
            </ul>
          </div>

          {/* ── 6. Przypadki specjalne ── */}
          <div id="special-cases" className="flex flex-col gap-5">
            <SectionHeader
              number="6"
              title="Demo z telefonu, próby i utwory AI"
            />
            <p>
              A teraz przypadki, o których "strony z wymaganiami" nigdy nie
              wspominają - a które stanowią połowę tego, co ląduje w mojej
              skrzynce.
            </p>
            <p>
              <strong className="text-white">
                Nagrania z telefonu i z prob.
              </strong>{" "}
              Liczą się dwie rzeczy. Po pierwsze: wyślij{" "}
              <em>oryginalny plik</em> z telefonu, a nie forward z komunikatora
              - wiadomości głosowe WhatsAppa i Telegrama brutalnie rekompresują
              audio i te straty są nieodwracalne. Wyślij plik mailem do siebie
              albo wrzuć prosto na Drive. Po drugie: nie "pomagaj" nagraniu
              aplikacjami do czyszczenia ani EQ przed wysyłką - każde
              automatyczne czyszczenie wyrzuca informacje, które umiałbym
              wykorzystać lepiej.
            </p>
            <p>
              <strong className="text-white">Suno i inne utwory AI.</strong>{" "}
              Pobierz najlepszą jakość, jaką daje platforma - WAV, jeśli twój
              plan go obejmuje - i weź też stemy, jeśli da się je wyeksportować.
              Dołącz tekst piosenki i jedno szczere zdanie o tym, co ci
              przeszkadza w brzmieniu ("refren brzmi cienko", "wokal jest
              ostry"). A jeśli ciekawi cię, co człowiek naprawdę zmienia w
              utworze AI, zrobiłem na ten temat{" "}
              <a
                href="/pl/blog/ai-vs-human-mastering-blind-test"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                publiczny ślepy test
              </a>
              .
            </p>
          </div>

          {/* ── 7. Wysyłka ── */}
          <div id="sending" className="flex flex-col gap-5">
            <SectionHeader number="7" title="Jak to wysłać (i co napisać)" />
            <p>
              Żadnych portali, żadnych kont:{" "}
              <strong className="text-white">WeTransfer</strong> (za darmo do 2
              GB, bez rejestracji) albo link do folderu na{" "}
              <strong className="text-white">Google Drive</strong> w zupełności
              wystarczy. Najpierw zip, potem upload, a na koniec otwórz własny
              link w oknie incognito, żeby sprawdzić, czy działa bez logowania.
            </p>
            <p>W samej wiadomości pięć linijek bije pięć akapitów:</p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                Co to za piosenka i czego potrzebujesz (miks? mastering? oba?)
              </li>
              <li>Jeden-dwa utwory referencyjne, których brzmienie kochasz</li>
              <li>Co ci przeszkadza w obecnej wersji</li>
              <li>Twój deadline, jeśli jakiś masz</li>
              <li>Link do pobrania</li>
            </ul>
            <p>
              Wyślij to przez{" "}
              <a
                href="/pl/kontakt"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                stronę kontaktową
              </a>{" "}
              - a jeśli chcesz usłyszeć, co zrobiłbym z twoim utworem, zanim
              wydasz cokolwiek,{" "}
              <a
                href="/pl/darmowy-fragment"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                darmowa próbka
              </a>{" "}
              istnieje dokładnie po to.
            </p>
          </div>

          {/* ── Formularz checklisty PDF ── */}
          <StemChecklistForm
            pdfHref={PDF}
            lang="pl"
            labels={{
              title: "Pobierz checklistę przygotowania utworu (PDF)",
              text: "Jedna strona, wygodna do druku: formaty, limiter, stemy, nazewnictwo, wysyłka. Zostaw e-mail, a pobieranie odblokuje się tutaj.",
              placeholder: "twoj@email.com",
              button: "Wyślij mi checklistę →",
              sending: "Wysyłanie...",
              successTitle: "Gotowe - twoja checklista czeka.",
              successText:
                "Pobierz PDF poniżej. Napiszę tylko wtedy, kiedy będę miał coś naprawdę przydatnego - zero spamu.",
              download: "Pobierz checklistę PDF",
              error:
                "Coś poszło nie tak - spróbuj ponownie albo napisz do mnie bezpośrednio.",
              invalid: "Podaj poprawny adres e-mail.",
            }}
          />

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

          <RelatedPosts slug="how-to-export-stems-for-mixing" lang="pl" />
        </div>
      </div>
    </div>
  );
}
