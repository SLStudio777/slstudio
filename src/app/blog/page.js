import Link from "next/link";
import { Suspense } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { posts } from "@/data/posts";
import PostCard from "@/app/components/blog/PostCard";
import HeroWave from "@/app/components/common/HeroWave";
import SearchBox from "./SearchBox";

export const metadata = {
    title: "Blog — Mixing, Mastering & Music Production",
    alternates: {
        canonical: "https://www.slstudio.pro/blog"
    },
    description: "Tutorials, honest reviews, and practical tips on mixing, mastering, plugins, and music production. Written by a working engineer.",
    keywords: [
        "mixing blog",
        "mastering tips",
        "music production blog",
        "audio engineering",
        "mixing plugins",
        "music production tutorials",
    ],
    openGraph: {
        title: "Blog | SL Studio",
        description: "Tutorials, reviews, and honest insights on mixing, mastering, and music production.",
        type: "website",
        url: "https://www.slstudio.pro/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | SL Studio",
        description: "Tutorials, reviews, and honest insights on mixing, mastering, and music production.",
    },
};

const categories = ["All", "Technics", "Review", "Tutorials", "Mixing & Mastering", "Industry Insights"];
const languages = [
    { value: "all", label: "All" },
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
    { value: "pl", label: "PL" },
];
// Translated duplicates of English articles: they live on their own routes and
// stay indexed, but the default list would just repeat every cover, so they only
// appear when their own language button is pressed.
const TRANSLATED = ["ru", "pl"];
const PER_PAGE = 6;
const FIRST_PAGE_COUNT = 7; // 1 featured + 6 grid cards, keeps page 1's grid even

// Builds /blog links that keep the other active filters. Server-rendered links
// are what lets crawlers reach every category, language, and page.
function hrefWith(base, updates) {
    const merged = { ...base, ...updates };
    const params = new URLSearchParams();
    ["category", "lang", "q", "page"].forEach((key) => {
        const value = merged[key];
        if (value !== null && value !== undefined && value !== "") {
            params.set(key, String(value));
        }
    });
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
}

export default async function BlogPage({ searchParams }) {
    // `await` works both when searchParams is a plain object (Next 14)
    // and when it is a Promise (Next 15).
    const sp = (await searchParams) || {};

    const active = typeof sp.category === "string" && sp.category ? sp.category : "All";
    const lang = typeof sp.lang === "string" && sp.lang ? sp.lang : "all";
    const page = Math.max(1, Number(sp.page) || 1);
    const urlQuery = typeof sp.q === "string" ? sp.q : "";
    const q = urlQuery.trim().toLowerCase();

    const filtered = posts.filter((p) => {
        if (active !== "All" && p.category !== active) return false;
        // Translated posts are opt-in: RU / PL each show only their own,
        // every other state (default / All / EN) leaves them out.
        const postLang = p.lang || "en";
        if (TRANSLATED.includes(lang) ? postLang !== lang : TRANSLATED.includes(postLang)) return false;
        if (q && !`${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)) return false;
        return true;
    });

    const totalPages =
        filtered.length <= FIRST_PAGE_COUNT
            ? 1
            : 1 + Math.ceil((filtered.length - FIRST_PAGE_COUNT) / PER_PAGE);
    const safePage = Math.min(page, totalPages);

    // page 1 shows the newest post as a full-width hero card + 6 grid cards (7 total)
    const featured = safePage === 1 ? filtered[0] : null;
    const paginated = safePage === 1
        ? filtered.slice(1, FIRST_PAGE_COUNT)
        : filtered.slice(
              FIRST_PAGE_COUNT + (safePage - 2) * PER_PAGE,
              FIRST_PAGE_COUNT + (safePage - 1) * PER_PAGE
          );

    const hasFilter = active !== "All" || lang !== "all" || urlQuery.trim() !== "";

    // current state, used as the base for every filter/pagination link
    const base = {
        category: active === "All" ? null : active,
        lang: lang === "all" ? null : lang,
        q: urlQuery.trim() || null,
        page: null,
    };

    const navBtnStyle = {
        background: "rgba(201,168,76,0.08)",
        border: "1px solid rgba(201,168,76,0.25)",
    };

    return (
        <div className="mt-16 mb-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-10">
                    <span className="text-white/60 text-xs uppercase tracking-[0.3em]">
                        Studio Notes
                    </span>
                    <div className="relative mt-2">
                        <div className="hero-title-glow" aria-hidden="true" />
                        <h1 className="relative text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
                            Blog
                        </h1>
                    </div>
                    <div className="max-w-xl mt-6">
                        <HeroWave />
                    </div>
                    <p className="text-white/65 text-base mt-4 max-w-xl leading-relaxed">
                        Tutorials, honest reviews, and practical tips on mixing, mastering, plugins, and music production.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                    <Suspense fallback={<div className="relative flex-1 max-w-md" />}>
                        <SearchBox />
                    </Suspense>
                    <div
                        className="inline-flex self-start sm:self-auto rounded-lg border border-white/10 bg-white/5 p-0.5"
                        role="group"
                        aria-label="Filter by language"
                    >
                        {languages.map((l) => (
                            <Link
                                key={l.value}
                                href={hrefWith(base, { lang: l.value === "all" ? null : l.value, page: null })}
                                scroll={false}
                                aria-pressed={lang === l.value}
                                className={`px-3.5 py-1.5 rounded-md text-xs font-medium uppercase tracking-widest transition ${
                                    lang === l.value
                                        ? "bg-gold text-black"
                                        : "text-white/55 hover:text-white/80"
                                }`}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div
                    className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible md:pb-0"
                    role="group"
                    aria-label="Filter by category"
                >
                    {categories.map((cat) => (
                        <Link
                            key={cat}
                            href={hrefWith(base, { category: cat === "All" ? null : cat, page: null })}
                            scroll={false}
                            aria-pressed={active === cat}
                            className={`shrink-0 px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-widest whitespace-nowrap transition border ${
                                active === cat
                                    ? "bg-gold text-black border-gold"
                                    : "bg-white/5 text-white/60 border-white/5 hover:text-white/80"
                            }`}
                        >
                            {cat}
                        </Link>
                    ))}
                </div>

                {filtered.length > 0 && (
                    <p className="text-xs text-white/45 mb-6" aria-live="polite">
                        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
                        {hasFilter ? " found" : ""}
                        {urlQuery.trim() && (
                            <> for “<span className="text-white/70">{urlQuery.trim()}</span>”</>
                        )}
                    </p>
                )}

                {featured && (
                    <div className="mb-6">
                        <PostCard post={featured} featured />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {paginated.map((post, i) => (
                        <PostCard key={post.href} post={post} eager={safePage === 1 && i < 2} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-white/60 text-sm">
                        {urlQuery
                            ? `No articles found for "${urlQuery}".`
                            : "No articles in this category yet."}
                    </div>
                )}

                {totalPages > 1 && (
                    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Blog pagination">
                        {safePage === 1 ? (
                            <span
                                aria-disabled="true"
                                className="w-10 h-10 rounded-full flex items-center justify-center opacity-30 cursor-not-allowed"
                                style={navBtnStyle}
                            >
                                <ChevronLeft className="w-4 h-4" style={{ color: "#C9A84C" }} />
                            </span>
                        ) : (
                            <Link
                                href={hrefWith(base, { page: safePage - 1 === 1 ? null : safePage - 1 })}
                                aria-label="Previous page"
                                className="btn-gold group w-10 h-10 rounded-full flex items-center justify-center transition"
                                style={navBtnStyle}
                            >
                                <ChevronLeft
                                    className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                                    style={{ color: "#C9A84C" }}
                                />
                            </Link>
                        )}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                            <Link
                                key={num}
                                href={hrefWith(base, { page: num === 1 ? null : num })}
                                aria-current={num === safePage ? "page" : undefined}
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition ${
                                    num === safePage
                                        ? "bg-gold text-black"
                                        : "text-white/60 hover:text-white/90 bg-white/5 border border-white/10"
                                }`}
                            >
                                {num}
                            </Link>
                        ))}
                        {safePage === totalPages ? (
                            <span
                                aria-disabled="true"
                                className="w-10 h-10 rounded-full flex items-center justify-center opacity-30 cursor-not-allowed"
                                style={navBtnStyle}
                            >
                                <ChevronRight className="w-4 h-4" style={{ color: "#C9A84C" }} />
                            </span>
                        ) : (
                            <Link
                                href={hrefWith(base, { page: safePage + 1 })}
                                aria-label="Next page"
                                className="btn-gold group w-10 h-10 rounded-full flex items-center justify-center transition"
                                style={navBtnStyle}
                            >
                                <ChevronRight
                                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                                    style={{ color: "#C9A84C" }}
                                />
                            </Link>
                        )}
                    </nav>
                )}
            </div>
        </div>
    );
}
