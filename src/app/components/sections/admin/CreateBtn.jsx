import Link from "next/link";
import { Plus } from "lucide-react";

export default function CreateBtn({title, href}) {
    return (
        <Link
            href={href}
            className="
                px-5 h-11 rounded-xl
                border border-white/5 hover:border-white/10
                bg-white/5 hover:bg-white/7
                transition
                flex items-center gap-2
                text-sm text-white/80
            "
        >
            <Plus size={16} />
            <span>{ title }</span>
        </Link>
    )
}