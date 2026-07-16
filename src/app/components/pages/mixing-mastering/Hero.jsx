import Image from "next/image";
import Link from "next/link";
import HeroWave from "../../common/HeroWave";
import LangSwitch from "../../common/LangSwitch";

export default function Hero() {
  return (
    <section className="mt-16 mb-10">
      <LangSwitch
        active="en"
        enHref="/mixing-mastering"
        plHref="/pl/miks-i-mastering"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-4">
        <div className="flex flex-col gap-6 md:justify-between">
          <div className="flex flex-col gap-10">
            <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
              Online Mixing Service · Warsaw / Worldwide
            </span>

            <div className="relative">
              <div className="hero-title-glow" aria-hidden="true" />
              <h1 className="relative text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
                Mixing &amp; <span className="text-gold2">Mastering</span>
              </h1>
            </div>

            <div className="max-w-2xl">
              <HeroWave />
            </div>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
              When every instrument finally finds its place
            </p>

            <p className="text-white/65 text-[16px] leading-relaxed max-w-2xl">
              Send your stems, rough mix or old studio recording. I return a
              polished, release-ready track with clarity, depth and a solid low
              end. Based in Warsaw, working remotely with artists worldwide.
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
                Get a Free Preview →
              </Link>
            </div>

            <p className="text-white/40 text-xs leading-relaxed">
              Hear a processed 30–60 second section before you decide whether to
              book the full mix. No card and no obligation.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
            {[
              { value: "300+", label: "Tracks Mixed & Mastered" },
              { value: "10+", label: "Years Behind the Board" },
              { value: "3–5 Days", label: "Typical Turnaround" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-xl md:text-2xl font-semibold text-[#f5b942]">
                  {item.value}
                </span>
                <span className="text-white/55 text-xs uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full aspect-[16/9] md:aspect-[4/3] relative rounded-xl overflow-hidden">
          <Image
            src="/images/Serhii-Lazariev-02.webp"
            alt="Serhii Lazariev, mixing and mastering engineer at SL Studio in Warsaw"
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
