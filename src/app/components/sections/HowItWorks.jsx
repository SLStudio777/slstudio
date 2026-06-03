import { Shield, Clock, RefreshCw, Headphones } from "lucide-react";

const steps = [
    {
        icon: Headphones,
        step: "01",
        title: "Send Your Track",
        description: "Share your stems, rough mix, rehearsal recording, or demo — whatever you have. Any format, any quality."
    },
    {
        icon: RefreshCw,
        step: "02",
        title: "We Discuss the Direction",
        description: "Free consultation. I listen to your material and tell you exactly what I can do with it and how."
    },
    {
        icon: Shield,
        step: "03",
        title: "Work Begins",
        description: "Once we agree on the scope, I get to work. You get updates along the way — no black box."
    },
    {
        icon: Clock,
        step: "04",
        title: "Delivered in 3–5 Days",
        description: "You receive the finished track. Revisions included until you are completely happy with the result."
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                    The Process
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                    How It Works
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((s, i) => (
                    <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{backgroundColor: "rgba(201,168,76,0.1)"}}>
                                <s.icon className="w-5 h-5" style={{color: "#C9A84C"}} />
                            </div>
                            <span className="text-3xl font-bold" style={{color: "rgba(201,168,76,0.2)"}}>{s.step}</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}