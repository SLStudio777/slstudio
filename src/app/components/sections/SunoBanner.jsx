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
                    background:
                        "linear-gradient(90deg, rgba(201,168,76,0.10) 0%, rgba(255,255,255,0.045) 40%, rgba(255,255,255,0.035) 100%)",
                    border: hovered
                        ? "1px solid rgba(201,168,76,0.55)"
                        : "1px solid rgba(201,168,76,0.25)",
                    boxShadow: hovered
                        ? "0 0 44px rgba(201,168,76,0.22), inset 0 0 24px rgba(201,168,76,0.06)"
                        : "0 0 26px rgba(201,168,76,0.10), inset 0 0 18px rgba(201,168,76,0.04)",
                    transition: "border 0.2s ease, box-shadow 0.2s ease",
                }}
            >
                <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                        backgroundColor: "rgba(201,168,76,0.16)",
                        border: "1px solid rgba(201,168,76,0.35)",
                        boxShadow: "0 0 18px rgba(201,168,76,0.30)",
                    }}
                >
                    <Sparkles
                        className="w-5 h-5"
                        style={{
                            color: "#e8c97a",
                            filter: "drop-shadow(0 0 6px rgba(232,201,122,0.6))",
                        }}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-base">{t.heading}</p>
                    <p className="text-white/60 text-sm leading-relaxed hidden sm:block">{t.text}</p>
                </div>
                <span
                    className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold flex-shrink-0"
                    style={{
                        color: "#f5b942",
                        textShadow: hovered
                            ? "0 0 14px rgba(245,185,66,0.65)"
                            : "0 0 10px rgba(245,185,66,0.35)",
                        transition: "text-shadow 0.2s ease",
                    }}
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
