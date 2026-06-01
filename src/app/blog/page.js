"use client";
import { useState } from "react";
import { posts } from "@/data/posts";
import PostCard from "@/app/components/blog/PostCard";
import NumberBtn from "@/app/components/pagination/NumberBtn";
const categories = ["All", "Technics", "Review", "Tutorials", "Mixing & Mastering", "Industry Insights"];
const PER_PAGE = 6;

export default function BlogPage() {
    const [active, setActive] = useState("All");
    const [page, setPage] = useState(1);

    const filtered = active === "All"
        ? posts
        : posts.filter(p => p.category === active);

    const totalPages = Math.ceil(filtered.length / PER_PAGE);
    const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const handleCategory = (cat) => {
        setActive(cat);
        setPage(1);
    };

    return (
        <div className="mt-16 mb-20">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        Studio Notes
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mt-2">
                        Blog
                    </h1>
                    <p className="text-white/40 text-base mt-4 max-w-xl">
                        Tutorials, tips, and honest insights on mixing, mastering, and music production.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategory(cat)}
                            className="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-widest transition"
                            style={{
                                backgroundColor: active === cat ? "#C9A84C" : "rgba(255,255,255,0.05)",
                                color: active === cat ? "#000" : "rgba(255,255,255,0.5)",
                                border: active === cat ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.05)"
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {paginated.map((post, i) => (
                        <PostCard key={i} post={post} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-white/30 text-sm">
                        No articles in this category yet.
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-12">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-4 py-2 rounded-lg text-sm transition"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.05)",
                                color: page === 1 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                                border: "1px solid rgba(255,255,255,0.05)",
                                cursor: page === 1 ? "not-allowed" : "pointer"
                            }}
                        >
                            ←
                        </button>
                        {Array.from({length: totalPages}, (_, i) => i + 1).map(el => (
                            <NumberBtn
                                key={el}
                                page={page}  
                                onClick={() => setPage(el)}  
                                num={el} 
                            />
                       ))}
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="px-4 py-2 rounded-lg text-sm transition"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.05)",
                                color: page === totalPages ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                                border: "1px solid rgba(255,255,255,0.05)",
                                cursor: page === totalPages ? "not-allowed" : "pointer"
                            }}
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}