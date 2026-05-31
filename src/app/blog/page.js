"use client";
import { useState } from "react";

const posts = [
    {
        href: "/blog/izotope-fxeq-review",
        image: "/images/blog-fxeq-cover.png",
        category: "Review",
        date: "October 5, 2025",
        title: "iZotope FXEQ Review — Frequency-Specific Effects for Mixing",
        excerpt: "A plugin that lets you apply reverb, delay, saturation and modulation at specific frequencies. A genuinely new approach to effects processing."
    },
    {
        href: "/blog/is-online-mixing-mastering-worth-it",
        image: "/images/blog-online-mix-cover.jpg",
        category: "Tutorials",
        date: "September 10, 2025",
        title: "Is Online Mixing and Mastering Worth It in 2026?",
        excerpt: "Between AI bots and cheap Fiverr gigs, it is hard to know what is legit. An honest look at whether online mixing and mastering is worth it — and what to look for."
    },
    {
        href: "/blog/spotify-lufs-mastering-tips",
        image: "/images/blog-lufs-cover.png",
        category: "Mixing & Mastering",
        date: "August 22, 2025",
        title: "Why Your Master Sounds Quiet on Spotify — 4 Tips for Competitive Loudness",
        excerpt: "Spotify normalizes to -14 LUFS — but commercial masters are still hitting -8 to -9. Here is why, and how to achieve competitive loudness without destroying your dynamics."
    },
    {
        href: "/blog/kiive-kstrip-review",
        image: "/images/blog-kstrip-cover.png",
        category: "Review",
        date: "July 15, 2025",
        title: "Kiive Audio KStrip Review — Three Console Flavors in One Plugin",
        excerpt: "Neve warmth, API punch, SSL precision — all inside a single channel strip. A detailed look at how KStrip holds up in real mixing sessions."
    },
    {
        href: "/blog/mixing-with-free-plugins",
        image: "/images/blog-free-plugins-cover.jpg",
        category: "Mixing & Mastering",
        date: "June 10, 2025",
        title: "Can You Mix a Professional Track with Free Plugins Only?",
        excerpt: "A practical test — one full track, only free plugins, honest results. What works, what doesn't, and how far free tools can take you in 2025."
    },
    {
        href: "/blog/best-music-distribution-2025",
        image: "/images/blog-distribution-cover.png",
        category: "Tutorials",
        date: "May 2, 2025",
        title: "Best Music Distribution Services in 2025 — The Good, The Bad & The Ugly",
        excerpt: "TuneCore, DistroKid, LANDR, CD Baby — which distributor is actually worth it? An honest comparison from an engineer who has worked with all of them."
    },
    {
        href: "/blog/auto-tune-alternatives",
        image: "/images/blog-autotune-cover.png",
        category: "Technics",
        date: "April 8, 2025",
        title: "Is Auto-Tune Still Worth It in 2025?",
        excerpt: "Reliability issues, licensing problems, and strong competition have changed the conversation. Here is an honest look at Auto-Tune and the best alternatives."
    },
    {
        href: "/blog/izotope-ozone-11-review",
        image: "/images/blog-ozone11-cover.png",
        category: "Review",
        date: "March 15, 2025",
        title: "iZotope Ozone 11 Review: The Best Mastering Plugin Gets Better",
        excerpt: "Ozone 11 adds the Stabilizer module, improves the Mastering Assistant, and refines the Limiter. Here is what actually matters for real-world mastering work."
    },
    {
        href: "/blog/pro-tools-vs-studio-one",
        image: "/images/blog-pt-cover.png",
        category: "Tutorials",
        date: "February 10, 2025",
        title: "Pro Tools vs Studio One — Which DAW Is Better for Mixing?",
        excerpt: "A detailed comparison for mixing engineers. Workflow, features, stability — and which one actually gets out of your way."
    },
    {
        href: "/blog/blues-rock-mixing-mastering",
        image: "/images/blog-blues-rock_1.jpg",
        category: "Mixing & Mastering",
        date: "January 21, 2025",
        title: "Blues Rock Mixing and Mastering — How We Hear This Genre",
        excerpt: "Blues rock is not a genre you can fake. You either grew up with it, played it, felt it — or you didn't."
    },
];

const categories = ["All", "Technics", "Review", "Tutorials", "Mixing & Mastering"];
const PER_PAGE = 6;

export default function BlogPage() {
    const [active, setActive] = useState("All");
    const [page, setPage] = useState(1);

    const filtered = active === "All"
        ? posts
        : posts.filter(p => p.category === active);

    const totalPages = Math.ceil(filtered.length / PER_PAGE);
    const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const handleCategory = (cat) => {
        setActive(cat);
        setPage(1);
    };

    return (
        <div className="mt-16 mb-20">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        Studio Notes
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mt-2">
                        Blog
                    </h1>
                    <p className="text-white/40 text-base mt-4 max-w-xl">
                        Tutorials, tips, and honest insights on mixing, mastering, and music production.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategory(cat)}
                            className="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-widest transition"
                            style={{
                                backgroundColor: active === cat ? "#C9A84C" : "rgba(255,255,255,0.05)",
                                color: active === cat ? "#000" : "rgba(255,255,255,0.5)",
                                border: active === cat ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.05)"
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paginated.map((post, i) => (
                        <a key={i} href={post.href}
                           className="group rounded-xl border border-white/5 bg-white/[0.03] overflow-hidden hover:border-white/10 transition flex flex-col"
                           style={{borderLeft: "3px solid #C9A84C"}}>
                            <img
                                src={post.image}
                                alt={post.title}
                                style={{width: "100%", height: "260px", objectFit: "cover"}}
                            />
                            <div className="p-5 flex flex-col gap-3 flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-white/30 text-xs uppercase tracking-widest">{post.category}</span>
                                    <span className="text-white/20 text-xs">·</span>
                                    <span className="text-white/30 text-xs">{post.date}</span>
                                </div>
                                <h2 className="text-base md:text-lg font-semibold group-hover:text-gold2 transition leading-snug">
                                    {post.title}
                                </h2>
                                <p className="text-white/50 text-sm leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                                <span className="text-xs mt-2" style={{color: "#C9A84C"}}>Read more →</span>
                            </div>
                        </a>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-white/30 text-sm">
                        No articles in this category yet.
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-12">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-4 py-2 rounded-lg text-sm transition"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.05)",
                                color: page === 1 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                                border: "1px solid rgba(255,255,255,0.05)",
                                cursor: page === 1 ? "not-allowed" : "pointer"
                            }}
                        >
                            ←
                        </button>
                        {Array.from({length: totalPages}, (_, i) => i + 1).map(num => (
                            <button
                                key={num}
                                onClick={() => setPage(num)}
                                className="w-9 h-9 rounded-lg text-sm font-medium transition"
                                style={{
                                    backgroundColor: page === num ? "#C9A84C" : "rgba(255,255,255,0.05)",
                                    color: page === num ? "#000" : "rgba(255,255,255,0.5)",
                                    border: page === num ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.05)"
                                }}
                            >
                                {num}
                            </button>
                        ))}
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="px-4 py-2 rounded-lg text-sm transition"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.05)",
                                color: page === totalPages ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                                border: "1px solid rgba(255,255,255,0.05)",
                                cursor: page === totalPages ? "not-allowed" : "pointer"
                            }}
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}