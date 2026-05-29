import { User, RefreshCw, Zap, Heart } from "lucide-react";

const reasons = [
    {
        icon: User,
        title: "You Work With Me Directly",
        description: "Your track doesn't get passed to an assistant or an automated tool. I personally listen, analyze, and handle every project from start to finish. When you write to me — you get me."
    },
    {
        icon: RefreshCw,
        title: "Revisions Until It's Right",
        description: "Up to 3 rounds of revisions included in every project. In practice, we usually nail it in one or two — because we align on the vision before I even start."
    },
    {
        icon: Zap,
        title: "Fast Turnaround",
        description: "Most projects delivered in 3 to 5 business days. I know how it feels to wait weeks for a mix — so I built my workflow around speed without sacrificing quality."
    },
    {
        icon: Heart,
        title: "Any Source, Any Genre",
        description: "Phone recording, rehearsal take, old demo from ten years ago — send what you have. Blues-rock, metal, pop, jazz, folk, electronic — no genre limitations, no judgment."
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