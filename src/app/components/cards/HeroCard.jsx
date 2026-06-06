import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroCard({ icon: Icon, title, description, href }) {
    return (
        <div
            className="p-5 rounded-xl flex flex-col gap-4 transition-all duration-200"
            style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderLeft: "3px solid #C9A84C",
            }}
        >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
            </div>
            <h2 className="text-base font-semibold text-white">{title}</h2>
            <p className="text-white/55 text-sm leading-relaxed flex-1">{description}</p>
            <Link
                href={href}
                className="mt-auto inline-flex items-center gap-2 text-black text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition w-fit"
                style={{ backgroundColor: "#C9A84C" }}
            >
                Learn More
                <ArrowRight size={14} />
            </Link>
        </div>
    );
}
