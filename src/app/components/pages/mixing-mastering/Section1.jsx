function ProTip({ children }) {
    return (
        <div className="rounded-xl p-5 flex gap-3 items-start"
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
        <section className="mt-20">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 md:p-10 flex flex-col gap-6">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        The Process
                    </span>
                    <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed">
                        <p>
                            When someone sends me a track to mix, I spend the first ten minutes just listening. I don't touch anything. I listen and feel where it hurts. Where the bass is pressing too hard against the chest. Where the vocal is sinking and wants to come forward but can't. Where the guitar is cutting through the highs and stopping everything else from breathing.
                        </p>
                        <p>
                            It's like walking into a room where everyone is talking at once. My job isn't to make someone shut up — it's to make sure everyone is heard.
                        </p>
                        <p>
                            I start mixing from the bottom. Bass and drums first — they're the foundation, and if the foundation shakes, everything built on top will collapse no matter how beautifully it's decorated.
                        </p>
                        <p>
                            I work with low frequencies like a bomb disposal expert — careful, no unnecessary moves. One wrong cut and the track loses all its power. One extra boost and the speakers start rattling like an old refrigerator.
                        </p>
                        <p>
                            Once the low end settles into place, the other instruments start finding their own positions naturally. It's not magic — though sometimes it looks exactly like that.
                        </p>
                    </div>
                    <ProTip>
                        Send stems whenever you can — separate tracks for each instrument. Even a rough separation gives much more control than a stereo mix. No stems? Send what you have — I'll work with it.
                    </ProTip>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 md:p-10 flex flex-col gap-6">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        Guitars & Vocals
                    </span>
                    <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed">
                        <p>
                            Guitars are my personal passion and at the same time the most treacherous instrument in a mix. I'm a guitarist myself, and I can hear when a guitar was recorded right but sounds wrong. Sometimes it takes up too much space and pushes everything around it like that one guest at a party who always talks the loudest. Sometimes it does the opposite — hides and stays quiet when it should be singing. Finding that balance is a genuine pleasure.
                        </p>
                        <p>
                            Vocals, for me, are their own universe. The voice is the most alive instrument in any recording, and it senses the slightest disrespect. Too much processing and it turns plastic. Too little and it bounces around like an untamed horse. I look for the point where the voice sounds like a voice — alive, real, but sitting in the mix like it was always meant to be there.
                        </p>
                        <p>
                            Sometimes a track is missing a layer that was never recorded. This is where I sometimes turn to modern AI tools — not to replace live instruments, but to add that one detail that's missing. Like a painter who puts down the brush and uses their fingers instead — simply because it's more precise that way.
                        </p>
                        <p>
                            Mastering is the final look before stepping on stage. I check the track on three different systems — studio monitors, regular headphones, and a phone speaker. If it sounds good there, it's done.
                        </p>
                    </div>
                    <ProTip>
                        A reference track goes a long way. If you have a song that sounds the way you want yours to sound — send it. It tells me more about your vision in three seconds than a paragraph of description.
                    </ProTip>
                </div>
            </div>
        </section>
    )
}
