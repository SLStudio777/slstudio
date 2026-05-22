"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { YouTubeIcon } from "../../../components/common/SVGIcons";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function UpdateVideoPage({ params }) {
    const router = useRouter();
    const { id } = use(params);

    const [title, setTitle] = useState("");
    const [videoId, setVideoId] = useState("");
    const [isActive, setIsActive] = useState(true);

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadVideo() {
            try {
                const res = await fetch(`/api/videos/${id}`);
                const data = await res.json();
                if (!data.success) {
                    setError(data.message);
                    return;
                }
                setTitle(data.video.title);
                setVideoId(data.video.video_id);
                setIsActive(!!data.video.is_active);
            } catch (err) {
                setError("Error loading video");
            } finally {
                setFetching(false);
            }
        }
        loadVideo();
    }, [id]);

    async function handleUpdate(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch(`/api/videos/${id}`, {
                method: "PUT",
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
            setError("Error updating video");
        } finally {
            setLoading(false);
        }
    }

    if (fetching) {
        return (
            <div className="py-20 text-white/40">
                Loading...
            </div>
        );
    }

    return (
        <section className="py-10 flex flex-col gap-10">

            <div className="flex flex-col gap-2">
                <Link
                    href="/admin/videos"
                    className="text-sm hover:text-gold2 transition flex items-center gap-2"
                >
                    <ArrowLeft size={16} />
                    Back to videos
                </Link>
                <div>
                    <span className="text-white/40 text-xs uppercase tracking-[0.25em]">
                        Content Management
                    </span>
                    <h1 className="mt-2 text-3xl font-semibold tracking-wide">
                        Update Video
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[520px_1fr] gap-8">
                <form
                    onSubmit={handleUpdate}
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="
                                h-12 px-4 rounded-xl
                                bg-white/5
                                border border-white/5
                                outline-none
                                text-white/80
                                focus:border-white/15
                            "
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60">
                            YouTube Video ID
                        </label>

                        <input
                            type="text"
                            value={videoId}
                            onChange={(e) => setVideoId(e.target.value)}
                            className="
                                h-12 px-4 rounded-xl
                                bg-white/5
                                border border-white/5
                                outline-none
                                text-white/80
                                focus:border-white/15
                            "
                        />
                    </div>

                    <label className="flex items-center gap-3 text-white/70 text-sm cursor-pointer">
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
                            flex items-center justify-center gap-2
                        "
                    >
                        <Save size={18} />
                        {loading ? "Saving..." : "Save Changes"}
                    </button>
                </form>

                <div className="
                    p-8 rounded-2xl
                    border border-white/5
                    bg-white/[0.03]
                ">
                    <div className="flex items-center gap-2 text-white/40 mb-6">
                        <YouTubeIcon size={18} />
                        <span className="text-xs uppercase tracking-[0.25em]">
                            Preview
                        </span>
                    </div>

                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        className="rounded-2xl border border-white/5"
                    />

                    <div className="mt-5 flex flex-col gap-2">
                        <h2 className="text-xl font-semibold text-white/80">
                            {title}
                        </h2>

                        <span className="text-white/40 text-sm">
                            youtube.com/watch?v=
                            <span className="text-white/70 font-semibold">
                                {videoId}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}