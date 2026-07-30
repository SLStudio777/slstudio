import LangSwitch from "../components/common/LangSwitch";
import ImpactStats from "../components/common/ImpactStats";
import HeroWave from "../components/common/HeroWave";
import PortfolioPlayer from "../components/pages/portfolio/PortfolioPlayer";
import { portfolioSections } from "@/data/portfolioTracks";

const SITE = "https://www.slstudio.pro";

export const metadata = {
  title: "Portfolio — My Music",
  description: "Jazz, blues, rock, metal, dark folk, pop and classics — songs I wrote, played in bands and restored from old recordings over thirty years.",
  alternates: { canonical: `${SITE}/portfolio`, languages: { en: `${SITE}/portfolio`, pl: `${SITE}/pl/portfolio`, "x-default": `${SITE}/portfolio` } },
  openGraph: {
    title: "Portfolio — My Music | SL Studio",
    description: "Jazz, blues, rock, metal, dark folk, pop and classics — songs I wrote, played in bands and restored from old recordings over thirty years.",
    url: `${SITE}/portfolio`,
    siteName: "SL Studio",
    type: "website",
    images: [{ url: "/images/og-image.png", alt: "SL Studio music portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — My Music | SL Studio",
    description: "Jazz, blues, rock, metal, dark folk, pop and classics — songs I wrote, played in bands and restored from old recordings over thirty years.",
    images: ["/images/og-image.png"],
  },
};

export default function PortfolioPage() {
  const totalTracks = portfolioSections.reduce((n, s) => n + s.tracks.length, 0);
  const genreCount = portfolioSections.length;
  const stats = [
    { value: "30", caption: "years of music" },
    { value: String(genreCount), caption: "genres" },
    { value: String(totalTracks), caption: "songs" },
  ];
  return (
    <div className="relative py-10">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[560px] max-w-full -translate-x-1/2 rounded-full bg-[#C9A84C]/[0.07] blur-3xl" />
      <LangSwitch active="en" enHref="/portfolio" plHref="/pl/portfolio" />
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-wide leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
        Portfolio — My <span className="text-[#f5b942]">Music</span>
      </h1>
      <div className="max-w-xl mb-6"><HeroWave /></div>
      <div className="mb-8 max-w-2xl"><ImpactStats items={stats} /></div>
      <div className="mb-10 max-w-3xl space-y-4 leading-relaxed text-white/65">
        <p>Thirty years of playing in bands, restoring old recordings and writing my own music — jazz, blues, rock, metal, dark folk, pop and classics. Most of these songs survived only on worn-out tapes and old videos; I brought them back to life. Press play.</p>
      </div>
      <PortfolioPlayer lang="en" />
    </div>
  );
}
