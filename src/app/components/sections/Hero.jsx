"use client";
import Image from "next/image";
import Link from "next/link";
import { User, RefreshCw, Clock } from "lucide-react";
import HeroCard from "../cards/HeroCard";
import HeroWave from "../common/HeroWave";
import HeroStats from "../common/HeroStats";
import LangSwitch from "../common/LangSwitch";
import { servicesData } from "@/data/temporaryData";

const stats = [
    { value: "300+", label: "Tracks Mixed & Mastered" },
    { value: "10+", label: "Years Behind the Board" },
    { value: "Any Genre", label: "From Blues to Electronic" },
];

// Same facts already stated in the Why Choose section below — surfaced
// here too, compact, to fill out row 2 next to the (naturally taller)
// About Me column instead of leaving it empty.
const trustBullets = [
    { icon: User, text: "Direct access to a real producer — no agencies, no middlemen" },
    { icon: RefreshCw, text: "Revisions included until you're happy" },
    { icon: Clock, text: "Most projects delivered in 3–5 business days" },
];

export default function Hero() {
    return (
        <section className="mt-12 mb-10">
            {/* Row 1 — pitch + services vs. photo. The two are independently
                aligned: cards' bottom lands exactly on the photo's bottom,
                regardless of what comes after in row 2. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                <div className="flex flex-col gap-10 md:justify-between mobile-reflow">
                    {/* Headline block — tight rhythm, no dead gaps.
                        H1: "From Raw to Ready." — 18 characters, well under
                        the ~21–23 char ceiling observed for a single line at
                        this font size/column width (the old "Welcome to SL
                        Studio" was 21 chars and just barely fit). Doesn't
                        repeat service names (those live on the H2 service
                        cards + subheadline) and doesn't collide with the
                        "Mixing & Mastering" H1 already used on
                        /mixing-mastering. */}
                    <div className="flex flex-col gap-6 [@media(max-width:767px)]:order-1">
                        <div>
                            <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
                                Warsaw, Poland
                            </span>
                            <div className="relative mt-3">
                                <div className="hero-title-glow" aria-hidden="true" />
                                <h1 className="relative text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
                                    From Raw to <span className="text-[#f5b942]">Ready</span>
                                </h1>
                            </div>
                        </div>
                        {/* Living waveform — shared component, also used on the
                            Mixing & Mastering and Arrangement hero pages */}
                        <HeroWave />
                        {/* Link now lives INSIDE the subheadline paragraph, right
                            after the closing sentence — reads as "finish the
                            sentence, then here's the button" instead of sitting
                            on its own line. Removes one full flex gap (24px)
                            plus a separate line's height compared to the
                            previous standalone-Link version. */}
                        <p className="text-white/70 text-md md:text-lg leading-relaxed">
                            A Warsaw studio for mixing, mastering, arrangement and production. Send a rough demo, an old recording, or just an idea — I'll take it from there.{" "}
                            <Link href="/free-track-preview" className="text-[#f5b942] hover:text-[#C9A84C] transition whitespace-nowrap">
                                Get a free preview →
                            </Link>
                        </p>
                    </div>
                    {/* Services block — promoted right under the pitch, doing the
                        job the old CTA buttons used to do (each card is its own
                        call to action). justify-between on the parent pins this
                        to the bottom of row 1, matching the photo's bottom. */}
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

                {/* Photo column — a small right-aligned EN/PL strip sits above
                    the photo; the photo (flex-1) fills the rest of the stretched
                    column, so its bottom still lands on the service-cards bottom
                    while its top drops by the strip's height. Section height is
                    unchanged (the left column still defines the row height). */}
                <div className="flex flex-col [@media(max-width:767px)]:order-2">
                    <div className="flex justify-end mb-2 h-8 items-center">
                        <LangSwitch active="en" enHref="/" plHref="/pl" />
                    </div>
                    <div className="w-full flex-1 min-h-0 aspect-[16/9] md:aspect-auto relative rounded-xl overflow-hidden">
                        <Image
                            src="/images/Serhii-Lazariev.webp"
                            alt="Serhii Lazariev — mixing and mastering engineer in his Warsaw studio"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 1024px"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>

            {/* Row 2 — stats+trust vs. About Me. items-stretch + justify-between
                on the left mirrors row 1's trick: clarifier/stats pinned to the
                top, trust bullets pinned to the bottom, matching whatever height
                About Me's (naturally taller) paragraphs end up needing. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 items-stretch">
                <div className="flex flex-col gap-6 md:justify-between [@media(max-width:767px)]:order-4">
                    {/* Price clarifier + stats — moved here from the old CTA row */}
                    <div className="flex flex-col gap-4">
                        <p className="text-white/45 text-xs uppercase tracking-widest">
                            For independent artists · from $39 per track · remote, worldwide
                        </p>
                        <HeroStats items={stats} />
                    </div>
                    {/* Trust bullets — fills the space that used to sit empty
                        beside About Me */}
                    <div className="flex flex-col gap-3">
                        {trustBullets.map(({ icon: Icon, text }, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                                    <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                                </div>
                                <span className="text-white/65 text-sm">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About me — full column width now (was max-w-md), so the same
                    copy wraps into fewer, longer lines and the block reads
                    shorter/less stretched next to the photo above it */}
                <div className="flex flex-col gap-3 [@media(max-width:767px)]:order-5">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        Guitarist · Producer · Engineer
                    </span>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
                        About me
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                        I'm Serhii Lazariev - guitarist, vocalist, and music producer based in Warsaw, Poland. Blues-rock, funk, jazz-rock, indie — I've been in it long enough to know what makes a recording feel alive.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                        Send me what you have — a phone recording, a guitar sketch, a half-finished demo. We figure out together what the track actually needs. Mixing, mastering, arrangement, new parts. Sometimes a full overhaul, sometimes just a few touches.
                    </p>
                    <Link href="/contact" className="text-[#f5b942] hover:text-[#C9A84C] transition leading-relaxed w-fit">
                        Send me what you've got.
                    </Link>
                </div>
            </div>
        </section>
    );
}
