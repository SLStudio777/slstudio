export const dynamic = "force-dynamic";
import pool from "@/settings/db";

import { AudioWaveform } from "lucide-react";
import BeforeAfterCard from "../cards/BeforeAfterCard";

export default async function BeforeAfter() {
    const [enhancements] = await pool.query(`
        SELECT *
        FROM enhancements
        WHERE is_active = 1 AND section = 'home'
        ORDER BY created_at DESC
    `);

    return (
        <section id="demos" className="py-10" style={{ scrollMarginTop: "80px" }}>
            <div className="mb-10">
                <div className="text-white/40 mb-4 flex items-center gap-2">
                    <AudioWaveform size={16} />
                    <span className="text-xs uppercase tracking-widest">
                        Audio Enhancement
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                    Transform Low-Quality Recordings Into Professional Studio Sound
                </h2>
                <p className="mt-4 max-w-2/3 text-sm md:text-base leading-relaxed">
                    Have a rough demo, rehearsal take, or poorly recorded track? I specialize in audio enhancement, restoring clarity, balance, and depth to your recordings. Using professional mixing and mastering techniques, I turn raw material into polished, release-ready sound.
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
