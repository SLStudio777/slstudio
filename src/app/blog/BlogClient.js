"use client";
import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { posts } from "@/data/posts";
import PostCard from "@/app/components/blog/PostCard";
import NumberBtn from "@/app/components/pagination/NumberBtn";
import HeroWave from "@/app/components/common/HeroWave";

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

export default function BlogClient() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const active = searchParams.get("category") || "All";
    const lang = searchParams.get("lang") || "all";
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const urlQuery = searchParams.get("q") || "";

    const [query, setQuery] = useState(urlQuery);

    // keep input in sync when URL changes externally (back/forward)
    useEffect(() => {
        setQuery(urlQuery);
    }, [urlQuery]);

    const setParams = (updates, { scrollTop = false } = {}) => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(updates).forEach(([key, value]) => {
            if (value === null || value === "" || value === undefined) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });
        const qs = params.toString();
        router.replace(qs ? `/blog?${qs}` : "/blog", { scroll: false });
        if (scrollTop && typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const filtered = useMemo(() => {
        const q = urlQuery.trim().toLowerCase();
        return posts.filter((p) => {
            if (active !== "All" && p.category !== active) return false;
            // Translated posts are opt-in: RU / PL each show only their own,
            // every other state (default / All / EN) leaves them out.
            const postLang = p.lang || "en";
            if (TRANSLATED.includes(lang) ? postLang !== lang : TRANSLATED.includes(postLang)) return false;
            if (q && !`${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)) return false;
            return true;
        });
    }, [active, lang, urlQuery]);

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

    const handleCategory = (cat) => {
        setParams({ category: cat === "All" ? null : cat, page: null });
    };

    const handleLang = (value) => {
        setParams({ lang: value === "all" ? null : value, page: null });
    };

    const handleSearch = (value) => {
        setQuery(value);
        setParams({ q: value || null, page: null });
    };

    const handlePage = (num) => {
        setParams({ page: num === 1 ? null : String(num) }, { scrollTop: true });
    };

    const hasFilter = active !== "All" || lang !== "all" || urlQuery.trim() !== "";

    return (
        <div className="mt-16 mb-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-10">
                    <span className="text-white/60 text-xs uppercase tracking-[0.3em]">
                        Studio Notes
                    </span>
                    <div className="relative mt-2">
                        <div className="hero-title-glow" aria-hidden="true" />
                        <h1 className="relative text-4xl md:text-5xl font-semibold tracking-wide">
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
                    <div className="relative flex-1 max-w-md">
                        <input
                            type="search"
                            value={query}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Search articles..."
                            aria-label="Search articles"
                            className="w-full pl-4 pr-10 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 text-white/80 placeholder:text-white/40 focus:outline-none focus:border-gold/60 transition [&::-webkit-search-cancel-button]:appearance-none"
                        />
                        {query && (
                            <button
                                onClick={() => handleSearch("")}
                                aria-label="Clear search"
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full text-white/40 hover:text-white/80 hover:bg-white/10 transition"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        )}
                    </div>
                    <div
                        className="inline-flex self-start sm:self-auto rounded-lg border border-white/10 bg-white/5 p-0.5"
                        role="group"
                        aria-label="Filter by language"
                    >
                        {languages.map((l) => (
                            <button
                                key={l.value}
                                onClick={() => handleLang(l.value)}
                                aria-pressed={lang === l.value}
                                className={`px-3.5 py-1.5 rounded-md text-xs font-medium uppercase tracking-widest transition ${
                                    lang === l.value
                                        ? "bg-gold text-black"
                                        : "text-white/55 hover:text-white/80"
                                }`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible md:pb-0"
                    role="group"
                    aria-label="Filter by category"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategory(cat)}
                            aria-pressed={active === cat}
                            className={`shrink-0 px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-widest whitespace-nowrap transition border ${
                                active === cat
                                    ? "bg-gold text-black border-gold"
                                    : "bg-white/5 text-white/60 border-white/5 hover:text-white/80"
                            }`}
                        >
                            {cat}
                        </button>
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
                        <button
                            onClick={() => handlePage(Math.max(1, safePage - 1))}
                            disabled={safePage === 1}
                            aria-label="Previous page"
                            className={`btn-gold group w-10 h-10 rounded-full flex items-center justify-center transition ${
                                safePage === 1 ? "opacity-30 cursor-not-allowed" : ""
                            }`}
                            style={{
                                background: "rgba(201,168,76,0.08)",
                                border: "1px solid rgba(201,168,76,0.25)",
                            }}
                        >
                            <ChevronLeft
                                className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                                style={{ color: "#C9A84C" }}
                            />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((el) => (
                            <NumberBtn
                                key={el}
                                page={safePage}
                                onClick={() => handlePage(el)}
                                num={el}
                            />
                        ))}
                        <button
                            onClick={() => handlePage(Math.min(totalPages, safePage + 1))}
                            disabled={safePage === totalPages}
                            aria-label="Next page"
                            className={`btn-gold group w-10 h-10 rounded-full flex items-center justify-center transition ${
                                safePage === totalPages ? "opacity-30 cursor-not-allowed" : ""
                            }`}
                            style={{
                                background: "rgba(201,168,76,0.08)",
                                border: "1px solid rgba(201,168,76,0.25)",
                            }}
                        >
                            <ChevronRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                                style={{ color: "#C9A84C" }}
                            />
                        </button>
                    </nav>
                )}
            </div>
        </div>
    );
}
