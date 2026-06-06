import { Shield, MessageCircle, CreditCard, Music, Sliders, Guitar } from "lucide-react";
import Link from "next/link";

const services = [
    { icon: Sliders, title: "Mastering Only", price: "from $25", description: "Final processing of your ready mix. Optimized for streaming, competitive loudness, delivered in WAV and MP3.", featured: false },
    { icon: Music, title: "Mixing & Mastering", price: "from $60", description: "Full mix of all your tracks plus mastering. Works with stems or a rough mix you want taken to release level.", featured: true },
    { icon: Guitar, title: "Arrangement & Production", price: "from $110", description: "From idea to finished track. Instruments, structure, mix and master. Final price depends on the scope.", featured: false },
];

const payment = [
    { icon: Shield, title: "50% upfront", description: "The rest after you approve the result. No risk on your side." },
    { icon: MessageCircle, title: "Talk first, pay after", description: "Exact price confirmed after we discuss your project. First consultation is always free." },
    { icon: CreditCard, title: "PayPal & bank transfer", description: "Working with clients worldwide. No location limitations." },
];

export default function Pricing() {
    return (
        <section className="py-12 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">Pricing</span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">Simple, Transparent Pricing</h2>
                <p className="text-white/40 text-sm mt-3">No hidden fees. Exact price confirmed after discussing your project.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {services.map(({ icon: Icon, title, price, description, featured }, i) => (
                    <div key={i} className="rounded-2xl p-5 flex flex-col gap-3"
                        style={{
                            background: featured ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)",
                            border: featured ? "1px solid rgba(201,168,76,0.35)" : "1px solid rgba(255,255,255,0.05)",
                            boxShadow: featured ? "0 0 40px rgba(201,168,76,0.07)" : "none",
                        }}>
                        {featured && (
                            <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full self-start"
                                style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>
                                Most Popular
                            </span>
                        )}
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                            <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                        </div>
                        <div>
                            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{title}</p>
                            <p className="text-2xl font-semibold" style={{ color: "#C9A84C" }}>{price}</p>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed flex-1">{description}</p>
                        <Link href="/contact"
                            className="py-2 rounded-xl text-xs font-semibold text-center transition hover:opacity-90 mt-1"
                            style={featured
                                ? { background: "#C9A84C", color: "#161616" }
                                : { background: "rgba(201,168,76,0.08)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.25)" }}>
                            Get Started
                        </Link>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {payment.map(({ icon: Icon, title, description }, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "rgba(201,168,76,0.08)" }}>
                            <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                        </div>
                        <div>
                            <p className="font-medium text-sm text-white mb-1">{title}</p>
                            <p className="text-white/40 text-xs leading-relaxed">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
