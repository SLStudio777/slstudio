"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function HeroCard({ icon: Icon, title, description, href }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            href={href}
            className="hero-card p-5 rounded-2xl flex flex-col gap-4 transition-all duration-300 cursor-pointer relative overflow-hidden"
            style={{
                background: hovered
                    ? "rgba(201,168,76,0.07)"
                    : "rgba(255,255,255,0.02)",
                border: hovered
                    ? "1px solid rgba(201,168,76,0.35)"
                    : "1px solid rgba(255,255,255,0.05)",
                boxShadow: hovered ? "0 8px 28px rgba(201,168,76,0.10)" : "none",
                transform: hovered ? "translateY(-3px)" : "translateY(0)",
                textDecoration: "none",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Угловой блик — статичный отсвет сверху слева */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "60%",
                height: "60%",
                background: "radial-gradient(ellipse at 0% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
            }}/>

            <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10"
                style={{ backgroundColor: hovered ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.1)" }}>
                <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
            </div>
            <h2 className="text-base font-semibold text-white relative z-10">{title}</h2>
            <p className="text-white/55 text-sm leading-relaxed flex-1 relative z-10">{description}</p>
            <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg w-fit relative z-10"
                style={{
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(201,168,76,0.08)",
                }}>
                Learn More
                <ArrowRight
                    size={14}
                    style={{
                        transform: hovered ? "translateX(3px)" : "translateX(0)",
                        transition: "transform 0.2s ease",
                    }}
                />
            </div>
        </Link>
    );
}
