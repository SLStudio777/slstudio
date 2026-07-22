export const dynamic = "force-dynamic";

import Link from "next/link";
import pool from "@/settings/db";
import { AudioWaveform } from "lucide-react";
import BeforeAfterCard from "../../components/cards/BeforeAfterCard";

// Case stories shown under each before/after player. Matched to the
// admin-managed cards by a keyword in the card title, with list order as a
// fallback, so retitling a card in the admin won't silently drop its story.
const CASE_STORIES = [
  {
    match: "acoustic",
    client: "Agnieszka, vocalist",
    cameWithLabel: "What she came with",
    cameWith:
      "An acoustic recording — just voice and guitar. The song was finished, but it sounded like a demo. Agnieszka wanted to hear it played by a full band.",
    doneLabel: "What was done",
    done:
      "A complete arrangement for a full line-up — drums, bass, guitars and extra instruments, plus vocal editing and mastering. The acoustic demo became a finished, full-sounding track.",
  },
  {
    match: "rehearsal",
    client: "Oleg, singer & songwriter",
    cameWithLabel: "What he came with",
    cameWith:
      "A rough recording from a rehearsal. The song itself was there — but it sounded like a rehearsal room, not a record.",
    doneLabel: "What was done",
    done:
      "Full arrangement work — new instrument parts added around the original performance, everything polished and produced to studio standard, with mixing and a mastered vocal. The rehearsal take became a proper studio version.",
  },
  {
    match: "folk",
    client: "Alexander, songwriter & composer",
    cameWithLabel: "What he came with",
    cameWith:
      "A folk track he had recorded himself about ten years ago — playing all the instruments he could get his hands on. The song was dear to him, but the recording sounded homemade and dated.",
    doneLabel: "What was done",
    done:
      "The track was rebuilt with a fresh, full arrangement — new instrument parts, modern production, mixing and mastering. The song kept its soul, but finally got the professional sound it deserved.",
  },
  {
    match: "indie",
    client: "Andrii, guitarist & composer",
    cameWithLabel: "What he came with",
    cameWith:
      "An indie track he wrote for his band and recorded himself in his DAW. He laid down his own rhythm guitar parts, but the track needed a lead guitar — solo playing just isn't his thing — and the arrangement needed some professional polish.",
    doneLabel: "What was done",
    done:
      "A quality arrangement built on top of his original production — plus a live lead guitar recorded for the track, including a solo part that his song was missing.",
  },
];

function storyFor(title, index) {
  const t = String(title || "").toLowerCase();
  return (
    CASE_STORIES.find((s) => t.includes(s.match)) || CASE_STORIES[index] || null
  );
}

function DemoFallback() {
  return (
    <section id="demos" className="py-10" style={{ scrollMarginTop: "80px" }}>
      <div className="rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02]">
        <div className="text-white/55 mb-4 flex items-center gap-2">
          <AudioWaveform size={16} />
          <span className="text-xs uppercase tracking-widest">
            Before &amp; After
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Hear it on your own idea
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60 max-w-2xl">
          The public examples are being updated. Send your demo or voice memo
          and I will prepare a short free concept or assessment instead.
        </p>
        <Link
          href="/free-track-preview"
          className="inline-flex mt-6 text-[#C9A84C] underline hover:text-[#e8c97a] transition"
        >
          Send your idea →
        </Link>
      </div>
    </section>
  );
}

export default async function BeforeAfterArrangement() {
  let enhancements = [];
  try {
    const [rows] = await pool.query(`
      SELECT * FROM enhancements
      WHERE is_active = 1 AND section = 'arrangement'
      ORDER BY created_at DESC
    `);
    enhancements = rows;
  } catch (error) {
    console.error("[BeforeAfterArrangement] Failed to load examples:", error);
    return <DemoFallback />;
  }
  if (enhancements.length === 0) return <DemoFallback />;
  return (
    <section id="demos" className="py-10" style={{ scrollMarginTop: "80px" }}>
      <div className="mb-10">
        <div className="text-white/55 mb-4 flex items-center gap-2">
          <AudioWaveform size={16} />
          <span className="text-xs uppercase tracking-widest">
            Before &amp; After
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Hear the Idea Become a Track
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60">
          Real sessions — from rough sketches and demos to complete
          arrangements.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enhancements.map((item, i) => {
          const story = storyFor(item.title, i);
          return (
            <div key={item.id} className="flex flex-col gap-4">
              <BeforeAfterCard
                title={item.title}
                before={String(item.file_before).trim()}
                after={String(item.file_after).trim()}
              />
              {story && (
                <div className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] flex flex-col gap-3 flex-1">
                  <p className="text-white font-semibold text-[15px]">
                    {story.client}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    <span className="text-[#C9A84C] font-medium">
                      {story.cameWithLabel}:{" "}
                    </span>
                    {story.cameWith}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    <span className="text-[#C9A84C] font-medium">
                      {story.doneLabel}:{" "}
                    </span>
                    {story.done}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
