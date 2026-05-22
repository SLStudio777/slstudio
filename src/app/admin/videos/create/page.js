"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import {YouTubeIcon } from "../../../components/common/SVGIcons";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function CreateVideoPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [videoId, setVideoId] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleCreate(e) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/videos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    video_id: videoId,
                    is_active: isActive ? 1 : 0,
                }),
            });

            const data = await res.json();

            if (!data.success) {
                setError(data.message);
                setLoading(false);
                return;
            }

            router.push("/admin/videos");

        } catch (err) {
            setError("Error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="py-10 flex flex-col gap-10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <Link
                        href="/admin/videos"
                        className="
                            text-sm hover:text-gold2 transition
                            flex items-center gap-2
                        "
                    >
                        <ArrowLeft size={16} />
                        Back to videos
                    </Link>
                    <div>
                        <span className="text-white/40 text-xs uppercase tracking-[0.25em]">
                            Content Management
                        </span>
                        <h1 className="mt-2 text-3xl font-semibold tracking-wide">
                            Create Video
                        </h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[520px_1fr] gap-8">
                <form
                    onSubmit={handleCreate}
                    className="
                        p-8 rounded-2xl
                        border border-white/5
                        bg-white/[0.03]
                        flex flex-col gap-6
                    "
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60">
                            Video Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter video title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="
                                h-12 px-4 rounded-xl
                                bg-white/5
                                border border-white/5
                                outline-none
                                text-white/80
                                placeholder:text-white/20
                                focus:border-white/15
                                transition
                            "
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60">
                            YouTube Video ID
                        </label>
                        <input
                            type="text"
                            placeholder="YouTube Video ID"
                            value={videoId}
                            onChange={(e) => setVideoId(e.target.value)}
                            className="
                                h-12 px-4 rounded-xl
                                bg-white/5
                                border border-white/5
                                outline-none
                                text-white/80
                                placeholder:text-white/20
                                focus:border-white/15
                                transition
                            "
                        />
                    </div>

                    <label className="
                        flex items-center gap-3
                        text-white/70 text-sm
                        cursor-pointer
                        select-none
                    ">
                        <input
                            type="checkbox"
                            checked={isActive}
                            onChange={(e) => setIsActive(e.target.checked)}
                            className="w-4 h-4 accent-[#f5b942]"
                        />
                        Active on website
                    </label>
                    {error && (
                        <p className="text-red-400 text-sm">
                            {error}
                        </p>
                    )}

                    <button
                        disabled={loading}
                        className="
                            h-12 rounded-xl
                            bg-white/5
                            border border-white/5
                            hover:bg-white/[0.08]
                            hover:border-white/10
                            transition
                            disabled:opacity-50
                            flex items-center justify-center gap-2
                            text-white/80
                        "
                    >
                        <Save size={18} />
                        {loading ? "Creating..." : "Create Video"}
                    </button>
                </form>

                <div className="
                    p-8 rounded-2xl
                    border border-white/5
                    bg-white/[0.03]
                    flex flex-col gap-6
                ">
                    <div className="flex items-center gap-2 text-white/40">
                        <YouTubeIcon size={18} />
                        <span className="text-xs uppercase tracking-[0.25em]">
                            Preview
                        </span>
                    </div>
                    {videoId ? (
                        <div className="flex flex-col gap-5">
                            <img
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                alt="Preview"
                                className="
                                    w-full
                                    rounded-2xl
                                    border border-white/5
                                "
                            />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold text-white/80">
                                    {title || "Video title"}
                                </h2>
                                <span className="text-white/40 text-sm">
                                    youtube.com/watch?v=<span className="font-semibold text-white/70">{videoId}</span>
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="
                            h-full min-h-[300px]
                            rounded-2xl
                            border border-dashed border-white/5
                            flex items-center justify-center
                            text-white/20 text-sm
                        ">
                            Video preview will here
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}