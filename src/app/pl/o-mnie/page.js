import Link from "next/link";
import LangSwitch from "../../components/common/LangSwitch";
import HeroWave from "../../components/common/HeroWave";
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
            image: `${SITE}/images/Serhii-Lazariev.webp`,
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
            priceRange: "$25-$300",
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
                <div className="grid md:grid-cols-[1fr_1.15fr] gap-10 items-center">
                    <div>
                        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#C9A84C" }}>
                            O mnie
                        </p>
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide leading-tight mb-4">
                            Serhii Lazariev
                        </h1>
                        <p className="text-white/50 text-sm uppercase tracking-widest mb-6">
                            Gitarzysta · Wokalista · Producent · Inżynier miksu i masteringu
                        </p>
                        <div className="max-w-xl mb-6">
                            <HeroWave />
                        </div>
                        <p className="text-white/65 text-lg leading-relaxed">
                            Wziąłem gitarę do ręki w wieku 13 lat i właściwie nigdy jej
                            nie odłożyłem. Ponad trzydzieści lat później muzyka wciąż
                            jest jedyną pracą, którą potrafię wykonywać z pełną uwagą —
                            teraz z mojego studia w Warszawie, dla artystów z całego
                            świata.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <span className="h-px w-16" style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0))" }} />
                            <span className="italic text-white/50" style={{ fontFamily: "var(--font-playfair)" }}>— Serhii, SL Studio</span>
                        </div>
                        <Link
                            href="/pl/darmowy-fragment"
                            className="group inline-flex items-center gap-2 mt-6 text-sm font-medium transition hover:opacity-80"
                            style={{ color: "#C9A84C" }}
                        >
                            Posłuchaj, zanim zapłacisz
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="/images/Serhii-Lazariev.webp"
                            alt="Serhii Lazariev — inżynier miksu i masteringu w swoim warszawskim studiu"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                    {stats.map((s, i) => (
                        <ScrollReveal key={s.label} delay={i * 120}>
                        <div
                            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 text-center"
                        >
                            <div className="text-3xl font-semibold mb-1" style={{ color: "#C9A84C" }}>
                                {s.value}
                            </div>
                            <div className="text-white/50 text-sm">{s.label}</div>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
                    Długa droga do cichego pokoju w Warszawie
                </h2>
                <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
                    <div className="space-y-5 text-white/65 leading-relaxed">
                    <p>
                        Zaczęło się tak, jak zwykle się zaczyna: nastolatek, tania
                        gitara i żadnego planu B. Zespoły, piwnice prób, małe sceny —
                        tam nauczyłem się, że muzyka żyje albo umiera w szczegółach.
                    </p>
                    <p>
                        Przez dwadzieścia lat grałem w jednym zespole. Przeszliśmy
                        drogę od małych klubów do prawdziwego fanklubu, obecności w
                        radiu i telewizji oraz koncertu na 20-lecie. Wiem, jak to jest
                        stać na scenie — i wiem, przez co musi przejść piosenka, zanim
                        na nią zasłuży.
                    </p>
                    <p>
                        Przez te wszystkie lata byłem też tym od konsolety: nagrywałem
                        próby, miksowałem dema, ratowałem nagrania koncertowe. Ponad
                        dziesięć lat. W 2023 roku zamieniłem to doświadczenie w
                        pełnoetatowe studio — SL Studio w Warszawie.
                    </p>
                    <p>
                        Dziś miksuję, masteruję, aranżuję i produkuję dla niezależnych
                        artystów z całego świata — od masteringu za 25$ po pełną
                        produkcję zbudowaną wokół nagrania z telefonu. Te same uszy, ta
                        sama staranność, każdy projekt.
                    </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-6 md:mt-1" style={{ borderLeft: "1px solid rgba(201,168,76,0.25)" }}>
                        {[
                            { year: "13 lat", text: "Pierwsza gitara. Nigdy jej nie odłożyłem." },
                            { year: "20 lat", text: "Jeden zespół: małe kluby → radio i TV → koncert na 20-lecie." },
                            { year: "10+ lat", text: "Za konsoletą — próby, dema, uratowane nagrania koncertowe." },
                            { year: "2023", text: "SL Studio startuje w Warszawie." },
                            { year: "Dziś", text: "Miks i mastering dla artystów z całego świata." },
                        ].map((step, i) => (
                            <ScrollReveal key={step.year} delay={i * 120}>
                                <div className="relative pb-8">
                                    <span
                                        className="absolute left-[-29px] top-1 w-2.5 h-2.5 rounded-full"
                                        style={{ background: "#C9A84C", boxShadow: "0 0 12px rgba(201,168,76,0.6)" }}
                                    />
                                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#C9A84C" }}>
                                        {step.year}
                                    </div>
                                    <p className="text-white/55 text-sm leading-relaxed">{step.text}</p>
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
                        style={{ background: "radial-gradient(ellipse at 85% 40%, rgba(201,168,76,0.10), transparent 65%)" }}
                    />
                    <div className="pointer-events-none absolute right-10 bottom-8 hidden lg:flex items-end gap-1.5" aria-hidden="true">
                        {[38, 62, 26, 74, 48, 88, 34, 66, 22, 54, 42, 78].map((h, i) => (
                            <span
                                key={i}
                                className="w-1.5 rounded-full"
                                style={{ height: `${h}px`, background: "rgba(201,168,76,0.18)" }}
                            />
                        ))}
                    </div>
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>
                        Projekt, z którego jestem dumny
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6">
                        Ratuję piosenki, które mogły zniknąć
                    </h2>
                    <div className="space-y-5 text-white/65 leading-relaxed max-w-3xl">
                        <p>
                            Przez dziesięciolecia muzycy wokół mnie nagrali setki
                            piosenek — dema, nagrania koncertowe, utwory pisane na
                            podwórkach i w salach prób. Wiele z tej muzyki przetrwało
                            tylko na zużytych kasetach i plikach MP3 niskiej jakości.
                        </p>
                        <p>
                            Odrestaurowałem dziesiątki tych nagrań: oczyściłem szumy,
                            odbudowałem aranżacje, dograłem brakujące partie — i
                            oddałem piosenki ludziom, którzy je napisali. Za darmo. Bo
                            ta muzyka zasługiwała na więcej niż zniknięcie.
                        </p>
                        <p>
                            Niektórzy z tych muzyków usłyszeli swoje piosenki brzmiące
                            lepiej niż kiedykolwiek. To wciąż najbardziej satysfakcjonująca
                            praca, jaką wykonałem.
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
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
                    Najpierw muzyk, potem inżynier
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {principles.map((p, i) => (
                        <ScrollReveal key={p.title} delay={i * 120}>
                        <div
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                        >
                            <div className="text-2xl mb-3">{p.icon}</div>
                            <h3 className="font-semibold mb-2">{p.title}</h3>
                            <p className="text-white/55 text-sm leading-relaxed">{p.text}</p>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Tools */}
            <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6">
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

            {/* CTA */}
            <section className="py-16">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4">
                        Usłysz efekt, zanim zapłacisz
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Wyślij swój utwór i otrzymaj darmowy fragment — szczerą ocenę
                        i dokładną cenę, bez zobowiązań.
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
                    <p className="text-white/40 text-sm mt-6">
                        Albo po prostu <Link href="/pl/kontakt" className="underline hover:text-white/70 transition">napisz</Link> — pierwsza konsultacja jest zawsze darmowa.
                    </p>
                </div>
            </section>
        </>
    );
}
