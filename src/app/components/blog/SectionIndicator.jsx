"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .slice(0, 60);
}

// Sticky table of contents in the left margin of blog articles.
// Scans the article for <h2> headings - no per-article setup; works on any
// article that renders a ".blog-prose" body with two or more sections.
// Mounted once in src/app/blog/layout.js and src/app/pl/blog/layout.js, which
// persist across navigations between blog pages, so the scan re-runs on every
// pathname change.
// July 2026 redesign: the rail is anchored near the top of the article column
// (instead of floating vertically centred), the reading-progress line is
// integrated into the rail itself as a gold fill, and the separate right-hand
// dot indicator was removed - the right margin now simply breathes.
export default function SectionIndicator() {
    const pathname = usePathname();
    const [sections, setSections] = useState([]);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        setSections([]);
        setActiveId(null);

        const root = document.querySelector(".blog-prose");
        if (!root) return;
        const headings = [...root.querySelectorAll("h2")];
        if (headings.length < 2) return;

        const used = new Set();
        const list = headings.map((h, i) => {
            let id = h.id;
            // Some articles already wrap sections in a manually-id'd div
            // (e.g. <div id="before-we-start"><h2>...</h2></div>) - a slug
            // generated from the same heading text can collide with that
            // wrapper's id. Check the whole document, not just sibling
            // h2s, so we never produce a second element with that id.
            if (!id || document.querySelectorAll(`#${CSS.escape(id)}`).length > 1) {
                const base = slugify(h.textContent) || `section-${i}`;
                let candidate = `${base}-heading`;
                let n = 1;
                while (used.has(candidate) || document.getElementById(candidate)) {
                    candidate = `${base}-heading-${n++}`;
                }
                id = candidate;
                h.id = id;
            }
            used.add(id);
            h.style.scrollMarginTop = "80px";
            return { id, label: h.textContent };
        });
        setSections(list);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
        );
        headings.forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, [pathname]);

    if (sections.length < 2) return null;

    const isPolish = pathname?.startsWith("/pl");
    const activeIndex = Math.max(0, sections.findIndex((s) => s.id === activeId));
    // gold fill reaches the centre of the active item
    const progressPct = ((activeIndex + 0.5) / sections.length) * 100;

    return (
        <nav
            className="side-toc hidden [@media(min-width:1280px)]:block"
            style={{
                position: "fixed",
                // Hangs into the left margin of the 768px (max-w-3xl) article
                // column so it visually belongs to the article. The max()
                // clamp keeps it on-screen on the tightest laptops.
                left: "max(20px, calc((100vw - 768px) / 2 - 280px))",
                // Anchored near the top of the article, just below the fixed
                // site header - not floating in the vertical centre.
                top: "130px",
                width: "200px",
                maxHeight: "70vh",
                overflowY: "auto",
                zIndex: 30,
                scrollbarWidth: "none",
            }}
            aria-label="Table of contents"
        >
            <style>{`
                .side-toc a:hover { color: rgba(255,255,255,0.85) !important; }
            `}</style>
            <p
                className="text-[11px] font-semibold uppercase"
                style={{
                    color: "rgba(201,168,76,0.65)",
                    letterSpacing: "0.25em",
                    marginBottom: "14px",
                    paddingLeft: "16px",
                }}
            >
                {isPolish ? "Spis tre\u015bci" : "Contents"}
            </p>
            <div style={{ position: "relative" }}>
                {/* base line + gold reading-progress fill */}
                <span
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "2px",
                        borderRadius: "2px",
                        background: "rgba(255,255,255,0.08)",
                    }}
                />
                <span
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "2px",
                        height: `${progressPct}%`,
                        borderRadius: "2px",
                        background: "linear-gradient(to bottom, rgba(201,168,76,0.35), #C9A84C)",
                        boxShadow: "0 0 6px rgba(201,168,76,0.4)",
                        transition: "height 0.35s ease",
                    }}
                />
                <ol
                    style={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                    }}
                >
                    {sections.map((s) => {
                        const active = activeId === s.id;
                        return (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    aria-current={active ? "true" : undefined}
                                    title={s.label}
                                    style={{
                                        display: "block",
                                        fontSize: "13px",
                                        lineHeight: 1.5,
                                        padding: "5px 0 5px 16px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        color: active ? "#C9A84C" : "rgba(255,255,255,0.45)",
                                        transform: active ? "translateX(3px)" : "none",
                                        transition: "color 0.2s ease, transform 0.2s ease",
                                    }}
                                >
                                    {s.label}
                                </a>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}
