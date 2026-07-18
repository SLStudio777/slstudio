import RelatedPosts from "@/app/components/blog/RelatedPosts";
import SunoCta from "@/app/components/blog/SunoCta";
import BlogHeader from "@/app/components/blog/BlogHeader";
import ReadingProgress from "@/app/components/blog/ReadingProgress";

const IMG = "/images/blog/suno-mastering";

export const metadata = {
  title: "Jak zmasterować utwór z Suno na Spotify (Poradnik 2026)",
  alternates: {
    canonical: "https://www.slstudio.pro/pl/blog/master-suno-track-for-spotify",
    languages: {
      pl: "https://www.slstudio.pro/pl/blog/master-suno-track-for-spotify",
      en: "https://www.slstudio.pro/blog/master-suno-track-for-spotify",
      ru: "https://www.slstudio.pro/blog/master-suno-track-for-spotify-ru",
      "x-default": "https://www.slstudio.pro/blog/master-suno-track-for-spotify",
    },
  },
  description:
    "Twój utwór z Suno brzmi na Spotify cicho i płasko? Realizator dźwięku tłumaczy normalizację głośności, artefakty AI i pokazuje krok po kroku, jak to naprawić — z prawdziwymi ustawieniami ze studia.",
  openGraph: {
    title: "Jak zmasterować utwór z Suno na Spotify — poradnik realizatora",
    description:
      "Dlaczego utwory z Suno brzmią na Spotify cicho i jak to naprawić: normalizacja głośności, artefakty AI, darmowe triki i prawdziwe ustawienia masteringu.",
    type: "article",
    url: "https://www.slstudio.pro/pl/blog/master-suno-track-for-spotify",
    siteName: "SL Studio",
    locale: "pl_PL",
    images: [`${IMG}/suno-mastering-cover.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak zmasterować utwór z Suno na Spotify — poradnik realizatora",
    description:
      "Dlaczego utwory z Suno brzmią na Spotify cicho i jak to naprawić: normalizacja głośności, artefakty AI, darmowe triki i prawdziwe ustawienia masteringu.",
  },
  keywords: [
    "mastering utworu suno",
    "jak zmasterować utwór z suno",
    "suno cicho na spotify",
    "suno lufs spotify",
    "mastering ai po polsku",
    "suno źle brzmi na spotify",
  ],
  other: {
    "article:published_time": "2026-07-18",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jak zmasterować utwór z Suno na Spotify (Poradnik 2026)",
  description:
    "Dlaczego utwory z Suno brzmią na Spotify cicho i jak to naprawić: normalizacja głośności, artefakty AI, darmowe triki i prawdziwe ustawienia masteringu.",
  image: `https://www.slstudio.pro${IMG}/suno-mastering-cover.jpg`,
  author: { "@type": "Person", name: "Serhii Lazariev" },
  publisher: {
    "@type": "Organization",
    name: "SL Studio",
    logo: {
      "@type": "ImageObject",
      url: "https://www.slstudio.pro/logo.png",
    },
  },
  datePublished: "2026-07-18",
  inLanguage: "pl",
  url: "https://www.slstudio.pro/pl/blog/master-suno-track-for-spotify",
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

// ─── Image block ─────────────────────────────────────────────────────────────
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

// ─── Spis treści ─────────────────────────────────────────────────────────────
const TOC = [
  { id: "why-spotify-turns-you-down", label: "Dlaczego Spotify ścisza twój utwór" },
  { id: "inside-a-raw-suno-export", label: "Co siedzi w surowym eksporcie z Suno" },
  { id: "free-fixes", label: "Darmowe poprawki na już" },
  { id: "loudness-question", label: "Kwestia głośności: -14 czy -7?" },
  { id: "my-chain", label: "Mój łańcuch od A do Z" },
  { id: "when-mastering-cant-save-it", label: "Kiedy mastering już nie uratuje" },
  { id: "checklist", label: "Checklista przed wrzuceniem" },
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

// ─── Nagłówek sekcji ─────────────────────────────────────────────────────────
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
    q: "Na ile LUFS masterować utwór z Suno na Spotify?",
    a: "Oficjalne wytyczne Spotify to -14 LUFS integrated i true peak poniżej -1 dBTP. W praktyce większość komercyjnych wydań siedzi w okolicach -7 do -9 LUFS, a ja swoje projekty z Suno masteruję na około -7…-8 LUFS z sufitem true peak -0,3 dB. Oba podejścia działają — ważne, żeby limitowanie było czyste. Głośny master z wypalonymi zniekształceniami jest gorszy niż cichy.",
  },
  {
    q: "Dlaczego mój utwór brzmi na Spotify gorzej niż w aplikacji Suno?",
    a: "Nakładają się trzy rzeczy: Spotify ścisza (albo podgłaśnia) utwór do swojego poziomu normalizacji, plik jest konwertowany do formatu stratnego, a wszelkie przekroczenia true peak zamieniają się przy tej konwersji w słyszalne zniekształcenia. Jeśli master był dociśnięty pod samo 0 dB, to właśnie enkodowanie streamingowe go rozkłada.",
  },
  {
    q: "Ściągać z Suno MP3 czy WAV?",
    a: "Zawsze WAV, jeśli planujesz jakąkolwiek obróbkę. Kompresja MP3 wyrzuca dokładnie te detale wysokich częstotliwości, których utworom AI i tak brakuje. Eksport WAV wymaga płatnego planu Suno, ale jeśli wydajesz muzykę komercyjnie, płatny plan i tak jest ci potrzebny ze względu na prawa.",
  },
  {
    q: "Czy muszę informować Spotify, że utwór powstał z pomocą AI?",
    a: "Dystrybutorzy coraz częściej proszą o oznaczanie treści generowanych przez AI i branża zmierza w stronę pełnej przejrzystości. Jeśli utwór powstał na płatnym planie Suno, regulamin pozwala na wydanie komercyjne. Moja rada: graj w otwarte karty i konkuruj jakością — dobrze dokończony utwór nie ma czego ukrywać.",
  },
  {
    q: "Da się naprawić utwór, mając tylko MP3?",
    a: "Da się. Nowoczesna separacja stemów (UVR5 z modelem htdemucs_ft albo narzędzia płatne) rozkłada plik stereo na wokal, perkusję, bas i instrumenty na tyle dobrze, że można je czyścić, balansować i budować od nowa. WAV daje lepsze wyniki, ale MP3 to nadal punkt wyjścia, z którym da się pracować.",
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

// ─── Checklista ──────────────────────────────────────────────────────────────
const checklist = [
  "Wyeksportowany WAV z najnowszego modelu Suno (nie generacja sprzed roku)",
  "Wokal jest czytelny przy cichym odsłuchu",
  "Bas przechodzi test samochodowy — nic nie buczy w okolicy 100 Hz",
  "Góra jest gładka na tanich słuchawkach, bez syczenia i metaliczności",
  "Refren po limiterze nadal uderza mocniej niż zwrotka",
  "Sufit true peak na -1 dBTP (albo -2, jeśli master jest głośny)",
  "Zero słyszalnego clippingu — Spotify go nie cofnie",
  "Porównanie z komercyjną referencją przy wyrównanej głośności",
];

// ─── Strona ──────────────────────────────────────────────────────────────────
export default function MasterSunoTrackForSpotifyPlPage() {
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
          topic="Mastering"
          date="18 lipca 2026"
          title="Jak zmasterować utwór z Suno na Spotify"
          description="Dlaczego twój utwór z AI brzmi cicho i płasko obok komercyjnych wydań — i jak to naprawić: od darmowych trików po dokładne ustawienia, których używam w studiu."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Intro */}
          <div className="flex flex-col gap-5">
            <p>
              Skończyłeś utwór w Suno. W słuchawkach brzmiał potężnie. Wrzuciłeś
              go, otworzyłeś Spotify, puściłeś zaraz po swoim ulubionym
              artyście… a twój numer wszedł cicho, cienko i jakoś tak{" "}
              <em>mało</em> — jakby przyszedł na stadionowy koncert z ćwiczebnym
              comba.
            </p>
            <p>
              To nie twoje uszy i nie pech. To dwie rzeczy nałożone na siebie:{" "}
              <strong className="text-white">
                normalizacja głośności Spotify
              </strong>{" "}
              oraz{" "}
              <strong className="text-white">
                sposób, w jaki generatory AI budują dźwięk
              </strong>
              . Masteruję utwory z Suno dla klientów, więc przeprowadzę cię
              przez całość — łącznie z ustawieniami z moich własnych sesji, a
              nie teorią z podręcznika.
            </p>
            <ArticleImage
              src={`${IMG}/suno-mastering-cover.jpg`}
              alt="Surowy eksport z Suno zamieniający się w czysty, zmasterowany przebieg fali"
            />
          </div>

          {/* Spis treści */}
          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          <SunoCta lang="pl" />

          {/* ── 1 ── */}
          <div id="why-spotify-turns-you-down" className="flex flex-col gap-5">
            <SectionHeader
              number="1"
              title="Dlaczego Spotify ścisza twój utwór (albo nie chce go podgłośnić)"
            />
            <p>
              Spotify odtwarza wszystko na mniej więcej równej odczuwalnej
              głośności. Domyślny cel to{" "}
              <strong className="text-white">-14 LUFS integrated</strong>:
              głośniejsze mastery są ściszane, cichsze — podgłaśniane, ale
              tylko na tyle, na ile pozwalają ich szczyty. Są też dwa
              ustawienia po stronie słuchacza, na które nie masz wpływu:{" "}
              <strong className="text-white">Głośno</strong> (-11 LUFS, gdzie
              Spotify nakłada na ciche utwory <em>własny limiter</em> — a nie
              chcesz, żeby robot podejmował tę decyzję za twój miks) i{" "}
              <strong className="text-white">Cicho</strong> (-19 LUFS).
            </p>
            <ArticleImage
              src={`${IMG}/spotify-loudness-normalization.jpg`}
              alt="Normalizacja głośności: głośny przebieg fali ściszany do kontrolowanego poziomu"
            />
            <p>
              Spotify prosi też o{" "}
              <strong className="text-white">true peak poniżej -1 dBTP</strong>{" "}
              (poniżej -2 dBTP, jeśli master jest głośniejszy niż -14 LUFS),
              bo konwersja do formatów stratnych tworzy szczyty
              międzypróbkowe — dociśnij plik pod samo 0 dB, a enkoder doda
              trzaski, których w DAW nigdy nie słyszałeś.
            </p>
            <p>
              A oto zasada, która tłumaczy 90% rozczarowujących wrzutek:{" "}
              <strong className="text-white">
                Spotify może zmienić twoją głośność, ale nie cofnie twoich
                zniszczeń.
              </strong>{" "}
              Głośność jest odwracalna. Clipping, agresywne limitowanie i
              zniekształcenia są wdrukowane w plik na zawsze. Zmiażdżony utwór
              zostaje ściszony do poziomu wszystkich innych — zachowuje cały
              swój chrzęst, a traci całe uderzenie.
            </p>
          </div>

          {/* ── 2 ── */}
          <div id="inside-a-raw-suno-export" className="flex flex-col gap-5">
            <SectionHeader
              number="2"
              title="Co naprawdę siedzi w surowym eksporcie z Suno"
            />
            <p>
              Trzeba oddać sprawiedliwość: wewnętrzny balans Suno bywa lepszy
              niż niejeden sypialniany miks. Ale plik, który wychodzi z
              przycisku eksportu, ma bardzo rozpoznawalny zestaw dolegliwości:
            </p>
            <div className="flex flex-col gap-3">
              {[
                [
                  "Miękkie, zjedzone transjenty.",
                  "Stopa traci klik — zwłaszcza tam, gdzie jest wokal. Utwór brzmi słabiej, niż mierzy.",
                ],
                [
                  "Napompowany środek pasma.",
                  "Suno domyślnie dociska średnicę — bezpiecznie na głośniczku telefonu, męcząco na czymkolwiek lepszym.",
                ],
                [
                  "Sufit na ~18 kHz.",
                  "Powyżej: nic. 'Powietrze' prawdziwego nagrania po prostu nie jest generowane. Im lepszy system odsłuchowy, tym bardziej to słychać.",
                ],
                [
                  "Błoto w okolicy 100 Hz.",
                  "Najbardziej kapryśna częstotliwość basu — chowa się na głośnikach laptopa, a potem buczy w samochodzie.",
                ],
                [
                  "Wdrukowany pogłos z artefaktami.",
                  "Wokal przypływa skąpany w hali, której nie da się wyłączyć, razem z poświatą, której żaden plugin de-reverb w pełni nie usunie.",
                ],
                [
                  "Metaliczne hi-haty i syczące rezonanse",
                  "w rejonie 2–4 kHz — największa pojedyncza wizytówka 'to jest AI'.",
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
              alt="Widmo typowego utworu AI: przeładowany dół, ostre rezonanse, brak najwyższych częstotliwości"
            />
            <p>
              I słuchacze to słyszą. Może nie świadomie — ale ślepe testy raz
              za razem pokazują, że nawet przypadkowa publiczność wyłapuje
              surowy utwór AI w kilka sekund i słabiej na niego reaguje.
              Różnica między 'wygenerowane' a 'wydane' to dokładnie temat tego
              artykułu.
            </p>
          </div>

          {/* ── 3 ── */}
          <div id="free-fixes" className="flex flex-col gap-5">
            <SectionHeader number="3" title="Darmowe poprawki na już" />
            <p>
              Zanim zaczniesz jakikolwiek mastering, wyciśnij ze źródła
              wszystko, co się da. To nic nie kosztuje, a efekty szybko się
              sumują:
            </p>
            <div className="flex flex-col gap-4">
              {[
                [
                  "Wyeksportuj najlepsze możliwe źródło.",
                  "WAV, najnowszy model. Jeśli utwór powstał na starszym modelu, najpierw kliknij Remaster (v5, Normal) — stare generacje niosą dodatkowy szum w górze pasma i bardziej płaski obraz stereo.",
                ],
                [
                  "Trik stereo z Remasterem.",
                  "Remaster daje ci dwie niemal identyczne kopie utworu. Oryginał zostaw na środku, dwa remastery rozrzuć mocno w lewo i prawo, ścisz je o 4 dB, załóż górnoprzepustowy na 100 Hz i dolnoprzepustowy około 5 kHz. Gratulacje: właśnie odbudowałeś boki płaskiego eksportu AI bez ani jednego pluginu.",
                ],
                [
                  "Poproś w prompcie o suchy wokal.",
                  "Jeśli planujesz postprodukcję, zamów w prompcie suchy, bliski wokal. Usuwanie wdrukowanego pogłosu AI to chirurgia; niewygenerowanie go jest darmowe.",
                ],
                [
                  "Rozłóż na stemy w UVR5.",
                  "Za darmo. Użyj modelu htdemucs_ft do rozdziału na wokal/perkusję/bas/resztę. Jedno ostrzeżenie: separacja uwielbia wrzucać saksofony i skrzypce do 'wokalu' — zawsze przesłuchaj stemy, zanim je obrobisz.",
                ],
                [
                  "Odbuduj brakującą górę szumem.",
                  "Wmieszaj odrobinę białego szumu w matowe hi-haty — to rekonstruuje 'powietrze', którego nigdy nie wygenerowano. Cicha warstwa szumu winylowego na całym utworze robi podwójną robotę: dodaje vintage'owego kleju i maskuje drobne artefakty. Realizatorzy używali tego triku na długo przed AI.",
                ],
                [
                  "Dwa pogłosy, nie jeden.",
                  "Eksporty AI po odarciu z artefaktów robią się dziwnie suche. Jeden krótki pogłos ambience dla ciała, jeden dłuższy ogon dla głębi — i nagle utwór oddycha jak produkcja, a nie render.",
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
              alt="Zmiksowany przebieg fali rozdzielający się na cztery stemy: wokal, perkusja, bas i instrumenty"
            />
            <ProTip>
              Te kroki prowadzą przyzwoitą generację jakieś 70% drogi.
              Pozostałe 30% — chirurgia transjentów, czyszczenie artefaktów,
              prawdziwe instrumenty — to praca ręczna. O tym, kiedy się opłaca,
              piszę niżej.
            </ProTip>
          </div>

          {/* ── 4 ── */}
          <div id="loudness-question" className="flex flex-col gap-5">
            <SectionHeader
              number="4"
              title="Kwestia głośności: -14 czy -7?"
            />
            <p>
              Tu internet się kłóci. Oficjalna dokumentacja Spotify mówi -14
              LUFS. Tymczasem wrzuć dowolny aktualny hit z list przebojów w
              miernik, a zobaczysz -7 do -9 LUFS. Kto ma rację?
            </p>
            <p>
              Irytujące, ale obaj. Spotify i tak ściszy master z -8 do -14 na
              odtwarzaniu — ale <em>gęstość przeżywa ściszenie</em>. Dobrze
              zrobiony głośny master odtwarzany na -14 wciąż brzmi bardziej
              masywnie niż nieśmiały master odtwarzany na -14. Haczyk tkwi w
              słowach 'dobrze zrobiony': jeśli osiągasz tę głośność, wbijając
              limiter w ostry, nieoczyszczony eksport AI, dostajesz utwór
              głośny <em>i</em> brzydki, który Spotify uprzejmie ścisza do
              cichego i brzydkiego.
            </p>
            <p>
              Moja osobista praktyka, bierz albo zostaw:{" "}
              <strong className="text-white">
                dociskam mastery do -7…-8 LUFS integrated
              </strong>{" "}
              — ale dopiero po wyczyszczeniu ostrości i zawsze z włączonym
              sufitem true peak. Oto prawdziwa sesja, mierniki nie kłamią:
            </p>
            <ArticleImage
              src={`${IMG}/studioone-master-plan-annotated.jpg`}
              alt="Sesja masteringowa w Studio One: -8.0 LUFS integrated, -7.1 short-term i peak -0.1 dB"
            />
            <p>
              A tu stopień limitera, który czyni to bezpiecznym — Maximizer w
              trybie IRC 4 Modern, sufit wyjścia -0,30 dB, z włączoną detekcją
              True Peak. Głośność wchodzi <em>na końcu</em>, po oczyszczeniu
              korekcją, nigdy zamiast niego:
            </p>
            <ArticleImage
              src={`${IMG}/ozone12-settings-annotated.jpg`}
              alt="Ustawienia Ozone 12 Maximizer: IRC 4 Modern, wyjście -0.30 dB, True Peak włączony"
            />
            <ProTip>
              Test, który kończy każdą kłótnię o głośność: wyrównaj poziom
              swojego mastera z komercyjną referencją i słuchaj. Jeśli twój
              utwór wygrywa tylko wtedy, gdy jest głośniejszy — nie jest
              lepszy. A jeśli im głośniej, tym brzmi gorzej — odpowiedzią nigdy
              nie jest 'więcej limitera'. Odpowiedzią jest czyszczenie.
            </ProTip>
          </div>

          <SunoCta lang="pl" />

          {/* ── 5 ── */}
          <div id="my-chain" className="flex flex-col gap-5">
            <SectionHeader number="5" title="Mój łańcuch od A do Z" />
            <div className="flex flex-col gap-4">
              {[
                [
                  "Najpierw korekcja chirurgiczna.",
                  "Wytnij błoto (200–400 Hz), okiełznaj rezonanse AI (2–4 kHz), zapanuj nad rejonem 100 Hz. Nic nie robi się głośniejsze, dopóki brzydkie miejsca nie znikną.",
                ],
                [
                  "Delikatna kompresja dla kleju.",
                  "1–2 dB redukcji, wolny atak, żeby ocalałe transjenty zachowały swój klik.",
                ],
                [
                  "Balans tonalny.",
                  "Lekki przebieg stabilizera mid/side: otwiera boki i uspokaja napompowaną średnicę, nie ruszając wokalu na środku.",
                ],
                [
                  "Maximizer na końcu.",
                  "IRC 4 Modern, wyjście -0,30 dB, True Peak włączony, dociskaj do celu, słuchając w trybie delta: w momencie, gdy utwór zaczyna się składać, odpuść.",
                ],
                [
                  "Test translacji.",
                  "Głośnik telefonu, tanie słuchawki, samochód. Słuchawki obnażają ostrość wokalu, telefon — średnicę, samochód — 100 Hz. Jeśli na wszystkich trzech ma to muzyczny sens, jedzie na serwery.",
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
            <SectionHeader number="6" title="Kiedy mastering już nie uratuje" />
            <p>
              Czas na szczerość. Mastering to obróbka gotowego pliku stereo —
              a część problemów Suno siedzi głębiej. Jeśli stopa nie ma
              transjentu, który można podbić, jeśli wokal jest metaliczny u
              samego rdzenia, jeśli hi-haty to czyste syczenie — żaden
              mastering nie naprawi generacji. To już terytorium{" "}
              <em>finishingu</em>: separacja stemów, czyszczenie artefaktów w
              każdym stemie osobno, wymiana słabych partii na prawdziwe
              instrumenty, a potem miks i mastering odbudowanego utworu. To
              różnica między polerowaniem auta a naprawą silnika.
            </p>
            <p>
              Jeśli chcesz najpierw zejść głębiej w samą generację, napisałem
              pełny{" "}
              <a
                href="/pl/blog/suno-guide-2026"
                className="underline hover:text-white transition"
              >
                poradnik Suno
              </a>{" "}
              oraz{" "}
              <a
                href="/blog/suno-studio-guide-2026"
                className="underline hover:text-white transition"
              >
                poradnik Suno Studio
              </a>{" "}
              — lepszy materiał źródłowy ułatwia każdy z powyższych kroków.
            </p>
          </div>

          {/* ── 7 ── */}
          <div id="checklist" className="flex flex-col gap-5">
            <SectionHeader number="7" title="Checklista przed wrzuceniem" />
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
              Wolisz przeskoczyć od razu do gotowej wersji?
            </h3>
            <p className="text-white/65 text-base max-w-md">
              Rozbieram utwory z Suno na części i kończę je ręcznie — stemy,
              czyszczenie artefaktów, żywe instrumenty, master. Darmowa
              przetworzona zapowiedź, zanim cokolwiek zapłacisz.
            </p>
            <a
              href="/pl/suno-track-finishing"
              className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
              style={{ backgroundColor: "#C9A84C" }}
            >
              Suno Track Finishing →
            </a>
          </div>

          <SunoCta lang="pl" />

          <RelatedPosts slug="master-suno-track-for-spotify" lang="pl" />
        </div>
      </div>
    </div>
  );
}
