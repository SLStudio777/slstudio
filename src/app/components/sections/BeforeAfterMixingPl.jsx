export const dynamic = "force-dynamic";

import Link from "next/link";
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
function DemoFallback() {
  return (
    <section id="demos" className="py-10" style={{ scrollMarginTop: "80px" }}>
      <div className="rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02]">
        <div className="text-white/55 mb-4 flex items-center gap-2">
          <AudioWaveform size={16} />
          <span className="text-xs uppercase tracking-widest">Przed i po</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Usłysz to na własnym utworze
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60 max-w-2xl">
          Publiczne przykłady są aktualizowane. Wyślij własny materiał, a
          przygotuję bezpłatny fragment trwający 30–60 sekund.
        </p>
        <Link
          href="/pl/darmowy-fragment"
          className="inline-flex mt-6 text-[#C9A84C] underline hover:text-[#e8c97a] transition"
        >
          Odbierz bezpłatny fragment →
        </Link>
      </div>
    </section>
  );
}
export default async function BeforeAfterMixingPl() {
  let enhancements = [];
  try {
    const [rows] = await pool.query(
      `SELECT * FROM enhancements WHERE is_active = 1 AND section = 'mixing' ORDER BY created_at DESC`,
    );
    enhancements = rows;
  } catch (error) {
    console.error("[BeforeAfterMixingPl] Failed to load examples:", error);
    return <DemoFallback />;
  }
  if (enhancements.length === 0) return <DemoFallback />;
  return (
    <section id="demos" className="py-10" style={{ scrollMarginTop: "80px" }}>
      <div className="mb-10">
        <div className="text-white/55 mb-4 flex items-center gap-2">
          <AudioWaveform size={16} />
          <span className="text-xs uppercase tracking-widest">Przed i po</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Usłysz różnicę
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60">
          Prawdziwe realizacje — przed i po profesjonalnym miksie i masteringu.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
