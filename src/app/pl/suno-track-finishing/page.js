import Link from "next/link";
import Image from "next/image";
import LangSwitch from "../../components/common/LangSwitch";
import HeroWave from "../../components/common/HeroWave";
import StepFlareCard from "../../components/common/StepFlareCard";
import BeforeAfterSunoPl from "../../components/sections/BeforeAfterSunoPl";

const SITE = "https://www.slstudio.pro";

export const metadata = {
  title: "Suno Track Finishing — dopracuj utwór z AI do jakości wydawniczej",
  description:
    "Masz utwór z Suno? Rozdzielę go na stemy, usunę artefakty AI, dogram żywe instrumenty i zrobię mastering pod Spotify. Prawdziwy inżynier — od 39$.",
  alternates: {
    canonical: `${SITE}/pl/suno-track-finishing`,
    languages: {
      en: `${SITE}/suno-track-finishing`,
      pl: `${SITE}/pl/suno-track-finishing`,
      "x-default": `${SITE}/suno-track-finishing`,
    },
  },
  openGraph: {
    title: "Suno Track Finishing — z dema AI do utworu gotowego do wydania",
    description:
      "Rozdzielanie na stemy, czyszczenie artefaktów, żywe instrumenty i mastering pod streaming dla utworów z Suno. Od 39$.",
    url: `${SITE}/pl/suno-track-finishing`,
    siteName: "SL Studio",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE}/pl/suno-track-finishing#service`,
      name: "Suno Track Finishing",
      serviceType: "Postprodukcja muzyki AI, miks i mastering",
      description:
        "Profesjonalne dokończenie muzyki generowanej przez AI: rozdzielanie na stemy, czyszczenie artefaktów, żywe instrumenty, miks i mastering pod platformy streamingowe.",
      url: `${SITE}/pl/suno-track-finishing`,
      provider: { "@id": `${SITE}/#studio` },
      areaServed: "Worldwide",
      offers: [
        {
          "@type": "Offer",
          name: "Suno Master",
          price: "39",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Suno Finishing",
          price: "89",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Full Production",
          price: "149",
          priceCurrency: "USD",
        },
      ],
    },
  ],
};

const pains = [
  {
    icon: "🤖",
    title: "Metaliczny wokal i rozmyte talerze",
    text: "Klasyczne artefakty AI. Suno trafia z piosenką, ale góra pasma często brzmi syntetycznie — słuchacze słyszą to w pierwszych dziesięciu sekundach.",
  },
  {
    icon: "📉",
    title: "Przegrywa walkę o głośność",
    text: "Surowe eksporty z Suno są albo za ciche obok komercyjnych wydań, albo zgniecione przez normalizację Spotify. Tak czy inaczej — Twój utwór przegrywa.",
  },
  {
    icon: "🌫️",
    title: "Mętny dół",
    text: "Stopa i bas walczą o to samo miejsce, brak uderzenia i definicji — zwłaszcza na głośnikach telefonu i słuchawkach, gdzie większość ludzi usłyszy Twoją piosenkę.",
  },
  {
    icon: "🧱",
    title: "Jeden płaski plik stereo",
    text: "Brak stemów to brak kontroli. Nie podgłośnisz wokalu, nie naprawisz perkusji, nie podmienisz partii — dopóki ktoś porządnie nie rozdzieli i nie odbuduje utworu.",
  },
];

const included = [
  "Rozdzielenie na stemy — wokal, perkusja, bas i instrumenty osobno, pełna kontrola",
  "Czyszczenie artefaktów — okiełznanie metalicznej góry, przywrócenie talerzy i powietrza",
  "Żywe instrumenty — prawdziwe gitary i bas dogrywane tam, gdzie AI nie daje rady",
  "Obróbka wokalu — strojenie, de-essing, obecność, profesjonalny pogłos i delay",
  "Poprawki aranżacji — porządne intra, przejścia i zakończenia",
  "Master gotowy na streaming — konkurencyjna głośność na Spotify, Apple Music, YouTube",
];

const packages = [
  {
    name: "Suno Master",
    price: "$39",
    popular: false,
    tagline: "Twój gotowy utwór z Suno — dopieszczony i głośny",
    features: [
      "Mastering Twojego pliku stereo",
      "Łagodzenie artefaktów na masterze",
      "Konkurencyjna głośność na wszystkich platformach",
      "Pliki WAV + MP3",
      "2–3 dni robocze",
    ],
    cta: "/pl/kontakt?service=suno-master",
  },
  {
    name: "Suno Finishing",
    price: "$89",
    popular: true,
    tagline: "Stemy, czyszczenie, pełny miks i master",
    features: [
      "Pełne rozdzielenie na stemy",
      "Czyszczenie artefaktów na każdym stemie",
      "Kompletny miks od nowa ze stemów",
      "Master gotowy na streaming",
      "Poprawki w cenie",
      "3–5 dni roboczych",
    ],
    cta: "/pl/kontakt?service=suno-finishing",
  },
  {
    name: "Full Production",
    price: "$149",
    popular: false,
    tagline: "Wchodzi demo z AI, wychodzi ludzkie nagranie",
    features: [
      "Wszystko z pakietu Suno Finishing",
      "Żywe gitary i bas dograne na nowo",
      "Strojenie wokalu i partie zastępcze",
      "Rozbudowa aranżacji",
      "Poprawki w cenie",
      "5–7 dni roboczych",
    ],
    cta: "/pl/kontakt?service=suno-production",
  },
];

const steps = [
  {
    num: "01",
    title: "Wyślij utwór",
    text: "Wystarczy MP3 z Suno — stemy to bonus, nie wymóg.",
  },
  {
    num: "02",
    title: "Darmowy fragment",
    text: "Odsyłam krótką przetworzoną próbkę i dokładną wycenę. Słyszysz kierunek, zanim cokolwiek zapłacisz.",
  },
  {
    num: "03",
    title: "Praca",
    text: "Stemy, czyszczenie, żywe partie, miks, master — z informacjami o postępach na bieżąco. Żadnej czarnej skrzynki.",
  },
  {
    num: "04",
    title: "Pliki gotowe do wydania",
    text: "WAV + MP3, głośno i czysto na każdej platformie. Poprawki, aż będziesz w pełni zadowolony.",
  },
];

const faq = [
  {
    q: "Naprawdę wystarczy samo MP3?",
    a: "Tak. Używam profesjonalnego rozdzielania na stemy, żeby podzielić Twój utwór na wokal, perkusję, bas i instrumenty, a potem czyszczę i odbudowuję każdą partię. Jeśli masz stemy z Suno albo plik WAV — jeszcze lepiej, ale MP3 to działający punkt wyjścia.",
  },
  {
    q: "Czy to nadal będzie brzmiało jak mój utwór?",
    a: "O to właśnie chodzi. Nie podmieniam Twojej piosenki — kończę ją. Melodia, głos i klimat zostają Twoje. Zmienia się czystość, uderzenie, głośność i detale, które odróżniają demo od wydania.",
  },
  {
    q: "Czy mogę komercyjnie wydawać utwory z Suno?",
    a: "Jeśli wygenerowano utwór na płatnym planie Suno, warunki Suno pozwalają na użytek komercyjny. Ja pracuję nad samym audio — kwestia praw zostaje między Tobą a Suno i na płatnych planach jest prosta.",
  },
  {
    q: "Czy ktoś się dowie, że utwór powstał z AI?",
    a: "Ode mnie nie. Twoje pliki trafiają do prywatnej przestrzeni, nigdy nie są publikowane, a przykładów „przed i po” ani wpisów portfolio z Twoim utworem nie publikuję bez Twojej wyraźnej zgody. To, czy powiesz słuchaczom, że piosenka zaczęła się w Suno, zależy wyłącznie od Ciebie — gotowe pliki tego nie zdradzają.",
  },
  {
    q: "Czy gotowy utwór przejdzie moderację DistroKid albo Spotify?",
    a: "Dokończenie mocno zwiększa szanse — większość utworów z AI odrzucanych jest za wyraźnie sztuczne, pełne artefaktów brzmienie, a właśnie to tutaj znika. Nie będę jednak udawał, że ktokolwiek może zagwarantować moderację: dystrybutorzy ustalają własne zasady, przepisy dotyczące muzyki tworzonej z AI wciąż się zmieniają, a ostateczna decyzja zawsze należy do nich. Mogę obiecać tylko tyle: Twój utwór nie zostanie odrzucony za to, że brzmi tanio.",
  },
  {
    q: "Do jakiej głośności robisz mastering?",
    a: "Masteruję pod to, jak utwór faktycznie zachowuje się na Spotify, Apple Music i YouTube po ich normalizacji — a nie pod magiczną liczbę LUFS. Konkurencyjna głośność bez zgniatania życia z miksu.",
  },
  {
    q: "A jeśli mój utwór potrzebuje mniej pracy, niż myślę?",
    a: "To Ci to powiem. Po darmowym fragmencie dostajesz uczciwy zakres prac: czasem master za 39$ to naprawdę wszystko, czego utwór potrzebuje. Nigdy nie płacisz za pracę, której Twoja piosenka nie potrzebuje.",
  },
];

export default function SunoTrackFinishingPagePL() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="container pt-16 pb-12">
        <div className="mb-8">
          <LangSwitch
            active="pl"
            enHref="/suno-track-finishing"
            plHref="/pl/suno-track-finishing"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center md:items-stretch">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#C9A84C" }}
            >
              Suno Track Finishing
            </p>
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-wide leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Od Suno do <span className="text-[#f5b942]">wydania</span>
            </h1>
            <div className="max-w-xl mb-6">
              <HeroWave />
            </div>
            <p className="text-white/65 text-lg leading-relaxed mb-4">
              Suno robi 90% roboty — a brakujące 10% słychać od razu. Metaliczny
              wokal, rozmyte talerze, słaby dół, głośność, która nie przeżywa
              Spotify. Rozbieram Twój utwór AI na części, naprawiam to, czego AI
              nie umiało, i oddaję master, który stoi obok komercyjnych wydań.
            </p>
            <p className="text-white/45 text-sm mb-8">
              Swoją drogą — to ja napisałem{" "}
              <Link
                href="/pl/blog/suno-guide-2026"
                className="underline hover:text-white/70 transition"
              >
                przewodnik po Suno
              </Link>{" "}
              i{" "}
              <Link
                href="/pl/blog/suno-studio-guide-2026"
                className="underline hover:text-white/70 transition"
              >
                przewodnik po Suno Studio
              </Link>{" "}
              na tej stronie. Ta nisza to moje podwórko.
            </p>
            <Link
              href="/pl/darmowy-fragment"
              className="btn-gold inline-block px-8 py-3 rounded-lg font-semibold"
              style={{
                background:
                  "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
                backgroundSize: "200% auto",
                color: "#161616",
                boxShadow: "0 0 24px rgba(201,168,76,0.25)",
              }}
            >
              Darmowy fragment →
            </Link>
          </div>

          <div className="md:relative md:h-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 md:h-full">
              <Image
                src="/images/suno-live-guitars.webp"
                alt="Serhii Lazariev z gitarą Gibson Les Paul i wzmacniaczem Marshall — prawdziwe gitary w utworach AI"
                width={1600}
                height={1015}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover md:object-center"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,20,20,0.55), rgba(20,20,20,0) 40%), linear-gradient(to right, rgba(20,20,20,0.35), rgba(20,20,20,0) 30%)",
                }}
              />
            </div>
            <p className="mt-3 text-center text-xs uppercase tracking-widest text-white/35 md:absolute md:top-full md:left-0 md:right-0">
              Utwór z Suno → Prawdziwe gitary → Ludzki miks i master
            </p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
          Dlaczego surowe utwory z Suno nie są traktowane poważnie
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4">
          Co naprawdę znaczy „dokończenie”
        </h2>
        <p className="text-white/55 mb-8 max-w-2xl">
          To nie algorytm. To muzyk i inżynier pracujący nad Twoją piosenką
          ręcznie — tym samym procesem, którego używam przy każdym nagraniu
          ludzkim w studiu.
        </p>
        <ul className="space-y-3 max-w-3xl">
          {included.map((item) => (
            <li key={item} className="flex gap-3 text-white/65 leading-relaxed">
              <span style={{ color: "#C9A84C" }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <BeforeAfterSunoPl />

      {/* Packages */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4">
          Proste, przejrzyste ceny
        </h2>
        <p className="text-white/55 mb-8 max-w-2xl">
          Dokładna cena po darmowym fragmencie. 50% z góry, reszta po akceptacji
          efektu.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {packages.map((p, i) => (
            <StepFlareCard
              key={p.name}
              delay={i * 120}
              className="rounded-2xl border p-6 flex flex-col h-full"
              style={
                p.popular
                  ? {
                      borderColor: "rgba(201,168,76,0.4)",
                      background: "rgba(201,168,76,0.05)",
                    }
                  : {
                      borderColor: "rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.03)",
                    }
              }
            >
              {p.popular && (
                <span
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#C9A84C" }}
                >
                  Najczęściej wybierany
                </span>
              )}
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <div
                className="step-number price-number text-3xl font-semibold mb-2"
                style={{ color: "#C9A84C" }}
              >
                {p.price}
              </div>
              <p className="text-white/50 text-sm mb-5">{p.tagline}</p>
              <ul className="space-y-2 text-sm text-white/60 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span style={{ color: "#C9A84C" }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={p.cta}
                className="text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition hover:opacity-90"
                style={
                  p.popular
                    ? {
                        background:
                          "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
                        color: "#161616",
                      }
                    : {
                        border: "1px solid rgba(201,168,76,0.4)",
                        color: "#C9A84C",
                      }
                }
              >
                Zaczynamy
              </Link>
            </StepFlareCard>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
          Jak to działa
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <StepFlareCard
              key={s.num}
              delay={i * 120}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-full"
            >
              <span className="step-number block text-right text-3xl font-bold text-[#C9A84C]/30 mb-3">
                {s.num}
              </span>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.text}</p>
            </StepFlareCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
          Pytania, które naprawdę padają
        </h2>
        <div className="space-y-4 max-w-3xl">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4">
            Usłysz swój utwór ukończony — zanim zapłacisz
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Wyślij MP3 z Suno i otrzymaj darmową przetworzoną próbkę z dokładną
            wyceną. Jeśli nie usłyszysz różnicy — po prostu odejdź, bez urazy.
          </p>
          <Link
            href="/pl/darmowy-fragment"
            className="btn-gold inline-block px-8 py-3 rounded-lg font-semibold"
            style={{
              background:
                "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
              backgroundSize: "200% auto",
              color: "#161616",
              boxShadow: "0 0 24px rgba(201,168,76,0.25)",
            }}
          >
            Darmowy fragment →
          </Link>
        </div>
      </section>
    </>
  );
}
