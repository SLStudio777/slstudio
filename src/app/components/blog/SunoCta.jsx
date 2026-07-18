import Link from "next/link";

// Inline promo banner for the Suno guides: nudges readers who just made an AI
// track toward the paid finishing service. Dropped in twice per article — once
// after the first major section, once at the end. `lang` picks copy + href
// ("en" | "ru" → /suno-track-finishing, "pl" → /pl/suno-track-finishing).
const COPY = {
  en: {
    href: "/suno-track-finishing",
    text: "Made a track in Suno? I'll finish it to release quality — from $39.",
    cta: "Finish my track →",
  },
  ru: {
    href: "/suno-track-finishing",
    text: "Сделали трек в Suno? Доведу его до релизного качества — от $39.",
    cta: "Довести трек →",
  },
  pl: {
    href: "/pl/suno-track-finishing",
    text: "Masz utwór z Suno? Dopracuję go do jakości wydawniczej — od 39$.",
    cta: "Dokończ mój utwór →",
  },
};

export default function SunoCta({ lang = "en" }) {
  const { href, text, cta } = COPY[lang] ?? COPY.en;
  return (
    <div
      className="rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)",
        border: "1px solid rgba(201,168,76,0.3)",
      }}
    >
      <div className="flex gap-3 items-start flex-1">
        <span className="text-2xl flex-shrink-0">🎚️</span>
        <p className="text-white/80 text-base leading-relaxed font-medium">
          {text}
        </p>
      </div>
      <Link
        href={href}
        className="inline-block whitespace-nowrap text-center px-6 py-3 rounded-lg font-semibold text-sm transition hover:opacity-90 flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
          backgroundSize: "200% auto",
          color: "#161616",
        }}
      >
        {cta}
      </Link>
    </div>
  );
}
