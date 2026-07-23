import LangSwitch from "../components/common/LangSwitch";
import PortfolioPlayer from "../components/pages/portfolio/PortfolioPlayer";
import { portfolioSections } from "@/data/portfolioTracks";

const SITE = "https://www.slstudio.pro";

export const metadata = {
  title: "Portfolio — My Music | SL Studio",
  description:
    "Jazz, blues, rock, metal, dark folk, pop and classics — songs I wrote, played in bands and restored from old recordings over thirty years.",
  alternates: {
    canonical: `${SITE}/portfolio`,
    languages: {
      en: `${SITE}/portfolio`,
      pl: `${SITE}/pl/portfolio`,
      "x-default": `${SITE}/portfolio`,
    },
  },
};

export default function PortfolioPage() {
  const totalTracks = portfolioSections.reduce((n, s) => n + s.tracks.length, 0);
  const genreCount = portfolioSections.length;
  const stats = [
    { value: "30", label: "years of music" },
    { value: String(genreCount), label: "genres" },
    { value: String(totalTracks), label: "songs" },
  ];
  return (
    <div className="relative py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#C9A84C]/[0.07] blur-3xl"
      />
      <LangSwitch active="en" enHref="/portfolio" plHref="/pl/portfolio" />
      <h1
        className="mt-4 mb-4 text-3xl md:text-4xl font-semibold tracking-wide"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Portfolio — My Music
      </h1>
      <div className="mb-6 h-px w-24 bg-gradient-to-r from-[#C9A84C] to-transparent" />
      <div className="mb-8 flex flex-wrap gap-x-10 gap-y-3">
        {stats.map((s) => (
          <div key={s.label}>
            <div
              className="text-xl md:text-2xl font-semibold text-[#f5b942]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {s.value}
            </div>
            <div className="text-xs uppercase tracking-wider text-white/40">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mb-10 max-w-3xl space-y-4 leading-relaxed text-white/65">
        <p>
          Thirty years of playing in bands, restoring old recordings and
          writing my own music — jazz, blues, rock, metal, dark folk, pop and
          classics. Most of these songs survived only on worn-out tapes and
          old videos; I brought them back to life. Press play.
        </p>
      </div>
      <PortfolioPlayer lang="en" />
    </div>
  );
}
