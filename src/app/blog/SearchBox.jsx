"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

// The only interactive piece of the blog listing. Everything else is
// server-rendered so crawlers see the full article list.
export default function SearchBox() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const urlQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(urlQuery);

    // keep input in sync when URL changes externally (back/forward)
    useEffect(() => {
        setQuery(urlQuery);
    }, [urlQuery]);

    const handleSearch = (value) => {
        setQuery(value);
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("q", value);
        } else {
            params.delete("q");
        }
        params.delete("page");
        const qs = params.toString();
        router.replace(qs ? `/blog?${qs}` : "/blog", { scroll: false });
    };

    return (
        <div className="relative flex-1 max-w-md">
            <input
                type="search"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="w-full pl-4 pr-10 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 text-white/80 placeholder:text-white/50 focus:outline-none focus:border-gold/60 transition [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
                <button
                    onClick={() => handleSearch("")}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full text-white/50 hover:text-white/80 hover:bg-white/10 transition"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            )}
        </div>
    );
}
