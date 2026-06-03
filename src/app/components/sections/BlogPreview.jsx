"use client";
import Link from "next/link";
import { posts } from "../../../data/posts.js";

const FEATURED_SLUGS = [
    "/blog/suno-guide-2026",
    "/blog/suno-studio-guide-en-2026",
    "/blog/blues-rock-mixing-mastering",
];

const featured = FEATURED_SLUGS.map(slug => posts.find(p => p.href === slug)).filter(Boolean);

export default function BlogPreview() {
    return (
        <section className="py-16 border-t border-white/5">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
                <div>
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        From the Studio
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                        Guides & Insights
                    </h2>
                    <p className="text-white/40 text-sm mt-2 max-w-lg">
                        Practical guides on Suno AI, mixing, mastering and music production — written from real studio experience.
                    </p>
                </div>
                <Link
                    href="/blog"
                    className="flex-shrink-0 text-sm font-semibold px-6 py-3 rounded-xl transition hover:opacity-90"
                    style={{
                        background: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.08) 100%)",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.4)",
                        boxShadow: "0 0 20px rgba(201,168,76,0.08)",
                    }}
                >
                    All Articles →
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {featured.map((post, i) => (
                    <Link
                        key={i}
                        href={post.href}
                        className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderLeft: "3px solid #C9A84C",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(201,168,76,0.04)";
                            e.currentTarget.style.border = "1px solid rgba(201,168,76,0.3)";
                            e.currentTarget.style.borderLeft = "3px solid #C9A84C";
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.08)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
                            e.currentTarget.style.borderLeft = "3px solid #C9A84C";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                style={{ height: "140px", objectPosition: "top" }}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-3.5 flex flex-col gap-2 flex-1">
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
                                Read more
                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
