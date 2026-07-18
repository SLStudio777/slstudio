import Link from "next/link";

const LOCALES = { ru: "ru-RU", pl: "pl-PL", en: "en-US" };

// post.date is a machine-readable ISO "YYYY-MM-DD" (kept ISO for JSON-LD,
// sorting and sitemap). Render it in the post's own language. The date is
// parsed and formatted in UTC so the day never shifts with the viewer's
// timezone, and server/client output stays identical (no hydration mismatch).
function formatDate(iso, lang) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || "")) return iso; // safety: show as-is
    const d = new Date(`${iso}T00:00:00Z`);
    const out = new Intl.DateTimeFormat(LOCALES[lang] || LOCALES.en, {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(d);
    // ru-RU appends " г." — drop it to match the article header style
    return out.replace(/\s*г\.?$/, "");
}

// featured: full-width hero card (image beside text on md+)
// eager: above-the-fold cards load their cover immediately (LCP)
export default function PostCard({ post, featured = false, eager = false }) {
    if (featured) {
        return (
            <Link
                href={post.href}
                className="group rounded-2xl border border-white/5 border-l-[3px] border-l-gold bg-white/[0.03] overflow-hidden hover:border-white/10 hover:border-l-gold transition flex flex-col md:flex-row"
            >
                <div className="md:w-3/5 aspect-video shrink-0 overflow-hidden">
                    <img
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-3 justify-center flex-1">
                    <div className="flex items-center gap-2">
                        <span className="text-gold text-xs uppercase tracking-widest">Latest</span>
                        <span className="text-white/40 text-xs">·</span>
                        <span className="text-white/60 text-xs uppercase tracking-widest">{post.category}</span>
                        <span className="text-white/40 text-xs">·</span>
                        <span className="text-white/60 text-xs">{formatDate(post.date, post.lang)}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold group-hover:text-gold-bright transition leading-snug text-balance">
                        {post.title}
                    </h2>
                    <p className="text-white/65 text-sm md:text-base leading-relaxed">
                        {post.excerpt}
                    </p>
                    <span className="text-gold text-xs mt-2">Read more →</span>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={post.href}
            className="group rounded-2xl border border-white/5 border-l-[3px] border-l-gold bg-white/[0.03] overflow-hidden hover:border-white/10 hover:border-l-gold transition flex flex-col"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    loading={eager ? "eager" : "lazy"}
                    fetchPriority={eager ? "high" : "auto"}
                    decoding="async"
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                    <span className="text-white/60 text-xs uppercase tracking-widest">{post.category}</span>
                    <span className="text-white/40 text-xs">·</span>
                    <span className="text-white/60 text-xs">{formatDate(post.date, post.lang)}</span>
                </div>
                <h2 className="text-base md:text-lg font-semibold group-hover:text-gold-bright transition leading-snug">
                    {post.title}
                </h2>
                <p className="text-white/65 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                </p>
                <span className="text-gold text-xs mt-2">Read more →</span>
            </div>
        </Link>
    );
}
