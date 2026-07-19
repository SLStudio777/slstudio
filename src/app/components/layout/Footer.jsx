"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {FacebookIcon, InstagramIcon, TelegramIcon, YouTubeIcon} from "../common/SVGIcons";

export default function Footer() {
    const pathname = usePathname();

    // Same behaviour as the header: a footer nav link clicked while already on
    // that page scrolls to the top instead of doing nothing.
    const handleNav = (href) => (e) => {
        if (pathname === href) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="mt-10 border-t border-white/5 bg-[#1b1b1b]">
            <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left — Brand */}
                <div className="flex flex-col gap-4">
                    <Link href="/" onClick={handleNav("/")} className="w-fit">
                        <img src="/images/logo-animated.svg" alt="SL Studio" style={{ height: "32px" }} />
                    </Link>
                    <p className="text-white/50 text-sm leading-relaxed">
                        Music production, mixing, mastering and arrangement.
                        Transforming raw recordings into polished, release-ready tracks — remotely, worldwide.
                    </p>
                    <div className="flex items-center gap-3 text-white/40 mt-2">
                        <a href="https://www.youtube.com/@SLStudio_Guitar" target="_blank" rel="noopener noreferrer" aria-label="SL Studio on YouTube" className="hover:text-gold2 transition">
                            <YouTubeIcon size={21} />
                        </a>
                        <a href="https://www.instagram.com/lazarev_serhii_sl" target="_blank" rel="noopener noreferrer" aria-label="SL Studio on Instagram" className="hover:text-gold2 transition">
                            <InstagramIcon size={19} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100044130441850" target="_blank" rel="noopener noreferrer" aria-label="SL Studio on Facebook" className="hover:text-gold2 transition">
                            <FacebookIcon size={16} />
                        </a>
                        <a href="https://t.me/serhii_lazariev" target="_blank" rel="noopener noreferrer" aria-label="SL Studio on Telegram" className="hover:text-gold2 transition">
                            <TelegramIcon size={18} />
                        </a>
                    </div>
                </div>

                {/* Center — Navigation */}
                <div className="flex flex-col gap-3">
                    <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2">Navigation</p>
                    <Link href="/" onClick={handleNav("/")} className="text-white/60 text-sm hover:text-gold2 transition">Home</Link>
                    <Link href="/mixing-mastering" onClick={handleNav("/mixing-mastering")} className="text-white/60 text-sm hover:text-gold2 transition">Mixing & Mastering</Link>
                    <Link href="/arrangement" onClick={handleNav("/arrangement")} className="text-white/60 text-sm hover:text-gold2 transition">Arrangement & Production</Link>
                    <Link href="/blog" onClick={handleNav("/blog")} className="text-white/60 text-sm hover:text-gold2 transition">Blog</Link>
                    <Link href="/suno-track-finishing" onClick={handleNav("/suno-track-finishing")} className="text-white/60 text-sm hover:text-gold2 transition">Suno Track Finishing</Link>
                    <Link href="/contact" onClick={handleNav("/contact")} className="text-white/60 text-sm hover:text-gold2 transition">Contact</Link>
                    <Link href="/free-track-preview" onClick={handleNav("/free-track-preview")} className="text-white/60 text-sm hover:text-gold2 transition">Free Preview</Link>
                </div>

                {/* Right — Contact */}
                <div className="flex flex-col gap-3">
                    <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2">Get In Touch</p>
                    <a href="https://t.me/serhii_lazariev" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm hover:text-gold2 transition">
                        Telegram — @serhii_lazariev
                    </a>
                    <a href="mailto:serhii@slstudio.pro" className="text-white/60 text-sm hover:text-gold2 transition">
                        serhii@slstudio.pro
                    </a>
                    <p className="text-white/30 text-sm mt-2">Warsaw, Poland</p>
                    <p className="text-white/30 text-sm">Worldwide Remote</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/5">
                <div className="container py-4 text-xs text-white/30 flex justify-between">
                    <span>&copy; {new Date().getFullYear()} SL Studio — Serhii Lazariev</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}
