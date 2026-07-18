import Link from "next/link";

const categoryMap = {
    "Tutorials": "Tutorials",
    "Technics": "Technics",
    "Review": "Review",
    "Mixing & Mastering": "Mixing & Mastering",
    "Industry Insights": "Industry Insights",
};

export default function BlogHeader({topic, date, title, description}) {
    return (
        <div className="mb-12">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
                <Link
                    href="/blog"
                    className="text-white/30 text-xs uppercase tracking-widest hover:text-gold2 transition"
                >
                    Blog
                </Link>
                <span className="text-white/15 text-xs">→</span>
                <Link
                    href={`/blog?category=${encodeURIComponent(topic)}`}
                    className="text-xs uppercase tracking-widest px-2.5 py-1 rounded-lg transition hover:opacity-80"
                    style={{
                        background: "rgba(201,168,76,0.1)",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.2)",
                    }}
                >
                    {topic}
                </Link>
                <span className="text-white/15 text-xs">·</span>
                <span className="text-white/30 text-xs">{date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-wide leading-tight mb-4">
                {title}
            </h1>

            {/* Author byline */}
            <div className="flex items-center gap-2 mb-6 text-sm flex-wrap">
                <span className="text-white/40">By</span>
                <Link
                    href="/about"
                    className="font-medium transition hover:opacity-80"
                    style={{ color: "#C9A84C" }}
                >
                    Serhii Lazariev
                </Link>
                <span className="text-white/25">·</span>
                <span className="text-white/40">
                    Guitarist, producer & mixing engineer at SL Studio
                </span>
            </div>

            <p className="text-white/65 text-lg leading-relaxed">
                {description}
            </p>
        </div>
    )
}
