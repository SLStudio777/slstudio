import LangSwitch from "../../components/common/LangSwitch";
import ImpactStats from "../../components/common/ImpactStats";
import HeroWave from "../../components/common/HeroWave";
import PortfolioPlayer from "../../components/pages/portfolio/PortfolioPlayer";
import { portfolioSections } from "@/data/portfolioTracks";

const SITE = "https://www.slstudio.pro";

export const metadata = {
  title: "Portfolio — Moja muzyka",
  description: "Jazz, blues, rock, metal, dark folk, pop i klasyka — piosenki, które napisałem, grałem w zespołach i odrestaurowałem ze starych nagrań.",
  alternates: { canonical: `${SITE}/pl/portfolio`, languages: { en: `${SITE}/portfolio`, pl: `${SITE}/pl/portfolio`, "x-default": `${SITE}/portfolio` } },
};

export default function PortfolioPagePl() {
  const totalTracks = portfolioSections.reduce((n, s) => n + s.tracks.length, 0);
  const genreCount = portfolioSections.length;
  const stats = [
    { value: "30", caption: "lat muzyki" },
    { value: String(genreCount), caption: "gatunków" },
    { value: String(totalTracks), caption: "utworów" },
  ];
  return (
    <div className="relative py-10">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[560px] max-w-full -translate-x-1/2 rounded-full bg-[#C9A84C]/[0.07] blur-3xl" />
      <LangSwitch active="pl" enHref="/portfolio" plHref="/pl/portfolio" />
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-wide leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
        Portfolio — Moja <span className="text-[#f5b942]">muzyka</span>
      </h1>
      <div className="max-w-xl mb-6"><HeroWave /></div>
      <div className="mb-8 max-w-2xl"><ImpactStats items={stats} /></div>
      <div className="mb-10 max-w-3xl space-y-4 leading-relaxed text-white/65">
        <p>Trzydzieści lat grania w zespołach, odtwarzania starych nagrań i pisania własnej muzyki — jazz, blues, rock, metal, dark folk, pop i klasyka. Większość tych piosenek przetrwała tylko na zużytych taśmach i starych nagraniach wideo; przywróciłem je do życia.</p>
      </div>
      <PortfolioPlayer lang="pl" />
    </div>
  );
}
