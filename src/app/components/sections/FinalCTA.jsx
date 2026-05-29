import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="py-16">
            <div className="rounded-2xl p-12 text-center flex flex-col items-center gap-6"
                 style={{background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)", border: "1px solid rgba(201,168,76,0.2)"}}>
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                    Ready to Start?
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-wide max-w-2xl leading-tight">
                    Your track deserves to be heard.
                </h2>
                <p className="text-white/50 text-base leading-relaxed max-w-xl">
                    Send me your recording — rough mix, demo, rehearsal tape, voice memo. I will listen and tell you exactly what I can do with it. No commitment required.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
                        style={{backgroundColor: "#C9A84C"}}
                    >
                        Get Started — First Consultation Free
                    </Link>
                    <span className="text-white/30 text-sm">
                        Typical response within 24 hours
                    </span>
                </div>
            </div>
        </section>
    );
}