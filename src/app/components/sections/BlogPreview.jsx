"use client";
import Link from "next/link";
import { posts } from "../../../data/posts.js";

const FEATURED_SLUGS = [
    "/blog/suno-guide-2026",
    "/blog/master-suno-track-for-spotify",
    "/blog/blues-rock-mixing-mastering",
];

const featured = FEATURED_SLUGS.map(slug => posts.find(p => p.href === slug)).filter(Boolean);

const DEFAULTS = {
    eyebrow: "From the Studio",
    heading: "Guides & Insights",
    text: "Practical guides on Suno AI, mixing, mastering and music production — written from real studio experience.",
    allArticles: "All Articles →",
    featured: "Featured Guide",
    readMore: "Read more",
};

export default function BlogPreview({ labels }) {
    const t = { ...DEFAULTS, ...labels };
    return (
        <section className="py-12 border-t border-white/5">

            {/* Header row */}
            <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
                <div>
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        {t.eyebrow}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                        {t.heading}
                    </h2>
                    <p className="text-white/55 text-sm mt-2 max-w-lg">
                        {t.text}
                    </p>
                </div>
                <Link
                    href="/blog"
                    className="btn-gold flex-shrink-0 text-sm font-semibold px-6 py-3 rounded-xl"
                    style={{
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.35)",
                        background: "rgba(201,168,76,0.06)",
                    }}
                >
                    {t.allArticles}
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {featured.map((post, i) => (
                    <Link
                        key={i}
                        href={post.href}
                        className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(201,168,76,0.04)";
                            e.currentTarget.style.border = "1px solid rgba(201,168,76,0.3)";
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.10)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        {/* Gold top-line on hover */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            style={{ background: "#C9A84C" }} />

                        {/* Featured badge — only first card */}


                        <div className="overflow-hidden">
                            <img loading="lazy" decoding="async"
                                src={post.image}
                                alt={post.title}
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                style={{ height: "140px", objectPosition: "top" }}
                            />
                        </div>

                        <div className="p-3.5 flex flex-col gap-2 flex-1">
    {i === 0 && (
        <span className="text-[9px] uppercase tracking-[0.12em] font-semibold px-2 py-0.5 rounded self-start"
            style={{
                background: "rgba(201,168,76,0.12)",
                color: "#C9A84C",
                border: "1px solid rgba(201,168,76,0.28)",
            }}>
            {t.featured}
        </span>
    )}
                            <div className="flex items-center gap-2">
                                <span className="text-xs uppercase tracking-widest font-medium"
                                    style={{ color: "#C9A84C" }}>
                                    {post.category}
                                </span>
                                <span className="text-white/20 text-xs">·</span>
                                <span className="text-white/30 text-xs">{post.date}</span>
                            </div>
                            <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-gold2 transition">
                                {post.title}
                            </h3>
                            <div className="flex items-center gap-1 mt-auto pt-1 text-xs font-medium"
                                style={{ color: "#C9A84C" }}>
                                {t.readMore}
                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}