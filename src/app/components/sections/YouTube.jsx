export const dynamic = "force-dynamic";
import pool from "@/settings/db";
import { YouTubeIcon, YouTubeRedIcon } from "../common/SVGIcons";
import YouTubeCard from "../cards/YouTubeCard";

const DEFAULTS = {
    eyebrow: "YouTube Projects",
    heading: "Music Production & Arrangements",
    text: "A selection of my music production and arrangement work, featuring original tracks and projects from my YouTube channel.",
};

export default async function YouTube({ labels }) {
    const t = { ...DEFAULTS, ...labels };
    let videos = [];

    // An unreachable database (or a hit on the shared user's connection limit)
    // must not take the whole page down with it: drop the section and let the
    // rest of the page render, same as BeforeAfter.
    try {
        const [rows] = await pool.query(`
            SELECT *
            FROM videos
            WHERE is_active = 1
            ORDER BY created_at DESC
        `);
        videos = rows;
    } catch (error) {
        console.error("[YouTube] Failed to load videos:", error);
        return null;
    }

    if (!videos || videos.length === 0) return null;

    return (
        <section className="py-12 border-t border-white/5">
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-2">
                    <YouTubeIcon size={16} className="text-white/65" />
                    <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
                        {t.eyebrow}
                    </span>
                </div>
                <div className="flex items-end justify-between gap-4 flex-wrap">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                        {t.heading}
                    </h2>
                    <a
                        href="https://www.youtube.com/@SLStudio_Guitar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition flex-shrink-0"
                    >
                        <YouTubeRedIcon size={16} />
                        <span>@SLStudio_Guitar</span>
                    </a>
                </div>
                <p className="mt-3 text-white/65 text-sm leading-relaxed max-w-xl">
                    {t.text}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videos.map(el => (
                    <YouTubeCard
                        key={el.id}
                        videoId={String(el.video_id.trim())}
                        title={el.title}
                    />
                ))}
            </div>
        </section>
    );
}
