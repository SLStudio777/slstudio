import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroCard({ icon: Icon, title, description, href }) {
    return (
        <div className="
            p-5 rounded-xl
            bg-transparent
            border border-white/5
            hover:border-white/10
            transition
            flex flex-col gap-3"
        >
            {/* Header */}
            <div className="flex items-center gap-3">
                <Icon className="text-white/70 w-5 h-5" />
                <h2 className="text-base font-semibold text-white/90">
                    {title}
                </h2>
            </div>
            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed max-w-[520px]">
                {description}
            </p>
            <Link
                href={href}
                className="
                text-sm text-white/70
                hover:text-gold2
                transition
                inline-flex items-center gap-1"
            >
                <span>Learn More</span>
                <ArrowRight size={14} />
            </Link>
        </div>
    )
}