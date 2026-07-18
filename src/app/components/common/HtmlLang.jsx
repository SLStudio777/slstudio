"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// The root layout renders <html lang="en"> and every page shares it, so
// translated routes would otherwise advertise the wrong language. Setting the
// lang here (instead of via headers() in the layout) keeps the whole tree
// statically generated — using headers() would force dynamic rendering for every
// route. Runs on the client and flips <html lang>: "pl" on /pl paths, "ru" on
// Russian articles (their slugs end in "-ru"), "en" everywhere else.
function langFor(pathname) {
    if (!pathname) return "en";
    if (pathname.startsWith("/pl")) return "pl";
    if (pathname.endsWith("-ru")) return "ru";
    return "en";
}

export default function HtmlLang() {
    const pathname = usePathname();

    useEffect(() => {
        const lang = langFor(pathname);
        if (document.documentElement.lang !== lang) {
            document.documentElement.lang = lang;
        }
    }, [pathname]);

    return null;
}
