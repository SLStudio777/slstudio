export const dynamic = "force-dynamic";
import pool from "@/settings/db";

import { YouTubeIcon, YouTubeRedIcon } from "../common/SVGIcons";
import YouTubeCard from "../cards/YouTubeCard";
// import { youTubeData } from "@/data/temporaryData";

export default async function YouTube() {
    const [videos] = await pool.query(`
        SELECT *
        FROM videos
        ORDER BY created_at DESC
    `);

    return (
        <section className="py-12">
            <div className="mb-10">
                <div className="text-white/40 mb-4 flex items-center gap-2">
                    <YouTubeIcon size={16} className="text-white/70" />
                    <span className="text-xs uppercase tracking-widest ">
                        YouTube Projects
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                    Music Production & Arrangements
                </h2>
                <div className="flex items-center gap-2 justify-between">
                    <p className="mt-4 max-w-2/3 text-sm md:text-base leading-relaxed">
                        A selection of my music production and arrangement work, featuring original tracks and projects from my YouTube channel.
                    </p>
                    <a
                        href="https://www.youtube.com/@SLStudio_Guitar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center gap-2
                            text-sm hover:text-white
                            transition
                        ">
                        <YouTubeRedIcon size={16} />
                        <span>@SLStudio_Guitar</span>
                    </a>    
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {videos.map(el => (
                    <YouTubeCard
                        key={el.id} 
                        videoId={String(el.video_id.trim())}
                        title={el.title}
                    />
                ))}
            </div>
        </section>
    )
}