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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                {/* Left — stretched to match the (now taller) right column;
                    justify-between pins the pitch to the top and the services
                    block to the bottom instead of leaving dead space below it */}
                <div className="flex flex-col gap-10 md:self-stretch md:justify-between mobile-reflow">
                    {/* Headline block — tight rhythm, no dead gaps */}
                    <div className="flex flex-col gap-6 [@media(max-width:767px)]:order-1">
                        <div>
                            <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
                                Warsaw, Poland
                            </span>
                            <div className="relative mt-3">
                                <div className="hero-title-glow" aria-hidden="true" />
                                <h1 className="relative text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
                                    Welcome to <span className="text-[#f5b942]"><span className="tracking-widest">SL</span> Studio</span>
                                </h1>
                            </div>
                        </div>
                        {/* Living waveform — mirrored around a center line like a real DAW
                            waveform, trailing off toward the photo on desktop */}
                        <div className="hero-wave relative flex items-center gap-[2px] w-full" style={{ height: "56px" }} aria-hidden="true">
                            {Array.from({ length: 120 }).map((_, i) => {
                                const organic =
                                    Math.abs(Math.sin(i * 0.22)) * 55 +
                                    Math.abs(Math.sin(i * 1.1)) * 30 +
                                    ((i * 7) % 13);
                                return (
                                    <span
                                        key={i}
                                        style={{
                                            height: `${Math.round(16 + Math.min(organic, 82))}%`,
                                            // negative phase shift => one smooth crest travels
                                            // left-to-right, no per-bar jitter
                                            animationDelay: `${(-i * 0.075).toFixed(3)}s`,
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <p className="text-white/70 text-md md:text-lg leading-relaxed">
                            A Warsaw studio for mixing, mastering, arrangement and production — a place where your music comes alive.
                        </p>
                    </div>
                    {/* Services block — promoted right under the pitch, doing the
                        job the old CTA buttons used to do (each card is its own
                        call to action) */}
                    <div className="flex flex-col gap-6 [@media(max-width:767px)]:order-3">
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
                    </div>
                </div>

                {/* Right — stretches to match the left column, photo absorbs the height */}
                <div className="flex flex-col gap-6 md:self-stretch mobile-reflow">
                    <div className="w-full aspect-[16/9] md:aspect-auto md:flex-1 md:min-h-[320px] relative rounded-xl overflow-hidden [@media(max-width:767px)]:order-2">
                        <Image
                            src="/images/Serhii-Lazariev.webp"
                            alt="Serhii Lazariev — mixing and mastering engineer in his Warsaw studio"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 1024px"
                            loading="eager"
                        />
                    </div>

                    {/* Audience/price clarifier + stats — now living under the photo
                        instead of under the (removed) hero buttons */}
                    <div className="flex flex-col gap-4 [@media(max-width:767px)]:order-4">
                        <p className="text-white/45 text-xs uppercase tracking-widest">
                            For independent artists · from $25 per track · remote, worldwide
                        </p>
                        <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
                            {stats.map((s, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-xl md:text-2xl font-semibold text-[#f5b942]">
                                        {s.value}
                                    </span>
                                    <span className="text-white/55 text-xs uppercase tracking-widest">
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About me */}
                    <div className="flex flex-col gap-3 [@media(max-width:767px)]:order-5">
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