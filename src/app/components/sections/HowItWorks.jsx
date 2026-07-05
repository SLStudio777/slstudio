"use client";
import { Shield, Clock, RefreshCw, Headphones } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

const steps = [
    {
        icon: Headphones,
        step: "01",
        title: "Send Your Track",
        time: "~ 2 min",
        description: "Share your stems, rough mix, rehearsal recording, or demo — whatever you have. Any format, any quality.",
        highlight: false,
        badge: null,
    },
    {
        icon: RefreshCw,
        step: "02",
        title: "We Discuss the Direction",
        time: "Same day",
        description: "Free consultation. I listen to your material and tell you exactly what I can do with it and how.",
        highlight: false,
        badge: null,
    },
    {
        icon: Shield,
        step: "03",
        title: "Work Begins",
        time: "1–3 days",
        description: "Once we agree on the scope, I get to work. You get updates along the way — no black box.",
        highlight: true,
        badge: null,
    },
    {
        icon: Clock,
        step: "04",
        title: "Delivered in 3–5 Days",
        time: "3–5 days",
        description: "You receive the finished track. Revisions included until you are completely happy with the result.",
        highlight: false,
        badge: "✓ Result",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-12 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">The Process</span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">How It Works</h2>
            </div>

            {/* Timeline connector — desktop only */}
            <div className="hidden lg:block relative mb-4" style={{ height: "12px" }}>
                <div style={{
                    position: "absolute",
                    left: "12.5%",
                    right: "12.5%",
                    top: "50%",
                    height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25) 10%, rgba(201,168,76,0.25) 90%, transparent)",
                }} />
                <div className="grid grid-cols-4 h-full">
                    {steps.map((s, i) => (
                        <div key={i} className="flex justify-center items-center" style={{ position: "relative", zIndex: 1 }}>
                            <div style={{
                                width: s.highlight ? "10px" : "6px",
                                height: s.highlight ? "10px" : "6px",
                                borderRadius: "50%",
                                background: s.highlight ? "#C9A84C" : "rgba(201,168,76,0.35)",
                                boxShadow: s.highlight ? "0 0 6px rgba(201,168,76,0.5)" : "none",
                            }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map(({ icon: Icon, step, title, time, description, highlight, badge }, i) => (
                    <ScrollReveal key={i} delay={i * 120}>
                        <div className="rounded-2xl p-6 flex flex-col gap-4 relative h-full"
                            style={highlight ? {
                                border: "1px solid rgba(201,168,76,0.4)",
                                background: "rgba(255,255,255,0.03)",
                                borderLeft: "3px solid #C9A84C",
                                boxShadow: "0 0 20px rgba(201,168,76,0.06)",
                            } : {
                                border: "1px solid rgba(255,255,255,0.05)",
                                background: "rgba(255,255,255,0.03)",
                                borderLeft: "3px solid rgba(201,168,76,0.4)",
                            }}>

                            {badge && (
                                <div style={{
                                    position: "absolute",
                                    top: "-11px",
                                    right: "16px",
                                    background: "rgba(201,168,76,0.15)",
                                    border: "1px solid rgba(201,168,76,0.35)",
                                    color: "#C9A84C",
                                    fontSize: "10px",
                                    fontWeight: "600",
                                    letterSpacing: "0.08em",
                                    padding: "2px 8px",
                                    borderRadius: "20px",
                                }}>
                                    {badge}
                                </div>
                            )}

                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                                    <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                                </div>
                                <span className="step-number text-3xl font-bold"
                                    style={{ color: highlight ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.25)" }}>
                                    {step}
                                </span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="font-semibold text-white">{title}</h3>
                                    <span className="text-xs px-2 py-0.5 rounded-full"
                                        style={{
                                            background: "rgba(255,255,255,0.05)",
                                            color: "rgba(255,255,255,0.3)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}>
                                        {time}
                                    </span>
                                </div>
                                <p className="text-white/65 text-[15px] leading-relaxed">{description}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
