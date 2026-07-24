import Link from "next/link";
import { Lightbulb } from "lucide-react";
import StepFlareCard from "../../common/StepFlareCard";

const includedItems = [
  "Arrangement built around your melody, chords or demo",
  "Instrument selection and complete production",
  "Live guitars and selected parts when the song needs them",
  "Professional virtual instruments and sound design",
  "Editing, mixing and mastering",
  "Final WAV and MP3 files",
  "Instrumental version and stems on request",
  "Up to three revision rounds",
];

const pricingTiers = [
  {
    name: "Parts & Demo Polish",
    price: "from $119",
    text: "Individual instruments and parts recorded or produced for your existing project, plus editing.",
  },
  {
    name: "Full Arrangement",
    price: "$149–299",
    text: "A voice memo, riff or sketch becomes a complete track with all the instruments it needs.",
    featured: true,
  },
  {
    name: "Release-Ready Production",
    price: "$199–399",
    text: "Full arrangement plus mixing and mastering — a finished track, ready for release.",
  },
];

const steps = [
  {
    number: "01",
    title: "Send the idea",
    text: "A voice memo, riff, MIDI sketch, lyrics or rehearsal recording is enough.",
  },
  {
    number: "02",
    title: "Set the direction",
    text: "We discuss references, mood, instruments and what the finished track should feel like.",
  },
  {
    number: "03",
    title: "Hear the concept",
    text: "I prepare a short preview or production concept before the full arrangement moves ahead.",
  },
  {
    number: "04",
    title: "Build and finish",
    text: "I complete the production, mix and master it, then deliver the final files with up to three revision rounds.",
  },
];

function ProTip({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex gap-3 items-start mt-auto relative z-10"
      style={{
        background: "rgba(201,168,76,0.07)",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <span
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "rgba(201,168,76,0.12)",
          border: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <Lightbulb className="w-4 h-4" style={{ color: "#C9A84C" }} />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1.5 text-[#C9A84C]">
          Pro Tip
        </p>
        <p className="text-white/70 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function GlowCard({ children }) {
  return (
    <div className="rounded-2xl p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden transition-all duration-300 bg-white/[0.03] border border-white/[0.05] hover:bg-[#C9A84C]/[0.07] hover:border-[#C9A84C]/35">
      <div
        className="absolute top-0 left-0 w-3/5 h-3/5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}

export default function Section1() {
  return (
    <section className="mt-10 flex flex-col gap-16">
      <div>
        <div className="mb-8">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
            Service &amp; Pricing
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            What you get
          </h2>
          <p className="mt-4 text-white/60 max-w-3xl leading-relaxed">
            Not a generic backing track pasted under your melody. The
            arrangement is built around the character, rhythm and emotion
            already present in your idea.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, i) => (
            <StepFlareCard
              key={tier.name}
              delay={i * 120}
              className={`rounded-2xl p-8 flex flex-col gap-4 h-full border ${
                tier.featured
                  ? "border-[#C9A84C]/25 bg-[#C9A84C]/[0.06]"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              <p className="text-white/50 text-xs uppercase tracking-[0.25em]">
                {tier.name}
              </p>
              <p className="step-number price-number text-3xl font-semibold text-[#f5b942]">
                {tier.price}
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                {tier.text}
              </p>
            </StepFlareCard>
          ))}
        </div>
        <div className="mt-6 rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02]">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {includedItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-white/70 text-[15px] leading-relaxed"
              >
                <span className="text-[#C9A84C] mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl">
            The exact price within each range depends on the song length, the
            number of instruments and how much production the track needs. You
            receive a fixed quote before the full project begins.
          </p>
          <Link
            href="/free-track-preview"
            className="btn-gold inline-flex justify-center items-center font-semibold px-6 py-3.5 rounded-xl text-sm text-black bg-[#C9A84C] flex-shrink-0"
          >
            Send Your Idea for Free →
          </Link>
        </div>
      </div>

      <div>
        <div className="mb-8">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
            The Process
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            From voice memo to finished track
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StepFlareCard
              key={step.number}
              tilt
              delay={i * 120}
              className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] h-full"
            >
              <span className="step-number text-3xl font-bold text-[#C9A84C]/30">
                {step.number}
              </span>
              <h3 className="text-white font-semibold mt-4">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mt-2">
                {step.text}
              </p>
            </StepFlareCard>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
        <GlowCard>
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] relative z-10">
            The Kitchen Voice Memo
          </span>
          <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
            <p>
              Once someone sent me a voice message: a melody hummed into a phone
              in the kitchen, with a dripping tap in the background. The note
              said, “Here is an idea. I do not know what to do with it.”
            </p>
            <p>I listened five times. Then I picked up my guitar.</p>
            <p>
              Three days later, the same melody had live guitars, bass,
              atmospheric keys and percussion. It was still their idea — only
              now it sounded like the song they had been hearing internally.
            </p>
            <p>
              That is how I see arrangement: translation. You hear something
              inside, and I help it come out as real music without replacing
              your accent with mine.
            </p>
          </div>
          <ProTip>
            Do not clean the life out of a demo before sending it. Timing,
            phrasing and even the imperfect little noises can reveal what the
            finished arrangement needs.
          </ProTip>
        </GlowCard>
        <GlowCard>
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] relative z-10">
            What I Can Build
          </span>
          <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
            <p>
              I work across blues-rock, funk, indie, pop, metal, jazz and
              electronic music. My background is rooted in live instruments and
              groove, but the production method changes with the song.
            </p>
            <p>
              Sometimes the answer is one carefully recorded guitar part.
              Sometimes it is a full arrangement with drums, bass, keys,
              textures and orchestral layers. Bigger is not automatically
              better; the track gets what it actually needs.
            </p>
            <p>
              You hear the direction early and stay involved. It is a
              conversation, not a mysterious package that appears at the end
              with twelve unnecessary tambourines.
            </p>
          </div>
          <ProTip>
            Send two or three reference tracks. One can show the energy, another
            the instrumentation, and the third the space or mood you want.
          </ProTip>
        </GlowCard>
      </div>
    </section>
  );
}
