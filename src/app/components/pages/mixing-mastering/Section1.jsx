import Link from "next/link";
import { Lightbulb } from "lucide-react";
import StepFlareCard from "../../common/StepFlareCard";

const includedItems = [
  "Editing and cleanup where the recording needs it",
  "Balance, EQ, compression and low-end control",
  "Vocal treatment, de-essing and tuning when needed",
  "Automation, saturation, reverb and delay",
  "Stereo mastering for streaming and digital release",
  "Final WAV and MP3 files",
  "Up to three revision rounds",
];

const steps = [
  {
    number: "01",
    title: "Send your track",
    text: "Stems are ideal, but a rough mix, rehearsal take or old recording is enough to start.",
  },
  {
    number: "02",
    title: "Hear a free preview",
    text: "I process a 30–60 second section so you can hear the direction before booking the full job.",
  },
  {
    number: "03",
    title: "The full mix begins",
    text: "Once we agree on the direction and exact price, I complete the mix and mastering.",
  },
  {
    number: "04",
    title: "Review and delivery",
    text: "You receive the finished track and up to three revision rounds if anything needs adjustment.",
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
            Services & Pricing
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            What&apos;s included
          </h2>
          <p className="mt-4 text-white/60 max-w-3xl leading-relaxed">
            No preset chain and no handoff to another engineer. I work on the
            track personally, from the first listen to the final files.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <StepFlareCard
            delay={0}
            className="rounded-2xl p-8 border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06] flex flex-col gap-6 h-full"
          >
            <div>
              <p className="text-white/50 text-xs uppercase tracking-[0.25em]">
                Starting prices
              </p>
              <div className="mt-5 flex flex-col gap-5">
                <div>
                  <p className="text-white/70 text-sm">Mastering only</p>
                  <p className="step-number price-number text-3xl font-semibold text-[#f5b942]">
                    from $39
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed mt-1.5">
                    $39 = express master through my proven chain of settings.
                    Fully manual masters for complex tracks are priced higher.
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-white/70 text-sm">
                    Mixing &amp; mastering
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-white/55 text-sm">Up to 10 stems</span>
                      <span className="price-number text-lg font-semibold text-[#f5b942]">
                        $89
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-white/55 text-sm">Up to 25 stems</span>
                      <span className="price-number text-lg font-semibold text-[#f5b942]">
                        $139
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-white/55 text-sm">
                        More than 25 stems
                      </span>
                      <span className="price-number text-lg font-semibold text-[#f5b942]">
                        from $189
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed">
              The exact price within each tier depends on recording quality
              and the amount of editing required. You receive it before the
              full job begins — and up to three revision rounds are included
              at every price.
            </p>

            <Link
              href="/free-track-preview"
              className="btn-gold inline-flex justify-center items-center font-semibold px-6 py-3.5 rounded-xl text-sm text-black bg-[#C9A84C]"
            >
              Get a Free Preview →
            </Link>
          </StepFlareCard>

          <div className="rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02] flex flex-col">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 flex-1 content-between">
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
        </div>
      </div>

      <div>
        <div className="mb-8">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
            The Process
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            From rough mix to final master
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
            How I Approach a Mix
          </span>
          <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
            <p>
              I spend the first ten minutes just listening. I do not touch
              anything. I listen for where the track feels crowded, where the
              low end loses control, and where the vocal wants to come forward
              but cannot.
            </p>
            <p>
              It is like walking into a room where everyone is talking at once.
              My job is not to make someone shut up — it is to make sure
              everyone is heard.
            </p>
            <p>
              I usually start with bass and drums. They are the foundation, and
              if the foundation shakes, no amount of decoration on top will save
              the track.
            </p>
            <p>
              Once the low end settles into place, the other instruments start
              finding their positions naturally. It is not magic, although
              sometimes it looks suspiciously similar.
            </p>
          </div>
          <ProTip>
            Send stems whenever possible. No stems? Send what you have — I will
            tell you honestly how far the material can be taken.
          </ProTip>
        </GlowCard>

        <GlowCard>
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] relative z-10">
            Guitars, Vocals &amp; Translation
          </span>
          <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
            <p>
              I am a guitarist myself, so I hear quickly when a guitar was
              recorded well but sits badly in the mix. Sometimes it takes over
              the whole room. Sometimes it hides when it should be singing.
            </p>
            <p>
              Vocals need a different kind of care. Too much processing turns
              them plastic; too little leaves them disconnected. I look for the
              point where the voice stays alive but feels as if it always
              belonged inside the track.
            </p>
            <p>
              Mastering is the final translation check. I test the finished
              track on studio monitors, regular headphones and a phone speaker
              before delivery.
            </p>
          </div>
          <ProTip>
            Send two or three reference tracks. They explain the tone, space and
            energy you want faster than a paragraph of technical language.
          </ProTip>
        </GlowCard>
      </div>
    </section>
  );
}
