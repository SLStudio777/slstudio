import RelatedPosts from "@/app/components/blog/RelatedPosts";
import SunoCta from "@/app/components/blog/SunoCta";
import BlogHeader from "@/app/components/blog/BlogHeader";
import GmivBuilder from "@/app/components/blog/GmivBuilder";
import CheatsheetCopy from "@/app/components/blog/CheatsheetCopy";
import ReadingProgress from "@/app/components/blog/ReadingProgress";

export const metadata = {
  title: "Jak używać Suno Studio w 2026: Timeline, Extend i eksport stemów",
  alternates: {
    canonical: "https://www.slstudio.pro/pl/blog/suno-studio-guide-2026",
    languages: {
      pl: "https://www.slstudio.pro/pl/blog/suno-studio-guide-2026",
      en: "https://www.slstudio.pro/blog/suno-studio-guide-2026",
      ru: "https://www.slstudio.pro/blog/suno-studio-guide-2026-ru",
      "x-default": "https://www.slstudio.pro/blog/suno-studio-guide-2026",
    },
  },
  description:
    "Krok po kroku o Suno Studio — kontroluj timeline, rozszerzaj utwory w dokładnym miejscu, naprawiaj słabe sekcje przez Cover & Replace i eksportuj czyste stemy WAV do miksu.",
  openGraph: {
    title: "Jak używać Suno Studio w 2026: Timeline, Extend i eksport stemów",
    description:
      "Krok po kroku o Suno Studio — kontroluj timeline, rozszerzaj utwory w dokładnym miejscu, naprawiaj słabe sekcje przez Cover & Replace i eksportuj czyste stemy WAV do miksu.",
    type: "article",
    url: "https://www.slstudio.pro/pl/blog/suno-studio-guide-2026",
    siteName: "SL Studio",
    locale: "pl_PL",
    images: ["/images/blog-suno-studio-cover-pl.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak używać Suno Studio w 2026: Timeline, Extend i eksport stemów",
    description:
      "Krok po kroku o Suno Studio — kontroluj timeline, rozszerzaj utwory w dokładnym miejscu, naprawiaj słabe sekcje przez Cover & Replace i eksportuj czyste stemy WAV do miksu.",
  },
  keywords: [
    "suno studio tutorial 2026",
    "jak używać suno studio",
    "suno extend timestamp",
    "suno formuła gmiv",
    "suno eksport stemów",
  ],
  other: { "article:published_time": "2026-07-07" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jak używać Suno Studio w 2026: Timeline, Extend i eksport stemów",
  description:
    "Krok po kroku o Suno Studio — kontroluj timeline, rozszerzaj utwory, naprawiaj sekcje i eksportuj stemy WAV.",
  image: "https://www.slstudio.pro/images/blog-suno-studio-cover-pl.webp",
  author: { "@type": "Person", name: "SL Studio" },
  publisher: {
    "@type": "Organization",
    name: "SL Studio",
    logo: { "@type": "ImageObject", url: "https://www.slstudio.pro/logo.png" },
  },
  datePublished: "2026-07-02",
  inLanguage: "pl",
  url: "https://www.slstudio.pro/pl/blog/suno-studio-guide-2026",
};

function ProTip({ children }) {
  return (
    <div className="rounded-xl p-5 flex gap-3 items-start"
      style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
      <span className="text-base flex-shrink-0 font-bold" style={{ color: "#C9A84C" }}>★</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#C9A84C" }}>Pro Tip</p>
        <p className="text-white/70 text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

const TOC = [
  { id: "what-is-studio", label: "Czym jest Suno Studio — i czym NIE jest" },
  { id: "timeline", label: "Timeline — twój główny instrument" },
  { id: "extend", label: "Extend — przycisk, który zamienia pomysł w utwór" },
  { id: "extend-tags", label: "Angielskie tagi dla Extend" },
  { id: "gmiv", label: "Formuła G.M.I.V. — prompty jak pro" },
  { id: "cover-replace", label: "Cover & Replace — chirurgiczne naprawy" },
  { id: "mixer", label: "Mixer — tryb roboczy, nie linia wykończeniowa" },
  { id: "export", label: "Eksport — ostatni krok z twardymi zasadami" },
];

function TableOfContents() {
  return (
    <div className="rounded-2xl p-6"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <p className="text-white font-semibold text-base mb-4">Spis treści</p>
      <ol className="flex flex-col gap-2">
        {TOC.map((item, i) => (
          <li key={item.id} className="flex items-baseline gap-2.5">
            <span className="text-xs flex-shrink-0 w-5 text-right" style={{ color: "rgba(201,168,76,0.5)" }}>
              {String(i + 1).padStart(2, "0")}.
            </span>
            <a href={`#${item.id}`} className="text-sm text-white/50 hover:text-white transition leading-snug">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function SunoStudioGuidePlPage() {
  return (
    <div id="top" className="mt-16 mb-20">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <BlogHeader
          topic="Poradniki"
          date="7 lipca 2026"
          title="Suno AI Część 2: Suno Studio — Kompletny poradnik dla muzyków"
          description="Część pierwsza dotyczyła generowania lepszego materiału. Ta dotyczy tego, co dzieje się później. Suno Studio siedzi między Generate a twoim DAW — miejsce, gdzie dobry pomysł przestaje być losowy i zaczyna być użyteczny."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Intro */}
          <div className="rounded-2xl p-6 flex gap-4 items-start"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <span className="text-2xl flex-shrink-0">🋋️</span>
            <div>
              <p className="text-white font-semibold mb-2">Dla kogo jest ten poradnik</p>
              <p className="text-white/65 text-base leading-relaxed">
                Dla każdego, kto zrobił kilka utworów w Suno i zrozumiał, że prawdziwy problem
                to nie inspiracja — to kontrola.{" "}
                <strong className="text-white">To da się naprawić.</strong>
              </p>
            </div>
          </div>

          {/* Link to Part 1 */}
          <div className="rounded-xl p-4 flex gap-3 items-center"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <span className="text-lg flex-shrink-0">📖</span>
            <p className="text-white/65 text-base">
              Nie czytałeś jeszcze Części 1? Zacznij od{" "}
              <a href="/pl/blog/suno-guide-2026" style={{ color: "#C9A84C", textDecoration: "underline" }}>
                Suno AI: Kompletny poradnik — gatunki, tagi i prompty 2026
              </a>.
            </p>
          </div>

          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          {/* Three stages */}
          <div className="rounded-2xl p-8 flex flex-col gap-3 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.6)" }}>
              Trzy etapy kuchni
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
              {[
                { step: "Generate", desc: "szkicuj pomysł" },
                { step: "Studio", desc: "strukturyzuj i rozwijaj" },
                { step: "DAW", desc: "finalny miks i master" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-white font-semibold text-base">{item.step}</span>
                    <span className="text-white/50 text-sm">{item.desc}</span>
                  </div>
                  {i < 2 && <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>}
                </div>
              ))}
            </div>
            <p className="text-white/65 text-base mt-2 max-w-md mx-auto">
              Studio to środkowy etap: gdzie pomysły nabierają struktury przed właściwym wykończeniem w DAW.
            </p>
          </div>

          {/* Chapter 1 */}
          <div id="what-is-studio" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>01</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Czym jest Suno Studio — i czym NIE jest
              </h2>
            </div>
            <p>
              Suno Studio to nie Generate z większym paskiem narzędzi i nie DAW w przeświadczeniu.
              To etap między pobraniem surowego materiału a otwarciem prawdziwego edytora.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-1-pl.webp"
                alt="Studio obsługuje jedno zadanie: organizowanie i rozwijanie twojego pomysłu"
                className="w-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "✏️", step: "Generate", desc: "Tworzy surowy materiał. Szkic ołówkiem na serwetce. Pomysł, który musi jeszcze stać się czymś." },
                { icon: "🎬", step: "Studio", desc: "Organizacja i rozwój. Stół reżysera — widzisz strukturę i podejmujesz realne decyzje." },
                { icon: "🋋️", step: "DAW", desc: "Linia mety: miks, master, szlif. Finalny rękopis po redakcji." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 flex flex-col gap-2"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-white font-semibold text-base">{item.step}</p>
                  <p className="text-white/65 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              Bez Studio generowanie pozostaje stosem szczęśliwych i nieudanych prób.
              Z nim możesz zatrzymać się na użytecznych momentach, celowo rozszerzać
              i przynieść do DAW coś ustrukturyzowanego zamiast kolejnego losowego szkicu.
            </p>
          </div>

          <SunoCta lang="pl" />

          {/* Chapter 2 */}
          <div id="timeline" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>02</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Timeline — twój główny instrument</h2>
            </div>
            <p>W sercu Suno Studio leży timeline. Tu utwór przestaje być jednym blokiem i zaczyna ujawniać strukturę.</p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-2-pl.webp"
                alt="Timeline to twój główny instrument kontroli w Suno Studio"
                className="w-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 flex flex-col gap-2"
                style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <p className="text-white font-semibold text-base">🔭 Widok szeroki</p>
                <p className="text-white/65 text-base leading-relaxed">
                  Widzisz pełny kształt utworu. Czy pomysł w ogóle działa?
                </p>
              </div>
              <div className="rounded-xl p-5 flex flex-col gap-2"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-white font-semibold text-base">🔬 Widok bliski</p>
                <p className="text-white/65 text-base leading-relaxed">
                  Badasz przejścia, pauzy, punkty edycji. Gdzie dokładnie ustawić timestamp Extend?
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div id="extend" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>03</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Extend — przycisk, który zamienia pomysł w utwór
              </h2>
            </div>
            <p>Jeśli Create daje ci pomysł, Extend zamienia go w pełny utwór. To najpotężniejsze narzędzie w Studio.</p>
            <div className="rounded-xl p-5 flex flex-col gap-3"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-white font-semibold text-base">Co model słyszy, gdy naciskasz Extend</p>
              <p className="text-white/65 text-base italic leading-relaxed">
                "Posłuchaj ostatnich kilku sekund tej sekcji, zrozum kontekst i zdecyduj, co powinno
                nastąpić. Zachowaj klucz i BPM."
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-3-pl.webp"
                alt="Extend czyta kontekst — timestamp to wszystko"
                className="w-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-white">Jedna zasada: timestamp</h3>
            <p>
              Najczęstszy błąd początkujących to naciskanie Extend gdziekolwiek.
              Wynik: utwór się sypie — głos się zmienia, rytm się urywa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-white font-semibold text-base">🚫 Czego nie robić</p>
                <ul className="flex flex-col gap-2 text-white/65 text-base">
                  <li>→ Cięcie w środku słowa — model zacznie halucynować</li>
                  <li>→ Losowy punkt bez czytania przebiegu dźwięku</li>
                  <li>→ Extend bez aktualizacji pola Lyrics</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-white font-semibold text-base">✅ Zamiast tego</p>
                <ul className="flex flex-col gap-2 text-white/65 text-base">
                  <li>→ Koniec taktu</li>
                  <li>→ Wygasnięcie poglosu</li>
                  <li>→ Pauza po chorusie</li>
                </ul>
              </div>
            </div>
            <ProTip>
              Patrz na przebieg dźwięku na timeline i szukaj wizualnych zagłębień głośności —
              to twoje idealne punkty cięcia. Gdzie jest cicho, tam tnij.
            </ProTip>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-4-pl.webp"
                alt="Studio to system bloków: nie podoba się Część 2? Usuń i wygeneruj ponownie"
                className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <p className="text-white font-semibold mb-2">Zasada bloku</p>
              <p className="text-white/70 text-base leading-relaxed">
                Jeśli Część 2 nie działa — nie próbuj jej naprawiać kolejnym Extend.
                Usuń ją i wygeneruj ponownie od końca Części 1.
              </p>
            </div>
          </div>

          {/* Chapter 4 */}
          <div id="extend-tags" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>04</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Angielskie tagi dla Extend: sterowanie kierunkiem
              </h2>
            </div>
            <p>
              Gdy uruchamiasz Extend, pole Style to miejsce, gdzie sterujesz utworem zamiast
              liczyć, że Suno odgadnie twoje myśli.
            </p>
            <CheatsheetCopy
              title="Tagi kontroli dynamiki"
              variant="table"
              items={[
                ["Build up", "Rosnące napięcie przed dropem"],
                ["Explosive Drop", "Duże, mocne wypuśzczenie — elektronika, rock"],
                ["Stripped back", "Wycofaj instrumenty, odsłoń szkielet"],
                ["Full band kicks in", "Cały zespół wchodzi po cichym intro"],
              ]}
            />
            <h3 className="text-lg font-semibold text-white">Jak skończyć utwór czysto</h3>
            <p>
              Suno uwielbia urywać piosenki w połowie myśli. Aby uzyskać właściwe zakończenie:
              ustaw timestamp Extend na ostatnie sekundy i wrzuc jeden z tych tagów do Style:
            </p>
            <CheatsheetCopy
              title="Tagi zakończenia"
              variant="table"
              items={[
                ["Outro", "Standardowa sekcja końcową"],
                ["Fade out", "Stopniowe wyciszenie"],
                ["Grand Finale", "Duże, głośne, kinematyczne zakończenie"],
                ["End on a single note", "Jeden finalny akord i koniec"],
              ]}
            />
          </div>

          {/* Chapter 5 */}
          <div id="gmiv" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>05</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Formuła G.M.I.V. — prompty jak pro
              </h2>
            </div>
            <p>
              Jedna zasada przed formułą:{" "}
              <strong className="text-white">
                Suno nie interpretuje twoich uczuć — pracuje z tagami.
              </strong>{" "}
              Jeśli piszesz jak poeta, dostajesz losowość. Jeśli piszesz jak specyfikacja techniczna,
              wyniki stają się o wiele bardziej przewidywalne.
            </p>
            <div className="rounded-xl p-4 flex gap-3 items-start"
              style={{ background: "rgba(255,100,80,0.05)", border: "1px solid rgba(255,100,80,0.15)" }}>
              <span className="text-lg flex-shrink-0">🚨</span>
              <p className="text-white/65 text-base leading-relaxed">
                <strong className="text-white">Twarda zasada:</strong> pisz prompty po angielsku.
                Nawet jeśli utwór jest w innym języku, pole Style of Music musi być po angielsku.
                "Sad violin" — Suno mniej więcej rozumie.{" "}
                <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>Melancholic Violin Solo</span>{" "}
                — rozumie precyzyjnie.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-5-pl.webp"
                alt="Suno pracuje z tagami: sad violin to loteria, melancholic violin solo to cel"
                className="w-full object-cover" />
            </div>
            <div className="rounded-2xl p-6 flex flex-col gap-5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-white font-semibold">Formuła G.M.I.V. — cztery składniki</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>G — Genre (Gatunek)</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Nie pisz po prostu Rock czy Pop. Użyj podgatunków — zawężają przestrzeń
                    poszukiwań i dają spójne wyniki.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/5">
                  <img loading="lazy" decoding="async" src="/images/suno-studio-6-pl.webp"
                    alt="Podgatunki — im bardziej szczegółowy gatunek, tym stabilniejszy wynik"
                    className="w-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>M — Mood (Nastrój)</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Początkujący opisują jak się czują zamiast używać muzycznych deskryptorów.
                    Model nie potrzebuje wiedzieć co czujesz — potrzebuje atmosfery w terminach technicznych.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>I — Instruments (Instrumenty)</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Wymień dokładnie co ma grać. To nadaje utworowi substancję.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Distorted 808 Bass","Plucky Synth","Acoustic Guitar Fingerstyle","Heavy Drums"].map((item,i) => (
                      <div key={i} className="rounded-lg px-3 py-2 font-mono text-sm"
                        style={{ background: "rgba(201,168,76,0.06)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)" }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>V — Vocals (Wokal)</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Zostaw bez opisu — Suno wybiera losowo. Przejdź kontrolę:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Female Whisper","Male Gritty Vocals","Choir Stacks","Autotune Vocals"].map((item,i) => (
                      <div key={i} className="rounded-lg px-3 py-2 font-mono text-sm"
                        style={{ background: "rgba(201,168,76,0.06)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)" }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <GmivBuilder />
            <ProTip>
              Suno lepiej reaguje na tagi oddzielone przecinkami niż na pełne zdania.
              Źle: "Zrób piosenkę, która brzmi jakby padało na zewnątrz."
              Dobrze:{" "}
              <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>Rainy atmosphere, Lo-Fi</span>.
              Krótko, jasno, precyzyjnie.
            </ProTip>
          </div>

          {/* Chapter 6 */}
          <div id="cover-replace" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>06</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Cover & Replace — chirurgiczne naprawy bez bólu
              </h2>
            </div>
            <p>
              Świetny utwór, ale wokalista połknął słowo w połowie lub perkusja się posunęła.
              Dawna odpowiedź: generuj wszystko od nowa. W Studio naprawiasz precyzyjnie.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-7-pl.webp"
                alt="Cover i Replace — dwa różne narzędzia do dwóch różnych problemów"
                className="w-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">🎨</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Cover — Wariacja</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Użyj gdy{" "}
                    <strong className="text-white">lubisz melodię, ale nie brzmięnie</strong>.
                    Na przykład: melodia chorusa jest idealna, ale grana na fortepianie,
                    a chcesz gitaru. Wybierz sekcję, kliknij Cover, zamień instrument w prompcie.
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">🔧</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Replace — Podmiana z kontekstem</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Najpotężniejsze narzędzie w Studio. Użyj gdy{" "}
                    <strong className="text-white">sama fraza muzyczna jest błędna lub jest faktyczny error</strong>.
                    Jak działa: Suno nie słucha co jest wewnątrz zaznaczenia. Słucha co jest
                    <strong className="text-white"> przed</strong> i co{" "}
                    <strong className="text-white">po</strong> — i generuje most łączący oba kawałki.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-8-pl.webp"
                alt="Napraw tylko błąd — nie cały utwór"
                className="w-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-white">Solo Hack: usuń wokal i wstaw instrumental</h3>
            <p>Czasta sytuacja: chcesz solo gitarowe po chorusie, ale Suno uparcie śpiewa kolejne zwrotki.</p>
            <div className="flex flex-col gap-3">
              {[
                "Zaznacz sekcję wokalną, którą chcesz usunąć",
                "Kliknij Replace",
                "W polu Lyrics: [Instrumental Solo] lub [Guitar Lick]",
                "W polu Style: Virtuoso Electric Guitar Solo",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>{i+1}</div>
                  <p className="text-white/65 text-base">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-9-pl.webp"
                alt="Solo Hack — usuń wokal i wstaw solo w trzech krokach"
                className="w-full object-cover" />
            </div>
          </div>

          {/* Chapter 7 */}
          <div id="mixer" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>07</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Mixer w Studio — tryb roboczy, nie linia wykończeniowa
              </h2>
            </div>
            <p>
              Dużo osób widzi faders w Studio i myśli: „nareszcie, zmikssuję tu utwór".
              Wbudowany mixer to narzędzie do sprawdzania pomysłu, nie do uzyskania finalnej jakości.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-10-pl.webp"
                alt="Środek kanału jest dla wokalu i basu. Szerokość pochodzi z oczyszczenia centrum"
                className="w-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">🔊</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Złota zasada głośności</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Czujesz, że instrumenty są za cicho pod wokalem?{" "}
                    <strong className="text-white">Nie głośniej ich.</strong>{" "}
                    Zrób odwrotnie — ściśznij wokal. W miksie zawsze lepiej cofnąć
                    najgłośniejszą rzecz niż próbować z nią konkurować.
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                <span className="text-xl flex-shrink-0">↔️</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">Pan: zwolnij centrum</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Środek pola stereo to{" "}
                    <strong className="text-white">swiaszczone miejsce dla wokalu i basu</strong>.
                    Zostaw je w spokoju. Wszystko inne — gitary, syntezatory, chórki — przesuń na boki.
                  </p>
                </div>
              </div>
            </div>
            <ProTip>
              Mixer Studio to orientacja, nie linia mety. Jeśli coś tu brzmi źle — potraktuj to
              jako sygnał do rewizji struktury, nie powód do godziny spędzonej na fadersach.
              Finalny dźwięk rodzi się w{" "}
              <a href="/pl/mixing-mastering" style={{ color: "#C9A84C", textDecoration: "underline" }}>
                profesjonalnym miksie
              </a>.
            </ProTip>
          </div>

          {/* Chapter 8 */}
          <div id="export" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>08</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Eksport — ostatni krok z twardymi zasadami
              </h2>
            </div>
            <p>Ostatni krok jest prosty, ale ma kilka zasad bezpośrednio wpływających na jakość.</p>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img loading="lazy" decoding="async" src="/images/suno-studio-11-pl.webp"
                alt="Full Song to upieczony tort. Czyste stemy oznaczają czysty wynik."
                className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-5 flex flex-col gap-3"
              style={{ background: "rgba(255,80,80,0.06)", border: "1px solid rgba(255,80,80,0.2)" }}>
              <p className="text-white font-semibold text-base">⚠️ Dlaczego nie możesz oddawać tylko Full Song</p>
              <p className="text-white/65 text-base leading-relaxed">
                Traktuj Full Song jak już upieczony tort. Inżynier miksu może próbować go
                „odpiecć” specjalnym oprogramowaniem — ale to dodatkowa praca, a jakość nieuchronnie
                spada. Po co akceptować wynik z artefaktami, gdy możesz dać czyste składniki?
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "📦",
                  title: "Eksportuj Multitrack (Stemy)",
                  desc: "W menu Export zawsze wybieraj Multitrack (Stems). Suno da ci archiwum z każdym instrumentem na osobnej ścieżce: Vocals, Drums, Bass, Instruments. Daj inżynierowi dwie rzeczy: Full Song (aby słyszał wizję) i Multitrack Stems (aby mógł pracować na częściach).",
                },
                {
                  icon: "🎵",
                  title: "Tylko WAV — zapomnij, że MP3 istnieje",
                  desc: "MP3 to skompresowany format dla roboczych szkiców i streamingu. W menu Audio wybierz tylko WAV. Suno już wbudowuje cyfrowy szum podczas generowania — kompresja MP3 go wzmocni.",
                },
                {
                  icon: "🥁",
                  title: "Zapisz BPM — przed zamknięciem przeglądarki",
                  desc: "Spójrz na BPM na dole ekranu i zapisz go. Gdy otwierasz DAW, ustaw najpierw dokładnie to tempo — potem importuj pliki. W ten sposób siatka rytmiczna będzie idealnie wyrównana.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 flex gap-4 items-start"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-base mb-2">{item.title}</p>
                    <p className="text-white/65 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Eksportowanie stemów ze Studio to czysta droga, bo części nigdy nie były razem upieczone.
              Gdy utwór jest gotowy i trzeba wyciągnąć instrumental z powrotem, to inna robota —
              odbudowywanie utworu Suno ze zregenerowanych stemów{" "}
              <a href="/blog/suno-advanced-split-clean-instrumental"
                style={{ color: "#C9A84C", textDecoration: "underline" }}>
                (EN)
              </a>{" "}
              przechodzi przez Advanced Split i DAW reassembly.
            </p>
          </div>

          {/* Final cheatsheet */}
          <CheatsheetCopy
            title="Szybkie podsumowanie — cały poradnik na jednej karcie"
            variant="table"
            items={[
              ["Zbuduj strukturę utworu", "Timeline"],
              ["Extend świadomie", "Extend + prawidłowy Timestamp"],
              ["Napisz prompt, który działa", "Formuła G.M.I.V."],
              ["Zmień dźwięk, zachowaj melodię", "Cover"],
              ["Napraw pojedynczy błąd chirurgicznie", "Replace"],
              ["Usuń wokal, wstaw solo instrumentalne", "Solo Hack"],
              ["Przygotuj pliki do DAW", "Stemy + WAV + BPM"],
            ]}
            footnote="Suno Studio nie tworzy muzyki za ciebie. Daje ci środowisko, w którym to ty podejmujesz decyzje. Im lepiej rozumiesz co jest tutaj kontrolowalne — tym bardziej przewidywalny wynik."
          />

          {/* Pre-export checklist */}
          <CheatsheetCopy
            title="Checklista przed eksportem"
            variant="checklist"
            items={[
              "Timestamp dla każdego Extend był ustawiony w czystym punkcie cięcia",
              "Wszystkie pola Lyrics zostały zaktualizowane — brak starego tekstu z poprzednich sekcji",
              "Pola Style były wypełnione po angielsku dla każdego Extend i Replace",
              "Sekcja końcowa ma tag Outro, Fade out lub Grand Finale",
              "BPM został gdzieś zapisany przed zamknięciem karty",
              "Eksportowane jako Multitrack Stems (nie tylko Full Song)",
              "Format audio ustawiony na WAV, nie MP3",
            ]}
          />

          {/* Final thought */}
          <div className="flex flex-col gap-1">
            <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="rounded-2xl p-8 flex flex-col gap-4 mt-4"
              style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <h3 className="text-xl font-semibold text-white">Nie jesteś już tylko użytkownikiem</h3>
              <p className="text-white/65 text-base leading-relaxed">
                Co siedzi teraz na twoim dysku to nie plik — to rozkładzony na części projekt.
                Nie jesteś już osobą, która klika Generate i się modli. Jesteś producentem
                z czystymi stemami gotowymi do poważnego miksu.
              </p>
              <p className="text-white font-semibold mt-2 text-lg">Idź i zrób coś.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <h3 className="text-xl font-semibold text-white">Nie wiesz czego potrzebuje twój utwór?</h3>
            <p className="text-white/65 text-base max-w-md">
              Wyślij go i posłuchaj bezpłatnego 60-sekundowego podglądu — uczciwa ocena i konkretna cena, bez zobowiązań.
            </p>
            <a href="/pl/free-track-preview"
              className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
              style={{ backgroundColor: "#C9A84C" }}>
              Uzyskaj bezpłatny podgląd →
            </a>
          </div>

          {/* Czytaj także */}
          <div className="rounded-xl p-5 flex flex-col gap-3"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-white font-semibold text-base">Czytaj także</p>
            <div className="flex flex-col gap-2">
              <a href="/pl/blog/suno-guide-2026" style={{ color: "#C9A84C", textDecoration: "underline" }}>
                Suno AI: Kompletny poradnik dla muzyków — gatunki, tagi i prompty 2026
              </a>
              <a href="/pl/blog/best-melodyne-alternatives-2026" style={{ color: "#C9A84C", textDecoration: "underline" }}>
                Najlepsze alternatywy dla Melodyne w 2026
              </a>
              <a href="/pl/blog/ai-mixing-mastering-review" style={{ color: "#C9A84C", textDecoration: "underline" }}>
                AI mixing i mastering: recenzja 2026
              </a>
            </div>
          </div>

          <SunoCta lang="pl" />

          <RelatedPosts slug="suno-studio-guide-2026" lang="pl" />
        </div>
      </div>
    </div>
  );
}
