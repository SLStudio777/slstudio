"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function UpdateEnhancementPage({ params }) {
    const router = useRouter();
    const { id } = use(params);

    const [title, setTitle] = useState("");
    const [fileBefore, setFileBefore] = useState("");
    const [fileAfter, setFileAfter] = useState("");
    const [isActive, setIsActive] = useState(true);

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(`/api/enhancements/${id}`);
                const data = await res.json();
                if (!data.success) {
                    setError(data.message);
                    return;
                }
                setTitle(data.enhancement.title);
                setFileBefore(data.enhancement.file_before);
                setFileAfter(data.enhancement.file_after);
                setIsActive(!!data.enhancement.is_active);
            } catch (err) {
                setError("Error loading enhancement");
            } finally {
                setFetching(false);
            }
        }
        loadData();
    }, [id]);

    async function handleUpdate(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch(`/api/enhancements/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    file_before: fileBefore,
                    file_after: fileAfter,
                    is_active: isActive ? 1 : 0,
                }),
            });

            const data = await res.json();

            if (!data.success) {
                setError(data.message);
                setLoading(false);
                return;
            }
            router.push("/admin/enhancements");
        } catch (err) {
            setError("Error updating enhancement");
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
                    href="/admin/enhancements"
                    className="text-sm hover:text-gold2 transition flex items-center gap-2"
                >
                    <ArrowLeft size={16} />
                    Back to enhancements
                </Link>
                <div>
                    <span className="text-white/40 text-xs uppercase tracking-[0.25em]">
                        Content Management
                    </span>
                    <h1 className="mt-2 text-3xl font-semibold tracking-wide">
                        Update Enhancement
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
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
                            Title
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
                            File Before
                        </label>

                        <input
                            type="text"
                            value={fileBefore}
                            onChange={(e) => setFileBefore(e.target.value)}
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
                            File After
                        </label>

                        <input
                            type="text"
                            value={fileAfter}
                            onChange={(e) => setFileAfter(e.target.value)}
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
            </div>
        </section>
    );
}