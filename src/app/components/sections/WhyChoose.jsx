import { User, RefreshCw, Zap, Heart } from "lucide-react";

const reasons = [
    {
        icon: User,
        title: "Direct Access to a Real Producer",
        description: "When you contact SL Studio, your track doesn't get passed around. Serhii personally handles every project — listening, mixing, mastering, communicating. No surprises."
    },
    {
        icon: RefreshCw,
        title: "Revisions Until You're Happy",
        description: "Every project includes multiple revision rounds at no extra cost. We keep adjusting until the track sounds exactly the way you want it — no pressure to sign off before you're ready."
    },
    {
        icon: Zap,
        title: "Delivered in 3–5 Business Days",
        description: "Once your files are in, work starts immediately. Most projects are back with you within 3–5 business days. Revisions typically turned around within 24 hours."
    },
    {
        icon: Heart,
        title: "Any Source Material, Any Genre",
        description: "Stems, rough mix, rehearsal recording, phone demo, decade-old archive — whatever you have works as a starting point. Blues, rock, metal, pop, jazz, electronic, folk — every genre gets the same level of attention."
    },
];

export default function WhyChoose() {
    return (
        <section className="py-16 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                    Why SL Studio
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                    Why Choose SL Studio
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reasons.map((r, i) => (
                    <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex gap-6">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                             style={{backgroundColor: "rgba(201,168,76,0.1)"}}>
                            <r.icon className="w-6 h-6" style={{color: "#C9A84C"}} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-base text-white">{r.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{r.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
