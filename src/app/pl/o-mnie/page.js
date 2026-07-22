import Link from "next/link";
import LangSwitch from "../../components/common/LangSwitch";
import HeroWave from "../../components/common/HeroWave";
import HeroStats from "../../components/common/HeroStats";
import ScrollReveal from "../../components/common/ScrollReveal";

const SITE = "https://www.slstudio.pro";

export const metadata = {
  title: "O mnie — Serhii Lazariev, inżynier miksu i masteringu w Warszawie",
  description:
    "Gitarzysta, wokalista i producent. Ponad 30 lat w muzyce, ponad 10 lat za konsoletą, 300+ zmiksowanych i zmasterowanych utworów. Człowiek stojący za SL Studio w Warszawie.",
  alternates: {
    canonical: `${SITE}/pl/o-mnie`,
    languages: {
      en: `${SITE}/about`,
      pl: `${SITE}/pl/o-mnie`,
      "x-default": `${SITE}/about`,
    },
  },
  openGraph: {
    title: "O mnie — Serhii Lazariev, człowiek stojący za SL Studio",
    description:
      "Ponad 30 lat w muzyce, ponad 10 lat za konsoletą, 300+ zmiksowanych utworów. Warszawa.",
    url: `${SITE}/pl/o-mnie`,
    siteName: "SL Studio",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/about#person`,
      name: "Serhii Lazariev",
      jobTitle: "Inżynier miksu i masteringu",
      description:
        "Gitarzysta, wokalista i producent muzyczny. Ponad 30 lat w muzyce, ponad 10 lat za konsoletą, 300+ zmiksowanych utworów. SL Studio, Warszawa.",
      url: `${SITE}/pl/o-mnie`,
      image: `${SITE}/images/serhii-lazariev-home-studio.webp`,
      worksFor: { "@id": `${SITE}/#studio` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warszawa",
        addressCountry: "PL",
      },
      sameAs: [
        "https://www.youtube.com/@SLStudio_Guitar",
        "https://www.instagram.com/lazarev_serhii_sl",
        "https://www.facebook.com/profile.php?id=100044130441850",
        "https://t.me/serhii_lazariev",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#studio`,
      name: "SL Studio",
      url: SITE,
      founder: { "@id": `${SITE}/about#person` },
      description:
        "Studio miksu, masteringu, aranżacji i produkcji online. Zdalnie, na cały świat.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warszawa",
        addressCountry: "PL",
      },
      areaServed: "Worldwide",
      priceRange: "$39-$399",
      email: "serhii@slstudio.pro",
    },
  ],
};

const stats = [
  { value: "300+", label: "Zmiksowanych i zmasterowanych utworów" },
  { value: "10+", label: "Lat za konsoletą" },
  { value: "30+", label: "Lat z gitarą" },
];

const principles = [
  {
    icon: "🎸",
    title: "Uszy muzyka",
    text: "Słyszę piosenkę — frazowanie, intencję, emocje — a nie tylko analizator widma. Gram na gitarze, śpiewam, aranżuję. To zmienia każdą decyzję przy miksie.",
  },
  {
    icon: "💬",
    title: "Żadnej czarnej skrzynki",
    text: "Dostajesz informacje o postępach na bieżąco i rozmawiasz bezpośrednio z osobą, która wykonuje pracę. Bez menedżerów i pośredników.",
  },
  {
    icon: "🤝",
    title: "Uczciwy zakres prac",
    text: "Czasem utwór potrzebuje pełnej produkcji. Czasem dwóch drobnych poprawek. Powiem Ci szczerze, która to sytuacja — zanim zapłacisz.",
  },
];

const tools = [
  "Studio One (PreSonus / Fender)",
  "Slate Digital",
  "FabFilter",
  "Soothe2",
  "Pogłosy splotowe (convolution)",
];

export default function OMniePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-16 pb-12">
        <div className="mb-8">
          <LangSwitch active="pl" enHref="/about" plHref="/pl/o-mnie" />
        </div>
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-10 items-stretch">
          <div className="flex flex-col gap-6 md:justify-between">
            <div className="flex flex-col gap-6">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "#C9A84C" }}
              >
                O mnie
              </p>
              <h1
                className="text-4xl md:text-6xl font-semibold tracking-wide leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Serhii <span className="text-[#f5b942]">Lazariev</span>
              </h1>
              <p className="text-white/50 text-sm uppercase tracking-widest">
                Gitarzysta · Wokalista · Producent · Inżynier miksu i masteringu
              </p>
              <div className="max-w-xl">
                <HeroWave />
              </div>
              <p className="text-white/65 text-lg leading-relaxed">
                Wziąłem gitarę do ręki w wieku 13 lat i właściwie nigdy jej nie
                odłożyłem. Ponad trzydzieści lat później muzyka wciąż jest
                jedyną pracą, którą potrafię wykonywać z pełną uwagą — teraz z
                mojego studia w Warszawie, dla artystów z całego świata.
              </p>
              <div className="flex items-center gap-4">
                <span
                  className="h-px w-16"
                  style={{
                    background:
                      "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0))",
                  }}
                />
                <span
                  className="italic text-white/50"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  — Serhii, SL Studio
                </span>
              </div>
              <Link
                href="/pl/darmowy-fragment"
                className="group inline-flex self-start items-center gap-2 text-sm font-medium transition hover:opacity-80"
                style={{ color: "#C9A84C" }}
              >
                Posłuchaj, zanim zapłacisz
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <HeroStats items={stats} />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 md:aspect-[3/2]">
            <img
              src="/images/serhii-lazariev-home-studio.webp"
              alt="Serhii Lazariev — inżynier miksu i masteringu w swoim warszawskim studiu"
              className="w-full h-auto md:h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12">
        <h2
          className="text-2xl md:text-3xl font-semibold tracking-wide mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Długa droga do cichego pokoju w Warszawie
        </h2>
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
          <div className="space-y-5 text-white/65 leading-relaxed">
            <p>
              Zaczęło się tak, jak zwykle się zaczyna: nastolatek, tania gitara
              i żadnego planu B. Zespoły, piwnice prób, małe sceny — tam
              nauczyłem się, że muzyka żyje albo umiera w szczegółach.
            </p>
            <p>
              Przez dwadzieścia lat grałem w jednym zespole. Przeszliśmy drogę
              od małych klubów do prawdziwego fanklubu, obecności w radiu i
              telewizji oraz koncertu na 20-lecie. Wiem, jak to jest stać na
              scenie — i wiem, przez co musi przejść piosenka, zanim na nią
              zasłuży.
            </p>
            <p>
              Przez te wszystkie lata byłem też tym od konsolety: nagrywałem
              próby, miksowałem dema, ratowałem nagrania koncertowe. Ponad
              dziesięć lat. W 2023 roku zamieniłem to doświadczenie w
              pełnoetatowe studio — SL Studio w Warszawie.
            </p>
            <p>
              Dziś miksuję, masteruję, aranżuję i produkuję dla niezależnych
              artystów z całego świata — od masteringu za 39$ po pełną produkcję
              zbudowaną wokół nagrania z telefonu. Te same uszy, ta sama
              staranność, każdy projekt.
            </p>
          </div>

          {/* Timeline */}
          <div
            className="relative pl-6 md:mt-1"
            style={{ borderLeft: "1px solid rgba(201,168,76,0.25)" }}
          >
            {[
              {
                year: "13 lat",
                text: "Pierwsza gitara. Nigdy jej nie odłożyłem.",
              },
              {
                year: "20 lat",
                text: "Jeden zespół: małe kluby → radio i TV → koncert na 20-lecie.",
              },
              {
                year: "10+ lat",
                text: "Za konsoletą — próby, dema, uratowane nagrania koncertowe.",
              },
              { year: "2023", text: "SL Studio startuje w Warszawie." },
              {
                year: "Dziś",
                text: "Miks i mastering dla artystów z całego świata.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.year} delay={i * 120}>
                <div className="relative pb-8">
                  <span
                    className="absolute left-[-29px] top-1 w-2.5 h-2.5 rounded-full"
                    style={{
                      background: "#C9A84C",
                      boxShadow: "0 0 12px rgba(201,168,76,0.6)",
                    }}
                  />
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "#C9A84C" }}
                  >
                    {step.year}
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration project */}
      <section className="py-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 85% 40%, rgba(201,168,76,0.10), transparent 65%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-10 bottom-8 hidden lg:flex items-end gap-1.5"
            aria-hidden="true"
          >
            <style>{`
                            @keyframes eqPulse {
                                0%, 100% { transform: scaleY(0.45); opacity: 0.55; }
                                50% { transform: scaleY(1); opacity: 1; }
                            }
                            .eq-bar {
                                transform-origin: bottom;
                                animation: eqPulse 3s ease-in-out infinite;
                                will-change: transform;
                            }
                            @media (prefers-reduced-motion: reduce) {
                                .eq-bar { animation: none; }
                            }
                        `}</style>
            {[38, 62, 26, 74, 48, 88, 34, 66, 22, 54, 42, 78].map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full eq-bar"
                style={{
                  height: `${h}px`,
                  background: "rgba(201,168,76,0.18)",
                  animationDelay: `${(i % 7) * 0.23}s`,
                  animationDuration: `${2.4 + (i % 5) * 0.45}s`,
                }}
              />
            ))}
          </div>
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#C9A84C" }}
          >
            Projekt, z którego jestem dumny
          </p>
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-wide mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ratuję piosenki, które mogły zniknąć
          </h2>
          <div className="space-y-5 text-white/65 leading-relaxed max-w-3xl">
            <p>
              Przez dziesięciolecia muzycy wokół mnie nagrali setki piosenek —
              dema, nagrania koncertowe, utwory pisane na podwórkach i w salach
              prób. Wiele z tej muzyki przetrwało tylko na zużytych kasetach i
              plikach MP3 niskiej jakości.
            </p>
            <p>
              Odrestaurowałem dziesiątki tych nagrań: oczyściłem szumy,
              odbudowałem aranżacje, dograłem brakujące partie — i oddałem
              piosenki ludziom, którzy je napisali. Za darmo. Bo ta muzyka
              zasługiwała na więcej niż zniknięcie.
            </p>
            <p>
              Niektórzy z tych muzyków usłyszeli swoje piosenki brzmiące lepiej
              niż kiedykolwiek. To wciąż najbardziej satysfakcjonująca praca,
              jaką wykonałem.
            </p>
          </div>
          <a
            href="https://dneprorudniy777.wixsite.com/serhii_lazariev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm transition hover:opacity-80"
            style={{ color: "#C9A84C" }}
          >
            Archiwum znajdziesz tutaj →
          </a>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12">
        <h2
          className="text-2xl md:text-3xl font-semibold tracking-wide mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Najpierw muzyk, potem inżynier
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] border-l-[3px] border-l-[#C9A84C]/70 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/35 hover:border-l-[#C9A84C] hover:bg-[#C9A84C]/[0.07] hover:shadow-[0_14px_40px_rgba(201,168,76,0.13)]">
                <div
                  className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#C9A84C]/0 blur-3xl transition-all duration-300 group-hover:bg-[#C9A84C]/[0.16]"
                  aria-hidden="true"
                />
                <div className="relative z-10 text-2xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(201,168,76,0.45)]">
                  {p.icon}
                </div>
                <h3 className="relative z-10 font-semibold mb-2 text-white">
                  {p.title}
                </h3>
                <p className="relative z-10 text-white/60 text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-12">
        <h2
          className="text-2xl md:text-3xl font-semibold tracking-wide mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Studio pracuje na
        </h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((t) => (
            <span
              key={t}
              className="text-sm px-3 py-1.5 rounded-lg"
              style={{
                background: "rgba(201,168,76,0.1)",
                color: "#C9A84C",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-white/40 text-sm mt-4">
          Narzędzia znaczą mniej niż uszy, które nimi kierują — ale dobre
          narzędzia pomagają.
        </p>
      </section>

      {/* CTA — compact final card matching Free Preview */}
      <section className="py-16">
        <div
          className="rounded-2xl p-10 md:p-12 text-center flex flex-col items-center gap-6 max-w-2xl mx-auto relative overflow-hidden"
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            className="pointer-events-none absolute"
            aria-hidden="true"
            style={{
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "200px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
            }}
          />
          <h2
            className="relative z-10 text-2xl md:text-3xl font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Usłysz efekt, zanim zapłacisz
          </h2>
          <p className="relative z-10 text-white/60 max-w-xl">
            Wyślij swój utwór i otrzymaj darmowy fragment — szczerą ocenę i
            dokładną cenę, bez zobowiązań.
          </p>
          <Link
            href="/pl/darmowy-fragment"
            className="btn-gold relative z-10 inline-flex items-center gap-2 font-semibold px-10 py-4 rounded-xl text-sm transition hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
              backgroundSize: "200% auto",
              color: "#161616",
              boxShadow: "0 0 30px rgba(201,168,76,0.25)",
            }}
          >
            Darmowy fragment →
          </Link>
          <p className="relative z-10 text-white/40 text-sm">
            Albo po prostu{" "}
            <Link
              href="/pl/kontakt"
              className="underline hover:text-white/70 transition"
            >
              napisz
            </Link>{" "}
            — pierwsza konsultacja jest zawsze darmowa.
          </p>
        </div>
      </section>
    </>
  );
}
