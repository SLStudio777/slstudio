"use client";

import { usePathname } from "next/navigation";
import { posts } from "@/data/posts";

// End-of-article CTA: rendered automatically for every article whose path is
// in the registry (src/data/posts.js), in the article's own language.
// Mirrors the ArticleCover approach - no per-article setup; list pages don't
// match any href, so nothing shows there.
const LABELS = {
    en: {
        title: "Want your track to sound like this?",
        text: "Send it in and get a free preview — hear the difference on your own song before you pay anything.",
        cta: "Get a free preview",
        href: "/free-track-preview",
    },
    pl: {
        title: "Chcesz, żeby Twój utwór brzmiał tak samo?",
        text: "Prześlij go i odbierz darmowy fragment — usłysz różnicę na własnej piosence, zanim cokolwiek zapłacisz.",
        cta: "Zamów darmowy fragment",
        href: "/pl/darmowy-fragment",
    },
    ru: {
        title: "Хотите, чтобы ваш трек звучал так же?",
        text: "Пришлите его и получите бесплатный фрагмент — услышите разницу на своей песне до оплаты.",
        cta: "Бесплатный фрагмент",
        href: "/free-track-preview",
    },
};

export default function ArticleCTA() {
    const pathname = usePathname();
    const clean = pathname ? pathname.replace(/\/+$/, "") || "/" : "";
    const post = posts.find((p) => p.href === clean);
    if (!post) return null;
    const t = LABELS[post.lang] || LABELS.en;

    return (
        <div className="max-w-3xl mx-auto px-4 md:px-0 mt-14 mb-16">
            <div
                className="rounded-2xl p-6 md:p-8 text-center"
                style={{
                    border: "1px solid rgba(201,168,76,0.35)",
                    background:
                        "linear-gradient(to bottom, rgba(201,168,76,0.08), rgba(201,168,76,0.02))",
                }}
            >
                <p className="text-xl md:text-2xl font-semibold text-white mb-2">{t.title}</p>
                <p className="text-white/70 text-[15px] mb-5">{t.text}</p>
                <a
                    href={t.href}
                    className="inline-block rounded-full px-8 py-3 font-semibold text-sm"
                    style={{ background: "#C9A84C", color: "#1b1b1b" }}
                >
                    {t.cta} →
                </a>
            </div>
        </div>
    );
}
