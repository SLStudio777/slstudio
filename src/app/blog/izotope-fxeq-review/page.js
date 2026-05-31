export const metadata = {
    title: "iZotope FXEQ Review — Frequency-Specific Effects for Mixing | SL Studio",
    alternates: {
        canonical: "https://www.slstudio.pro/blog/izotope-fxeq-review"
    },
    description: "iZotope FXEQ review — a plugin that lets you apply reverb, delay, saturation and modulation at specific frequencies. A detailed look at how it works in real mixing sessions.",
    keywords: [
        "izotope fxeq review",
        "frequency specific effects plugin",
        "izotope mixing plugin 2025",
        "creative eq plugin",
        "fxeq mixing mastering",
    ],
    other: {
        "article:published_time": "2025-10-05"
    },
};

export default function FXEQReviewPage() {
    return (
        <div className="mt-16 mb-20">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-white/30 text-xs uppercase tracking-widest">Review</span>
                        <span className="text-white/20 text-xs">·</span>
                        <span className="text-white/30 text-xs">October 5, 2025</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-semibold tracking-wide leading-tight mb-6">
                        iZotope FXEQ Review — Frequency-Specific Effects for Mixing
                    </h1>
                    <p className="text-white/50 text-lg leading-relaxed">
                        Every now and then a plugin drops that makes you stop and say — that is genuinely new. iZotope FXEQ is one of those. It takes tone-shaping and flips it entirely, letting you boost effects at specific frequencies rather than the audio signal itself.
                    </p>
                </div>

                <div className="flex flex-col gap-10 text-white/70 text-[15px] leading-relaxed">

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">What Is iZotope FXEQ?</h2>
                        <p>At its core, <a href="https://www.izotope.com" target="_blank" style={{color: "#C9A84C", textDecoration: "underline"}}>FXEQ</a> combines five effect modules — Saturation, Reverb, Delay, Modulation, and Lo-Fi — with a fully functional parametric EQ. The twist is that instead of boosting or cutting the audio signal itself, the EQ boosts the effects. Want reverb only at 1kHz? Or saturation only in the low mids without touching the top end? FXEQ makes that possible.</p>
                        <p>Everything runs in parallel — the dry signal stays intact while the processed signal is blended in. It functions like setting up multiple effect sends, except everything happens inside one interface. For <a href="/mixing-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>mixing and mastering</a> work where precision and creativity need to coexist, this is a genuinely useful concept.</p>
                    </div>

                    {/* YouTube embed replaced with image */}
                    <div className="rounded-2xl overflow-hidden w-full">
                        <img
                            src="/images/blog-fxeq.png"
                            alt="iZotope FXEQ plugin interface — frequency specific effects"
                            className="w-full object-cover"
                            style={{maxHeight: "400px"}}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">The Five Modules</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {name: "Saturation", desc: "Multiple flavors including Tape and Create modes. Adds warmth, grit, or harmonic sparkle at whatever frequency you target."},
                                {name: "Reverb", desc: "Hall, Chamber, and Plate. Each can be timed to the track tempo and shaped to specific frequency ranges."},
                                {name: "Delay", desc: "Classic, Reverse, and Crunch modes for rhythmic movement or experimental texture without affecting the full spectrum."},
                                {name: "Modulation", desc: "Four flavors including a doubler for widening vocals and guitars at precisely the frequencies that need it."},
                                {name: "Lo-Fi", desc: "Cassette, Radio, Vinyl, and Tape characters for nostalgic texture or deliberate imperfection in specific bands."},
                            ].map((m, i) => (
                                <div key={i} className="rounded-xl p-4 flex flex-col gap-1" style={{background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)"}}>
                                    <p className="text-white font-semibold text-sm">{m.name}</p>
                                    <p className="text-white/50 text-sm">{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">The EQ That Controls Effects</h2>
                        <p>The EQ section works like any familiar parametric — drag nodes, adjust Q, boost or cut. The difference is that each colored node corresponds to an effect module and applies that effect only to that part of the frequency spectrum.</p>
                        <p>In practice this means you can add Tape saturation only to the low mids, apply reverb to the high end while leaving the low end dry, or combine delay bands at different frequencies for a rhythmic stereo spread. Each of these would normally require multiple insert chains and send routing — FXEQ handles all of it in one place.</p>
                        <p>Additional tools include an FX Only mode for delta listening — hearing precisely what is being added — a limiter to prevent extreme effects from overloading the mix bus, and an Amount control that acts as a global wet/dry knob.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">In Practice — Guitars</h2>
                        <p>On an acoustic guitar track the frequency-specific approach immediately showed its value. Harmonic saturation in the upper mid range added presence and life without touching the warmth of the lower frequencies. A plate reverb targeted at the top end added air and dimension while the body of the guitar remained dry and focused.</p>
                        <p>The bypass comparison made the difference obvious — FXEQ took the guitar from competent to three-dimensional in a way that would have required several plugins and careful routing to achieve through conventional means. For <a href="/arrangement" style={{color: "#C9A84C", textDecoration: "underline"}}>arrangement work</a> where guitar layers need to occupy space without cluttering the mix, this kind of targeted processing is valuable.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">In Practice — Vocals</h2>
                        <p>Vocals are where FXEQ's frequency-specific approach is most immediately useful. The ability to add saturation to the presence range without affecting the body of the voice — or to apply reverb only to the upper harmonics while keeping the fundamental dry — solves problems that appear in almost every vocal mix.</p>
                        <p>The pre-delay and reverb decay timing options sync to BPM, which keeps effects feeling like part of the performance rather than something sitting on top of it. Combined with the modulation module for gentle stereo width, a complete vocal treatment is achievable within FXEQ alone.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Other Useful Applications</h2>
                        <ul className="flex flex-col gap-3 pl-2">
                            <li><strong className="text-white">Drums</strong> — Parallel saturation on the snare while adding reverb only to the overhead frequencies. The kick and low drum body remain dry and punchy while the upper presence gets treated independently.</li>
                            <li><strong className="text-white">Full mix processing</strong> — Creative Lo-Fi treatments applied only during breakdown sections by automating the Amount control. The transition from clean to degraded and back becomes a compositional tool.</li>
                            <li><strong className="text-white">Bus processing</strong> — Used as a send/return in FX Only mode, FXEQ becomes a creative parallel effects chain that adds dimension to grouped tracks without altering the dry signal at all.</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl p-6 flex flex-col gap-3"
                         style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                        <h3 className="text-white font-semibold">Final Verdict</h3>
                        <p className="text-white/60 text-sm leading-relaxed">iZotope FXEQ is a genuinely new approach to effects processing — not another emulation of existing hardware, but a plugin that does something conceptually different. The frequency-specific effects application solves real mixing problems while opening creative possibilities that conventional signal chains cannot easily replicate.</p>
                        <p className="text-white/60 text-sm leading-relaxed mt-2">It is fun to use in a way that most professional tools are not. That matters — tools that spark ideas and invite experimentation tend to produce better results than tools that just process. FXEQ belongs in a professional <a href="/mixing-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>mixing</a> toolkit.</p>
                        <div className="flex gap-6 mt-3 flex-wrap">
                            <div>
                                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Strengths</p>
                                <p className="text-white/60 text-sm">Genuinely novel concept, practical on guitars and vocals, creative Lo-Fi modes, good BPM sync</p>
                            </div>
                            <div>
                                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Limitations</p>
                                <p className="text-white/60 text-sm">Learning curve for the EQ-as-effect-control paradigm, can be easy to over-process</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                         style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                        <h3 className="text-xl font-semibold text-white">Want to hear what creative mixing can do for your track?</h3>
                        <p className="text-white/50 text-sm max-w-md">Send your recording and we will show you. First consultation is always free.</p>
                        <a href="/contact"
                           className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
                           style={{backgroundColor: "#C9A84C"}}>
                            Get in Touch →
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}