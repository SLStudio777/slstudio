export const dynamic = "force-dynamic";

import Link from "next/link";
import pool from "@/settings/db";
import { AudioWaveform } from "lucide-react";
import BeforeAfterCard from "../../components/cards/BeforeAfterCard";

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
          Hear it on your own track
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60 max-w-2xl">
          The public audio examples are being updated. Send your own material
          and I will prepare a free 30–60 second preview instead.
        </p>
        <Link
          href="/free-track-preview"
          className="inline-flex mt-6 text-[#C9A84C] underline hover:text-[#e8c97a] transition"
        >
          Get a free preview →
        </Link>
      </div>
    </section>
  );
}

export default async function BeforeAfterMixing() {
  let enhancements = [];

  try {
    const [rows] = await pool.query(`
            SELECT *
            FROM enhancements
            WHERE is_active = 1 AND section = 'mixing'
            ORDER BY created_at DESC
        `);
    enhancements = rows;
  } catch (error) {
    console.error("[BeforeAfterMixing] Failed to load examples:", error);
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
          Hear the Difference
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60">
          Real sessions — before and after professional mixing and mastering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {enhancements.map((item) => (
          <BeforeAfterCard
            key={item.id}
            title={item.title}
            before={String(item.file_before).trim()}
            after={String(item.file_after).trim()}
          />
        ))}
      </div>
    </section>
  );
}
