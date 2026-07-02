import BlogJsonLd from "@/app/components/blog/BlogJsonLd";
import Image from "next/image";
import BlogHeader from "@/app/components/blog/BlogHeader";

export const metadata = {
    title: "Blues Rock Mixing and Mastering — How I Hear This Genre",
    alternates: {
        canonical: "https://www.slstudio.pro/blog/blues-rock-mixing-mastering"
    },
    description: "A blues rock guitarist on mixing the genre he knows from the inside. Real workflow, real tools, real professional techniques — from someone who has played these songs, not just processed them.",
    openGraph: {
        title: "Blues Rock Mixing and Mastering — How I Hear This Genre",
        description: "A blues rock guitarist on mixing the genre he knows from the inside. Real workflow, real tools, real professional techniques — from someone who has played these songs, not just processed them.",
        type: "article",
        url: "https://www.slstudio.pro/blog/blues-rock-mixing-mastering",
        siteName: "SL Studio",
        images: ["/images/blog-blues-rock_1.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blues Rock Mixing and Mastering — How I Hear This Genre",
        description: "A blues rock guitarist on mixing the genre he knows from the inside. Real workflow, real tools, real professional techniques — from someone who has played these songs, not just processed them.",
    },
    other: {
        "article:published_time": "2025-01-21"
    },
    keywords: [
        "blues rock mixing",
        "blues rock mastering",
        "blues rock mixing service",
        "guitar mixing",
        "online mixing mastering blues rock",
        "parallel compression blues rock",
        "tube amp mixing",
    ],
};

const faqs = [
    {
        q: "Do you work with home recordings, not just professional studio sessions?",
        a: "Yes — and honestly, most of what comes in is exactly that. Rehearsal recordings, bedroom sessions, live captures on a phone. The quality of the source matters, but a well-performed recording in an imperfect environment can absolutely become a release-ready track. Blues rock recorded in a basement with the right feel beats a sterile studio recording every time."
    },
    {
        q: "How long does blues rock mixing and mastering take?",
        a: "Most projects are delivered within 3 to 5 business days. Albums and more complex projects are discussed individually. Revisions are usually turned around within 24 hours."
    },
    {
        q: "How many revisions are included?",
        a: "Up to three rounds on every project. In practice, clear reference tracks and upfront communication means we usually land it in one or two. I have never met a blues rock musician who did not have strong opinions about their guitar tone — which actually makes the revision process faster, not slower."
    },
    {
        q: "Can you work with stems or do you need the full session?",
        a: "Both work. Full stems give the most control. A well-prepared stereo mix can be mastered effectively. Grouped stems — guitars together, drums together, bass, vocals — are often the best balance between control and simplicity."
    },
    {
        q: "Do you only work with blues rock?",
        a: "No — SL Studio works across all genres. Blues rock is the genre I know most deeply as a player, but every project gets the same level of attention regardless of style. Funk, jazz-rock, indie, folk — they all end up on the desk."
    },
];

export default function BluesRockPage() {
    return (
        <div className="mt-16 mb-20">
            <BlogJsonLd slug="blues-rock-mixing-mastering" />
            <div className="max-w-3xl mx-auto">

                <BlogHeader
                    topic="Mixing & Mastering"
                    date="January 21, 2025"
                    title="Blues Rock Mixing and Mastering — How I Hear This Genre"
                    description="Blues rock is not a genre you can fake. You either grew up with it, played it, felt it — or you didn't. Here is how I approach the genre I know from the inside."
                />

                <div className="flex flex-col gap-10 text-white/70 text-[15px] leading-relaxed">

                    {/* Personal intro */}
                    <div className="flex flex-col gap-4">
                        <p>I have been playing blues rock guitar since before I knew what a compressor was. By the time I understood what mixing actually meant, I had already spent years inside this music — playing gigs, recording demos in whatever space was available, and listening to the same records so many times I can hear the room bleed on the original tracks.</p>
                        <p>That background changes how I approach a <a href="/mixing-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>blues rock session</a>. When a mix comes in, I am not just reading meters and moving faders. I am listening the way a player listens — for the feel, for the tension before a solo, for whether the guitar sounds like it is in the same room as the drums or like it was overdubbed in a different country three weeks later. The technical side matters enormously. But it serves the music, not the other way around.</p>
                    </div>

                    {/* Why it is hard */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Why Blues Rock Is One of the Hardest Genres to Mix Well</h2>
                        <p>On the surface, blues rock looks simple. Guitar, bass, drums, vocal. Sometimes keys. Not many tracks. Not much apparent complexity.</p>
                        <p>That simplicity is exactly what makes it brutal. Every element is exposed. There is nowhere to hide a weak guitar tone, a thin snare, or a vocal that is not sitting right. In a dense pop production, problems get swallowed by layers. In blues rock, every flaw is in plain sight — like a guitar solo where somebody missed the bend. You heard it. The drummer heard it. The sound engineer heard it. There is no reverb trick that fixes that.</p>
                        <p>More than that — blues rock lives and dies on feel. The slight drag of a groove. The breath before a solo. The way a vocal cracks on the high note. These are not accidents. They are the music. A <a href="/mixing-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>mix</a> that is technically correct but emotionally sterile is a failed blues rock mix, no matter how clean it looks on a spectrum analyser. I have heard mixes that measured perfectly and felt like nothing.</p>

                        <div className="rounded-xl p-4 flex gap-3" style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)"}}>
                            <span className="text-lg flex-shrink-0">💡</span>
                            <p className="text-white/60 text-sm leading-relaxed">The test I use: bypass all processing and play the raw tracks. If the track still has energy and personality with nothing on it, I am working with something real. If it only sounds good with everything switched on — that is a warning sign. Processing should enhance what is there, not manufacture something that was not.</p>
                        </div>
                    </div>

                    {/* Guitar */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">The Guitar — Most Important and Most Dangerous</h2>
                        <p>In blues rock, the guitar is the centerpiece. It is also the element that most often destroys a mix when handled by someone who does not play — someone who hears "too much midrange" and just cuts it, not understanding that the midrange <em>is</em> the tone.</p>

                        <p><strong className="text-white">Understanding the source first.</strong> A Fender Twin through an SM57 at center-cap sounds completely different from a Marshall JCM800 with a Royer ribbon two inches off-axis and slightly off-centre. Before touching EQ, I need to understand what the amp character actually is: is the midrange thick and warm (Fender-style) or aggressive and cutting (Marshall-style)? That determines where the problems are and where the magic lives.</p>

                        <p><strong className="text-white">The Fender vs Marshall problem.</strong> Fender-style amps are naturally scooped — abundant bass and treble with relatively weak mids. They sound huge solo but can disappear in a mix. Marshall-style amps are naturally mid-forward, which cuts through everything but can congest the vocal zone. Both need different EQ approaches. A Strat through a Fender Twin may need a mid <em>boost</em> around 1-2kHz to survive in a full band context. A Les Paul through a Marshall may need a narrow cut in exactly the same area to let the vocal through.</p>

                        <p><strong className="text-white">The SRV technique — mids on top of scooped amps.</strong> Stevie Ray Vaughan famously ran a Tube Screamer — a mid-boosting overdrive — into a cranked Fender amp. The Fender has scooped mids naturally; the Tube Screamer compensated by pushing the mids back. When a mid-rich overdrive hits an amp that is starting to break up, the midrange frequencies compress first. This is a specific, controllable sound — and understanding it matters when the mix comes in already committed to that tone. You are working with a frequency profile that was shaped by pedal choice, not just amp settings.</p>

                        <p><strong className="text-white">Rhythm and lead separation.</strong> Rhythm guitars sit behind the vocal — I carve space at the specific frequency where they fight the vocal, which is usually somewhere between 800Hz and 2kHz depending on the specific recording. A narrow notch of 2-3dB in the right place is more musical than a broad cut that removes character. Lead guitar and solos need to sit forward — I will often automate a 1-2dB presence boost on the lead channel during solo sections rather than fighting the static balance all session.</p>

                        <div className="rounded-xl p-5 flex flex-col gap-3" style={{background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)"}}>
                            <p className="text-white font-semibold text-sm">Plugins I actually reach for on blues rock guitars</p>
                            <ul className="flex flex-col gap-1.5 text-white/50 text-sm">
                                <li>→ <a href="https://www.plugin-alliance.com/en/products/ltl_silver_bullet_mk2.html" target="_blank" style={{color: "#C9A84C"}}>Silver Bullet MK2</a> — Neve/API character blend, adds harmonic density without making the guitar sound processed</li>
                                <li>→ <a href="https://www.plugin-alliance.com/en/products/kirchhoff-eq.html" target="_blank" style={{color: "#C9A84C"}}>Kirchhoff EQ</a> — multiple analog emulation modes, surgical cuts in the problem midrange zones</li>
                                <li>→ <a href="https://www.plugin-alliance.com/en/products/black_box_analog_design_hg-2.html" target="_blank" style={{color: "#C9A84C"}}>Black Box HG-2</a> — saturation that adds harmonic density, particularly useful on driven tones</li>
                                <li>→ <a href="https://www.plugin-alliance.com/en/products/bx_digital_v3.html" target="_blank" style={{color: "#C9A84C"}}>bx_digital V3</a> — mid-side processing on stereo guitar tracks, mono maker for controlling low-end spread</li>
                            </ul>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden w-full aspect-[16/9] relative">
                        <Image
                            src="/images/blog-blues-rock.jpg"
                            alt="Blues rock guitar recording and mixing"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>

                    {/* Bass */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">The Bass — The Element Everyone Forgets Until It Is Wrong</h2>
                        <p>Blues rock bass does not get as much attention as the guitar in most mixing discussions. That is a mistake. The bass is what gives a blues rock track its physical weight — the thing you feel in your chest at a gig. Get it wrong and the whole track feels thin regardless of how good the guitar sounds.</p>

                        <p><strong className="text-white">Kick and bass frequency allocation.</strong> The goal is not to keep them completely separate — that produces a hollow-sounding low end. The goal is to have them complement each other. A common professional approach: the kick provides the attack and initial punch in the 50-80Hz range and upper transient definition above 3kHz. The bass provides the sustained harmonic body in the 80-200Hz zone. When both play simultaneously, the total low end increases by 3dB — which is the sign of a good balance. If it increases by more, there is overlap. If it does not increase, they are fighting each other.</p>

                        <p><strong className="text-white">Parallel compression on the low end.</strong> A technique used by Sound on Sound and professional rock engineers consistently: feed both the kick and bass into a shared parallel compressor channel with a 4:1 to 6:1 ratio and significant gain reduction (-6 to -10dB). Blend this crushed signal back in at roughly 20-30%. The result is a low end that feels larger and more cohesive without losing the dynamic character of either element. The transients survive because the wet/dry blend preserves the uncompressed signal. The "glue" comes from the compressed blend.</p>

                        <p><strong className="text-white">Bass saturation for translation.</strong> Bass that sounds massive on studio monitors can disappear completely on phone speakers or earbuds — because those speakers cannot reproduce the fundamental frequency. The fix is adding upper harmonics through saturation. When you saturate a 80Hz bass note, you add energy at 160Hz, 240Hz, 320Hz — frequencies that smaller speakers <em>can</em> reproduce. The listener's brain reconstructs the fundamental from the harmonics even when it cannot hear it directly. A small amount of the <a href="https://www.plugin-alliance.com/en/products/black_box_analog_design_hg-2.html" target="_blank" style={{color: "#C9A84C"}}>HG-2</a> on the bass bus — barely audible in isolation — transforms bass translation across different playback systems.</p>

                        <div className="rounded-xl p-4 flex gap-3" style={{background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)"}}>
                            <span className="text-lg flex-shrink-0">💡</span>
                            <p className="text-white/60 text-sm leading-relaxed"><strong className="text-white">The phone speaker test.</strong> Once the low end feels right on monitors, always check it on a phone or laptop speaker. If the bass disappears, add more harmonic saturation. If the kick disappears, check the 3-5kHz range where the beater transient lives — that is the frequency that translates on small speakers.</p>
                        </div>
                    </div>

                    {/* Drums */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Drums — The Foundation of the Groove</h2>
                        <p>Blues rock drums are almost always recorded live. Real room sound, real transients, real imperfections. A drummer who drags slightly on the groove is not making a mistake — they are making the music feel heavy. This needs to be understood before reaching for any processing.</p>

                        <p><strong className="text-white">Transient shaping over heavy compression on kick.</strong> In blues rock, the kick is not the star of the show the way it is in hip-hop — it is the heartbeat. Transient shapers rather than heavy compressors give more control: you can increase the attack punch without squashing the room sound that makes live drums breathe. Tools like the <a href="https://www.plugin-alliance.com/en/products/spl_de-verb_plus.html" target="_blank" style={{color: "#C9A84C"}}>SPL Transient Designer</a> let you add punch without destroying the dynamics of the performance.</p>

                        <p><strong className="text-white">The snare problem.</strong> A blues rock snare that has been gated, compressed to death, and layered with samples does not sound like a real drummer — it sounds like a drum machine trying to pass a Turing test. If the snare has a ringy overtone, a narrow notch EQ at the resonant frequency is faster and more musical than replacing the hit. The ring is often character, not problem — before cutting anything, ask whether it sounds right in context.</p>

                        <p><strong className="text-white">Parallel drum bus compression.</strong> The technique that consistently makes live rock drums sound "larger than life" is blending a heavily compressed parallel drum bus — 10:1 ratio, aggressive gain reduction — with the dry drum signal at roughly 20-30%. The clean signal maintains the dynamics and feels live. The crushed signal adds density and excitement. The blend is where the magic lives. This is the technique described by Chris Mitchell, FOH engineer for Sturgill Simpson, and it works on blues rock as consistently as in any other context.</p>

                        <p><strong className="text-white">Room mics are not optional.</strong> If the session has room mics, use them. Even a small amount of room blended in adds three-dimensional quality that makes you feel like the kit is actually in a space. Blues rock recorded in a real room with room mics sounds like it was recorded in a real room. That is the point. If there are no room mics in the session, a short room reverb on the overhead bus — not on the close mics — can approximate the effect.</p>
                    </div>

                    {/* Vocal */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">The Vocal — Raw or Polished?</h2>
                        <p>This is the question that defines a blues rock mix more than any other. The answer is always: preserve the humanity first, fix the problems second.</p>
                        <p>A blues vocal that has been pitch-corrected to perfection and compressed to a consistent level can sound technically impressive and emotionally dead simultaneously. Blues rock listeners feel that immediately. The soul of the genre is imperfection — the grit, the slight roughness, the feeling that a real person is in the room and means every word.</p>

                        <p><strong className="text-white">Two-stage compression approach.</strong> A faster optical-style compressor catches the transient peaks and adds colour. A slower, more transparent compressor handles the overall dynamic control. The goal of both combined is that the vocal feels consistent without feeling levelled — like the natural dynamics are still there but under control. The <a href="https://www.plugin-alliance.com/en/products/vertigo_vss2.html" target="_blank" style={{color: "#C9A84C"}}>Vertigo VSS-2</a> handles both in one unit for blues vocals particularly well.</p>

                        <p><strong className="text-white">De-reverb before compression.</strong> If the vocal was recorded in an untreated room — which is most blues rock home recordings — room reflections get compressed along with the signal. Every compressor pump also pumps the room. Running <a href="https://www.plugin-alliance.com/en/products/spl_de-verb_plus.html" target="_blank" style={{color: "#C9A84C"}}>SPL De-Verb Plus</a> at 8-10dB reduction before the compressor cleans the room first, so the compressor works on the actual vocal rather than the room artefacts. This one change transforms how de-verbed home recordings respond to processing.</p>

                        <p><strong className="text-white">Reverb: drier than instinct suggests.</strong> Long hall reverbs push the vocal back in the room. Blues rock requires the vocalist to be present and immediate — in your face, not at the back of a concert hall. A short plate or room reverb suggesting a real acoustic space works. The <a href="https://www.liquidsonics.com/software/seventh-heaven/" target="_blank" style={{color: "#C9A84C"}}>Seventh Heaven</a> Bricasti emulation at a 0.6-0.8 second decay gives the vocal a physical space without washing out the intimacy.</p>
                    </div>

                    {/* Saturation and harmonics */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Saturation, Harmonics and Why Old Records Sound That Way</h2>
                        <p>This is the topic most mixing guides skip, which is strange because it explains most of why 1960s and 70s blues rock records sound the way they do. Tape, tube amplifiers, and analog consoles all added harmonic distortion as a byproduct of their operation — subtle, musical distortion that made recordings feel warmer, denser, and more three-dimensional.</p>

                        <p>When audio is processed through analog hardware, even and odd harmonics are added above the fundamental frequency. A 100Hz bass note gains energy at 200Hz, 300Hz, 400Hz. The signal becomes harmonically richer without becoming louder or brighter. This is why a Les Paul through a Marshall sounds "thick" while the same guitar through a digital modeller at the same volume can sound thin — the analog path adds content that the digital path does not.</p>

                        <p>Recreating this in a digital workflow is not about turning on a tape plugin and calling it done. It is about strategic placement. A small amount of the <a href="https://www.plugin-alliance.com/en/products/ltl_silver_bullet_mk2.html" target="_blank" style={{color: "#C9A84C"}}>Silver Bullet MK2</a> on the drum bus. The <a href="https://www.plugin-alliance.com/en/products/black_box_analog_design_hg-2.html" target="_blank" style={{color: "#C9A84C"}}>HG-2</a> adding density to guitars and bass. Light tape saturation on the mix bus before limiting. None of these are individually dramatic — each one barely audible in isolation. Together they create cohesion: the tracks start feeling like they were recorded in the same space rather than assembled from separate sessions.</p>

                        <div className="rounded-xl p-4 flex gap-3" style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)"}}>
                            <span className="text-lg flex-shrink-0">💡</span>
                            <p className="text-white/60 text-sm leading-relaxed">The A/B test for saturation: bypass every saturation plugin simultaneously. If the mix suddenly sounds thin and separate — the saturation was doing real work. If nothing changes — it was decoration. Blues rock needs the former.</p>
                        </div>
                    </div>

                    {/* Mastering */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Mastering Blues Rock Without Killing the Energy</h2>
                        <p>The instinct is to push the <a href="/mixing-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>master</a> loud. Resist it.</p>
                        <p>Blues rock has significant dynamic range built into the performance — the quiet moment before a guitar solo, the band pulling back at the end of a verse before the chorus hits. That dynamic range is not a problem to solve. It is the structure of the music. Heavy limiting collapses it into a flat wall of sound where every section feels the same volume, same energy, same intensity. The music becomes exhausting rather than engaging.</p>
                        <p>Streaming platforms normalise loudness. Spotify targets -14 LUFS integrated. Apple Music targets -16 LUFS. A track mastered to -10 LUFS and one mastered to -8 LUFS will be turned down to roughly the same playback level by the platform. The difference is that the -10 LUFS master retained its dynamics and sounds more powerful in context because it actually breathes. The -8 LUFS master was squeezed to get there and sounds fatiguing by comparison — Premier Guitar documented this exact phenomenon with A/B tests on classic rock material.</p>
                        <p>For blues rock, I typically aim between -11 and -13 LUFS integrated — which sounds quieter in a direct A/B test but feels more powerful in a playlist because the dynamics create energy rather than constant loudness. The loudness war was lost years ago. The dynamic range war can still be won.</p>
                    </div>

                    {/* What to send */}
                    <div className="rounded-2xl p-6 flex flex-col gap-3"
                         style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                        <h3 className="text-white font-semibold">What to Send for the Best Result</h3>
                        <ul className="flex flex-col gap-2 text-white/60 text-sm">
                            <li>→ Export every track individually, starting from bar one — all the same length</li>
                            <li>→ No processing on the master bus — limiters and stereo compressors off</li>
                            <li>→ Rhythm guitar and lead guitar on separate tracks</li>
                            <li>→ A reference track — the record whose sound you are chasing</li>
                            <li>→ BPM and key of the track</li>
                            <li>→ For <a href="/mixing-mastering" style={{color: "#C9A84C"}}>mastering</a> only: at least 1dB of headroom, no limiting on master bus</li>
                            <li>→ Any notes about what matters most — a guitar tone you love, a vocal moment that needs specific attention, parts that felt great live and should sound that way in the mix</li>
                        </ul>
                    </div>

                    {/* FAQ */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Frequently Asked Questions</h2>
                        <div className="flex flex-col divide-y divide-white/5">
                            {faqs.map((item, i) => (
                                <div key={i} className="py-5 flex flex-col gap-2">
                                    <p className="text-white/90 font-medium text-base">{item.q}</p>
                                    <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                         style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                        <h3 className="text-xl font-semibold text-white">Ready to send your blues rock track?</h3>
                        <p className="text-white/50 text-sm max-w-md">First consultation is always free. Send what you have — rough demo, live recording, or studio session — and I will tell you exactly what I can do with it.</p>
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