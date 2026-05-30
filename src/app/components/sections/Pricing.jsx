import { Shield, MessageCircle, CreditCard, Music, Sliders, Guitar } from "lucide-react";

const services = [
    {
        icon: Sliders,
        title: "Mastering Only",
        price: "from $25",
        description: "Final processing of your ready mix. Optimized for streaming, competitive loudness, delivered in WAV and MP3."
    },
    {
        icon: Music,
        title: "Mixing & Mastering",
        price: "from $60",
        description: "Full mix of all your tracks plus mastering. Works with stems or a rough mix you want taken to release level.",
        featured: true
    },
    {
        icon: Guitar,
        title: "Arrangement & Production",
        price: "from $120",
        description: "From idea to finished track. Instruments, structure, mix and master. Final price depends on the scope."
    },
];

const payment = [
    {
        icon: Shield,
        title: "50% upfront",
        description: "The rest after you approve the result. No risk on your side."
    },
    {
        icon: MessageCircle,
        title: "Talk first, pay after",
        description: "Exact price confirmed after we discuss your project. First consultation is always free."
    },
    {
        icon: CreditCard,
        title: "PayPal & bank transfer",
        description: "Working with clients worldwide. No location limitations."
    },
];

export default function Pricing() {
    return (
        <section className="py-16 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10 text-center">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        Pricing
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-white/40 text-sm mt-3">
                        No hidden fees. Exact price confirmed after discussing your project.
                    </p>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {services.map((s, i) => (
                        <div key={i}
                             className="rounded-2xl p-6 flex flex-col gap-4"
                             style={{
                                 background: s.featured ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)",
                                 border: s.featured ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.05)"
                             }}>
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                 style={{backgroundColor: "rgba(201,168,76,0.1)"}}>
                                <s.icon className="w-5 h-5" style={{color: "#C9A84C"}} />
                            </div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{s.title}</p>
                                <p className="text-2xl font-semibold" style={{color: "#C9A84C"}}>{s.price}</p>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed flex-1">{s.description}</p>
                            {s.featured && (
                                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full self-start"
                                      style={{backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C"}}>
                                    Most Popular
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Payment info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {payment.map((p, i) => (
                        <div key={i} className="flex gap-4 p-5 rounded-xl"
                             style={{background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)"}}>
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                 style={{backgroundColor: "rgba(201,168,76,0.08)"}}>
                                <p.icon className="w-4 h-4" style={{color: "#C9A84C"}} />
                            </div>
                            <div>
                                <p className="font-medium text-sm text-white mb-1">{p.title}</p>
                                <p className="text-white/40 text-xs leading-relaxed">{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}