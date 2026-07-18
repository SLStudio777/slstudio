import Link from "next/link";

const SITE = "https://www.slstudio.pro";

export const metadata = {
    title: "Suno Track Finishing — Make Your AI Track Release-Ready",
    description:
        "Made a track in Suno? I'll split it into stems, clean up the AI artifacts, add live instruments and master it for Spotify. Real engineer, real ears — from $39.",
    alternates: {
        canonical: `${SITE}/suno-track-finishing`,
    },
    openGraph: {
        title: "Suno Track Finishing — from AI demo to release-ready track",
        description:
            "Stem separation, artifact cleanup, live instruments and streaming-ready mastering for Suno tracks. From $39.",
        url: `${SITE}/suno-track-finishing`,
        siteName: "SL Studio",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${SITE}/suno-track-finishing#service`,
            name: "Suno Track Finishing",
            serviceType: "AI music post-production, mixing and mastering",
            description:
                "Professional finishing for AI-generated music: stem separation, artifact cleanup, live instruments, mixing and mastering for streaming platforms.",
            url: `${SITE}/suno-track-finishing`,
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
        title: "Metallic vocals & smeared cymbals",
        text: "Classic AI artifacts. Suno gets the song right, but the high end often sounds synthetic — and listeners hear it in the first ten seconds.",
    },
    {
        icon: "📉",
        title: "Fails the loudness game",
        text: "Raw Suno exports are either too quiet next to commercial releases or get crushed by Spotify's normalization. Either way, your track loses.",
    },
    {
        icon: "🌫️",
        title: "Muddy low end",
        text: "Kick and bass fighting for the same space, no punch, no definition — especially on phone speakers and earbuds, where most people will hear your song.",
    },
    {
        icon: "🧱",
        title: "One flat stereo file",
        text: "No stems means no control. You can't turn the vocal up, fix the drums or replace a part — unless someone separates and rebuilds the track properly.",
    },
];

const included = [
    "Stem separation — vocals, drums, bass and instruments split for full control",
    "Artifact cleanup — taming the metallic highs, restoring cymbals and air",
    "Live musicianship — real guitars and bass re-recorded where AI falls short",
    "Vocal treatment — tuning, de-essing, presence, professional reverb & delay",
    "Arrangement upgrades — proper intros, transitions and endings",
    "Streaming-ready master — competitive loudness for Spotify, Apple Music, YouTube",
];

const packages = [
    {
        name: "Suno Master",
        price: "$39",
        popular: false,
        tagline: "Your finished Suno track, polished and loud",
        features: [
            "Mastering of your stereo file",
            "Artifact softening on the master",
            "Competitive loudness for all platforms",
            "WAV + MP3 delivery",
            "2–3 business days",
        ],
        cta: "/contact?service=suno-master",
    },
    {
        name: "Suno Finishing",
        price: "$89",
        popular: true,
        tagline: "Stems, cleanup, full mix and master",
        features: [
            "Full stem separation",
            "Artifact cleanup per stem",
            "Complete remix from stems",
            "Streaming-ready master",
            "Revisions included",
            "3–5 business days",
        ],
        cta: "/contact?service=suno-finishing",
    },
    {
        name: "Full Production",
        price: "$149",
        popular: false,
        tagline: "AI demo in, human record out",
        features: [
            "Everything in Suno Finishing",
            "Live guitars & bass re-recorded",
            "Vocal tuning & replacement parts",
            "Arrangement additions",
            "Revisions included",
            "5–7 business days",
        ],
        cta: "/contact?service=suno-production",
    },
];

const steps = [
    {
        num: "01",
        title: "Send your track",
        text: "The MP3 from Suno is enough — stems are a bonus, not a requirement.",
    },
    {
        num: "02",
        title: "Free preview",
        text: "I send back a short processed sample and an exact quote. You hear the direction before paying anything.",
    },
    {
        num: "03",
        title: "The work",
        text: "Stems, cleanup, live parts, mix, master — with updates along the way. No black box.",
    },
    {
        num: "04",
        title: "Release-ready files",
        text: "WAV + MP3, loud and clean on every platform. Revisions until you're happy.",
    },
];

const faq = [
    {
        q: "Can you really work from just the MP3?",
        a: "Yes. I use professional stem separation to split your track into vocals, drums, bass and instruments, then clean and rebuild each part. If you have Suno stems or a WAV, even better — but the MP3 is a workable starting point.",
    },
    {
        q: "Will it still sound like my track?",
        a: "That's the whole point. I don't replace your song — I finish it. The melody, the voice, the vibe stay yours. What changes is the clarity, punch, loudness and the details that separate a demo from a release.",
    },
    {
        q: "Am I allowed to release Suno tracks commercially?",
        a: "If you generated the track on a paid Suno plan, Suno's terms allow commercial use. I work on the audio itself — the rights side stays between you and Suno, and it's straightforward on paid tiers.",
    },
    {
        q: "What loudness do you master to?",
        a: "I master for how the track actually behaves on Spotify, Apple Music and YouTube after their normalization — not to a magic LUFS number. Competitive loudness without crushing the life out of the mix.",
    },
    {
        q: "What if my track needs less work than I think?",
        a: "Then I'll say so. After the free preview you get an honest scope: sometimes a $39 master is genuinely all a track needs. You never pay for work your song doesn't need.",
    },
];

export default function SunoTrackFinishingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="container pt-16 pb-12">
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#C9A84C" }}>
                        Suno Track Finishing
                    </p>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-wide leading-tight mb-6">
                        You made the track.
                        <br />
                        I'll make it release-ready.
                    </h1>
                    <p className="text-white/65 text-lg leading-relaxed mb-4">
                        Suno gets your song 90% there — and everyone can hear the
                        missing 10%. Metallic vocals, smeared cymbals, weak low end,
                        loudness that doesn't survive Spotify. I take your AI track
                        apart, fix what the AI couldn't, and deliver a master that
                        stands next to commercial releases.
                    </p>
                    <p className="text-white/45 text-sm mb-8">
                        By the way — I wrote the{" "}
                        <Link href="/blog/suno-guide-2026" className="underline hover:text-white/70 transition">
                            Suno guide
                        </Link>{" "}
                        and the{" "}
                        <Link href="/blog/suno-studio-guide-2026" className="underline hover:text-white/70 transition">
                            Suno Studio guide
                        </Link>{" "}
                        on this site. This niche is my home turf.
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
                </div>
            </section>

            {/* Pain points */}
            <section className="container py-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
                    Why raw Suno tracks don't get taken seriously
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
                    What “finishing” actually means
                </h2>
                <p className="text-white/55 mb-8 max-w-2xl">
                    Not an algorithm. A musician and engineer working on your song by
                    hand — the same process I use for every human-recorded track in
                    the studio.
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

            {/* Packages */}
            <section className="container py-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4">
                    Simple, transparent pricing
                </h2>
                <p className="text-white/55 mb-8 max-w-2xl">
                    Exact price confirmed after the free preview. 50% upfront, the
                    rest after you approve the result.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    {packages.map((p) => (
                        <div
                            key={p.name}
                            className="rounded-2xl border p-6 flex flex-col"
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
                                    Most popular
                                </span>
                            )}
                            <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                            <div className="text-3xl font-semibold mb-2" style={{ color: "#C9A84C" }}>
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
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* How it works */}
            <section className="container py-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
                    How it works
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {steps.map((s) => (
                        <div
                            key={s.num}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                        >
                            <div className="text-sm font-semibold mb-3" style={{ color: "#C9A84C" }}>
                                {s.num}
                            </div>
                            <h3 className="font-semibold mb-2">{s.title}</h3>
                            <p className="text-white/55 text-sm leading-relaxed">{s.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="container py-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
                    Questions people actually ask
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
                        Hear your track finished — before you pay
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Send the Suno MP3 and get a free processed preview with an
                        exact quote. If you don't hear the difference, walk away — no
                        hard feelings.
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
                </div>
            </section>
        </>
    );
}
