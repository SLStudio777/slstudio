import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="py-12">
            <div className="rounded-2xl p-10 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto relative overflow-hidden"
                style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                {/* glow */}
                <div style={{
                    position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
                    width: "300px", height: "200px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}/>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-wide relative z-10">
                    Ready to transform your sound?
                </h2>
                <p className="text-white/65 text-[15px] relative z-10">
                    Free preview of your track. No commitment.
                </p>
                <Link
                    href="/free-track-preview"
                    className="btn-gold relative z-10 inline-flex items-center gap-2 font-semibold px-10 py-4 rounded-xl text-sm"
                    style={{
                        background: "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
                        backgroundSize: "200% auto",
                        color: "#161616",
                        boxShadow: "0 0 30px rgba(201,168,76,0.25)",
                    }}
                >
                    Send Your Track →
                </Link>
            </div>
        </section>
    );
}
