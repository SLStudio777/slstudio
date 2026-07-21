export const dynamic = "force-dynamic";

import pool from "@/settings/db";
import { AudioWaveform } from "lucide-react";
import BeforeAfterCard from "../../components/cards/BeforeAfterCard";

const plLabels = {
  raw: "Nagranie surowe",
  final: "Miks finalny",
  live: "Na żywo",
  before: "Przed",
  after: "Po",
  loading: "Ładowanie audio...",
  playingRaw: "Odtwarzam wersję surową",
  playingFinal: "Odtwarzam finalny miks",
};

export default async function BeforeAfterSunoPl() {
  let enhancements = [];

  try {
    const [rows] = await pool.query(
      `SELECT * FROM enhancements WHERE is_active = 1 AND section = 'suno' ORDER BY created_at DESC`,
    );
    enhancements = rows;
  } catch (error) {
    console.error("[BeforeAfterSunoPl] Failed to load examples:", error);
    return null;
  }

  if (enhancements.length === 0) return null;

  return (
    <section
      id="demos"
      className="container py-12"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="mb-10">
        <div className="text-white/55 mb-4 flex items-center gap-2">
          <AudioWaveform size={16} />
          <span className="text-xs uppercase tracking-widest">Przed i po</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Usłysz prawdziwy utwór z Suno — przed i po
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60">
          Ten sam utwór wygenerowany przez AI: surowy eksport z Suno obok
          wersji dokończonej, gotowej do wydania.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enhancements.map((item) => (
          <BeforeAfterCard
            key={item.id}
            title={item.title}
            before={String(item.file_before).trim()}
            after={String(item.file_after).trim()}
            labels={plLabels}
          />
        ))}
      </div>
    </section>
  );
}
