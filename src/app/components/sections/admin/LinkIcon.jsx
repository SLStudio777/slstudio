import Link from "next/link";

export default function LinkIcon({icon: Icon, title, href}) {
    return (
        <Link
            href={href}
            className="
                text-sm text-white/50 hover:text-gold2 transition
                flex items-center gap-2
            "
        >
            <Icon size={14} />
            <span>{title}</span>
        </Link>
    )
}