import Image from "next/image";
import Link from "next/link";
import HeroWave from "../../common/HeroWave";
import HeroStats from "../../common/HeroStats";
import LangSwitch from "../../common/LangSwitch";

export default function Hero() {
  return (
    <section className="mt-8 mb-10">
      <LangSwitch
        active="en"
        enHref="/arrangement"
        plHref="/pl/aranzacja-i-produkcja"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-4">
        <div className="flex flex-col gap-5 md:justify-between">
          <div className="flex flex-col gap-5">
            <span className="text-white/50 text-xs uppercase tracking-[0.3em]">
              Online Production · Warsaw / Worldwide
            </span>
            <div className="relative">
              <div className="hero-title-glow" aria-hidden="true" />
              <h1 className="relative text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
                Arrangement &amp; <span className="text-gold2">Production</span>
              </h1>
            </div>
            <div className="max-w-2xl">
              <HeroWave />
            </div>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
              From a rough idea to a complete, release-ready track
            </p>
            <p className="text-white/65 text-[16px] leading-relaxed max-w-2xl">
              A voice memo, guitar riff, MIDI sketch or rehearsal take is enough
              to start. I build the arrangement around your idea, add the right
              instruments and finish the production without sanding away the
              personality that made the idea worth recording.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#demos"
                className="btn-gold inline-flex items-center gap-2 text-black font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  backgroundColor: "#C9A84C",
                  boxShadow: "0 0 24px rgba(201,168,76,0.25)",
                }}
              >
                Hear the Difference ↓
              </a>
              <Link
                href="/free-track-preview"
                className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-[#f5b942] transition border border-white/10 hover:border-[#C9A84C]/40"
              >
                Send Your Idea for Free →
              </Link>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              I will listen to your material and prepare a short production
              concept or honest assessment before you book the full project.
            </p>
          </div>
          <HeroStats
            items={[
              { value: "300+", label: "Tracks Completed" },
              { value: "10+", label: "Years Producing" },
              { value: "Any Genre", label: "Blues to Electronic" },
            ]}
          />
        </div>
        <div className="w-full aspect-[16/9] md:aspect-[4/3] relative rounded-xl overflow-hidden">
          <Image
            src="/images/Serhii-Lazariev-03.webp"
            alt="Serhii Lazariev, music producer and arrangement engineer at SL Studio in Warsaw"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
