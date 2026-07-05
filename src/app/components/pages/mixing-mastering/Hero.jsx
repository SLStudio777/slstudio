import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="mt-16 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div className="flex flex-col gap-6">
                    <span className="
                        text-white/40
                        text-xs
                        uppercase
                        tracking-[0.3em]
                    ">
                        Mixing Service
                    </span>
                    <div className="relative">
                        <div className="hero-title-glow" aria-hidden="true" />
                        <h1 className="
                            relative
                            text-4xl md:text-6xl
                            font-semibold
                            leading-tight
                            tracking-wide
                        ">
                            Mixing &{" "}
                            <span className="text-gold2">
                                Mastering
                            </span>
                        </h1>
                    </div>
                    <p className="
                        text-xl md:text-2xl
                        text-white/60
                        leading-relaxed
                        max-w-2xl
                    ">
                        When every instrument finally finds its place
                    </p>
                    <p className="text-white/65 text-[16px] leading-relaxed max-w-2xl">
                        Send your stems, rough mix, or old studio recording — I return a polished, release-ready track. Remote workflow, any genre, fast turnaround.
                    </p>
                    <div className="flex items-center gap-6 flex-wrap">
                        <a
                            href="#demos"
                            className="btn-gold inline-flex items-center gap-2 text-black font-semibold px-6 py-3 rounded-xl text-sm"
                            style={{ backgroundColor: "#C9A84C", boxShadow: "0 0 24px rgba(201,168,76,0.25)" }}
                        >
                            Hear the Difference ↓
                        </a>
                        <Link href="/contact" className="text-white/55 hover:text-[#f5b942] transition text-sm">
                            or send your track directly →
                        </Link>
                    </div>
                    {/* Trust strip — real numbers, visible to visitors who land
                        here directly from search, without ever seeing the homepage */}
                    <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                        {[
                            { value: "300+", label: "Tracks Mixed & Mastered" },
                            { value: "10+", label: "Years Behind the Board" },
                            { value: "3–5 Days", label: "Typical Turnaround" },
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-xl md:text-2xl font-semibold text-[#f5b942]">{s.value}</span>
                                <span className="text-white/55 text-xs uppercase tracking-widest">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full aspect-[16/9] md:aspect-auto md:h-full md:min-h-[320px] relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Serhii-Lazariev-02.webp"
                        alt="Serhii Lazariev"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 1024px"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}
