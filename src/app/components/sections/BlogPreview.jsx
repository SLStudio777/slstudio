"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { posts } from "../../../data/posts.js";

const FEATURED_SLUGS = [
    "/blog/suno-guide-2026",
    "/blog/suno-studio-guide-en-2026",
    "/blog/blues-rock-mixing-mastering",
];

const featured = FEATURED_SLUGS.map(slug => posts.find(p => p.href === slug)).filter(Boolean);

export default function BlogPreview() {
    const sectionRef = useRef(null);
    const [lineActive, setLineActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setLineActive(true); },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 border-t border-white/5">

            {/* Header row */}
            <div className="flex items-end justify-between mb-4 gap-4 flex-wrap">
                <div>
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        From the Studio
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                        Guides & Insights
                    </h2>
                    <p className="text-white/55 text-sm mt-2 max-w-lg">
                        Practical guides on Suno AI, mixing, mastering and music production — written from real studio experience.
                    </p>
                </div>
                <Link
                    href="/blog"
                    className="flex-shrink-0 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-100"
                    style={{
                        background: "rgba(201,168,76,0.12)",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.55)",
                        boxShadow: "0 0 16px rgba(201,168,76,0.14), inset 0 0 12px rgba(201,168,76,0.04)",
                        opacity: 0.92,
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = "rgba(201,168,76,0.18)";
                        e.currentTarget.style.border = "1px solid rgba(201,168,76,0.75)";
                        e.currentTarget.style.boxShadow = "0 0 24px rgba(201,168,76,0.22), inset 0 0 16px rgba(201,168,76,0.06)";
                        e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = "rgba(201,168,76,0.12)";
                        e.currentTarget.style.border = "1px solid rgba(201,168,76,0.55)";
                        e.currentTarget.style.boxShadow = "0 0 16px rgba(201,168,76,0.14), inset 0 0 12px rgba(201,168,76,0.04)";
                        e.currentTarget.style.opacity = "0.92";
                    }}
                >
                    All Articles →
                </Link>
            </div>

            {/* Animated gold divider */}
            <div className="relative mb-8" style={{ height: "2px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{
                    position: "absolute", top: 0, left: 0, height: "100%",
                    background: "linear-gradient(90deg, #C9A84C, #e8c97a, #C9A84C)",
                    borderRadius: "2px",
                    width: lineActive ? "100%" : "0%",
                    transition: lineActive ? "width 1s cubic-bezier(0.4,0,0.2,1)" : "none",
                }} />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {featured.map((post, i) => (
                    <Link
                        key={i}
                        href={post.href}
                        className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(201,168,76,0.04)";
                            e.currentTarget.style.border = "1px solid rgba(201,168,76,0.3)";
                            e.currentTarget.style.transform = "translateY(-4px)";
                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.08)";
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
            Featured Guide
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