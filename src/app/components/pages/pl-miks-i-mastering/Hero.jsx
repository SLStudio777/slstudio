import Image from "next/image";
import Link from "next/link";
import HeroWave from "../../common/HeroWave";
import HeroStats from "../../common/HeroStats";
import LangSwitch from "../../common/LangSwitch";

export default function Hero() {
  return (
    <section className="mt-10 mb-10">
      <LangSwitch
        active="pl"
        enHref="/mixing-mastering"
        plHref="/pl/miks-i-mastering"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-4">
        <div className="flex flex-col gap-6 md:justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-white/50 text-xs uppercase tracking-[0.3em]">
              Miks online · Warszawa / cała Polska
            </span>
            <div className="relative">
              <div className="hero-title-glow" aria-hidden="true" />
              <h1 className="relative text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
                Miks i <span className="text-gold2">mastering</span>
              </h1>
            </div>
            <div className="max-w-2xl">
              <HeroWave />
            </div>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
              Kiedy każdy instrument wreszcie znajduje swoje miejsce
            </p>
            <p className="text-white/65 text-[16px] leading-relaxed max-w-2xl">
              Wyślij ślady, roboczy miks albo starsze nagranie. Otrzymasz
              dopracowany utwór z czytelnym wokalem, kontrolowanym dołem i
              przestrzenią, która nie znika po włączeniu głośnika telefonu.
              Pracuję w Warszawie i zdalnie w całej Polsce.
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
                Posłuchaj różnicy ↓
              </a>
              <Link
                href="/pl/darmowy-fragment"
                className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-[#f5b942] transition border border-white/10 hover:border-[#C9A84C]/40"
              >
                Odbierz bezpłatny fragment →
              </Link>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Najpierw usłyszysz 30–60 sekund obrobionego materiału. Bez karty,
              bez konta i bez zobowiązań.
            </p>
          </div>
          <HeroStats
            items={[
              { value: "300+", label: "Gotowych miksów" },
              { value: "10+", label: "Lat doświadczenia" },
              { value: "3–5 dni", label: "Typowy termin" },
            ]}
          />
        </div>
        <div className="w-full aspect-[16/9] md:aspect-[4/3] relative rounded-xl overflow-hidden">
          <Image
            src="/images/Serhii-Lazariev-02.webp"
            alt="Serhii Lazariev — realizator miksu i masteringu w SL Studio w Warszawie"
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
