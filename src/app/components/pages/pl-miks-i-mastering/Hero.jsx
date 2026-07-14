import Image from "next/image";
import Link from "next/link";
import HeroWave from "../../common/HeroWave";
import LangSwitch from "../../common/LangSwitch";

export default function Hero() {
    return (
        <section className="mt-16 mb-10">
            <LangSwitch active="pl" enHref="/mixing-mastering" plHref="/pl/miks-i-mastering" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-4">
                <div className="flex flex-col gap-6 md:justify-between">
                    <div className="flex flex-col gap-10">
                        <span className="
                            text-white/40
                            text-xs
                            uppercase
                            tracking-[0.3em]
                        ">
                            Studio · Warszawa
                        </span>
                        <div className="relative">
                            <div className="hero-title-glow" aria-hidden="true" />
                            <h1 className="
                                relative
                                text-4xl md:text-6xl
                                font-semibold
                                leading-tight
                                tracking-wide
                            ">
                                Miks i{" "}
                                <span className="text-gold2">
                                    Mastering
                                </span>
                            </h1>
                        </div>
                        <div className="max-w-2xl">
                            <HeroWave />
                        </div>
                        <p className="
                            text-xl md:text-2xl
                            text-white/60
                            leading-relaxed
                            max-w-2xl
                        ">
                            Miks i mastering online — studio w Warszawie, dla artystów z całej Polski
                        </p>
                        <p className="text-white/65 text-[16px] leading-relaxed max-w-2xl">
                            Wyślij ślady, roboczy miks albo starą realizację sprzed lat — odsyłam dopracowany, gotowy do publikacji utwór. Zdalnie, każdy gatunek, szybki termin.
                        </p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <a
                                href="#demos"
                                className="btn-gold inline-flex items-center gap-2 text-black font-semibold px-6 py-3 rounded-xl text-sm"
                                style={{ backgroundColor: "#C9A84C", boxShadow: "0 0 24px rgba(201,168,76,0.25)" }}
                            >
                                Posłuchaj różnicy ↓
                            </a>
                            <Link href="/pl/darmowy-fragment" className="text-white/55 hover:text-[#f5b942] transition text-sm">
                                albo wyślij utwór od razu →
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                        {[
                            { value: "300+", label: "Zmiksowanych utworów" },
                            { value: "10+", label: "Lat za konsolą" },
                            { value: "3–5 dni", label: "Typowy termin realizacji" },
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-xl md:text-2xl font-semibold text-[#f5b942]">{s.value}</span>
                                <span className="text-white/55 text-xs uppercase tracking-widest">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full aspect-[16/9] md:aspect-[4/3] relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Serhii-Lazariev-02.webp"
                        alt="Serhii Lazariev — miks i mastering, studio w Warszawie"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 1024px"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}
