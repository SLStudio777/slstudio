import Link from "next/link";
import LangSwitch from "../components/common/LangSwitch";
import HeroWave from "../components/common/HeroWave";
import ScrollReveal from "../components/common/ScrollReveal";

const SITE = "https://www.slstudio.pro";

export const metadata = {
    title: "About Serhii Lazariev — Mixing & Mastering Engineer in Warsaw",
    description:
        "Guitarist, vocalist and producer. 30+ years in music, 10+ years behind the board, 300+ tracks mixed and mastered. The person behind SL Studio in Warsaw.",
    alternates: {
        canonical: `${SITE}/about`,
        languages: {
            en: `${SITE}/about`,
            pl: `${SITE}/pl/o-mnie`,
            "x-default": `${SITE}/about`,
        },
    },
    openGraph: {
        title: "About Serhii Lazariev — the person behind SL Studio",
        description:
            "30+ years in music, 10+ years behind the board, 300+ tracks mixed and mastered in Warsaw.",
        url: `${SITE}/about`,
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
            jobTitle: "Mixing & Mastering Engineer",
            description:
                "Guitarist, vocalist and music producer. 30+ years in music, 10+ years behind the board, 300+ tracks mixed and mastered at SL Studio, Warsaw.",
            url: `${SITE}/about`,
            image: `${SITE}/images/Serhii-Lazariev.webp`,
            worksFor: { "@id": `${SITE}/#studio` },
            address: {
                "@type": "PostalAddress",
                addressLocality: "Warsaw",
                addressCountry: "PL",
            },
            sameAs: [
                "https://www.youtube.com/@SLStudio_Guitar",
                "https://www.instagram.com/lazarev_serhii_sl",
                "https://www.facebook.com/profile.php?id=100044130441850",
                "https://t.me/serhii_lazariev",
            ],
            knowsAbout: [
                "Mixing",
                "Mastering",
                "Music arrangement",
                "Music production",
                "Audio restoration",
                "AI music post-production",
            ],
        },
        {
            "@type": "ProfessionalService",
            "@id": `${SITE}/#studio`,
            name: "SL Studio",
            url: SITE,
            founder: { "@id": `${SITE}/about#person` },
            description:
                "Online mixing, mastering, arrangement and production studio. Remote, worldwide.",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Warsaw",
                addressCountry: "PL",
            },
            areaServed: "Worldwide",
            priceRange: "$25-$300",
            email: "serhii@slstudio.pro",
        },
    ],
};

const stats = [
    { value: "300+", label: "Tracks Mixed & Mastered" },
    { value: "10+", label: "Years Behind the Board" },
    { value: "30+", label: "Years With a Guitar" },
];

const principles = [
    {
        icon: "🎸",
        title: "A musician's ears",
        text: "I hear a song — phrasing, intention, feel — not just a spectrum analyzer. I play guitar, I sing, I arrange. That changes every mixing decision.",
    },
    {
        icon: "💬",
        title: "No black box",
        text: "You get updates as the work happens, and you talk directly to the person doing it. No managers, no handoffs, no junior engineers.",
    },
    {
        icon: "🤝",
        title: "Honest scope",
        text: "Sometimes a track needs a full production. Sometimes it needs two small fixes. I'll tell you which one it is before you pay.",
    },
];

const tools = [
    "Studio One (PreSonus / Fender)",
    "Slate Digital",
    "FabFilter",
    "Soothe2",
    "Convolution reverbs",
];

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="pt-16 pb-12">
                <div className="mb-8">
                    <LangSwitch active="en" enHref="/about" plHref="/pl/o-mnie" />
                </div>
                <div className="grid md:grid-cols-[1fr_1.15fr] gap-10 items-center">
                    <div>
                        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#C9A84C" }}>
                            About
                        </p>
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                            Serhii <span className="text-[#f5b942]">Lazariev</span>
                        </h1>
                        <p className="text-white/50 text-sm uppercase tracking-widest mb-6">
                            Guitarist · Vocalist · Producer · Mixing & Mastering Engineer
                        </p>
                        <div className="max-w-xl mb-6">
                            <HeroWave />
                        </div>
                        <p className="text-white/65 text-lg leading-relaxed">
                            I picked up a guitar at 13 and never really put it down.
                            Thirty-plus years later, music is still the only work I know
                            how to do with my whole attention — now from my studio in
                            Warsaw, for artists all over the world.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <span className="h-px w-16" style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0))" }} />
                            <span className="italic text-white/50" style={{ fontFamily: "var(--font-playfair)" }}>— Serhii, SL Studio</span>
                        </div>
                        <Link
                            href="/free-track-preview"
                            className="group inline-flex items-center gap-2 mt-6 text-sm font-medium transition hover:opacity-80"
                            style={{ color: "#C9A84C" }}
                        >
                            Hear it before you pay
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="/images/Serhii-Lazariev.webp"
                            alt="Serhii Lazariev — mixing and mastering engineer in his Warsaw studio"
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
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                    The long road to a quiet room in Warsaw
                </h2>
                <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
                    <div className="space-y-5 text-white/65 leading-relaxed">
                    <p>
                        It started the way it usually does: a teenager, a cheap guitar,
                        and no plan B. Bands, rehearsal basements, small stages — that's
                        where I learned that music lives or dies in the details.
                    </p>
                    <p>
                        For twenty years I played in one band. We went from tiny clubs
                        to a real fan club, airplay on radio and TV, and a proper
                        anniversary concert for our 20th year together. I know what it's
                        like to stand on a stage — and I know what a song has to go
                        through before it deserves one.
                    </p>
                    <p>
                        All those years I was also the one behind the board: recording
                        rehearsals, mixing demos, rescuing live tapes. More than ten
                        years of it. In 2023 I turned that experience into a full-time
                        studio — SL Studio, based in Warsaw.
                    </p>
                    <p>
                        Today I mix, master, arrange and produce for independent artists
                        worldwide — from a $25 master to a full production built around
                        a voice memo. Same ears, same care, every project.
                    </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-6 md:mt-1" style={{ borderLeft: "1px solid rgba(201,168,76,0.25)" }}>
                        {[
                            { year: "13 y.o.", text: "First guitar. Never put it down." },
                            { year: "20 years", text: "One band: tiny clubs → radio & TV → a proper anniversary stage." },
                            { year: "10+ years", text: "Behind the board — rehearsals, demos, rescued live tapes." },
                            { year: "2023", text: "SL Studio opens in Warsaw." },
                            { year: "Today", text: "Mixing & mastering for artists worldwide." },
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
                        A project I'm proud of
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                        Saving songs that could have disappeared
                    </h2>
                    <div className="space-y-5 text-white/65 leading-relaxed max-w-3xl">
                        <p>
                            Over the decades, the musicians around me recorded hundreds
                            of songs — demos, live tapes, songs written in backyards and
                            rehearsal rooms. Much of that music survived only as worn-out
                            cassettes and low-bitrate MP3s.
                        </p>
                        <p>
                            I've restored dozens of those recordings: cleaned up the
                            noise, rebuilt arrangements, re-recorded missing parts — and
                            gave the songs back to the people who wrote them. For free.
                            Because that music deserved better than to disappear.
                        </p>
                        <p>
                            Some of those musicians heard their own songs sounding better
                            than they ever had. That's still the most rewarding work
                            I've done.
                        </p>
                    </div>
                    <a
                        href="https://dneprorudniy777.wixsite.com/serhii_lazariev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 text-sm transition hover:opacity-80"
                        style={{ color: "#C9A84C" }}
                    >
                        The archive lives here →
                    </a>
                </div>
            </section>

            {/* Principles */}
            <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                    Musician first, engineer second
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
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                    The studio runs on
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
                    Tools matter less than the ears driving them — but good tools help.
                </p>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                        Hear it before you pay
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Send your track and get a free preview — an honest assessment
                        and an exact price, no commitment.
                    </p>
                    <Link
                        href="/free-track-preview"
                        className="btn-gold inline-block px-8 py-3 rounded-lg font-semibold"
                        style={{
                            background:
                                "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
                            backgroundSize: "200% auto",
                            color: "#161616",
                            boxShadow: "0 0 24px rgba(201,168,76,0.25)",
                        }}
                    >
                        Get a Free Preview →
                    </Link>
                    <p className="text-white/40 text-sm mt-6">
                        Or just <Link href="/contact" className="underline hover:text-white/70 transition">say hi</Link> — first consultation is always free.
                    </p>
                </div>
            </section>
        </>
    );
}
