"use client";

import Link from "next/link";
import { useState } from "react";

const shimmerCSS = `
@keyframes beamShimmer {
  0%   { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
  6%   { opacity: 1; }
  94%  { opacity: 1; }
  100% { transform: translateX(480%) skewX(-18deg); opacity: 0; }
}
.beam-group { position: relative; }
.beam-shimmer {
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 10px;
  z-index: 10;
}
.beam-shimmer::after {
  content: '';
  position: absolute;
  top: -10%;
  left: 0;
  width: 20%;
  height: 120%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,245,200,0.15) 40%, rgba(255,245,200,0.30) 50%, rgba(255,245,200,0.15) 60%, transparent 100%);
  animation: beamShimmer 7s cubic-bezier(0.4,0,0.6,1) infinite;
  animation-delay: 2.5s;
}
`;

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#1b1b1b]/80 backdrop-blur-xs border-b border-white/5">
            <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />
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
                    <li className="beam-group flex items-center gap-px">
                        <div className="beam-shimmer" aria-hidden="true" />
                        <Link href="/blog" className="px-4 py-2 rounded-l-lg font-medium transition hover:opacity-80 whitespace-nowrap" style={{ color: "#e9ddb9", background: "linear-gradient(90deg, #26231c 0%, #3a3323 100%)", border: "1px solid rgba(201,168,76,0.14)" }}>Blog</Link>
                        <Link href="/about" className="px-4 py-2 font-medium transition hover:opacity-80 whitespace-nowrap" style={{ color: "#eeddab", background: "linear-gradient(90deg, #3a3323 0%, #55482b 100%)", border: "1px solid rgba(201,168,76,0.20)", borderLeft: "none" }}>About</Link>
                        <Link href="/contact" className="px-4 py-2 font-medium transition hover:opacity-90 whitespace-nowrap" style={{ color: "#f6ecc8", background: "linear-gradient(90deg, #55482b 0%, #9a8340 100%)", border: "1px solid rgba(201,168,76,0.28)", borderLeft: "none", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>Contact</Link>
                        <Link href="/free-track-preview" className="btn-gold px-4 py-2 rounded-r-lg font-semibold whitespace-nowrap" style={{ background: "linear-gradient(90deg, #9a8340 0%, #C9A84C 45%, #e8c97a 100%)", color: "#161616", border: "1px solid rgba(201,168,76,0.4)", borderLeft: "none", boxShadow: "0 0 24px rgba(201,168,76,0.25)" }}>Free Preview</Link>
                    </li>
                </ul>
                <button onClick={() => setOpen(!open)} className="min-[769px]:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8" aria-label="Menu">
                    <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </div>
            {open && (
                <div className="min-[769px]:hidden border-t border-white/5 bg-[#1b1b1b]">
                    <ul className="container py-4 flex flex-col gap-3 text-white/70 text-[15px] font-medium">
                        <li><Link href="/" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Home</Link></li>
                        <li><Link href="/mixing-mastering" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Mixing & Mastering</Link></li>
                        <li><Link href="/arrangement" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Arrangement</Link></li>
                        <li className="flex flex-col items-start gap-0.5 pt-1">
                            <Link href="/blog" onClick={() => setOpen(false)} className="px-4 py-2 rounded-t-lg font-medium transition hover:opacity-80" style={{ color: "#e9ddb9", background: "linear-gradient(180deg, #26231c 0%, #3a3323 100%)", border: "1px solid rgba(201,168,76,0.14)" }}>Blog</Link>
                            <Link href="/about" onClick={() => setOpen(false)} className="px-4 py-2 font-medium transition hover:opacity-80" style={{ color: "#eeddab", background: "linear-gradient(180deg, #3a3323 0%, #55482b 100%)", border: "1px solid rgba(201,168,76,0.20)", borderTop: "none" }}>About</Link>
                            <Link href="/contact" onClick={() => setOpen(false)} className="px-4 py-2 font-medium transition hover:opacity-90" style={{ color: "#f6ecc8", background: "linear-gradient(180deg, #55482b 0%, #9a8340 100%)", border: "1px solid rgba(201,168,76,0.28)", borderTop: "none", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>Contact</Link>
                            <Link href="/free-track-preview" onClick={() => setOpen(false)} className="btn-gold px-6 py-2.5 rounded-b-lg font-semibold" style={{ background: "linear-gradient(180deg, #9a8340 0%, #C9A84C 45%, #e8c97a 100%)", color: "#161616", border: "1px solid rgba(201,168,76,0.4)", borderTop: "none", boxShadow: "0 0 24px rgba(201,168,76,0.25)" }}>Free Preview</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
