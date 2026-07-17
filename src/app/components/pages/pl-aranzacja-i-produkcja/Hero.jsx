import Image from "next/image";
import Link from "next/link";
import HeroWave from "../../common/HeroWave";
import LangSwitch from "../../common/LangSwitch";

export default function Hero() {
  return (
    <section className="mt-10 mb-10">
      <LangSwitch
        active="pl"
        enHref="/arrangement"
        plHref="/pl/aranzacja-i-produkcja"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-4">
        <div className="flex flex-col gap-6 md:justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
              Produkcja online · Warszawa / cała Polska
            </span>
            <div className="relative">
              <div className="hero-title-glow" aria-hidden="true" />
              <h1 className="relative text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
                Aranżacja i <span className="text-gold2">produkcja</span>
              </h1>
            </div>
            <div className="max-w-2xl">
              <HeroWave />
            </div>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
              Od surowego pomysłu do kompletnego utworu gotowego do publikacji
            </p>
            <p className="text-white/65 text-[16px] leading-relaxed max-w-2xl">
              Notatka głosowa, riff gitarowy, szkic MIDI albo nagranie z próby
              wystarczą, żeby zacząć. Buduję aranżację wokół Twojego pomysłu,
              dobieram właściwe instrumenty i doprowadzam produkcję do końca —
              bez wygładzania charakteru, przez który ten pomysł w ogóle był
              wart nagrania.
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
                Posłuchaj przemiany ↓
              </a>
              <Link
                href="/pl/darmowy-fragment"
                className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-[#f5b942] transition border border-white/10 hover:border-[#C9A84C]/40"
              >
                Wyślij pomysł bezpłatnie →
              </Link>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Posłucham materiału i przygotuję krótką koncepcję produkcyjną albo
              uczciwą ocenę, zanim zdecydujesz się na pełną realizację.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
            {[
              { value: "300+", label: "Gotowych realizacji" },
              { value: "10+", label: "Lat doświadczenia" },
              { value: "Każdy gatunek", label: "Od bluesa po elektronikę" },
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
            src="/images/Serhii-Lazariev-03.webp"
            alt="Serhii Lazariev — producent muzyczny i aranżer w SL Studio w Warszawie"
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
