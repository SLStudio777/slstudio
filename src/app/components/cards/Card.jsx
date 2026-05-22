import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Card({icon: Icon, title, description, href}) {
    return (
        <Link
            href={href} 
            className="
                p-6 rounded-xl border border-white/5 bg-white/4 
                flex gap-4 items-center 
                hover:border-white/10 hover:bg-white/6 transition
            "
        >
            <span className="
                w-12 h-12 rounded-xl bg-white/5 text-white/70
                flex items-center justify-center flex-shrink-0"
            >
                <Icon size={22} />
            </span>
            <div className="flex flex-col gap-2 text-white/70">
                <h2 className="text-lg font-semibold">
                    {title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    )
}