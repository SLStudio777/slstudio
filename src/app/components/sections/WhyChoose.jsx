"use client";
import { User, RefreshCw, Zap, Heart } from "lucide-react";

const reasons = [
    { icon: User, title: "Direct Access to a Real Producer", description: "When you contact SL Studio, your track doesn't get passed around. Serhii personally handles every project — listening, mixing, mastering, communicating. No surprises." },
    { icon: RefreshCw, title: "Revisions Until You're Happy", description: "Every project includes multiple revision rounds at no extra cost. We keep adjusting until the track sounds exactly the way you want it — no pressure to sign off before you're ready." },
    { icon: Zap, title: "Delivered in 3–5 Business Days", description: "Once your files are in, work starts immediately. Most projects are back with you within 3–5 business days. Revisions typically turned around within 24 hours." },
    { icon: Heart, title: "Any Source Material, Any Genre", description: "Stems, rough mix, rehearsal recording, phone demo, decade-old archive — whatever you have works as a starting point. Blues, rock, metal, pop, jazz, electronic, folk — every genre gets the same level of attention." },
];

export default function WhyChoose() {
    return (
        <section className="py-12 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">Why SL Studio</span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">Why Choose SL Studio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reasons.map(({ icon: Icon, title, description }, i) => (
                    <div key={i}
                        className="rounded-2xl p-6 flex gap-5 transition-all duration-200"
                        style={{ border: "1px solid rgba(255,255,255,0.05)", borderLeft: "3px solid #C9A84C", background: "rgba(255,255,255,0.02)" }}
                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.05)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.borderLeftColor = "#C9A84C"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderLeftColor = "#C9A84C"; }}
                    >
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                            <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <h3 className="font-semibold text-base text-white">{title}</h3>
                            <p className="text-white/65 text-[15px] leading-relaxed">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
