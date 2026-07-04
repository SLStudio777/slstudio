export const dynamic = "force-dynamic";
import pool from "@/settings/db";

import { AudioWaveform } from "lucide-react";
import BeforeAfterCard from "../../components/cards/BeforeAfterCard";

export default async function BeforeAfterMixing() {
    const [enhancements] = await pool.query(`
        SELECT *
        FROM enhancements
        WHERE is_active = 1 AND section = 'mixing'
        ORDER BY created_at DESC
    `);

    if (enhancements.length === 0) return null;

    return (
        <section className="pb-10">
            <div className="mb-10">
                <div className="text-white/55 mb-4 flex items-center gap-2">
                    <AudioWaveform size={16} />
                    <span className="text-xs uppercase tracking-widest">
                        Before & After
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
                {enhancements.map(el => (
                    <BeforeAfterCard
                        key={el.id}
                        title={el.title}
                        before={String(el.file_before).trim()}
                        after={String(el.file_after).trim()}
                    />
                ))}
            </div>
        </section>
    )
}
