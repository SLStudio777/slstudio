"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function CreateEnhancementPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [fileBefore, setFileBefore] = useState("");
    const [fileAfter, setFileAfter] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [section, setSection] = useState("home");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleCreate(e) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/enhancements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    file_before: fileBefore,
                    file_after: fileAfter,
                    is_active: isActive ? 1 : 0,
                    section,
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
                            Create Enhancement
                        </h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
                <form
                    onSubmit={handleCreate}
                    className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60">Enhancement Title</label>
                        <input
                            type="text"
                            placeholder="Enter enhancement title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="h-12 px-4 rounded-xl bg-white/5 border border-white/5 outline-none text-white/80 placeholder:text-white/20 focus:border-white/15 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60">File Before</label>
                        <input
                            type="text"
                            placeholder="File Before"
                            value={fileBefore}
                            onChange={(e) => setFileBefore(e.target.value)}
                            className="h-12 px-4 rounded-xl bg-white/5 border border-white/5 outline-none text-white/80 placeholder:text-white/20 focus:border-white/15 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60">File After</label>
                        <input
                            type="text"
                            placeholder="File After"
                            value={fileAfter}
                            onChange={(e) => setFileAfter(e.target.value)}
                            className="h-12 px-4 rounded-xl bg-white/5 border border-white/5 outline-none text-white/80 placeholder:text-white/20 focus:border-white/15 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60">Section</label>
                        <select
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            style={{colorScheme: "dark"}}
                            className="h-12 px-4 rounded-xl bg-[#1b1b1b] border border-white/5 outline-none text-white/80 focus:border-white/15 transition"
                        >
                            <option value="home">Home</option>
                            <option value="mixing">Mixing & Mastering</option>
                            <option value="arrangement">Arrangement</option>
                        </select>
                    </div>

                    <label className="flex items-center gap-3 text-white/70 text-sm cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={isActive}
                            onChange={(e) => setIsActive(e.target.checked)}
                            className="w-4 h-4 accent-[#f5b942]"
                        />
                        Active on website
                    </label>

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <button
                        disabled={loading}
                        className="h-12 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition disabled:opacity-50 flex items-center justify-center gap-2 text-white/80"
                    >
                        <Save size={18} />
                        {loading ? "Creating..." : "Create Enhancement"}
                    </button>
                </form>
            </div>
        </section>
    )
}
