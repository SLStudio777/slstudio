import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import {FacebookIcon, InstagramIcon, TelegramIcon,  YouTubeIcon } from "../common/SVGIcons";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
})

export default function Footer() {
    return (
        <footer className="
            mt-10
            border-t border-white/5
            bg-[#1b1b1b]
        ">
            <div className="container py-10 flex flex-col md:flex-row justify-between gap-10">
                {/* Left */}
                <div className="flex flex-col gap-3 max-w-sm">
                    <span className={`${bebasNeue.className} text-gold2 text-xl tracking-widest`}>
                        SL STUDIO
                    </span>
                    <p className="text-white/50 text-sm leading-relaxed">
                        Music production, mixing, and sound enhancement.
                        Transforming raw recordings into polished, release-ready tracks.
                    </p>
                </div>
                {/* Right */}
                <div className="flex flex-col items-start md:items-end gap-4 text-sm text-white/60">
                    <div className="flex flex-col md:items-end gap-2">
                        <Link href="/" className="hover:text-gold2 transition">
                            Home
                        </Link>
                        <Link href="#" className="hover:text-gold2 transition">
                            About
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 text-white/40">
                        <a
                            href="https://www.youtube.com/@SLStudio_Guitar"
                            target="_blank"
                            className="hover:text-gold2 transition"
                        >
                            <YouTubeIcon size={21} className="mt-0.5" />
                        </a>
                        <a
                            href="https://www.instagram.com/lazarev_serhii_sl"
                            className="hover:text-gold2 transition"
                        >
                            <InstagramIcon size={19} />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100044130441850"
                            className="hover:text-gold2 transition"
                        >
                            <FacebookIcon size={16} />
                        </a>
                        <a
                            href="https://t.me/serhii_lazariev"
                            className="hover:text-gold2 transition"
                        >
                            <TelegramIcon size={18} className="mt-0.5" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="border-t border-white/5">
                <div className="container py-4 text-xs text-white/40 flex justify-between">
                    <span>&copy; {new Date().getFullYear()} SL Studio</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}