import RelatedPosts from "@/app/components/blog/RelatedPosts";
import BlogJsonLd from "@/app/components/blog/BlogJsonLd";
import BlogHeader from "@/app/components/blog/BlogHeader";
import ReadingProgress from "@/app/components/blog/ReadingProgress";
import StemChecklistForm from "@/app/components/blog/StemChecklistForm";

const IMG = "/images/blog/stems";
const PDF = "/downloads/sl-studio-track-prep-checklist-en.pdf";

export const metadata = {
  title:
    "How to Export Stems and Prepare Your Track for Mixing (2026 Checklist)",
  alternates: {
    canonical: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing",
    languages: {
      en: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing",
      pl: "https://www.slstudio.pro/pl/blog/how-to-export-stems-for-mixing",
      ru: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing-ru",
      "x-default":
        "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing",
    },
  },
  description:
    "What to send a mixing engineer: WAV settings, why the limiter must come off, how to export stems from FL Studio, Ableton, Logic and Reaper, file naming, and what to do if all you have is a phone recording or a Suno export. Free PDF checklist included.",
  openGraph: {
    title: "How to Export Stems and Prepare Your Track for Mixing",
    description:
      "WAV settings, stems from any DAW, naming, sending - and why a phone recording is also perfectly fine. With a free one-page PDF checklist.",
    type: "article",
    url: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing",
    siteName: "SL Studio",
    images: [`${IMG}/stems-cover.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Export Stems and Prepare Your Track for Mixing",
    description:
      "A working engineer's guide: formats, headroom, stems from any DAW, naming and sending. Free PDF checklist inside.",
  },
  keywords: [
    "how to export stems",
    "prepare track for mixing",
    "send stems to mixing engineer",
    "wav or mp3 for mixing",
    "how to send a song for mixing and mastering",
    "stems for mastering",
  ],
  other: {
    "article:published_time": "2026-07-02",
  },
};

// ─── FAQ ────────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Do I really need stems, or is a stereo mix enough?",
    a: "A stereo mix is enough to start - for mastering it's all I need, and for a mix assessment it's plenty. Stems simply give me more control: I can rebalance the vocal, fix the low end or replace a weak drum sound instead of working around it. Send what you have; if stems would genuinely change the result, I'll tell you before any money changes hands.",
  },
  {
    q: "What if all I have is an mp3 or a voice-memo recording from my phone?",
    a: "Send it. I say this without irony: phone demos, rehearsal-room recordings and old mp3s are a normal starting point here, not an embarrassment. I'll tell you honestly what can be achieved with it - sometimes the answer is a surprisingly good restoration, sometimes it's advice on how to re-record one part cheaply. Either way you lose nothing by asking.",
  },
  {
    q: "What WAV settings should I export?",
    a: "24-bit WAV at the sample rate your project already uses (44.1 or 48 kHz - don't convert it). Turn off any limiter or maximizer on the master bus, leave roughly 3-6 dB of headroom, and export the full length including the reverb tail at the end.",
  },
  {
    q: "Can I send a Suno or other AI-generated track?",
    a: "Yes - AI-generated tracks are a normal part of my workload. Send the highest-quality export the platform gives you (WAV if available), plus the lyrics and a note about what bothers you in the sound. If the platform offers stem downloads, grab those too - they help a lot.",
  },
  {
    q: "How do I send large files?",
    a: "WeTransfer (free up to 2 GB, no account needed) or a Google Drive folder link work perfectly. Zip your stems folder first so nothing gets lost, double-check the link opens in an incognito window, and send it through the contact page with a couple of lines about the song.",
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

// ─── Pro Tip block ───────────────────────────────────────────────────────────────
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

// ─── Image block ─────────────────────────────────────────────────────────────────
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

// ─── Table of contents ────────────────────────────────────────────────────────────
const TOC = [
  { id: "the-only-rule", label: "The Only Rule: Send What You Have" },
  { id: "formats", label: "Files and Formats: WAV Beats Everything" },
  { id: "limiter", label: "Kill the Limiter, Keep the Headroom" },
  { id: "stems", label: "Stems: How to Export Them from Any DAW" },
  { id: "naming", label: "Naming Files So Nothing Gets Lost" },
  { id: "special-cases", label: "Phone Demos, Rehearsal Takes and AI Tracks" },
  { id: "sending", label: "How to Send It (and What to Write)" },
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
              className="text-sm text-white/65 hover:text-white transition leading-snug"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ─── Section header ──────────────────────────────────────────────────────────────────
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

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function HowToExportStemsForMixingPage() {
  return (
    <div id="top" className="mt-16 mb-20">
      <BlogJsonLd slug="how-to-export-stems-for-mixing" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReadingProgress />
      <div className="max-w-[680px] mx-auto">
        <BlogHeader
          topic="Production"
          date="July 2, 2026"
          title="How to Export Stems and Prepare Your Track for Mixing"
          description="A practical, no-gatekeeping guide to sending music to a mixing engineer: formats, headroom, stems from any DAW, file naming and delivery - plus what to do when all you have is a phone recording. Free one-page PDF checklist included."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Intro */}
          <div className="flex flex-col gap-5">
            <p>
              <strong className="text-white">
                Let's get one thing out of the way first: you can send me
                anything. A voice memo from your phone, a noisy rehearsal
                recording, a ten-year-old mp3, a Suno export - all of it is a
                valid starting point, and none of it needs to be "fixed" before
                I hear it.
              </strong>
            </p>
            <p>
              So why does this guide exist? Because preparation isn't a gate -
              it's a multiplier. The same song, sent two different ways, can
              give me two very different amounts of room to work. Every minute I
              spend un-breaking a crushed export or guessing which of five files
              is the right one is a minute I'm not spending on your sound. Ten
              minutes of prep on your side regularly buys an audibly better
              result for the same money.
            </p>
            <p>
              Below is everything that actually matters: formats, the one
              limiter mistake almost everyone makes, how to export stems from
              any DAW, naming, and how to send it all. If you'd rather have this
              as a one-page cheat sheet next to your DAW, there's a{" "}
              <a
                href="#checklist"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                free PDF checklist
              </a>{" "}
              at the end.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          {/* ── 1. The only rule ── */}
          <div id="the-only-rule" className="flex flex-col gap-5">
            <SectionHeader
              number="1"
              title="The Only Rule: Send What You Have"
            />
            <p>
              Plenty of studios publish "submission requirements" that read like
              customs declarations, and plenty of musicians never send their
              song anywhere because of them. My rule is the opposite and it's
              the only one on this page that has no exceptions:{" "}
              <strong className="text-white">
                the version you have right now is good enough to send.
              </strong>
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>A phone recording of you and a guitar? Send it.</li>
              <li>A rehearsal-room take with the drums too loud? Send it.</li>
              <li>An old mp3 of a song you never finished? Send it.</li>
              <li>An AI-generated track that almost sounds right? Send it.</li>
            </ul>
            <p>
              I'll listen and tell you honestly what can be done with it and
              what it would cost - that assessment is free and doesn't obligate
              you to anything. Everything below this point is simply how to give
              me <em>more</em> to work with when you can.
            </p>
            <ProTip>
              If you're hesitating between sending a rough version today and a
              "properly prepared" one someday - send the rough one today.
              Momentum finishes more songs than perfectionism ever has.
            </ProTip>
          </div>

          {/* ── 2. Formats ── */}
          <div id="formats" className="flex flex-col gap-5">
            <SectionHeader
              number="2"
              title="Files and Formats: WAV Beats Everything"
            />
            <p>
              When you do have a choice, here's the order of preference and the
              settings that matter:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">WAV (or AIFF), 24-bit.</strong>{" "}
                Lossless formats keep everything your project had. 24-bit is the
                studio standard; 16-bit is acceptable, 32-bit float is also
                perfectly fine if that's what your DAW offers.
              </li>
              <li>
                <strong className="text-white">
                  Keep the project's sample rate.
                </strong>{" "}
                If your session is 44.1 kHz, export 44.1; if it's 48, export 48.
                Converting up to 96 kHz adds nothing except file size - and
                converting down throws information away.
              </li>
              <li>
                <strong className="text-white">
                  Never convert mp3 to WAV.
                </strong>{" "}
                It doesn't restore lost quality - it just hides what the file
                really is. If an mp3 is all you have, send the mp3 itself,
                ideally the highest-bitrate original you've got.
              </li>
              <li>
                <strong className="text-white">Export the full length.</strong>{" "}
                Start from the very beginning and let the last chord's reverb
                tail ring out completely before the export ends. Cut-off tails
                are the most common tiny heartbreak in this job.
              </li>
            </ul>
          </div>

          {/* ── 3. Limiter ── */}
          <div id="limiter" className="flex flex-col gap-5">
            <SectionHeader
              number="3"
              title="Kill the Limiter, Keep the Headroom"
            />
            <p>
              If you remember exactly one technical thing from this page, make
              it this one. Before exporting a mix for mixing or mastering,{" "}
              <strong className="text-white">
                switch off every limiter, maximizer and clipper on your master
                bus.
              </strong>{" "}
              A limiter squashes the peaks of your music to make it loud - and
              that squashing cannot be undone on my side. Sending a limited file
              is like mailing a letter that's already been shredded: the content
              is technically there, but nobody can work with it.
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">Leave 3-6 dB of headroom</strong>{" "}
                - the loudest moment of the song should peak somewhere around -6
                to -3 dB on your master meter.
              </li>
              <li>
                <strong className="text-white">Don't normalize</strong> the
                export and don't "gain up" the file to look louder. Quiet is
                fine. Quiet is good.
              </li>
              <li>
                <strong className="text-white">
                  EQ and compression on individual tracks can stay
                </strong>{" "}
                if they're part of your sound - it's only the master-bus
                loudness processing that has to go.
              </li>
            </ul>
            <p>
              Your export will sound quieter than commercial releases. That's
              not a bug - loudness is literally what you're hiring me for.
            </p>
            <ProTip>
              Quick self-check: if your exported file peaks around -6 dB and
              sounds noticeably quieter than Spotify tracks, you did everything
              right. If it's slammed against 0 dB and sounds "finished", a
              limiter is still on somewhere.
            </ProTip>
          </div>

          {/* ── 4. Stems ── */}
          <div id="stems" className="flex flex-col gap-5">
            <SectionHeader
              number="4"
              title="Stems: How to Export Them from Any DAW"
            />
            <p>
              Stems are your mix exported in groups: drums as one file, bass as
              another, guitars, vocals, synths, effects - each printed
              separately, all the same length. They're the difference between me{" "}
              <em>working around</em> a problem and <em>fixing</em> it. Four
              rules apply in every DAW:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">
                  Every stem starts at bar 1
                </strong>{" "}
                (0:00) - even if the instrument enters three minutes in. Same
                start, same length, for every file. This is what makes them line
                up on my side.
              </li>
              <li>
                <strong className="text-white">
                  Keep your creative processing.
                </strong>{" "}
                If a crushed drum bus or a telephone-EQ vocal is part of the
                sound, print it. When in doubt, export two versions - wet and
                dry - and label them.
              </li>
              <li>
                <strong className="text-white">Master bus stays empty</strong> -
                same rule as before: no limiter, no "glue" on the stereo output
                while printing stems.
              </li>
              <li>
                <strong className="text-white">6-12 stems is plenty</strong> for
                most songs. Kick, snare, rest-of-drums, bass, guitars, keys,
                lead vocal, backing vocals, FX - that level of detail covers 95%
                of what mixing needs.
              </li>
            </ul>
            <p>Here's where the export lives in the big four DAWs:</p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">FL Studio:</strong> File → Export
                → WAV, then enable "Split mixer tracks" in the export dialog.
                Every mixer track becomes its own file in one pass.
              </li>
              <li>
                <strong className="text-white">Ableton Live:</strong> File →
                Export Audio/Video, set "Rendered Track" to{" "}
                <em>All Individual Tracks</em>, choose WAV 24-bit and render.
              </li>
              <li>
                <strong className="text-white">Logic Pro:</strong> File → Export
                → All Tracks as Audio Files - check "Include Volume/Pan
                Automation" and pick 24-bit WAV.
              </li>
              <li>
                <strong className="text-white">Reaper:</strong> File → Render,
                set Source to <em>Stems (selected tracks)</em>, select your
                track folders, render at 24-bit.
              </li>
            </ul>
            <ProTip>
              Sanity check before sending: drag all your stems into a blank
              project, don't touch a single fader and press play. If it sounds
              exactly like your mix, the export is correct. If something is
              missing or doubled - better you find out than me, three days
              later.
            </ProTip>
          </div>

          {/* ── 5. Naming ── */}
          <div id="naming" className="flex flex-col gap-5">
            <SectionHeader
              number="5"
              title="Naming Files So Nothing Gets Lost"
            />
            <p>
              You'd be amazed how much studio time worldwide is spent figuring
              out whether <em>final_FINAL_v3_thisone.wav</em> is newer than{" "}
              <em>final_v3_FINAL_real.wav</em>. Thirty seconds of naming
              discipline solves it forever:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">Folder:</strong>{" "}
                Artist_SongTitle_120bpm_Am - artist, song, tempo and key in the
                folder name answers half of my first-day questions.
              </li>
              <li>
                <strong className="text-white">Stems:</strong> numbered and
                obvious - 01_Kick, 02_Snare, 03_Drums_Rest, 04_Bass, 05_Gtr_L,
                06_Gtr_R, 07_LeadVox, 08_BVs, 09_FX. No inside jokes, future-you
                won't remember them either.
              </li>
              <li>
                <strong className="text-white">One song = one zip.</strong> Zip
                the folder before uploading - nothing gets lost in transfer, and
                I get your file structure exactly as you made it.
              </li>
            </ul>
          </div>

          {/* ── 6. Special cases ── */}
          <div id="special-cases" className="flex flex-col gap-5">
            <SectionHeader
              number="6"
              title="Phone Demos, Rehearsal Takes and AI Tracks"
            />
            <p>
              Now the cases the "requirements pages" never mention - which
              happen to be half of what lands in my inbox.
            </p>
            <p>
              <strong className="text-white">
                Phone and rehearsal recordings.
              </strong>{" "}
              Two things matter. First: send the <em>original file</em> from the
              phone, not a messenger forward - WhatsApp and Telegram voice
              messages re-compress audio brutally, and that damage is permanent.
              Email it to yourself or upload straight to Drive. Second: don't
              "help" the recording with enhancement apps or EQ before sending -
              every automatic cleanup throws away information I could have used
              better.
            </p>
            <p>
              <strong className="text-white">Suno and other AI tracks.</strong>{" "}
              Download the best quality the platform offers - WAV if your plan
              includes it - and grab the stems too if the platform can export
              them. Attach the lyrics and one honest sentence about what bothers
              you in the sound ("the chorus feels thin", "the vocal is harsh").
              If you're curious what a human engineer actually changes in an AI
              track, I ran a{" "}
              <a
                href="/blog/ai-vs-human-mastering-blind-test"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                public blind test
              </a>{" "}
              on exactly that question.
            </p>
          </div>

          {/* ── 7. Sending ── */}
          <div id="sending" className="flex flex-col gap-5">
            <SectionHeader
              number="7"
              title="How to Send It (and What to Write)"
            />
            <p>
              No portals, no accounts:{" "}
              <strong className="text-white">WeTransfer</strong> (free up to 2
              GB, no registration) or a{" "}
              <strong className="text-white">Google Drive</strong> folder link
              is all it takes. Zip first, then upload, then open your own link
              in an incognito window to make sure it works without logging in.
            </p>
            <p>In the message itself, five lines beat five paragraphs:</p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>What the song is and what you need (mix? master? both?)</li>
              <li>One or two reference tracks whose sound you love</li>
              <li>What bothers you in the current version</li>
              <li>Your deadline, if you have one</li>
              <li>The download link</li>
            </ul>
            <p>
              Send it through the{" "}
              <a
                href="/contact"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                contact page
              </a>{" "}
              - and if you want to hear what I'd do with your track before
              spending anything, the{" "}
              <a
                href="/free-track-preview"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                free preview
              </a>{" "}
              exists for exactly that.
            </p>
          </div>

          {/* ── PDF checklist form ── */}
          <StemChecklistForm pdfHref={PDF} lang="en" />

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

          <RelatedPosts slug="how-to-export-stems-for-mixing" />
        </div>
      </div>
    </div>
  );
}
