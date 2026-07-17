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

// Self-contained side rails for blog articles: a sticky text TOC in the left
// margin and a dot indicator with a reading-progress line in the right margin.
// Scans the article for <h2> headings — no per-article setup; works on any
// article that renders a ".blog-prose" body with two or more sections.
// Mounted once in src/app/blog/layout.js, which persists across navigations
// between blog pages (Next.js doesn't remount a shared layout on route
// change within the same segment) — so the scan must re-run on every
// pathname change, not just once on first mount, or rails from the
// previous article stick around until a hard reload.
// Both rails are anchored to the edges of the 768px (max-w-3xl) article
// column, not the viewport edges, so they visually belong to the article.
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
            // (e.g. <div id="before-we-start"><h2>...</h2></div>) — a slug
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

    const activeIndex = Math.max(0, sections.findIndex((s) => s.id === activeId));
    // progress line fills up to the centre of the active dot
    const progressPct = ((activeIndex + 0.5) / sections.length) * 100;

    return (
        <>
            <style>{`
                .section-dot:hover .section-dot-label {
                    opacity: 1 !important;
                    transform: translateX(0) !important;
                }
                .section-dot:hover .section-dot-marker {
                    background: rgba(201,168,76,0.55) !important;
                }
                /* keep hovered dot's label above its neighbours */
                .section-dot:hover { z-index: 2; }
                .side-toc a:hover { color: rgba(255,255,255,0.85) !important; }
            `}</style>

            {/* ── Left rail: sticky text TOC ── */}
            <nav
                className="side-toc hidden [@media(min-width:1280px)]:flex flex-col"
                style={{
                    position: "fixed",
                    // Hangs into the left margin. The offset is the rail's own
                    // width (200px) plus the breathing room we want between it
                    // and the text: 280 - 200 = 80px, matching the ~81px on the
                    // dots side so the article sits centred between the two.
                    // The max() clamp keeps it on-screen on the tightest laptops.
                    left: "max(20px, calc((100vw - 768px) / 2 - 280px))",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "200px",
                    maxHeight: "72vh",
                    overflowY: "auto",
                    zIndex: 30,
                    scrollbarWidth: "none",
                }}
                aria-label="Table of contents"
            >
                <p
                    className="text-[11px] font-semibold uppercase"
                    style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.25em", marginBottom: "14px" }}
                >
                    Contents
                </p>
                <ol className="flex flex-col" style={{ gap: "2px" }}>
                    {sections.map((s) => {
                        const active = activeId === s.id;
                        return (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    aria-current={active ? "true" : undefined}
                                    style={{
                                        display: "block",
                                        fontSize: "13px",
                                        lineHeight: 1.4,
                                        padding: "5px 0 5px 14px",
                                        borderLeft: active
                                            ? "2px solid #C9A84C"
                                            : "2px solid rgba(255,255,255,0.08)",
                                        color: active ? "#C9A84C" : "rgba(255,255,255,0.45)",
                                        transition: "color 0.2s ease, border-color 0.2s ease",
                                    }}
                                >
                                    {s.label}
                                </a>
                            </li>
                        );
                    })}
                </ol>
            </nav>

            {/* ── Right rail: dots + reading-progress line ── */}
            <nav
                className="section-indicator hidden [@media(min-width:1280px)]:flex flex-col gap-3"
                style={{
                    position: "fixed",
                    right: "calc((100vw - 768px) / 2 - 88px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 30,
                }}
                aria-label="Article sections"
            >
                {/* connecting line behind the dots, gold fill = reading progress */}
                <span
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        right: "3.5px",
                        top: 0,
                        bottom: 0,
                        width: "1px",
                        background: "rgba(255,255,255,0.1)",
                    }}
                />
                <span
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        right: "3.5px",
                        top: 0,
                        width: "1px",
                        height: `${progressPct}%`,
                        background: "linear-gradient(to bottom, rgba(201,168,76,0.35), #C9A84C)",
                        boxShadow: "0 0 6px rgba(201,168,76,0.4)",
                        transition: "height 0.35s ease",
                    }}
                />
                {sections.map((s) => {
                    const active = activeId === s.id;
                    return (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className="section-dot group flex items-center justify-end"
                            style={{
                                position: "relative",
                                // the label used to be an in-flow pill (~24px tall) which
                                // set each row's height; now it's absolute, so keep the
                                // original vertical rhythm (dot spacing + progress line
                                // length) with an explicit minHeight
                                minHeight: "24px",
                            }}
                            aria-current={active ? "true" : undefined}
                        >
                            <span
                                className="section-dot-label"
                                style={{
                                    // anchored to the RIGHT of the dot, opening into the
                                    // empty margin — never over the article text
                                    position: "absolute",
                                    left: "100%",
                                    marginLeft: "14px",
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.75)",
                                    whiteSpace: "nowrap",
                                    opacity: 0,
                                    transform: "translateX(-4px)",
                                    transition: "opacity 0.2s ease, transform 0.2s ease",
                                    // clamp to the free space on the right so it can never
                                    // run off the screen edge on any viewport width
                                    maxWidth: "min(320px, calc((100vw - 768px) / 2 - 88px - 20px))",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    background: "#1f1f1f",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "8px",
                                    padding: "4px 10px",
                                    pointerEvents: "none",
                                }}
                            >
                                {s.label}
                            </span>
                            <span
                                className="section-dot-marker"
                                style={{
                                    flexShrink: 0,
                                    width: active ? "8px" : "6px",
                                    height: active ? "8px" : "6px",
                                    marginRight: active ? "0px" : "1px",
                                    borderRadius: "50%",
                                    background: active ? "#C9A84C" : "rgba(255,255,255,0.25)",
                                    boxShadow: active ? "0 0 8px rgba(201,168,76,0.6)" : "none",
                                    transition: "all 0.25s ease",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            />
                        </a>
                    );
                })}
            </nav>
        </>
    );
}
