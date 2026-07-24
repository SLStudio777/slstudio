export const dynamic = "force-dynamic";
import pool from "@/settings/db";

import { Pencil } from "lucide-react";
import AdminHeader from "@/app/components/sections/admin/AdminHeader";
import TableHeader from "@/app/components/sections/admin/TableHeader";
import LinkIcon from "@/app/components/sections/admin/LinkIcon";
import CreateBtn from "@/app/components/sections/admin/CreateBtn";
import DeleteBtn from "@/app/components/sections/admin/DeleteBtn";

// import { youTubeData } from "@/data/siteContent";

export default async function VideosPage() {
    const [videos] = await pool.query(`
        SELECT *
        FROM videos
        ORDER BY created_at DESC
    `);

    return (
        <section className="py-10 flex flex-col gap-10">
            <AdminHeader partName="Videos" />
            <CreateBtn title="Create Video" href="/admin/videos/create" />

            <div className="rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden">
                <TableHeader gridCols="grid-cols-[100px_1fr_100px_100px]">
                    <span>Preview</span>
                    <span>Title</span>
                    <span></span>
                    <span></span>
                </TableHeader>

                <div className="flex flex-col">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="
                                grid grid-cols-[100px_1fr_100px_100px]
                                items-center px-6 py-4
                                border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition
                            "
                        >

                            <div className="flex items-center">
                                <img
                                    src={`https://img.youtube.com/vi/${video.video_id}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="
                                        w-16 h-10
                                        object-cover
                                        rounded-md
                                        border border-white/5
                                    "
                                />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-white/80 font-medium">
                                    {video.title}
                                </span>
                                <span className="text-white/50 text-sm">
                                    youtube.com/watch?v=<span className="font-semibold text-white/70">{video.video_id}</span>
                                </span>
                            </div>
                            <LinkIcon icon={Pencil} title="Edit" href={`/admin/videos/${video.id}`} />
                            <DeleteBtn 
                                url={`/api/videos/${video.id}`} 
                                isActive={video.is_active}
                                title={video.is_active ? "Visible" : "Hidden"} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}