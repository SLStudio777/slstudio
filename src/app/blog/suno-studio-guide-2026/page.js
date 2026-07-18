import RelatedPosts from "@/app/components/blog/RelatedPosts";
import BlogJsonLd from "@/app/components/blog/BlogJsonLd";
import BlogHeader from "@/app/components/blog/BlogHeader";
import GmivBuilder from "@/app/components/blog/GmivBuilder";
import CheatsheetCopy from "@/app/components/blog/CheatsheetCopy";
import ReadingProgress from "@/app/components/blog/ReadingProgress";

export const metadata = {
  title: "How to Use Suno Studio in 2026: Timeline, Extend & Stem Export",
  alternates: {
    canonical: "https://www.slstudio.pro/blog/suno-studio-guide-en-2026",
    languages: {
      en: "https://www.slstudio.pro/blog/suno-studio-guide-en-2026",
      ru: "https://www.slstudio.pro/blog/suno-studio-guide-2026",
      pl: "https://www.slstudio.pro/pl/blog/suno-studio-guide-en-2026",
      "x-default": "https://www.slstudio.pro/blog/suno-studio-guide-en-2026",
    },
  },
  description:
    "Step-by-step Suno Studio tutorial — control the timeline, extend tracks at the exact timestamp, fix weak sections with Cover & Replace, and export clean WAV stems for mixing.",
  openGraph: {
    title: "How to Use Suno Studio in 2026: Timeline, Extend & Stem Export",
    description:
      "Step-by-step Suno Studio tutorial — control the timeline, extend tracks at the exact timestamp, fix weak sections with Cover & Replace, and export clean WAV stems for mixing.",
    type: "article",
    url: "https://www.slstudio.pro/blog/suno-studio-guide-en-2026",
    siteName: "SL Studio",
    images: ["/images/blog-suno-studio-cover.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Suno Studio in 2026: Timeline, Extend & Stem Export",
    description:
      "Step-by-step Suno Studio tutorial — control the timeline, extend tracks at the exact timestamp, fix weak sections with Cover & Replace, and export clean WAV stems for mixing.",
  },
  keywords: [
    "suno studio tutorial 2026",
    "how to use suno studio",
    "suno extend timestamp",
    "suno gmiv prompt formula",
    "suno stems export",
  ],
  other: { "article:published_time": "2026-07-02" },
};

function ProTip({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex gap-3 items-start"
      style={{
        background: "rgba(201,168,76,0.07)",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <span
        className="text-base flex-shrink-0 font-bold"
        style={{ color: "#C9A84C" }}
      >
        ★
      </span>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-1.5"
          style={{ color: "#C9A84C" }}
        >
          Pro Tip
        </p>
        <p className="text-white/70 text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

const TOC = [
  { id: "what-is-studio", label: "What Suno Studio is — and what it's NOT" },
  { id: "timeline", label: "The Timeline — your main instrument" },
  { id: "extend", label: "Extend — the button that turns ideas into songs" },
  { id: "extend-tags", label: "English tags for Extend" },
  { id: "gmiv", label: "The G.M.I.V. Formula — prompts like a pro" },
  { id: "cover-replace", label: "Cover & Replace — surgical fixes" },
  { id: "mixer", label: "The Mixer — draft mode, not the finish line" },
  { id: "field-notes", label: "Field Notes from the Community" },
  { id: "export", label: "Export — the final step with hard rules" },
];

function TableOfContents() {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <p className="text-white font-semibold text-base mb-4">Contents</p>
      <ol className="flex flex-col gap-2">
        {TOC.map((item, i) => (
          <li key={item.id} className="flex items-baseline gap-2.5">
            <span
              className="text-xs flex-shrink-0 w-5 text-right"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              {String(i + 1).padStart(2, "0")}.
            </span>
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

export default function SunoStudioGuidePage() {
  return (
    <div id="top" className="mt-16 mb-20">
      <BlogJsonLd slug="suno-studio-guide-en-2026" />
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <BlogHeader
          topic="Tutorials"
          date="July 2, 2026"
          title="Suno AI Part 2: Suno Studio — Complete Guide for Musicians"
          description="Part one was about generating better material. This one is about what happens after. Suno Studio sits between Generate and your DAW — the place where a good idea stops being random and starts becoming usable."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Intro */}
          <div
            className="rounded-2xl p-6 flex gap-4 items-start"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <span className="text-2xl flex-shrink-0">🎚️</span>
            <div>
              <p className="text-white font-semibold mb-2">
                Who this guide is for
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                For anyone who has made a few tracks in Suno and realized the
                real problem is not inspiration — it is control. For musicians
                who want repeatable results, not a coin flip.{" "}
                <strong className="text-white">That part is fixable.</strong>
              </p>
            </div>
          </div>

          {/* Link to Part 1 */}
          <div
            className="rounded-xl p-4 flex gap-3 items-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span className="text-lg flex-shrink-0">📖</span>
            <p className="text-white/65 text-base">
              Haven't read Part 1 yet? Start with{" "}
              <a
                href="/blog/suno-guide-2026"
                style={{ color: "#C9A84C", textDecoration: "underline" }}
              >
                Suno AI: Complete Guide — Genres, Tags & Prompts 2026
              </a>
              .
            </p>
          </div>

          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          {/* Three stages */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-3 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(201,168,76,0.6)" }}
            >
              Three stages of the kitchen
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
              {[
                { step: "Generate", desc: "sketch the idea" },
                { step: "Studio", desc: "structure & develop" },
                { step: "DAW", desc: "final mix & master" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-white font-semibold text-base">
                      {item.step}
                    </span>
                    <span className="text-white/50 text-sm">{item.desc}</span>
                  </div>
                  {i < 2 && (
                    <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-white/65 text-base mt-2 max-w-md mx-auto">
              Studio is the middle stage: where ideas get structured before the
              real finishing work begins in a DAW.
            </p>
          </div>

          {/* Chapter 1 */}
          <div id="what-is-studio" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                01
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                What Suno Studio is — and what it's NOT
              </h2>
            </div>
            <p>
              Suno Studio is not Generate with a bigger toolbar, and it is not a
              DAW in disguise. It is the stage between getting raw material and
              opening a real editor.
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-1.webp"
                alt="Studio handles one job: organizing and developing your idea"
                className="w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "✏️",
                  step: "Generate",
                  desc: "Creates raw material. A pencil sketch on a napkin. The idea that still needs to become something.",
                },
                {
                  icon: "🎬",
                  step: "Studio",
                  desc: "Organization and development. The director's table — you can see the structure and make real decisions.",
                },
                {
                  icon: "🎛️",
                  step: "DAW",
                  desc: "The finish line: mixing, mastering, polish. The final manuscript after the editor.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-2"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-white font-semibold text-base">
                    {item.step}
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p>
              Studio deliberately does not copy a DAW. There is no deep editing,
              no complex chains, and no engineer-grade finishing toolkit here.{" "}
              <strong className="text-white">That is the point.</strong> Its job
              is simpler and more useful: organize the idea before you polish it
              somewhere else.
            </p>
            <p>
              Without Studio, generation remains a pile of lucky and unlucky
              attempts. With it, you can stop on the useful moments, extend with
              intention, and bring something structured into your DAW instead of
              another random draft.
            </p>
            <div
              className="rounded-xl p-4 flex gap-3 items-start"
              style={{
                background: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <span className="text-lg flex-shrink-0">🆕</span>
              <div>
                <p className="text-white font-semibold text-base mb-1">
                  Studio keeps leveling up — Studio 1.2
                </p>
                <p className="text-white/65 text-base leading-relaxed">
                  In February 2026 Suno shipped Studio 1.2, and it quietly
                  closed several gaps this guide used to warn about: Remove FX
                  (strips baked-in reverb and delay from a stem — huge for
                  vocals), Warp Markers (drag timing into place when a
                  generation drifts off-grid), Time Signature support (finally,
                  something other than 4/4), and Alternates (generate variants
                  of a section and swap between them without losing the
                  original). None of these replace a real DAW — but Remove FX
                  alone saves you one paid plugin down the line.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div id="timeline" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                02
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                The Timeline — your main instrument
              </h2>
            </div>
            <p>
              At the heart of Suno Studio is the timeline. That is where the
              track stops feeling like one blob and starts revealing structure.
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-2.webp"
                alt="The timeline is your main instrument of control in Suno Studio"
                className="w-full object-cover"
              />
            </div>

            <p>
              You see the overall shape, the clips, the layers, and the
              transition points.{" "}
              <strong className="text-white">That is the key shift:</strong> you
              stop treating the track like one big audio file and start treating
              it like a set of parts you can judge one by one.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-5 flex flex-col gap-2"
                style={{
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
              >
                <p className="text-white font-semibold text-base">
                  🔭 Wide view
                </p>
                <p className="text-white/65 text-base leading-relaxed">
                  See the full shape of the track and judge the overall arc.
                  Does the idea actually work?
                </p>
              </div>
              <div
                className="rounded-xl p-5 flex flex-col gap-2"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-white font-semibold text-base">
                  🔬 Close view
                </p>
                <p className="text-white/65 text-base leading-relaxed">
                  Examine transitions, pauses, edit points. Where exactly should
                  you set the Extend timestamp?
                </p>
              </div>
            </div>

            <div
              className="rounded-xl p-4 flex gap-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span className="text-lg">💡</span>
              <p className="text-white/65 text-base leading-relaxed">
                Use both views. Without the wide one, you can't tell if the idea
                holds together. Without the close one, you won't find the right
                place to extend.{" "}
                <strong className="text-white">
                  Once you start thinking in timelines, everything becomes
                  predictable.
                </strong>
              </p>
            </div>
          </div>

          {/* Chapter 3 */}
          <div id="extend" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                03
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Extend — the button that turns an idea into a song
              </h2>
            </div>
            <p>
              If Create gives you the idea, Extend is what turns it into a full
              track. It's the most powerful tool in Studio — and the one most
              consistently misused.
            </p>

            <div
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-white font-semibold text-base">
                What the model hears when you press Extend
              </p>
              <p className="text-white/65 text-base italic leading-relaxed">
                "Listen to the last few seconds of this section, understand the
                context, and figure out what should come next. Preserve the key
                and BPM."
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-3.webp"
                alt="Extend reads context — the timestamp is everything"
                className="w-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-white">
              The one rule: the timestamp
            </h3>
            <p>
              The most common beginner mistake is pressing Extend wherever. The
              result: the track falls apart — the voice changes, the rhythm
              breaks, the song wanders off somewhere nobody intended.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-white font-semibold text-base">
                  🚫 What not to do
                </p>
                <ul className="flex flex-col gap-2 text-white/65 text-base">
                  <li>
                    → Cut in the middle of a word — the model will hallucinate
                  </li>
                  <li>→ Pick a random spot without reading the waveform</li>
                  <li>→ Press Extend without updating the Lyrics field</li>
                </ul>
              </div>
              <div
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-white font-semibold text-base">
                  ✅ What to do instead
                </p>
                <ul className="flex flex-col gap-2 text-white/65 text-base">
                  <li>→ Find the end of a bar</li>
                  <li>→ Find where the reverb tail fades out</li>
                  <li>→ Find the pause after a chorus</li>
                </ul>
              </div>
            </div>

            <ProTip>
              Look at the waveform on the timeline and find the visual dips in
              loudness — those are your ideal cut points. Where it goes quiet,
              that's where you cut. This rule applies in Suno Studio, in your
              DAW, and in editing generally.
            </ProTip>

            <h3 className="text-lg font-semibold text-white mt-2">
              Block logic: Part 1 → Part 2
            </h3>
            <p>
              In Studio you see a chain: Part 1 → Extend → Part 2. One rule to
              remember:
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-4.webp"
                alt="Studio is a block system: don't like Part 2? Delete and regenerate"
                className="w-full object-cover"
              />
            </div>

            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              <p className="text-white font-semibold mb-2">The block rule</p>
              <p className="text-white/70 text-base leading-relaxed">
                If Part 2 isn't working — don't try to fix it with another
                Extend. Delete it and regenerate from the end of Part 1. If a
                part comes out wrong, we don't sand it down forever — we get a
                new one.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <p className="text-white font-medium text-sm">
                Checklist before pressing Extend:
              </p>
              {[
                "Is the timestamp right — no mid-word cuts?",
                "Has the old Lyrics text been cleared and replaced with something new (or at least a [Instrumental] tag)?",
                "Is the Style field filled with English descriptors?",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    <span className="text-xs" style={{ color: "#C9A84C" }}>
                      ✓
                    </span>
                  </div>
                  <p className="text-white/65 text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 4 */}
          <div id="extend-tags" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                04
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                English tags for Extend: steering the direction
              </h2>
            </div>
            <p>
              When you run an Extend, the Style field is where you steer the
              track instead of hoping it reads your mind.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Controlling dynamics
            </h3>
            <p>
              Don't write "make it louder" — use specific terms Suno actually
              understands:
            </p>

            <CheatsheetCopy
              title="Dynamic control tags"
              variant="table"
              items={[
                ["Build up", "Rising tension before a drop"],
                ["Explosive Drop", "Big, punchy release — electronics, rock"],
                ["Stripped back", "Pull instruments away, expose the bones"],
                ["Full band kicks in", "Whole band enters after a quiet intro"],
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Solos and instrumental breaks
            </h3>
            <p>Two fields working together — one alone isn't enough:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-4 flex flex-col gap-2"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: "3px solid #C9A84C",
                }}
              >
                <p className="text-white font-semibold text-xs uppercase tracking-widest">
                  Lyrics field
                </p>
                <p className="text-white/65 text-base">
                  Meta-tag in square brackets:{" "}
                  <span className="font-mono" style={{ color: "#C9A84C" }}>
                    [Guitar Solo]
                  </span>
                  ,{" "}
                  <span className="font-mono" style={{ color: "#C9A84C" }}>
                    [Synthesizer Solo]
                  </span>
                </p>
              </div>
              <div
                className="rounded-xl p-4 flex flex-col gap-2"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: "3px solid #C9A84C",
                }}
              >
                <p className="text-white font-semibold text-xs uppercase tracking-widest">
                  Style field
                </p>
                <p className="text-white/65 text-base">
                  Reinforce with description:{" "}
                  <span
                    className="font-mono text-xs"
                    style={{ color: "#C9A84C" }}
                  >
                    Virtuoso Electric Guitar
                  </span>{" "}
                  or{" "}
                  <span
                    className="font-mono text-xs"
                    style={{ color: "#C9A84C" }}
                  >
                    High-Pitched Synth Melody
                  </span>
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white">
              How to end a track cleanly
            </h3>
            <p>
              Suno loves cutting songs off mid-thought — it's a well-known
              quirk. To get a proper ending: set the Extend timestamp on the
              final seconds and drop one of these tags into Style:
            </p>

            <CheatsheetCopy
              title="Ending tags"
              variant="table"
              items={[
                ["Outro", "Standard ending section"],
                ["Fade out", "Gradual fade to silence"],
                ["Grand Finale", "Big, loud, cinematic close"],
                ["End on a single note", "One final chord and done"],
              ]}
            />
          </div>

          {/* Chapter 5 */}
          <div id="gmiv" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                05
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                The G.M.I.V. Formula — prompts like a pro
              </h2>
            </div>
            <p>
              One principle before the formula:{" "}
              <strong className="text-white">
                Suno does not interpret your feelings — it works with tags.
              </strong>{" "}
              If you write like a poet, you get randomness. If you write like a
              spec sheet, results become far more predictable.
            </p>

            <div
              className="rounded-xl p-4 flex gap-3 items-start"
              style={{
                background: "rgba(255,100,80,0.05)",
                border: "1px solid rgba(255,100,80,0.15)",
              }}
            >
              <span className="text-lg flex-shrink-0">🚨</span>
              <p className="text-white/65 text-base leading-relaxed">
                <strong className="text-white">Hard rule:</strong> write prompts
                in English. Even if your song is in another language, the Style
                of Music field must be in English — that's the data Suno trained
                on. "Sad violin" — Suno gets the gist, with margin for error.{" "}
                <span
                  className="font-mono text-xs"
                  style={{ color: "#C9A84C" }}
                >
                  Melancholic Violin Solo
                </span>{" "}
                — understood precisely. The difference between "bring me
                something to eat" and "oat milk cappuccino, medium, extra shot."
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-5.webp"
                alt="Suno works with tags: sad violin is a lottery, melancholic violin solo is a target"
                className="w-full object-cover"
              />
            </div>

            <div
              className="rounded-2xl p-6 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-white font-semibold">
                The G.M.I.V. formula — four components
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>
                    G — Genre
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Don't just write Rock or Pop. Use subgenres — they narrow
                    the search space and produce consistent results:
                  </p>
                  <div className="overflow-x-auto">
                    <table
                      className="w-full text-sm"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <thead>
                        <tr
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <th className="text-left py-2 pr-4 text-white/45 text-sm">
                            Instead of…
                          </th>
                          <th className="text-left py-2 text-white/45 text-sm">
                            Write…
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Electronic", "Future Bass / Liquid Drum & Bass"],
                          ["Rock", "Math Rock / Pop Punk / Post-Hardcore"],
                          ["Hip-Hop", "Boom Bap / Trap / Lo-Fi Hip Hop"],
                        ].map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              borderBottom: "1px solid rgba(255,255,255,0.04)",
                            }}
                          >
                            <td className="py-2 pr-4 text-white/55 text-base">
                              {row[0]}
                            </td>
                            <td
                              className="py-2 font-mono text-xs"
                              style={{ color: "#C9A84C" }}
                            >
                              {row[1]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/5">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/suno-studio-6.webp"
                    alt="Subgenres — the more specific the genre, the more stable the result"
                    className="w-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>
                    M — Mood
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Beginners describe how they feel instead of using musical
                    descriptors. The model doesn't need to know what you're
                    feeling — it needs the atmosphere in technical terms:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      ['"soulful"', "Ethereal"],
                      ['"angry"', "Aggressive"],
                      ['"joyful"', "Euphoric"],
                      ['"dark"', "Dark"],
                    ].map((pair, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-3 flex flex-col gap-1 text-center"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <p className="text-white/45 text-sm">{pair[0]}</p>
                        <p
                          className="text-sm font-mono font-medium"
                          style={{ color: "#C9A84C" }}
                        >
                          {pair[1]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>
                    I — Instruments
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Name exactly what should be playing. This gives the track
                    its substance:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Distorted 808 Bass",
                      "Plucky Synth",
                      "Acoustic Guitar Fingerstyle",
                      "Heavy Drums",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg px-3 py-2 font-mono text-sm"
                        style={{
                          background: "rgba(201,168,76,0.06)",
                          color: "#C9A84C",
                          border: "1px solid rgba(201,168,76,0.15)",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>
                    V — Vocals
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Leave it unspecified and Suno picks randomly. Take control:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Female Whisper",
                      "Male Gritty Vocals",
                      "Choir Stacks",
                      "Autotune Vocals",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg px-3 py-2 font-mono text-sm"
                        style={{
                          background: "rgba(201,168,76,0.06)",
                          color: "#C9A84C",
                          border: "1px solid rgba(201,168,76,0.15)",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* GMIV Interactive Builder */}
            <GmivBuilder />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-white font-semibold text-base">
                  ✕ Weak prompt
                </p>
                <p className="text-white/65 text-base italic">
                  "Beautiful love song with piano, kind of sad"
                </p>
                <p className="text-white/45 text-sm">
                  This is a wish. Suno guesses.
                </p>
              </div>
              <div
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-white font-semibold text-base">
                  ✓ Strong prompt
                </p>
                <p className="text-white/65 font-mono text-sm leading-relaxed">
                  RnB, Soul, Sentimental Mood, Grand Piano, Minimal Drums,
                  Female Emotional Vocals, Slow Tempo, 80 BPM
                </p>
                <p className="text-white/45 text-sm">
                  This is a spec. Suno executes.
                </p>
              </div>
            </div>

            <ProTip>
              Suno responds better to comma-separated tags than to full
              sentences. Bad: "Make a song that sounds like it is raining
              outside." Good:{" "}
              <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>
                Rainy atmosphere, Lo-Fi
              </span>
              . Short, clear, precise.
            </ProTip>
          </div>

          {/* Chapter 6 */}
          <div id="cover-replace" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                06
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Cover & Replace — surgical fixes without the pain
              </h2>
            </div>
            <p>
              Great track, but the vocalist swallowed a word in the middle or
              the drums drifted off-beat. The old answer was to regenerate
              everything from scratch. In Studio, you fix it precisely. Two
              tools, two different jobs.
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-7.webp"
                alt="Cover and Replace — two different tools for two different problems"
                className="w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div
                className="rounded-xl p-5 flex gap-4 items-start"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: "3px solid #C9A84C",
                }}
              >
                <span className="text-xl flex-shrink-0">🎨</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">
                    Cover — Variation
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Use this when{" "}
                    <strong className="text-white">
                      you love the melody but not the sound
                    </strong>
                    . For example: the chorus melody is perfect, but it's played
                    on piano and you want guitar. Select the section, hit Cover,
                    swap the instrument in the prompt. Suno will attempt to
                    "drape" the new sound over the existing notes.
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl p-5 flex gap-4 items-start"
                style={{
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderLeft: "3px solid #C9A84C",
                }}
              >
                <span className="text-xl flex-shrink-0">🔧</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">
                    Replace — Context-aware substitution
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    The most powerful tool in Studio — and the one beginners
                    most often overlook. Use this when{" "}
                    <strong className="text-white">
                      the musical phrase itself is wrong, or there's an actual
                      error
                    </strong>
                    .
                  </p>
                  <p className="text-white/65 text-base leading-relaxed mt-2">
                    How it works: Suno doesn't listen to what's inside the
                    selection. It listens to what comes{" "}
                    <strong className="text-white">before</strong> and what
                    comes <strong className="text-white">after</strong> — and
                    generates a bridge that joins those two pieces seamlessly.
                    It's close to magic.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-8.webp"
                alt="Fix only the mistake — not the whole track"
                className="w-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-white">
              How to fix hallucinations
            </h3>
            <p>
              Hallucinations are when Suno sang an extra line, mangled a word,
              or inserted something completely unexpected.{" "}
              <strong className="text-white">
                Don't throw the track away.
              </strong>{" "}
              Do this instead:
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  step: "01",
                  title: "Select exactly the section with the error",
                  desc: "Grab a small amount of clean audio on each side — that's the context.",
                },
                {
                  step: "02",
                  title: "Click Replace Section",
                  desc: "Not just Replace — specifically Replace Section.",
                },
                {
                  step: "03",
                  title: "Fix the text in the Lyrics field",
                  desc: "Correct only the line where the error occurred.",
                },
                {
                  step: "04",
                  title: "Hit Create",
                  desc: "The model re-sings just that section, preserving the melodic and rhythmic feel of everything around it.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex gap-4 items-start"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="text-2xl font-bold flex-shrink-0"
                    style={{ color: "rgba(201,168,76,0.25)" }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {item.title}
                    </p>
                    <p className="text-white/65 text-base mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-9.webp"
                alt="Solo Hack — remove the vocals and drop in a solo in three steps"
                className="w-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Solo Hack: pull the vocals and drop in an instrumental
            </h3>
            <p>
              A pro move. Common situation: you want a guitar solo after the
              chorus, but Suno stubbornly keeps singing more verses. Here's the
              fix:
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Select the vocal section you want to remove",
                "Click Replace",
                "In the Lyrics field: [Instrumental Solo] or [Guitar Lick]",
                "In the Style field: Virtuoso Electric Guitar Solo",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-white/65 text-base">{item}</p>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-4 flex gap-3"
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              <span className="text-lg">🎸</span>
              <p className="text-white/65 text-base leading-relaxed">
                <strong className="text-white">The core shift:</strong> in
                Studio we stop being generators and become editors. We don't
                hope randomness gets it right — we correct it when it doesn't.
              </p>
            </div>
          </div>

          {/* Chapter 7 */}
          <div id="mixer" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                07
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                The Mixer in Studio — draft mode, not the finish line
              </h2>
            </div>
            <p>
              A lot of people see the volume faders in Studio and think:
              "finally, I'll mix the track right here." Let's take the
              rose-tinted glasses off: the built-in mixer is a tool for checking
              your idea, not for achieving final quality. But there are a few
              genuinely useful things you can do with it.
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-10.webp"
                alt="Center channel is for vocals and bass. Width comes from clearing the center"
                className="w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div
                className="rounded-xl p-5 flex gap-4 items-start"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: "3px solid #C9A84C",
                }}
              >
                <span className="text-xl flex-shrink-0">🔊</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">
                    The golden rule of volume
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    Feel like the instruments are too quiet under the vocal?{" "}
                    <strong className="text-white">Don't turn them up.</strong>{" "}
                    Do the opposite — turn the vocal down. In mixing, it's
                    always better to pull back the loudest thing than to try and
                    compete with it. This rule holds everywhere: in Studio, in
                    your DAW, in life.
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl p-5 flex gap-4 items-start"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: "3px solid #C9A84C",
                }}
              >
                <span className="text-xl flex-shrink-0">↔️</span>
                <div>
                  <p className="text-white font-semibold text-base mb-2">
                    Pan: free up the center
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">
                    The center of the stereo field is{" "}
                    <strong className="text-white">
                      sacred space for the vocals and bass
                    </strong>
                    . Leave those alone. Everything else — guitars, synths,
                    backing vocals — push to the sides. One instrument left,
                    another right. This gives the track width and carves out
                    space for the lead vocal to breathe instead of drown.
                  </p>
                </div>
              </div>
            </div>

            <ProTip>
              The Studio mixer is for orientation, not the finish line. If
              something sounds wrong here — treat it as a signal to revisit the
              structure, not a reason to spend an hour tweaking faders. The
              final sound is born in{" "}
              <a
                href="/mixing-mastering"
                style={{ color: "#C9A84C", textDecoration: "underline" }}
              >
                professional mixing
              </a>
              .
            </ProTip>
          </div>

          {/* Chapter 8 — Field Notes */}
          <div id="field-notes" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                08
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Field Notes from the Community
              </h2>
            </div>
            <p>
              Everything above is my own workflow. But Studio is young, moving
              fast, and the collective experience of r/SunoAI is accumulating
              faster than any single person can test. I read those threads the
              way I read gear forums before buying hardware — skeptically, but
              thoroughly. Here is what keeps coming up, filtered through my own
              sessions.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "The great stems debate",
                  body: "There is a genuine civil war over whether Suno’s own stem separation is good enough. One camp swears by external tools like Ultimate Vocal Remover with the htdemucs_6s model — more stems, arguably less damage. The other camp (and honestly, my testing leans this way) says no external splitter is consistently and noticeably better than Suno’s own. The lifehack that actually settles it: generate several sets of stems for the same track and cherry-pick the best take of each instrument — stem quality varies between renders, and the second pull is often cleaner than the first. Whichever tool you use, judge it on the stem that carries your song: vocals if it’s a vocal track, synths if it’s electronic.",
                },
                {
                  title: "Recreate and Replace are a re-roll, not an edit",
                  body: "The most common disappointment among new Studio users: hitting Recreate or Replace on a track and getting something wildly different from the original — different feel, different timing, sometimes a different instrument entirely. One engineer described replacing a piano and consistently getting a brass section no matter what the sliders said. Treat these buttons as controlled dice, not as an editor: duplicate the project before surgery, replace the shortest section you can get away with, and accept that two or three rolls is the norm, not a failure.",
                },
                {
                  title: "Watch the credit meter",
                  body: "A warning that shows up in almost every honest Studio review: every generation inside Studio costs credits — every alternate, every replaced section, every experiment, regardless of length. People burn through a monthly allowance in a weekend of enthusiastic tinkering. My rule: decide what you are fixing before you open the project, fix exactly that, and get out. Studio rewards surgeons, not browsers.",
                },
                {
                  title: "The pattern that actually ships",
                  body: "Talk to the people actually releasing tracks and a consistent picture emerges: Studio is the assembly room, not the finish line. The workflow that keeps producing results — assemble the structure in Studio, export stems, then rebuild in a real DAW: replace some of the generated sounds with your own, fix timing and pitch, add your own transitions and space. As one producer put it, once you’ve swapped enough sounds and added your own design, nobody can tell the track started as AI. That matches my experience — and it’s exactly why this guide treats Export as the most important chapter.",
                },
                {
                  title: "The 48-hour rule",
                  body: "The least technical tip and possibly the most valuable one, straight from a veteran thread on making AI tracks sound professional: walk away from the song for a couple of days, then listen again after the initial dopamine rush has worn off. Fresh generations all sound amazing at 1 a.m. The ones that still sound amazing on Monday are the ones worth spending Studio credits and mixing hours on.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-2"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "3px solid #C9A84C",
                  }}
                >
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                  <p className="text-white/50 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
            <ProTip>
              Studio is barely a year old and gets patched constantly — half of
              the complaints you will find in six-month-old threads are already
              fixed, and half of the tricks are already obsolete. Check the date
              on any Studio advice before trusting it. Including, in fairness,
              this section.
            </ProTip>
          </div>

          {/* Chapter 9 */}
          <div id="export" className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                }}
              >
                09
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Export — the final step with hard rules
              </h2>
            </div>
            <p>
              The last step is simple, but it has a few rules that directly
              affect quality.
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                loading="lazy"
                decoding="async"
                src="/images/suno-studio-11.webp"
                alt="Full Song is the baked cake. Clean stems mean a clean result."
                className="w-full object-cover"
              />
            </div>

            <div
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{
                background: "rgba(255,80,80,0.06)",
                border: "1px solid rgba(255,80,80,0.2)",
              }}
            >
              <p className="text-white font-semibold text-base">
                ⚠️ Why you can't only hand over Full Song
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                Think of Full Song as an already-baked cake. A mixing engineer
                can try to "unbake" it with specialized software — but that's
                extra work, and the quality inevitably takes a hit. Why accept a
                result with artifacts and smearing when you could just hand over
                the clean individual ingredients to begin with?
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "📦",
                  title: "Export Multitrack (Stems)",
                  desc: "In the Export menu, always choose Multitrack (Stems). Suno will give you an archive with every instrument on its own track: Vocals, Drums, Bass, Instruments. Give your engineer two things: Full Song (so they can hear the vision) and Multitrack Stems (so they can work on the parts). Only with separate tracks can a professional clean up the noise and assemble something truly polished.",
                },
                {
                  icon: "🎵",
                  title: "WAV only — forget MP3 exists",
                  desc: "MP3 is a compressed format for rough drafts and streaming. In the Audio menu, select WAV only. Suno already bakes in digital noise during generation — MP3 compression will amplify it. We want the cleanest possible source file for everything that comes next.",
                },
                {
                  icon: "🥁",
                  title: "Note the BPM — before you close the browser",
                  desc: "Look at the BPM displayed at the bottom of the screen and write it down. When you open your DAW, set that exact tempo first — then import the files. That way the rhythmic grid aligns perfectly and the stems sit exactly where they should.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex gap-4 items-start"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "3px solid #C9A84C",
                  }}
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-base mb-2">
                      {item.title}
                    </p>
                    <p className="text-white/65 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Exporting stems from Studio is the clean route, because the parts
              were never baked together in the first place. When a song is
              already finished and you need the instrumental pulled back out of
              it, that's the other job —{" "}
              <a
                href="/blog/suno-advanced-split-clean-instrumental"
                style={{ color: "#C9A84C", textDecoration: "underline" }}
              >
                rebuilding a Suno track from regenerated stems
              </a>{" "}
              goes through Advanced Split and the DAW reassembly.
            </p>
          </div>

          {/* Final cheatsheet */}
          <CheatsheetCopy
            title="Quick reference — the whole guide on one card"
            variant="table"
            items={[
              ["Build a track structure", "Timeline"],
              ["Extend with intention", "Extend + correct Timestamp"],
              ["Write a prompt that works", "G.M.I.V. Formula"],
              ["Change the sound, keep the melody", "Cover"],
              ["Fix a single error surgically", "Replace"],
              ["Pull vocals, insert an instrumental solo", "Solo Hack"],
              ["Prepare files for your DAW", "Stems + WAV + BPM"],
            ]}
            footnote="Suno Studio doesn't make music for you. It gives you an environment where you make the decisions. The better you understand what's controllable here — the more predictable the result."
          />

          {/* Pre-export checklist */}
          <CheatsheetCopy
            title="Pre-export checklist"
            variant="checklist"
            items={[
              "The timestamp for every Extend was set at a clean cut point",
              "All Lyrics fields have been updated — no leftover text from previous sections",
              "Style fields were filled in English for every Extend and Replace",
              "The ending section has an Outro, Fade out or Grand Finale tag",
              "BPM is noted somewhere before closing the tab",
              "Exported as Multitrack Stems (not just Full Song)",
              "Audio format set to WAV, not MP3",
            ]}
          />

          {/* Final thought */}
          <div className="flex flex-col gap-1">
            <div
              className="w-full h-px"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div
              className="rounded-2xl p-8 flex flex-col gap-4 mt-4"
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              <h3 className="text-xl font-semibold text-white">
                You're no longer just a user
              </h3>
              <p className="text-white/65 text-base leading-relaxed">
                What's sitting on your drive now isn't a file — it's a
                disassembled project, part by part. You're no longer the person
                who hits Generate and prays. You're a producer with clean stems
                ready for a serious mix.
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                Timeline, Extend with the right timestamp, the G.M.I.V. formula,
                Cover and Replace, stems in WAV — this isn't a feature list.
                It's a workflow where every step is deliberate.
              </p>
              <p className="text-white font-semibold mt-2 text-lg">
                Go make something.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <h3 className="text-xl font-semibold text-white">
              Not sure what your track needs?
            </h3>
            <p className="text-white/65 text-base max-w-md">
              Send it and hear a free 60-second preview — an honest assessment
              and an exact price, no commitment.
            </p>
            <a
              href="/free-track-preview"
              className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
              style={{ backgroundColor: "#C9A84C" }}
            >
              Get a Free Preview →
            </a>
          </div>

          <RelatedPosts slug="suno-studio-guide-en-2026" />
        </div>
      </div>
    </div>
  );
}
