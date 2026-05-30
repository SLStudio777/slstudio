import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="py-16">
            <div className="rounded-2xl p-10 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto"
                 style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)"}}>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                    Ready to transform your sound?
                </h2>
                <p className="text-white/40 text-sm">
                    First listen is always free. No commitment.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
                    style={{backgroundColor: "#C9A84C"}}
                >
                    Send Your Track →
                </Link>
            </div>
        </section>
    );
}
