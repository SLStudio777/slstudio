import RelatedPosts from "@/app/components/blog/RelatedPosts";
import BlogJsonLd from "@/app/components/blog/BlogJsonLd";
import BlogHeader from "@/app/components/blog/BlogHeader";

export const metadata = {
    title: "My Reverb & Delay Chain for Vocals — The Setup I Use on Every Mix",
    alternates: {
        canonical: "https://www.slstudio.pro/blog/vocal-reverb-delay-chain"
    },
    description: "Five sends, zero guesswork. The exact reverb and delay chain I use on vocal mixes — room, plate, microshift, delay, chamber. How it works and why.",
    openGraph: {
        title: "My Reverb & Delay Chain for Vocals — The Setup I Use on Every Mix",
        description: "Five sends, zero guesswork. The exact reverb and delay chain I use on vocal mixes — room, plate, microshift, delay, chamber. How it works and why.",
        type: "article",
        url: "https://www.slstudio.pro/blog/vocal-reverb-delay-chain",
        siteName: "SL Studio",
        images: ["/images/blog-vocal-fx-cover.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "My Reverb & Delay Chain for Vocals — The Setup I Use on Every Mix",
        description: "Five sends, zero guesswork. The exact reverb and delay chain I use on vocal mixes — room, plate, microshift, delay, chamber. How it works and why.",
    },
    keywords: [
        "vocal reverb delay chain",
        "reverb delay vocals mixing",
        "best vocal reverb plugins",
        "how to mix vocals reverb",
        "vocal mixing chain 2026",
    ],
    other: {
        "article:published_time": "2026-05-10"
    },
};

export default function VocalReverbDelayPage() {
    return (
        <div className="mt-16 mb-20">
            <BlogJsonLd slug="vocal-reverb-delay-chain" />
            <div className="max-w-3xl mx-auto">

                <BlogHeader
                    topic="Mixing & Mastering"
                    date="May 10, 2026"
                    title="My Reverb & Delay Chain for Vocals — The Setup I Use on Every Mix"
                    description="Most vocal mixes sound washed out for one reason: reverb stacked on reverb with no system behind it. Here is the five-send chain that fixed that for me — and how I actually use it."
                />

                <div className="flex flex-col gap-10 text-white/70 text-[15px] leading-relaxed">

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Why Most Vocal Mixes Sound Washed Out</h2>
                        <p>The problem is almost never that you are using reverb. It is that you are using too many different reverbs in too many different places with no system behind them. When you put reverb directly on the channel, stack another instance on a bus, and throw a delay on top of that — each one starts fighting the others for space. The vocal gets buried, the mix loses clarity, and no amount of EQ will dig you out of that hole.</p>
                        <p>I see this in sessions regularly. A vocal that sounds great dry becomes unrecognisable once the effects are on — not because the reverbs are bad, but because there is no logic connecting them. Each plugin is making its own decision about where the vocal should live in space, and the result is a mess.</p>
                        <p>The fix is simpler than most people think: build a send system, set it once, and blend to taste for every <a href="/mixing-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>mix</a>. Here is mine.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">The System: Five Sends, Always Ready</h2>
                        <p>I keep five sends set up in every session before a single track gets loaded. Room, plate, microshift, delay, chamber. Each one does something specific. None of them overlap. Together they cover everything a vocal needs in three-dimensional space.</p>
                        <p>Everything starts at zero. All five sends are at zero when I open a new session. Then I play the song and slowly bring each one up until I hear it contributing — not until I hear the effect itself, but until I hear the vocal respond. That distinction matters more than any specific setting.</p>

                        <div className="rounded-xl p-5 flex flex-col gap-2" style={{background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)"}}>
                            <p className="text-white font-semibold text-sm">The Five Sends</p>
                            <div className="flex flex-col gap-1 mt-1">
                                {[
                                    "01 — Room (Seventh Heaven / Bricasti)",
                                    "02 — Plate (Lustrous Plates / Liquid Sonics)",
                                    "03 — Microshift (Eventide H3000)",
                                    "04 — Eighth Note Delay (Waves Repeater)",
                                    "05 — Chamber (Seventh Heaven / Bricasti)",
                                ].map((item, i) => (
                                    <p key={i} className="text-white/50 text-sm font-mono">{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Send 1 — Room</h2>
                        <p><strong className="text-white">Plugin:</strong> <a href="https://www.liquidsonics.com/software/seventh-heaven/" target="_blank" style={{color: "#C9A84C", textDecoration: "underline"}}>Seventh Heaven by Liquid Sonics</a> — Bricasti M7 emulation</p>
                        <p>The room is the foundation of the whole chain. It is the first thing I reach for and the send I am most careful not to overdo. The Bricasti hardware is one of the most respected reverb units in professional studio work, and Seventh Heaven gets remarkably close to it in software.</p>
                        <p>I use the Studio A room setting with a decay time around 0.70 seconds. Short, natural, present. The goal here is not to hear the reverb — it is to feel the vocal sitting in a physical space. If you can point to the room reverb and say "there it is," it is too much. Pull it back until the dry vocal feels slightly unnatural without it. That is the level.</p>
                        <div className="rounded-xl p-4 flex gap-3" style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)"}}>
                            <span className="text-lg">💡</span>
                            <p className="text-white/60 text-sm leading-relaxed">The room reverb is what separates a vocal that sounds recorded in a real space from one that sounds like it was tracked in a closet. Even 10% blend makes the difference. The listener will never identify it — they will just feel that something is right.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Send 2 — Plate</h2>
                        <p><strong className="text-white">Plugin:</strong> <a href="https://www.liquidsonics.com/software/lustrous-plates/" target="_blank" style={{color: "#C9A84C", textDecoration: "underline"}}>Lustrous Plates by Liquid Sonics</a> (included in the Slate Digital All Access bundle)</p>
                        <p>The plate is where the character of the vocal starts to come through. Where the room adds physical space, the plate adds musical warmth and dimension. Lustrous Plates is genuinely one of the best-sounding plate reverbs available — smooth, musical, and it sits in a mix without drawing attention to itself the way cheaper plates tend to.</p>
                        <p>The feature I rely on most here is the tempo-synced pre-delay. Locking the pre-delay to the BPM of the track makes a significant difference in how well the reverb grooves with the song. I usually start at a 16th note triplet — it creates just enough separation between the dry vocal and the reverb tail to keep the transient clear without the reverb feeling detached. If the song has a looser feel I might move to a straight 16th. If it is uptempo and tight, I go shorter.</p>
                        <p>The built-in EQ and dynamic control in Lustrous Plates also means I rarely need to add anything on top. High-pass the low end of the reverb return to stop it muddying the low mids, pull a little off the top if it gets harsh — everything else the preset usually handles well.</p>
                    </div>

                    {/* Image 1 — after Plate section */}
                    <div className="rounded-2xl overflow-hidden w-full">
                        <img loading="lazy" decoding="async"
                            src="/images/blog-vocal-fx-1.webp"
                            alt="Lustrous Plates reverb plugin — vocal plate send settings"
                            className="w-full object-cover"
                            style={{maxHeight: "400px"}}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Send 3 — Microshift</h2>
                        <p><strong className="text-white">Plugin:</strong> <a href="https://www.eventideaudio.com/plug-ins/microshift/" target="_blank" style={{color: "#C9A84C", textDecoration: "underline"}}>Eventide MicroShift</a> — H3000 MicroPitch setting</p>
                        <p>This is the one people most often leave out — and the one that most often makes the difference between a vocal that sounds wide and a vocal that sounds small. The MicroShift is not a reverb and it is not a traditional chorus. It is a subtle pitch-spread effect that makes a vocal feel three-dimensional without adding any visible reverb tail.</p>
                        <p>The H3000 MicroPitch setting works by shifting two detuned copies of the vocal very slightly — one up, one down, each delayed by a few milliseconds. The result sounds like the vocal is occupying more physical space than it actually does. Used lightly as a send rather than an insert, it adds width that feels organic rather than processed. Push it too hard and it starts to sound like an obvious effect. At the right level you will never be able to point to it — you will just notice the vocal sounds more present and three-dimensional than before.</p>
                        <p>Eventide plugins in general are significantly underused in most workflows. The <a href="https://www.eventideaudio.com" target="_blank" style={{color: "#C9A84C", textDecoration: "underline"}}>H9 series</a> specifically has some of the most useful and distinctive processing available at any price point.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Send 4 — Eighth Note Delay</h2>
                        <p><strong className="text-white">Plugin:</strong> <a href="https://www.waves.com/plugins/waves-repeater" target="_blank" style={{color: "#C9A84C", textDecoration: "underline"}}>Waves Repeater</a> — CLA-inspired eighth note preset</p>
                        <p>The eighth note delay is the send that most directly controls the energy and width of the vocal in the mix. A well-placed delay makes the vocal feel larger without feeling cluttered. A poorly placed one turns the whole mix into an echo chamber.</p>
                        <p>The Waves Repeater preset I use is close to a straight eighth note but not quite — the slight imprecision is actually part of what makes it feel musical rather than mechanical. The key to making it work is the routing: I send the eighth note delay into the plate reverb send. The delay feeds into the reverb, which washes out the repeats so they blend into the space rather than sitting on top of everything. You get all the width and dimension the delay creates without the slap feeling aggressive or distracting.</p>
                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)"}}>
                            <span className="text-lg flex-shrink-0">🔑</span>
                            <p className="text-white/60 text-sm leading-relaxed"><strong className="text-white">The routing trick:</strong> delay send → plate reverb send. The delay feeds into the plate instead of running dry. The repeats get washed and blend into the space. This one change turns a distracting delay into something that just makes the mix feel bigger.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Send 5 — Chamber</h2>
                        <p><strong className="text-white">Plugin:</strong> <a href="https://www.liquidsonics.com/software/seventh-heaven/" target="_blank" style={{color: "#C9A84C", textDecoration: "underline"}}>Seventh Heaven</a> — Sunset Chamber setting</p>
                        <p>The chamber is the deepest of the three reverbs and the one I interfere with the least after setting it up. Where the room gives physical presence and the plate gives musical character, the chamber gives depth — the sense that the vocal exists inside a larger space than the song itself.</p>
                        <p>Same approach as the plate: pre-delay synced to the BPM of the track. Once that is set and the blend level is dialled in, I mostly leave it. The chamber tends to be the most subtle of the three reverbs in isolation but the most noticeable when you bypass it — which is exactly where you want a mix element to live.</p>
                        <p>Together, the room, plate, and chamber each contribute something different to the spatial picture of the vocal. Blending small amounts of all three creates the kind of depth that is very difficult to achieve with a single reverb at any setting.</p>
                    </div>

                    {/* Image 2 — after Chamber section */}
                    <div className="rounded-2xl overflow-hidden w-full">
                        <img loading="lazy" decoding="async"
                            src="/images/blog-vocal-fx-2.webp"
                            alt="Seventh Heaven reverb plugin — room and chamber settings for vocals"
                            className="w-full object-cover"
                            style={{maxHeight: "400px"}}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">How I Actually Use These Sends in a Mix</h2>
                        <p>Everything starts at zero. All five sends are at zero when I open a session. I play the song and bring each send up slowly — not to a specific number, but until I hear the vocal responding to it. The level that works depends entirely on the song, the production density, and what the vocal needs.</p>
                        <p>Dense productions need less reverb — there is already a lot happening in the mid-range and the reverb tails will fight the other elements for space. Sparse arrangements can carry more reverb because there is room for it. Folk, acoustic, and singer-songwriter material often benefits from more plate and chamber. Hip-hop and pop usually need the plate pulled back and the microshift pushed forward. Blues and rock sit somewhere in the middle — the room and chamber do most of the work, the plate adds just enough shine on the top end.</p>
                        <p>The point of having a system is not that the settings are the same every time. It is that the decisions are the same every time. You are always asking: how much room does this vocal need? Where does it need to sit in the stereo field? How deep should the tail be? The sends give you one knob for each question. That simplicity is what makes sessions move quickly.</p>

                        <div className="rounded-2xl p-6 flex flex-col gap-3" style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                            <h3 className="text-white font-semibold">The System at a Glance</h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    {send: "Room", plugin: "Seventh Heaven — Studio A, 0.70s decay", role: "Physical presence — feel, not hear"},
                                    {send: "Plate", plugin: "Lustrous Plates — tempo-synced pre-delay", role: "Musical warmth and vocal character"},
                                    {send: "Microshift", plugin: "Eventide H3000 MicroPitch", role: "Width and three-dimensional presence"},
                                    {send: "Delay", plugin: "Waves Repeater — eighth note → feeds plate", role: "Energy, width, sense of scale"},
                                    {send: "Chamber", plugin: "Seventh Heaven — Sunset Chamber", role: "Depth — the space behind the space"},
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-start py-2" style={{borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none"}}>
                                        <p className="text-white font-medium text-sm w-24 flex-shrink-0">{item.send}</p>
                                        <div className="flex-1">
                                            <p className="text-white/60 text-sm">{item.plugin}</p>
                                            <p className="text-white/30 text-xs mt-0.5">{item.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">One More Thing — The Chorus Trick</h2>
                        <p>When a chorus needs to hit harder — when the production lifts and the vocal needs to feel bigger and more open — I reach for one additional send that I do not use in verses: a longer, lusher plate setting with more pre-delay and a slightly brighter character.</p>
                        <p>The approach is simple: automate the send level so it comes up only on the chorus. The same vocal, the same chain, but now there is more air and depth behind it. When you come back to the verse and that send drops away, the vocal feels more intimate and focused. The contrast is what makes both sections hit harder than either would on its own.</p>
                        <p>This is one of those techniques that sounds obvious when you describe it but makes an immediate difference when you hear it in context. Try it on the next session where the chorus feels like it is not quite landing the way it should.</p>
                    </div>

                    <div className="rounded-2xl p-6 flex flex-col gap-3" style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                        <h3 className="text-white font-semibold">The Underlying Logic</h3>
                        <p className="text-white/60 text-sm leading-relaxed">Reverb and delay are not decoration. They are spatial tools — they tell the listener where the vocal exists in physical space. Used with a system, they create depth, width, and dimension that makes a <a href="/mixing-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>professional mix</a> feel like it was recorded in a real, coherent space. Used without a system, they compete with each other and cloud everything they touch.</p>
                        <p className="text-white/60 text-sm leading-relaxed mt-2">Build the sends once. Learn what each one does. Then mix by feel — which is exactly how it should work.</p>
                    </div>

                    {/* CTA */}
                    <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                         style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                        <h3 className="text-xl font-semibold text-white">Want this chain on your vocal?</h3>
                        <p className="text-white/50 text-sm max-w-md">Send your session, stems, or rough mix. First consultation is always free.</p>
                        <a href="/contact"
                           className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
                           style={{backgroundColor: "#C9A84C"}}>
                            Get in Touch →
                        </a>
                    </div>

                    <RelatedPosts slug="vocal-reverb-delay-chain" />

                </div>
            </div>
        </div>
    );
}