"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutBtn() {
    const router = useRouter();
    
    async function logout() {
        await fetch("/api/logout", {
            method: "POST",
        })
        router.push("/login")
    }

    return (
        <button
            onClick={logout}
            className="
                cursor-pointer    
                text-white/70 hover:text-gold2 transition
                flex items-center gap-1
            "
        >
            <LogOut size={20} />
            <span>Logout</span>
        </button>
    )
}