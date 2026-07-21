"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { posts } from "@/data/posts";

// Automatic article cover: when the current path matches a post in the
// registry (src/data/posts.js), its card cover is rendered at the very top
// of the article, above the title. One rule for every article - no
// per-article setup, and new articles get it for free the moment they are
// added to the registry. List pages don't match any href, so nothing shows.
export default function ArticleCover() {
    const pathname = usePathname();
    const clean = pathname ? pathname.replace(/\/+$/, "") || "/" : "";
    const post = posts.find((p) => p.href === clean);
    if (!post || !post.image) return null;

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <div
                className="rounded-2xl overflow-hidden w-full aspect-[16/9] relative"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                />
                {/* soft fade into the page background so the cover sets the
                    mood without competing with the title below */}
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,0.45) 100%)",
                    }}
                />
            </div>
        </div>
    );
}
