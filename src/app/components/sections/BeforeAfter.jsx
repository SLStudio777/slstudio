export const dynamic = "force-dynamic";
import pool from "@/settings/db";

import { AudioWaveform } from "lucide-react";
import BeforeAfterCard from "../cards/BeforeAfterCard";

const DEFAULTS = {
    eyebrow: "Audio Enhancement",
    heading: "Transform Low-Quality Recordings Into Professional Studio Sound",
    text: "Have a rough demo, rehearsal take, or poorly recorded track? I specialize in audio enhancement, restoring clarity, balance, and depth to your recordings. Using professional mixing and mastering techniques, I turn raw material into polished, release-ready sound.",
    card: undefined, // BeforeAfterCard falls back to English labels when undefined
};

export default async function BeforeAfter({ labels }) {
    const t = { ...DEFAULTS, ...labels };
    let enhancements = [];

    try {
        const [rows] = await pool.query(`
            SELECT *
            FROM enhancements
            WHERE is_active = 1 AND section = 'home'
            ORDER BY created_at DESC
        `);
        enhancements = rows;
    } catch (error) {
        console.error("[BeforeAfter] Failed to load homepage examples:", error);
        return null;
    }

    if (!enhancements || enhancements.length === 0) return null;

    return (
        <section id="demos" className="py-10" style={{ scrollMarginTop: "80px" }}>
            <div className="mb-10">
                <div className="text-white/55 mb-4 flex items-center gap-2">
                    <AudioWaveform size={16} />
                    <span className="text-xs uppercase tracking-widest">
                        {t.eyebrow}
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                    {t.heading}
                </h2>
                <p className="mt-4 max-w-2/3 text-sm md:text-base leading-relaxed">
                    {t.text}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {enhancements.map((el) => (
                    <BeforeAfterCard
                        key={el.id}
                        title={el.title}
                        before={String(el.file_before).trim()}
                        after={String(el.file_after).trim()}
                        labels={t.card}
                    />
                ))}
            </div>
        </section>
    );
}
