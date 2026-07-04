"use client";
import Image from "next/image";
import HeroCard from "../cards/HeroCard";
import { servicesData } from "@/data/temporaryData";

const stats = [
    { value: "300+", label: "Tracks Mixed & Mastered" },
    { value: "10+", label: "Years Behind the Board" },
    { value: "Any Genre", label: "From Blues to Electronic" },
];

export default function Hero() {
    return (
        <section className="mt-16 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                {/* Left */}
                <div className="flex flex-col gap-10">
                    {/* Headline block — tight rhythm, no dead gaps */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                            Welcome to the <span className="text-[#f5b942]">Creative Studio.</span>
                        </h1>
                        {/* Living waveform — mirrored around a center line like a real DAW
                            waveform, trailing off toward the photo on desktop */}
                        <div className="hero-wave relative flex items-center gap-[3px] w-full md:w-[calc(100%+3rem)] md:-mr-12" style={{ height: "56px" }} aria-hidden="true">
                            {Array.from({ length: 72 }).map((_, i) => {
                                const organic =
                                    Math.abs(Math.sin(i * 0.35)) * 55 +
                                    Math.abs(Math.sin(i * 1.7)) * 30 +
                                    ((i * 7) % 13);
                                return (
                                    <span
                                        key={i}
                                        style={{
                                            height: `${Math.round(10 + Math.min(organic, 88))}%`,
                                            animationDelay: `${(i % 9) * 0.22}s`,
                                            animationDuration: `${2.2 + (i % 5) * 0.35}s`,
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <div
                            className="w-full rounded-xl p-5"
                            style={{
                                background: "rgba(201,168,76,0.05)",
                                borderLeft: "3px solid #C9A84C",
                            }}
                        >
                            <p className="text-white/70 text-md md:text-lg leading-relaxed">
                                A Warsaw studio for mixing, mastering, arrangement and production — where your music reaches its full potential.
                            </p>
                        </div>
                        <div className="flex items-center gap-6 flex-wrap">
                            <a
                                href="#demos"
                                className="btn-gold inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl text-sm"
                                style={{
                                    backgroundColor: "#C9A84C",
                                    boxShadow: "0 0 24px rgba(201,168,76,0.25)",
                                }}
                            >
                                Hear the Difference ↓
                            </a>
                            <a
                                href="/contact"
                                className="text-white/55 hover:text-[#f5b942] transition text-sm"
                            >
                                or get in touch →
                            </a>
                        </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Professional Audio Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                        {servicesData.map(el => (
                            <HeroCard
                                key={el.id}
                                icon={el.icon}
                                title={el.title}
                                description={el.description}
                                href={el.href}
                            />
                        ))}
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                        {stats.map((s, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-2xl md:text-3xl font-semibold text-[#f5b942]">
                                    {s.value}
                                </span>
                                <span className="text-white/55 text-xs uppercase tracking-widest">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — stretches to match the left column, photo absorbs the height */}
                <div className="flex flex-col gap-6 md:self-stretch">
                    <div className="w-full aspect-[16/9] md:aspect-auto md:flex-1 md:min-h-[320px] relative rounded-xl overflow-hidden">
                        <Image
                            src="/images/Serhii-Lazariev.webp"
                            alt="Serhii Lazariev — mixing and mastering engineer in his Warsaw studio"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 1024px"
                            loading="eager"
                        />
                    </div>

                    {/* About me */}
                    <div className="flex flex-col gap-3 pt-2 border-t border-white/5">
                        <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                            Guitarist · Producer · Engineer
                        </span>
                        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
                            About me
                        </h2>
                        <p className="text-white/70 leading-relaxed max-w-md">
                            I'm Serhii Lazariev - guitarist, vocalist, and music producer based in Warsaw, Poland.
                            Blues-rock, funk, jazz-rock, indie — I've been in it long enough to know what makes a recording feel alive.
                        </p>
                        <p className="text-white/70 leading-relaxed max-w-md">
                            Send me what you have — a phone recording, a guitar sketch, a half-finished demo.
                            We figure out together what the track actually needs. Mixing, mastering, arrangement, new parts.
                            Sometimes a full overhaul, sometimes just a few touches.
                        </p>
                        <a href="/contact" className="text-[#f5b942] hover:opacity-75 transition leading-relaxed max-w-md">
                            Send me what you've got.
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}