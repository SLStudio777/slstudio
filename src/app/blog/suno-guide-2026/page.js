import BlogHeader from "@/app/components/blog/BlogHeader";
import InteractiveChecklist from "./InteractiveChecklist";

export const metadata = {
    title: "How to Use Suno AI Like a Pro — Genre & Tag Guide 2026 | SL Studio",
    alternates: {
        canonical: "https://www.slstudio.pro/blog/suno-guide-2026"
    },
    description: "Stop gambling with AI music. A complete practical guide to Suno AI — prompts, structure, tags, settings, and workflow that actually produces results.",
    keywords: [
        "suno ai guide 2026",
        "how to use suno ai",
        "suno ai prompts",
        "suno ai genres tags",
        "suno ai professional workflow",
    ],
    other: {
        "article:published_time": "2026-04-10"
    },
};

// ─── Reusable Back-to-Top button (server-safe, no state) ────────────────────
function BackToTop() {
    return (
        <div className="flex justify-end pt-2">
            <a
                href="#top"
                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition hover:opacity-80"
                style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)" }}
            >
                ↑ Back to top
            </a>
        </div>
    );
}

// ─── Pro Tip block ───────────────────────────────────────────────────────────
function ProTip({ children }) {
    return (
        <div
            className="rounded-xl p-5 flex gap-3 items-start"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}
        >
            <span className="text-base flex-shrink-0 font-bold" style={{ color: "#C9A84C" }}>★</span>
            <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#C9A84C" }}>Pro Tip</p>
                <p className="text-white/70 text-sm leading-relaxed">{children}</p>
            </div>
        </div>
    );
}

// ─── Table of Contents ───────────────────────────────────────────────────────
const TOC = [
    { id: "before-we-start",      label: "Before We Start" },
    { id: "studio-not-magic",     label: "Think of Suno as a Studio" },
    { id: "interface",            label: "The Interface — Three Workspaces" },
    { id: "simple-vs-custom",     label: "Simple vs Custom Mode" },
    { id: "writing-prompts",      label: "Writing a Prompt Suno Understands" },
    { id: "brackets",             label: "Brackets Are Everything" },
    { id: "song-structure",       label: "Song Structure" },
    { id: "sweet-spot",           label: "The Sweet Spot — Settings" },
    { id: "stop-generating",      label: "Stop Pressing Generate" },
    { id: "extend-cover-upload",  label: "Extend, Cover & Upload" },
    { id: "personas",             label: "Personas" },
    { id: "demo-machine",         label: "Suno Is a Demo Machine" },
    { id: "checklist",            label: "Pre-Generation Checklist" },
];

function TableOfContents() {
    return (
        <div
            className="rounded-2xl p-6"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
            <p className="text-white font-semibold text-sm mb-4">Contents</p>
            <ol className="flex flex-col gap-2">
                {TOC.map((item, i) => (
                    <li key={item.id} className="flex items-baseline gap-2.5">
                        <span className="text-xs flex-shrink-0 w-5 text-right" style={{ color: "rgba(201,168,76,0.5)" }}>{i + 1}.</span>
                        <a
                            href={`#${item.id}`}
                            className="text-sm text-white/50 hover:text-white transition leading-snug"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function SunoGuidePage() {
    return (
        <div id="top" className="mt-16 mb-20">
            <div className="max-w-3xl mx-auto">

                <BlogHeader
                    topic="Tutorials"
                    date="April 10, 2026"
                    title="How to Use Suno AI Like a Pro — Genre & Tag Guide 2026"
                    description="If your current workflow is: open Suno → type something → hit Generate → hope for the best — you are not using this tool. You are playing a slot machine with audio. This guide fixes that."
                />

                <div className="flex flex-col gap-14 text-white/70 text-[15px] leading-relaxed">

                    {/* Intro callout */}
                    <div className="rounded-2xl p-6 flex gap-4 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <span className="text-2xl flex-shrink-0">🎯</span>
                        <div>
                            <p className="text-white font-semibold mb-2">Who this guide is for</p>
                            <p className="text-white/60 text-sm leading-relaxed">Musicians, producers, and curious creators who want <strong className="text-white">predictable results</strong> instead of random noise. We cover the interface, the logic, the settings, and the workflow — so you can stop gambling and start actually making music.</p>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <TableOfContents />

                    {/* ── THE CORE IDEA ── */}
                    <div
                        className="rounded-2xl p-8 flex flex-col gap-3 text-center"
                        style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)", border: "1px solid rgba(201,168,76,0.3)" }}
                    >
                        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.6)" }}>The Core Idea</p>
                        <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">Suno is not a hit generator.<br />Suno is an idea development tool.</p>
                        <p className="text-white/50 text-sm max-w-md mx-auto mt-1">Everything in this guide flows from that one principle. The faster you internalize it, the faster your results improve.</p>
                    </div>

                    {/* ── Before We Start ── */}
                    <div id="before-we-start" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>⚡</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Before We Start</h2>
                        </div>
                        <p>Let us get one thing out of the way immediately.</p>
                        <p>If your current workflow is: open Suno → type something → hit Generate → hope for the best — you are not using this tool. You are playing a slot machine with audio. And like all slot machines, it occasionally pays out — which is just enough to keep you coming back without actually improving.</p>
                        <p><strong className="text-white">Suno does not make music for you.</strong> It amplifies what you already bring to the table — your ideas, your taste, your sense of direction. No input, no output. Garbage in, garbage out. Vibe in... well, sometimes vibe out. But only if you know what you are doing.</p>
                        <p>This guide is for musicians, producers, and curious creators who want predictable results instead of random noise. We are going to cover the interface, the logic, the settings, and the workflow — so you can stop gambling and start actually making music.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-1.png" alt="Working with Suno: It's a Skill, Not Just AI Knowledge" className="w-full object-cover" />
                        </div>
                        <BackToTop />
                    </div>

                    {/* ── Part 1 ── */}
                    <div id="studio-not-magic" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>1</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Think of Suno as a Studio, Not a Magic Box</h2>
                        </div>
                        <p>Here is what nobody tells you when you first open Suno: it looks complicated, but it is just a workspace. The same way a DAW looked terrifying on day one — all those tracks, buttons, meters you did not understand — Suno operates by exactly the same logic.</p>
                        <p><strong className="text-white">It is a digital environment. You are in control.</strong> It just does not feel that way at first, because the interface is new and the results are unpredictable until you understand the rules.</p>
                        <p>The biggest beginner mistake is trying to skip the learning curve entirely. Massive prompt on day one, maximum settings cranked up, expecting a release-ready track. That is like sitting at a grand piano for the first time and immediately attempting Rachmaninoff. You will get noise. Impressive-looking noise, but noise.</p>
                        <p>What makes Suno powerful is the same thing that makes any professional tool powerful: understanding how it thinks, what it responds to, and where its limitations actually are. Once you have that, the tool stops fighting you and starts working with you.</p>
                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                            <span className="text-lg flex-shrink-0">💡</span>
                            <p className="text-white/60 text-sm">Start with the basics. Understand the tool. Then go deep. The shortcut is always longer than the actual path — especially with creative software.</p>
                        </div>
                        <BackToTop />
                    </div>

                    {/* ── Part 2 ── */}
                    <div id="interface" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>2</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">The Interface — Your Three Workspaces</h2>
                        </div>
                        <p>Suno has three areas you need to know. Master these and you will never feel lost again. More importantly, you will stop accidentally losing work you actually liked.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-2.png" alt="Create & Library" className="w-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">🎙️</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Create — Your Main Stage</p>
                                    <p className="text-white/50 text-sm leading-relaxed">This is where tracks are born — ideas, demos, experiments. Everything starts here. Think of it as the recording booth. You do not need it to be perfect when you walk in. You just need a direction.</p>
                                </div>
                            </div>
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">📚</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Library — Your Personal Archive</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Every track you have ever generated lives here. You can like, dislike, and build playlists. Here is the crucial thing many people miss: <strong className="text-white">these are not social likes</strong>. Nobody sees them but you. They are a filtering system — and a very important one.</p>
                                    <div className="mt-3 flex flex-col gap-1">
                                        <p className="text-white/40 text-xs">👍 Like → track stays visible and easy to find</p>
                                        <p className="text-white/40 text-xs">👎 Dislike → track hides (but does not delete — still there if you need it)</p>
                                    </div>
                                    <p className="text-white/50 text-sm mt-3">Use this ruthlessly. Your Library will fill up fast. A good filtering habit now saves hours of scrolling later. Think of it like keeping your Downloads folder clean — the kind of thing you ignore until it becomes a catastrophe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-3.png" alt="Workspace" className="w-full object-cover" />
                        </div>
                        <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                            <span className="text-xl flex-shrink-0">📁</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-2">Workspace — Your Project Folder System</p>
                                <p className="text-white/50 text-sm leading-relaxed">If you are making one type of music casually, you can skip this. But the moment you have multiple genres, client projects, YouTube channel ideas, or album concepts running simultaneously — Workspace is what keeps you sane.</p>
                                <p className="text-white/50 text-sm mt-2">Think of it less as keeping things tidy and more as keeping your brain organised. When you know where everything is and why it exists, your results become more consistent. And consistency is where quality lives. A musician who cannot find their best idea is the same as a musician who never had it.</p>
                            </div>
                        </div>
                        <BackToTop />
                    </div>

                    {/* ── Part 3 ── */}
                    <div id="simple-vs-custom" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>3</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Simple Mode vs Custom Mode — Where Almost Everyone Gets It Wrong</h2>
                        </div>
                        <p>The moment you open Suno, you see two modes. And almost everyone immediately clicks into <strong className="text-white">Custom Mode</strong> because it seems more powerful. More options, more control, more professional-looking interface.</p>
                        <p>This is a trap.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-4.png" alt="Simple vs Custom Mode" className="w-full object-cover" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(100,200,100,0.05)", border: "1px solid rgba(100,200,100,0.15)" }}>
                                <p className="text-white font-semibold text-sm">✅ Simple Mode — Use This First</p>
                                <p className="text-white/50 text-sm leading-relaxed">The fast entry point. One idea, one line, no overthinking. It exists for exactly the moment when you do not yet know what you want. Use it to test whether a genre idea even works. To catch a mood quickly. To check if an idea has any potential before investing time in it.</p>
                                <p className="text-sm" style={{ color: "#C9A84C" }}>Think of it like a musician noodling a melody before committing to an arrangement. You do not write the final take first.</p>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,100,100,0.05)", border: "1px solid rgba(255,100,100,0.15)" }}>
                                <p className="text-white font-semibold text-sm">⚙️ Custom Mode — Use This After</p>
                                <p className="text-white/50 text-sm leading-relaxed">For when you already know your direction — genre, mood, vocal feel, rough structure — and you want to control the details. The problem is that most people skip the exploration phase and demand Custom Mode precision before they have figured out what they want.</p>
                                <p className="text-white/30 text-sm mt-1">More options means more ways to be precisely wrong.</p>
                            </div>
                        </div>
                        <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p className="text-white/80 text-sm italic leading-relaxed">"Custom Mode does not automatically make things better. It just makes your mistakes more expensive and more specific."</p>
                        </div>
                        <p>Use Simple Mode first. Most great tracks begin there. The exploration phase is not wasted time — it is where you figure out what you actually want. Skipping it does not save time, it just moves the confusion to a more complicated interface.</p>
                        <ProTip>Spend your first 5–10 generations in Simple Mode for every new project. Once one of them feels right — that is when you open Custom Mode. Not before.</ProTip>
                        <BackToTop />
                    </div>

                    {/* ── Part 4 ── */}
                    <div id="writing-prompts" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>4</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Writing a Prompt That Suno Actually Understands</h2>
                        </div>
                        <p>A prompt is not a description. It is an instruction.</p>
                        <p>Suno does not read between the lines. It does not guess what you meant. It works with exactly what you gave it — no more, no less. If your prompt is contradictory, Suno will improvise. And Suno improvising is not always a compliment.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-5.png" alt="Structure Your Prompt" className="w-full object-cover" />
                        </div>
                        <p>The most common mistake is what we will call the <strong className="text-white">salad prompt</strong>: genre, mood, another genre, an era, an instrument, an emotion, some vibes, maybe a reference — all thrown together with no hierarchy. Suno does not know what you care about most, so it starts guessing. And when AI guesses, you get something technically impressive that sounds like nobody's music in particular.</p>
                        <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                            <p className="text-white font-semibold text-sm">✅ The Working Formula</p>
                            <div className="rounded-lg p-3 font-mono text-sm text-center" style={{ background: "rgba(0,0,0,0.3)", color: "#C9A84C" }}>
                                GENRE & MOOD → VOCALS → KEY INSTRUMENTS → MIX & FEEL
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">You define the territory first, then the character, then the specific elements. This order matters because Suno prioritises from the top down. If you say "soft jazz" first and then "heavy drums" three lines later, the system has a conflict and resolves it however it wants — which is never how you wanted it.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-white/40 text-xs uppercase tracking-widest">Practical Examples That Actually Work</p>
                            {[
                                { label: "Blues Rock", prompt: "Blues rock, raw and emotional, male vocal gritty and soulful,\nelectric guitar, hammond organ, live drums" },
                                { label: "Funk", prompt: "Funk, groovy and tight, male vocal rhythmic and punchy,\nslap bass, rhythm guitar, brass section" },
                                { label: "Jazz Rock Fusion", prompt: "Jazz rock fusion, smooth and sophisticated, instrumental,\nelectric piano, fretless bass, brushed drums, saxophone" },
                            ].map((ex, i) => (
                                <div key={i} className="rounded-xl overflow-hidden">
                                    <div className="px-4 py-2 text-xs font-medium" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>{ex.label}</div>
                                    <div className="p-4 font-mono text-sm text-white/70 whitespace-pre-line" style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.06)", borderTop: "none" }}>
                                        {ex.prompt}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>Notice what is <em>not</em> in these prompts: five adjectives per word, Wikipedia-style genre histories, and a list of every instrument known to humanity. Keep it clean. The simpler your source material, the easier it is to work with later.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-6.png" alt="Suno Prioritizes Structure, Not Just Words" className="w-full object-cover" />
                        </div>
                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(255,100,100,0.05)", border: "1px solid rgba(255,100,100,0.15)" }}>
                            <span className="text-lg flex-shrink-0">🚨</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">Always describe the vocal</p>
                                <p className="text-white/60 text-sm leading-relaxed">Even briefly. Gender, delivery style, emotional intensity. If you leave it blank, you are handing that decision to Suno — and you might get a soprano operatic performance over your doom metal track. Technically impressive. Contextually catastrophic. And yes, this has happened to everyone at least once.</p>
                            </div>
                        </div>
                        <ProTip>Don't list every instrument you want to hear. Mention only the two or three instruments that define the track's identity. The rest Suno will figure out — and it usually does it well when it has room to breathe.</ProTip>
                        <BackToTop />
                    </div>

                    {/* ── Part 5 ── */}
                    <div id="brackets" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>5</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Brackets Are Everything</h2>
                        </div>
                        <p>This one rule will save you enormous frustration. Write it down. Tattoo it somewhere. Put it on your monitor.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-7.png" alt="Brackets Are Instructions" className="w-full object-cover" />
                        </div>
                        <div className="rounded-xl p-5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
                            <p className="text-white font-semibold mb-2 text-center">The One Rule That Saves Everything</p>
                            <p className="text-center text-white/80 text-sm leading-relaxed">Everything inside <strong className="text-white">[square brackets]</strong> = a command to Suno.<br />Everything outside = lyrics to be performed out loud.<br /><br />That is it. That is the whole rule.</p>
                        </div>
                        <p>If you write <code className="text-sm px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.08)", color: "#C9A84C" }}>energetic guitar solo</code> in your lyrics without brackets, Suno will cheerfully <em>sing those words</em>. Out loud. On your track. You will have a vocalist going "energetic guitar solooo" over your breakdown. Not what you wanted. Not a bug. That is exactly what you asked for.</p>
                        <p>Structural tags go in brackets:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {["[Intro]", "[Verse]", "[Pre-Chorus]", "[Chorus]", "[Bridge]", "[Guitar Solo]", "[Instrumental]", "[Outro]"].map((tag, i) => (
                                <div key={i} className="rounded-lg px-3 py-2.5 text-center font-mono text-sm" style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <p>You can also use stylistic production notes inside brackets anywhere in the song — <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "#C9A84C" }}>[quiet, building tension]</code>, <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "#C9A84C" }}>[full band entry]</code>, or <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "#C9A84C" }}>[emotional, slow down]</code>. Suno reads these as production notes, not lyrics.</p>
                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                            <span className="text-xl flex-shrink-0">💡</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">Start with an instrumental intro</p>
                                <p className="text-white/60 text-sm leading-relaxed">Give your track space to breathe before the vocal comes in. It creates anticipation, sounds more professional, and gives you clean, vocal-free material to work with when you get to the DAW.</p>
                            </div>
                        </div>
                        <BackToTop />
                    </div>

                    {/* ── Part 6 ── */}
                    <div id="song-structure" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>6</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Song Structure — Why It Matters, and What It Looks Like</h2>
                        </div>
                        <p>If you do not give Suno a structure, it will invent one. Sometimes that works out beautifully. Often it does not — especially if you need the track to be a specific length, or if you are planning to edit it in a DAW afterward.</p>
                        <p>The underlying logic here is important: every song is built from <strong className="text-white">repeating and contrasting sections</strong>. Verses build the story, choruses deliver the emotional payload, bridges shift the perspective, and instrumental sections control the energy flow. When you understand this, you stop thinking of a song as "a bunch of parts" and start thinking of it as a designed emotional experience.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-8.png" alt="Song Structure visual" className="w-full object-cover" />
                        </div>
                        <p>Understanding the theory is one thing — seeing it mapped to real production formats is another. Here is how these structures actually look when you translate them into Suno-ready templates:</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-9.png" alt="Music Production: Song Structure" className="w-full object-cover" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🎵 Classic Pop Structure</p>
                                <p className="text-white/50 text-sm leading-relaxed">Intro → Verse → Chorus → Verse → Chorus → Bridge → Final Chorus → Instrumental Outro. Full development. This is the architecture of a thousand hits for a reason — it works. Every section earns its place by doing something specific to the listener's emotional journey.</p>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">📱 Modern Streaming Structure</p>
                                <p className="text-white/50 text-sm leading-relaxed">Leaner, faster, no patience for slow builds. Get to the chorus in the first 30 seconds. Streaming data shows most people decide whether to stay within the intro — which means your intro is actually your chorus.</p>
                            </div>
                        </div>
                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                            <span className="text-lg flex-shrink-0">💡</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">Pro tip worth remembering</p>
                                <p className="text-white/60 text-sm leading-relaxed">Start with an instrumental intro. Give your track space to breathe before the vocal comes in. It creates anticipation, sounds more professional, and gives you clean material to work with in the DAW.</p>
                            </div>
                        </div>
                        <BackToTop />
                    </div>

                    {/* ── Part 7 ── */}
                    <div id="sweet-spot" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>7</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">The Sweet Spot — Weirdness & Style Influence</h2>
                        </div>
                        <p>Two settings that most people either ignore entirely or crank to the extreme. Both are mistakes, and both will cost you credits.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-10.png" alt="Find the Sweet Spot" className="w-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🎲 Weirdness — How Far Suno Deviates From Your Instructions</p>
                                <div className="flex items-center gap-3 text-xs my-1">
                                    <span className="text-white/40 text-xs w-24 text-right">predictable</span>
                                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                                        <div className="h-full rounded-full" style={{ width: "55%", background: "linear-gradient(to right, rgba(100,200,100,0.6), rgba(201,168,76,0.9), rgba(255,80,80,0.6))" }}></div>
                                    </div>
                                    <span className="text-white/40 text-xs w-24">chaotic</span>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white">Low</strong> — predictable, clean, close to what you asked for. Good for when you have a clear direction and do not want surprises.</p>
                                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white">Middle</strong> — the working zone. A little weirdness creates interesting touches without derailing the whole track. This is where most usable results live.</p>
                                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white">Maximum</strong> — broken, chaotic, credit-burning. Occasionally produces something genuinely surprising. More often produces something genuinely unusable.</p>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🎨 Style Influence — How Strictly Suno Follows Your Defined Style</p>
                                <div className="flex items-center gap-3 text-xs my-1">
                                    <span className="text-white/40 text-xs w-24 text-right">style drift</span>
                                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                                        <div className="h-full w-full rounded-full" style={{ background: "linear-gradient(to right, rgba(255,80,80,0.5), rgba(201,168,76,0.9) 50%, rgba(255,80,80,0.5))" }}></div>
                                    </div>
                                    <span className="text-white/40 text-xs w-24">robotic</span>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white">Too low</strong> — style drifts away mid-track. The beginning sounds like what you asked for; the second half sounds like something else entirely.</p>
                                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white">Too high</strong> — stiff and mechanical. The result technically matches your description but feels lifeless.</p>
                                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white">Middle ground</strong> — give the tool room to interpret while keeping it on the right track.</p>
                            </div>
                        </div>
                        <div className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <span className="text-lg">🔑</span>
                            <p className="text-white/60 text-sm leading-relaxed">The underlying principle: <strong className="text-white">the more chaos you introduce at the generation stage, the harder it is to work with the output later.</strong> Generate clean, get creative in the DAW.</p>
                        </div>
                        <ProTip>High Weirdness usually creates more editing work later — not more creativity. Save the experimentation for after you have a solid, mixable base track. The DAW is where you add character; Suno is where you establish direction.</ProTip>
                        <BackToTop />
                    </div>

                    {/* ── Part 8 ── */}
                    <div id="stop-generating" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>8</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Stop Pressing Generate Like It Owes You Something</h2>
                        </div>
                        <p>Here is a habit that kills progress faster than anything else:</p>
                        <div className="rounded-xl p-5" style={{ background: "rgba(255,80,80,0.05)", border: "1px solid rgba(255,80,80,0.15)" }}>
                            <p className="text-white font-semibold text-sm mb-2">🚫 The Loop That Goes Nowhere</p>
                            <p className="text-white/60 text-sm font-mono leading-relaxed">Generate → do not like it → close → generate again → repeat until frustrated → conclude that Suno is bad → open it again tomorrow anyway</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-11.png" alt="Don't Start from Scratch Every Time" className="w-full object-cover" />
                        </div>
                        <p>Every time you throw away a generated track and start fresh, you are also throwing away the idea that shaped it. And sometimes that idea was good — the execution just was not there yet.</p>
                        <p>This is one of the most important mindset shifts when working with generative AI: you are not searching for the perfect output. You are developing material. The first generation is a draft. The second is a refinement. The third might be the one.</p>
                        <p>Suno works best when you <strong className="text-white">develop what you have found</strong> rather than constantly searching for something new. The goal is refinement, not lottery.</p>
                        <BackToTop />
                    </div>

                    {/* ── Part 9 ── */}
                    <div id="extend-cover-upload" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>9</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Extend, Cover, Upload — Your Development Toolkit</h2>
                        </div>
                        <p>Three tools. Learn them, use them constantly. These are the features that separate casual Suno users from people who actually finish tracks.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-12.png" alt="Extend · Cover · Upload" className="w-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">▶️</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Extend — Continue What Is Working</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Extend continues an existing track while preserving its character. It is not a new generation — it is a continuation. The sound stays consistent, the vibe carries through, and you get longer, more cohesive material to work with. Every time you would generate a new track from scratch because the existing one is too short, use Extend instead.</p>
                                </div>
                            </div>
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">🔄</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Cover — A/B Test Your Track</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Cover creates an alternative version of the same idea — different delivery, different feel, same underlying DNA. Think of it as giving the same script to a different actor and seeing what happens. Use it when you like the structure but something about the execution is not quite right.</p>
                                </div>
                            </div>
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">⬆️</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Upload Audio — Where It Gets Genuinely Powerful</p>
                                    <p className="text-white/50 text-sm leading-relaxed">You can upload your own hummed melody, guitar riff, or rhythm pattern — and Suno will develop it. This is the mode where AI stops being a generator and becomes a collaborator. Your melodic instinct, Suno's production capability. The combination is where genuinely original music comes from.</p>
                                    <div className="mt-3 rounded-lg p-3 text-sm" style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C" }}>
                                        → This is the closest thing to actual co-writing with AI. Use it.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BackToTop />
                    </div>

                    {/* ── Part 10 ── */}
                    <div id="personas" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>10</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Personas — Locking In Your Sound</h2>
                        </div>
                        <p>Once you have found a sound you like — a particular character, a specific feel that works for your project — you can save it as a <strong className="text-white">Persona</strong>.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-13.png" alt="Personas: Saving Your Sound" className="w-full object-cover" />
                        </div>
                        <p>A Persona is not a copy. It is a reference point. A saved sonic identity that you can return to across multiple tracks, ensuring consistency without having to reinvent the wheel every session.</p>
                        <p>Think about what this means in practice: you have been working on an album. Every track needs to sound like it belongs to the same world — same vocal character, same sonic palette, same energy. Without Personas, every session starts from zero. With Personas, you anchor the sound and build from there.</p>
                        <div className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                            <span className="text-lg">🎯</span>
                            <p className="text-white/60 text-sm leading-relaxed">Personas are especially useful for <strong className="text-white">album projects, YouTube channels, and client work</strong> — anywhere you need your music to have a recognizable, coherent sound across multiple pieces.</p>
                        </div>
                        <BackToTop />
                    </div>

                    {/* ── Part 11 ── */}
                    <div id="demo-machine" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>11</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Suno Is a Demo Machine. A Very Good One.</h2>
                        </div>
                        <p>Let us be completely honest about something.</p>
                        <p>No matter how good your Suno track sounds in the player, it is still a demo. A good demo — sometimes a great demo — but a demo. The final result, the one people actually listen to and remember, is born in post-production.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-14.png" alt="Suno = Demo, Not a Release" className="w-full object-cover" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                                <p className="text-white font-semibold text-sm">🎵 Suno gives you</p>
                                <ul className="flex flex-col gap-2 text-white/50 text-sm">
                                    <li>→ The idea and direction</li>
                                    <li>→ The structure and arrangement</li>
                                    <li>→ The character and vocal style</li>
                                    <li>→ The emotional arc of the track</li>
                                </ul>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🎚️ Your DAW gives you</p>
                                <ul className="flex flex-col gap-2 text-white/50 text-sm">
                                    <li>→ The mix balance and separation</li>
                                    <li>→ Spatial depth and dimension</li>
                                    <li>→ Vocal treatment and clarity</li>
                                    <li>→ The final competitive master</li>
                                </ul>
                            </div>
                        </div>
                        <p>Listeners do not care how a track was made. They only care how it sounds. A Suno-generated track with professional <a href="/mixing-mastering" style={{ color: "#C9A84C", textDecoration: "underline" }}>mixing and mastering</a> sounds better than a traditionally recorded track that was never properly mixed. The tools do not matter. The result does.</p>
                        <p>Suno is a spectacular starting point. It is not the finish line. The next step after Suno is stems, balance, vocal treatment, arrangement detail — all the things that separate a demo from something that actually hits the way you intended.</p>
                        <BackToTop />
                    </div>

                    {/* ── Checklist ── */}
                    <div id="checklist" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>✓</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">The Pre-Generation Checklist</h2>
                        </div>
                        <p>Before you hit Generate, run through this. Every time. It takes thirty seconds and saves you from generating tracks you will immediately discard.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-15.png" alt="Checklist" className="w-full object-cover" />
                        </div>
                        <InteractiveChecklist />
                        <BackToTop />
                    </div>

                    {/* ── Final thought ── */}
                    <div className="flex flex-col gap-1">
                        <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
                        <div className="rounded-2xl p-8 flex flex-col gap-4 mt-4" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                            <h3 className="text-xl font-semibold text-white">Final Thought</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Working with Suno is a skill. Not a prompt hack, not a secret formula — a skill. The kind that develops through regular practice, honest listening, and a willingness to understand the tool rather than fight with it.</p>
                            <p className="text-white/60 text-sm leading-relaxed">The musicians who get the most out of Suno are not the ones who found the magic prompt. They are the ones who understood the logic, built a workflow, and kept showing up. They treat it like a collaborator rather than a vending machine.</p>
                            <p className="text-white/60 text-sm leading-relaxed">Suno accelerates your learning curve. It does not replace the work. The work is still yours — and that is a good thing. Because the work is also where the music actually lives.</p>
                            <p className="text-white font-semibold mt-2 text-lg">Now go make something.</p>
                        </div>
                    </div>

                    {/* ── CTA ── */}
                    <div
                        className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                        style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                        <h3 className="text-xl font-semibold text-white">Your Suno demo ready for a professional mix?</h3>
                        <p className="text-white/50 text-sm max-w-md">Send the track — stems, rough mix, or the Suno export itself. We will take it from demo to release-ready. First consultation is always free.</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
                            style={{ backgroundColor: "#C9A84C" }}
                        >
                            Get in Touch →
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
