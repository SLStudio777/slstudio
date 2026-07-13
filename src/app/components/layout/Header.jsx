"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#1b1b1b]/80 backdrop-blur-xs border-b border-white/5">
            <div className="container py-4 flex items-center justify-between">
                <Link href="/">
                    <img
                        src="/images/logo-animated.svg"
                        alt="SL Studio"
                        style={{ height: "24px"}}
                    />
                </Link>
                <ul className="flex items-center gap-6 text-white/70 text-[15px] font-medium tracking-wide max-[768px]:hidden">
                    <li><Link href="/" className="hover:text-gold2 transition">Home</Link></li>
                    <li><Link href="/mixing-mastering" className="hover:text-gold2 transition">Mixing & Mastering</Link></li>
                    <li><Link href="/arrangement" className="hover:text-gold2 transition">Arrangement</Link></li>
                    <li><Link href="/blog" className="hover:text-gold2 transition">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-gold2 transition">Contact</Link></li>
                    <li>
                        <Link href="/free-track-preview" className="px-4 py-2 rounded-lg text-black font-semibold hover:opacity-90 transition whitespace-nowrap" style={{backgroundColor: "#C9A84C", boxShadow: "0 0 24px rgba(201,168,76,0.25)"}}>
                            Free Preview
                        </Link>
                    </li>
                </ul>
                <button onClick={() => setOpen(!open)} className="min-[769px]:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8" aria-label="Menu">
                    <span className="block w-6 h-0.5 bg-white/70 transition-all duration-300" style={open ? {transform: "translateY(7px) rotate(45deg)"} : {}}/>
                    <span className="block w-6 h-0.5 bg-white/70 transition-all duration-300" style={open ? {opacity: 0} : {}}/>
                    <span className="block w-6 h-0.5 bg-white/70 transition-all duration-300" style={open ? {transform: "translateY(-7px) rotate(-45deg)"} : {}}/>
                </button>
            </div>
            {open && (
                <div className="md:hidden border-t border-white/5" style={{background: "#1b1b1b"}}>
                    <ul className="flex flex-col px-6 py-4 gap-4 text-white/70 text-[15px] font-medium">
                        <li><Link href="/" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Home</Link></li>
                        <li><Link href="/mixing-mastering" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Mixing & Mastering</Link></li>
                        <li><Link href="/arrangement" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Arrangement</Link></li>
                        <li><Link href="/blog" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Blog</Link></li>
                        <li><Link href="/contact" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Contact</Link></li>
                        <li className="pt-1">
                            <Link href="/free-track-preview" onClick={() => setOpen(false)} className="inline-block px-6 py-2.5 rounded-lg text-black font-semibold hover:opacity-90 transition" style={{backgroundColor: "#C9A84C"}}>
                                Free Preview
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
