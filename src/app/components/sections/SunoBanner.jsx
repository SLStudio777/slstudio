"use client";
import Link from "next/link";
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

// Slim promo strip for the Suno/AI finishing service. Self-contained block —
// it sits below the hero and never touches the hero grid alignment.
// All text comes from labels (English default) so the strip can be reused on
// the Polish home via a labels prop, same pattern as the other sections.
const DEFAULTS = {
    heading: "Made a track with Suno or Udio?",
    text: "I turn AI generations into release-ready songs \u2014 stem separation, artifact cleanup, live instruments, and a human mix & master.",
    cta: "Packages from $39",
    href: "/suno-track-finishing",
};

export default function SunoBanner({ labels }) {
    const t = { ...DEFAULTS, ...labels };
    const [hovered, setHovered] = useState(false);
    return (
        <section className="mb-12">
            <Link
                href={t.href}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="flex items-center gap-4 rounded-2xl px-5 py-4 md:px-6"
                style={{
                    background: "linear-gradient(90deg, rgba(201,168,76,0.10), rgba(201,168,76,0.02) 55%, rgba(201,168,76,0.08))",
                    border: hovered ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(201,168,76,0.22)",
                    boxShadow: hovered ? "0 0 30px rgba(201,168,76,0.10)" : "none",
                    transition: "border 0.2s ease, box-shadow 0.2s ease",
                }}
            >
                <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
                >
                    <Sparkles className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-[15px]">{t.heading}</p>
                    <p className="text-white/60 text-sm leading-relaxed hidden sm:block">{t.text}</p>
                </div>
                <span
                    className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold flex-shrink-0"
                    style={{ color: "#f5b942" }}
                >
                    {t.cta}
                    <ArrowRight
                        className="w-4 h-4"
                        style={{ transform: hovered ? "translateX(4px)" : "none", transition: "transform 0.2s ease" }}
                    />
                </span>
            </Link>
        </section>
    );
}
