function ProTip({ children }) {
    return (
        <div className="rounded-xl p-5 flex gap-3 items-start mt-auto"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <span className="text-base flex-shrink-0 font-bold" style={{ color: "#C9A84C" }}>★</span>
            <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#C9A84C" }}>Pro Tip</p>
                <p className="text-white/70 text-sm leading-relaxed">{children}</p>
            </div>
        </div>
    );
}

export default function Section1() {
    return (
        <section className="mt-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 md:p-10 flex flex-col gap-6">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        The Story
                    </span>
                    <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed">
                        <p>
                            Once someone sent me a voice message. Literally — they hummed a melody into their phone somewhere in the kitchen, you could hear a dripping tap in the background. And wrote: "here's an idea, I don't know what to do with it."
                        </p>
                        <p>
                            I listened five times. Then I picked up my guitar.
                        </p>
                        <p>
                            Three days later they received a complete track — with live guitars, bass, atmospheric keys and percussion. The same melody they hummed in the kitchen, but now it sounded like a song. They wrote back saying they didn't recognize it — in the best way possible.
                        </p>
                        <p>
                            Arrangement for me is translation. You hear something inside, and I help that something come out as real music. I don't impose my taste — I listen to what you want to say and find the instruments that say it best.
                        </p>
                    </div>
                    <ProTip>
                        Don't worry about the quality of what you send. A voice memo with a tap in the background is a perfectly valid starting point — the performance and the idea are what matter. Everything else is my job.
                    </ProTip>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 md:p-10 flex flex-col gap-6">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        What I Can Build
                    </span>
                    <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed">
                        <p>
                            I work across all genres — blues-rock, funk, indie, pop, metal, jazz, electronic. My personal background gives me a deep understanding of live instruments and groove, but I bring the same attention to every style.
                        </p>
                        <p>
                            You send what you have — a sketch, a riff, MIDI, a voice recording. We talk about what the result should sound like. I build the arrangement, send you a demo, you hear the direction and tell me what to change. It's always a conversation, never a one-way delivery.
                        </p>
                        <p>
                            Whether you want to add one instrument or create a full orchestral sound — I work with your vision and bring it to life.
                        </p>
                    </div>
                    <ProTip>
                        References are gold. Find two or three songs that have the feel, the instrumentation, or the energy you're going for — and share them. It gets us to the right direction faster than any description.
                    </ProTip>
                </div>
            </div>
        </section>
    )
}
