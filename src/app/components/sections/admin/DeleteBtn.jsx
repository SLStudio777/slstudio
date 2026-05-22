"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ url, isActive, title = "Delete" }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        const confirmMsg = isActive ? "Hide the record?" : "Show the record?"; 
        const confirmDelete = confirm(confirmMsg);
        if (!confirmDelete) return;
        setLoading(true);

        try {
            const res = await fetch(url, {
                method: "PATCH",
            });

            const data = await res.json();

            if (!data.success) {
                alert(data.message || "Error");
                return;
            }

            router.refresh();

        } catch (err) {
            alert("Error deleting");
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="
                text-sm text-white/50
                hover:text-gold2 transition
                transition
                flex items-center gap-2
                disabled:opacity-50
                cursor-pointer
            "
        >
            {isActive 
                ? <Eye size={14} />
                : <EyeOff size={14} />
            }
            {loading ? "Process..." : title}
        </button>
    );
}