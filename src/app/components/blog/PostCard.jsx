import Link from "next/link";

export default function PostCard({ post }) {
    return (
        <Link 
            href={post.href}
            className="group rounded-xl border border-white/5 bg-white/[0.03] overflow-hidden hover:border-white/10 transition flex flex-col"
            style={{borderLeft: "3px solid #C9A84C"}}
        >
            <img loading="lazy" decoding="async"
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
        </Link>
    )
}
