import RelatedPosts from "@/app/components/blog/RelatedPosts";
import SunoCta from "@/app/components/blog/SunoCta";
import BlogJsonLd from "@/app/components/blog/BlogJsonLd";
import BlogHeader from "@/app/components/blog/BlogHeader";
import ReadingProgress from "@/app/components/blog/ReadingProgress";

const IMG = "/images/blog/suno-mastering";

export const metadata = {
  title: "How to Master a Suno Track for Spotify (2026 Guide)",
  alternates: {
    canonical: "https://www.slstudio.pro/blog/master-suno-track-for-spotify",
    languages: {
      en: "https://www.slstudio.pro/blog/master-suno-track-for-spotify",
      pl: "https://www.slstudio.pro/pl/blog/master-suno-track-for-spotify",
      ru: "https://www.slstudio.pro/blog/master-suno-track-for-spotify-ru",
      "x-default":
        "https://www.slstudio.pro/blog/master-suno-track-for-spotify",
    },
  },
  description:
    "Your Suno track sounds quiet and thin on Spotify? A working mastering engineer explains loudness normalization, AI artifacts and a step-by-step fix — with real settings from the studio.",
  openGraph: {
    title: "How to Master a Suno Track for Spotify — Engineer's Guide",
    description:
      "Why Suno tracks sound quiet on Spotify and how to fix it: loudness normalization, AI artifacts, free DIY tricks and real mastering settings.",
    type: "article",
    url: "https://www.slstudio.pro/blog/master-suno-track-for-spotify",
    siteName: "SL Studio",
    images: [`${IMG}/suno-mastering-cover.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Master a Suno Track for Spotify — Engineer's Guide",
    description:
      "Why Suno tracks sound quiet on Spotify and how to fix it: loudness normalization, AI artifacts, free DIY tricks and real mastering settings.",
  },
  keywords: [
    "master suno track for spotify",
    "suno track quiet on spotify",
    "suno mastering guide",
    "suno lufs spotify",
    "ai track mastering",
    "suno track sounds bad on spotify",
  ],
  other: {
    "article:published_time": "2026-07-18",
  },
};

// ─── Pro Tip block ───────────────────────────────────────────────────────────
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

// ─── Image block ─────────────────────────────────────────────────────────────
function ArticleImage({ src, alt }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/5">
      <img
        loading="lazy"
        decoding="async"
        src={src}
        alt={alt}
        className="w-full object-cover"
      />
    </div>
  );
}

// ─── Table of Contents ───────────────────────────────────────────────────────
const TOC = [
  { id: "why-spotify-turns-you-down", label: "Why Spotify Turns Your Track Down" },
  { id: "inside-a-raw-suno-export", label: "What's Inside a Raw Suno Export" },
  { id: "free-fixes", label: "Free Fixes You Can Do Today" },
  { id: "loudness-question", label: "The Loudness Question: -14 or -7?" },
  { id: "my-chain", label: "My Chain, Start to Finish" },
  { id: "when-mastering-cant-save-it", label: "When Mastering Can't Save It" },
  { id: "checklist", label: "The Pre-Upload Checklist" },
  { id: "faq", label: "FAQ" },
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
              {i + 1}.
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

// ─── Section header ──────────────────────────────────────────────────────────
function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{
          background: "rgba(201,168,76,0.15)",
          color: "#C9A84C",
        }}
      >
        {number}
      </span>
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "What LUFS should I target for a Suno track on Spotify?",
    a: "Spotify's official guidance is -14 LUFS integrated with true peak below -1 dBTP. In practice, most commercial releases sit around -7 to -9 LUFS, and I master my Suno projects to about -7…-8 LUFS with a -0.3 dB true-peak ceiling. Both approaches work — what matters is that the limiting stays clean. A loud master with baked-in distortion is worse than a quiet one.",
  },
  {
    q: "Why does my track sound worse on Spotify than in the Suno app?",
    a: "Three things stack up: Spotify turns your track down (or up) to its normalization target, the file gets converted to a lossy format, and any true-peak overshoots turn into audible distortion during that conversion. If your master was pushed too close to 0 dB, streaming encoding is where it falls apart.",
  },
  {
    q: "Should I download MP3 or WAV from Suno?",
    a: "Always WAV if your plan includes any processing. MP3 compression throws away exactly the high-frequency detail that AI tracks are already missing. WAV export requires a paid Suno plan, but if you're releasing music commercially you need a paid plan for the rights anyway.",
  },
  {
    q: "Do I have to tell Spotify my track was made with AI?",
    a: "Distributors increasingly ask you to disclose AI-generated content, and the industry is moving toward labeling as the norm. If you generated the track on a paid Suno plan, Suno's terms allow commercial release. My advice: disclose honestly and compete on quality — a well-finished track doesn't need to hide anything.",
  },
  {
    q: "Can a track be fixed from just the MP3?",
    a: "Yes. Modern stem separation (UVR5 with the htdemucs_ft model, or paid tools) splits a stereo file into vocals, drums, bass and instruments well enough to clean, rebalance and rebuild from. WAV gives better results, but MP3 is a workable starting point.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// ─── Checklist ───────────────────────────────────────────────────────────────
const checklist = [
  "Exported WAV from the newest Suno model (not a year-old generation)",
  "Vocal is clear at low listening volume",
  "Bass passes the car test — no droning around 100 Hz",
  "Highs are smooth on cheap earbuds, not fizzy or metallic",
  "Chorus still hits harder than the verse after limiting",
  "True peak ceiling at -1 dBTP (or -2 if you mastered loud)",
  "No audible clipping anywhere — Spotify can't undo it",
  "Compared against a commercial reference at matched volume",
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function MasterSunoTrackForSpotifyPage() {
  return (
    <div id="top" className="mt-16 mb-20">
      <BlogJsonLd slug="master-suno-track-for-spotify" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <BlogHeader
          topic="Mastering"
          date="July 18, 2026"
          title="How to Master a Suno Track for Spotify"
          description="Why your AI track sounds quiet and thin next to commercial releases — and how to fix it, from free tricks to the exact settings I use in my studio."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Intro */}
          <div className="flex flex-col gap-5">
            <p>
              You finished a track in Suno. In your headphones it sounded huge.
              Then you uploaded it, opened Spotify, pressed play right after
              your favorite artist… and your song walked in quiet, thin and
              somehow <em>small</em> — like it showed up to a stadium gig with
              a practice amp.
            </p>
            <p>
              It's not your ears, and it's not bad luck. It's two things
              stacked on top of each other:{" "}
              <strong className="text-white">
                Spotify's loudness normalization
              </strong>{" "}
              and{" "}
              <strong className="text-white">
                the way AI generators build sound
              </strong>
              . I master Suno tracks for clients, so let me walk you through
              the whole picture — including the settings from my own sessions,
              not theory from a manual.
            </p>
            <ArticleImage
              src={`${IMG}/suno-mastering-cover.jpg`}
              alt="Raw Suno export waveform transforming into a clean mastered waveform"
            />
          </div>

          {/* Table of Contents */}
          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          <SunoCta lang="en" />

          {/* ── 1. Why Spotify turns you down ── */}
          <div id="why-spotify-turns-you-down" className="flex flex-col gap-5">
            <SectionHeader
              number="1"
              title="Why Spotify Turns Your Track Down (or Refuses to Turn It Up)"
            />
            <p>
              Spotify plays everything at a roughly equal perceived loudness.
              The default target is{" "}
              <strong className="text-white">-14 LUFS integrated</strong>:
              louder masters get turned down, quieter ones get turned up — but
              only as far as their peaks allow. There are also two listener
              settings you don't control:{" "}
              <strong className="text-white">Loud</strong> (-11 LUFS, where
              Spotify applies <em>its own limiter</em> to quiet tracks — you do
              not want a robot making that decision for your mix) and{" "}
              <strong className="text-white">Quiet</strong> (-19 LUFS).
            </p>
            <ArticleImage
              src={`${IMG}/spotify-loudness-normalization.jpg`}
              alt="Loudness normalization concept: a loud waveform being turned down to a controlled level"
            />
            <p>
              Spotify also asks for{" "}
              <strong className="text-white">true peak below -1 dBTP</strong>{" "}
              (below -2 dBTP if your master is louder than -14 LUFS), because
              converting to lossy formats creates inter-sample peaks — push
              your file against 0 dB and the encoder adds crackle you never
              heard in your DAW.
            </p>
            <p>
              Here's the rule that explains 90% of disappointing uploads:{" "}
              <strong className="text-white">
                Spotify can change your volume, but it cannot un-bake your
                damage.
              </strong>{" "}
              Loudness is removable. Clipping, harsh limiting and distortion
              are printed into the file forever. A crushed track gets turned
              down to the same level as everyone else — and keeps all of its
              crunch while losing its punch.
            </p>
          </div>

          {/* ── 2. Inside a raw Suno export ── */}
          <div id="inside-a-raw-suno-export" className="flex flex-col gap-5">
            <SectionHeader
              number="2"
              title="What's Actually Inside a Raw Suno Export"
            />
            <p>
              Credit where due: Suno's internal balance is often better than
              many bedroom mixes. But the file that comes out of the export
              button has a very recognizable set of ailments:
            </p>
            <div className="flex flex-col gap-3">
              {[
                [
                  "Soft, eaten transients.",
                  "The kick loses its click — especially in sections where the vocal is present. The track feels weaker than it measures.",
                ],
                [
                  "Midrange bloat.",
                  "Suno pushes mids by default — safe for phone speakers, tiring on anything better.",
                ],
                [
                  "The ceiling at ~18 kHz.",
                  "Above it: nothing. The 'air' of a real recording simply isn't generated. The better your playback system, the more obvious it is.",
                ],
                [
                  "Mud around 100 Hz.",
                  "The most capricious frequency in bass — it hides on laptop speakers and then drones in your car.",
                ],
                [
                  "Baked-in reverb with artifacts.",
                  "The vocal arrives swimming in a hall you can't turn off, complete with shimmer that no de-reverb plugin fully removes.",
                ],
                [
                  "Metallic hi-hats and fizzy resonances",
                  "in the 2–4 kHz region — the single biggest 'this is AI' giveaway.",
                ],
              ].map(([head, body]) => (
                <div
                  key={head}
                  className="rounded-xl p-4 flex gap-3 items-start"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="flex-shrink-0 font-bold"
                    style={{ color: "#C9A84C" }}
                  >
                    •
                  </span>
                  <p className="text-white/65 text-base leading-relaxed">
                    <strong className="text-white">{head}</strong> {body}
                  </p>
                </div>
              ))}
            </div>
            <ArticleImage
              src={`${IMG}/ai-track-anatomy.jpg`}
              alt="Spectrum of a typical AI-generated track: overloaded low end, harsh resonances, missing ultra highs"
            />
            <p>
              And listeners hear it. Not consciously, maybe — but blind tests
              keep showing that even casual audiences clock a raw AI track
              within seconds and engage with it less. The gap between
              'generated' and 'released' is exactly what this article is about.
            </p>
          </div>

          {/* ── 3. Free fixes ── */}
          <div id="free-fixes" className="flex flex-col gap-5">
            <SectionHeader number="3" title="Free Fixes You Can Do Today" />
            <p>
              Before any mastering, squeeze everything you can out of the
              source. These cost nothing and stack up fast:
            </p>
            <div className="flex flex-col gap-4">
              {[
                [
                  "Export the best possible source.",
                  "WAV, newest model. If your track was generated on an older model, hit Remaster (v5, Normal) before anything else — old-model generations carry extra high-frequency hiss and a flatter image.",
                ],
                [
                  "The Remaster stereo trick.",
                  "Remaster gives you two near-identical copies of your track. Put the original in the center, pan the two remasters hard left and right, drop them 4 dB, high-pass at 100 Hz and low-pass around 5 kHz. Congratulations: you just rebuilt the side image of a flat AI export with zero plugins.",
                ],
                [
                  "Prompt for dry vocals.",
                  "If you plan to post-produce, ask for a dry, close vocal in the prompt. Removing baked-in AI reverb later is surgery; not generating it is free.",
                ],
                [
                  "Split to stems with UVR5.",
                  "It's free. Use the htdemucs_ft model for vocals/drums/bass/other. One warning: separation loves to file saxophones and violins under 'vocals' — always audition the stems before processing them.",
                ],
                [
                  "Rebuild the missing top with noise.",
                  "Blend a touch of white noise onto dull hi-hats — it reconstructs the 'air' that was never generated. A quiet vinyl-noise layer over the whole track does double duty: it adds vintage glue and masks small artifacts. Engineers have used this trick since long before AI.",
                ],
                [
                  "Two reverbs, not one.",
                  "AI exports are strangely dry once you strip their artifacts. One short ambience reverb for body, one longer tail for depth — suddenly the track breathes like a production instead of a render.",
                ],
              ].map(([head, body], i) => (
                <div key={head} className="flex gap-4 items-start">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-white/65 text-base leading-relaxed">
                    <strong className="text-white">{head}</strong> {body}
                  </p>
                </div>
              ))}
            </div>
            <ArticleImage
              src={`${IMG}/audio-stem-separation.jpg`}
              alt="A mixed waveform separating into four stems: vocals, drums, bass and instruments"
            />
            <ProTip>
              These steps get a decent generation maybe 70% of the way. The
              remaining 30% — transient surgery, artifact cleanup, real
              instruments — is hand work. More on when it's worth it below.
            </ProTip>
          </div>

          {/* ── 4. Loudness question ── */}
          <div id="loudness-question" className="flex flex-col gap-5">
            <SectionHeader
              number="4"
              title="The Loudness Question: -14 or -7?"
            />
            <p>
              Here's where the internet fights. The official Spotify docs say
              -14 LUFS. Meanwhile, pull any current chart hit into a meter and
              you'll find -7 to -9 LUFS. Who's right?
            </p>
            <p>
              Both, annoyingly. Spotify will turn a -8 master down to -14
              playback anyway — but <em>density survives the turn-down</em>. A
              well-made loud master played at -14 still feels more solid than a
              timid master played at -14. The catch is the phrase 'well-made':
              if you reach that loudness by slamming a limiter into a harsh,
              uncleaned AI export, you get a loud <em>and</em> ugly track that
              Spotify politely turns down to be quiet and ugly.
            </p>
            <p>
              My personal practice, take it or leave it:{" "}
              <strong className="text-white">
                I push my masters to -7…-8 LUFS integrated
              </strong>{" "}
              — but only after the harshness is cleaned up, and always with a
              true-peak ceiling engaged. Here's an actual session, meters don't
              lie:
            </p>
            <ArticleImage
              src={`${IMG}/studioone-master-plan-annotated.jpg`}
              alt="Studio One mastering session showing -8.0 LUFS integrated, -7.1 short-term and -0.1 dB peak"
            />
            <p>
              And the limiter stage that makes it safe — the Maximizer in IRC 4
              Modern mode, output ceiling at -0.30 dB with True Peak detection
              on. The loudness gain comes <em>last</em>, after EQ cleanup,
              never instead of it:
            </p>
            <ArticleImage
              src={`${IMG}/ozone12-settings-annotated.jpg`}
              alt="Ozone 12 Maximizer settings: IRC 4 Modern, output -0.30 dB, True Peak enabled"
            />
            <ProTip>
              The test that settles every loudness argument: level-match your
              master against a commercial reference and listen. If your track
              only wins when it's louder, it isn't better. And if it starts
              sounding worse as it gets louder — the answer is never 'more
              limiter'. It's cleanup.
            </ProTip>
          </div>

          <SunoCta lang="en" />

          {/* ── 5. My chain ── */}
          <div id="my-chain" className="flex flex-col gap-5">
            <SectionHeader number="5" title="My Chain, Start to Finish" />
            <div className="flex flex-col gap-4">
              {[
                [
                  "Surgical EQ first.",
                  "Cut the mud (200–400 Hz), tame the AI resonances (2–4 kHz), control the 100 Hz region. Nothing gets louder until the ugly parts are gone.",
                ],
                [
                  "Gentle compression for glue.",
                  "1–2 dB of reduction, slow attack so the surviving transients keep their click.",
                ],
                [
                  "Tonal balancing.",
                  "A light mid/side stabilizer pass to open the sides and calm the midrange bloat without touching the vocal center.",
                ],
                [
                  "Maximizer last.",
                  "IRC 4 Modern, output -0.30 dB, True Peak on, push to target while listening in delta mode: the moment the track starts folding, back off.",
                ],
                [
                  "Translation check.",
                  "Phone speaker, cheap earbuds, car. Earbuds expose vocal harshness, the phone exposes midrange, the car exposes 100 Hz. If it makes musical sense on all three, it ships.",
                ],
              ].map(([head, body], i) => (
                <div key={head} className="flex gap-4 items-start">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-white/65 text-base leading-relaxed">
                    <strong className="text-white">{head}</strong> {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 6. When mastering can't save it ── */}
          <div id="when-mastering-cant-save-it" className="flex flex-col gap-5">
            <SectionHeader number="6" title="When Mastering Can't Save It" />
            <p>
              Honesty time. Mastering is processing on the finished stereo file
              — and some Suno problems live deeper than that. If the kick has
              no transient to enhance, if the vocal is metallic at its core, if
              the hi-hats are pure fizz — no amount of mastering will fix
              generation. That's <em>finishing</em> territory: stem separation,
              artifact cleanup per stem, replacing weak parts with real
              instruments, then mixing and mastering the rebuilt track. It's
              the difference between polishing a car and actually repairing the
              engine.
            </p>
            <p>
              If you want to go deeper into the generation side first, I've
              written a full{" "}
              <a
                href="/blog/suno-guide-2026"
                className="underline hover:text-white transition"
              >
                Suno guide
              </a>{" "}
              and a{" "}
              <a
                href="/blog/suno-studio-guide-2026"
                className="underline hover:text-white transition"
              >
                Suno Studio guide
              </a>{" "}
              — better source material makes every step above easier.
            </p>
          </div>

          {/* ── 7. Checklist ── */}
          <div id="checklist" className="flex flex-col gap-5">
            <SectionHeader number="7" title="The Pre-Upload Checklist" />
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {checklist.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 py-1.5"
                  style={{
                    borderBottom:
                      i < checklist.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                  }}
                >
                  <span
                    className="flex-shrink-0 font-bold"
                    style={{ color: "#C9A84C" }}
                  >
                    ✓
                  </span>
                  <p className="text-white/70 text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── FAQ ── */}
          <div id="faq" className="flex flex-col gap-5">
            <SectionHeader number="?" title="FAQ" />
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-2"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-white font-medium text-sm">{item.q}</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <h3 className="text-xl font-semibold text-white">
              Prefer to skip straight to the finished version?
            </h3>
            <p className="text-white/65 text-base max-w-md">
              I take Suno tracks apart and finish them by hand — stems,
              artifact cleanup, live instruments, master. Free processed
              preview before you pay anything.
            </p>
            <a
              href="/suno-track-finishing"
              className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
              style={{ backgroundColor: "#C9A84C" }}
            >
              Suno Track Finishing →
            </a>
          </div>

          <SunoCta lang="en" />

          <RelatedPosts slug="master-suno-track-for-spotify" />
        </div>
      </div>
    </div>
  );
}
