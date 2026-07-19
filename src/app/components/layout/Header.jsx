"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const shimmerCSS = `
@keyframes beamShimmer {
  0%   { transform: translateX(-160%) skewX(-18deg); opacity: 0; }
  2%   { opacity: 0.65; }
  16%  { opacity: 0.65; }
  18%  { transform: translateX(460%) skewX(-18deg); opacity: 0; }
  100% { transform: translateX(460%) skewX(-18deg); opacity: 0; }
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
  width: 16%;
  height: 120%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,245,200,0.02) 30%, rgba(255,245,200,0.045) 50%, rgba(255,245,200,0.02) 70%, transparent 100%);
  animation: beamShimmer 16s cubic-bezier(0.45,0,0.55,1) infinite;
  animation-delay: 5s;
}
.beam-btn {
  transition: transform 0.12s ease, filter 0.2s ease, opacity 0.2s ease, color 0.2s ease;
}
.beam-btn:hover { filter: brightness(1.1); }
.beam-btn:active { transform: translateY(1px) scale(0.96); filter: brightness(1.18); }
.beam-glow:hover { color: #e8c97a !important; }
`;

// The bright gold fill for the Free Preview button — matches the FinalCTA
// "Send Your Track" button so the header CTA reads just as vivid.
const brightGold =
    "linear-gradient(135deg, #C9A84C 0%, #e8c97a 55%, #C9A84C 100%) border-box";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Clicking a nav link (or the logo) while already on that page does not
    // navigate, so Next never scrolls. Intercept the same-page case and scroll
    // to the top ourselves; cross-page clicks fall through to normal navigation
    // (which already lands at the top). `closeMenu` also shuts the mobile menu.
    const handleNav = (href, closeMenu) => (e) => {
        if (pathname === href) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (closeMenu) setOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#1b1b1b]/80 backdrop-blur-xs border-b border-white/5">
            <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />
            <div className="container py-4 flex items-center justify-between">
                <Link href="/" onClick={handleNav("/")}>
                    <img
                        src="/images/logo-animated.svg"
                        alt="SL Studio"
                        style={{ height: "24px"}}
                    />
                </Link>
                <ul className="flex items-center gap-6 text-white/70 text-[15px] font-medium tracking-wide max-[768px]:hidden">
                    <li><Link href="/" onClick={handleNav("/")} className="hover:text-gold2 transition">Home</Link></li>
                    <li><Link href="/mixing-mastering" onClick={handleNav("/mixing-mastering")} className="hover:text-gold2 transition">Mixing & Mastering</Link></li>
                    <li className="beam-group flex items-center gap-0">
                        <div className="beam-shimmer" aria-hidden="true" />
                        <Link href="/arrangement" onClick={handleNav("/arrangement")} className="beam-btn px-4 py-2 rounded-l-lg font-medium whitespace-nowrap hover:text-gold2" style={{ border: "1px solid transparent", background: "linear-gradient(90deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0) 62%, rgba(201,168,76,0.01) 82%, rgba(201,168,76,0.025) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0) 60%, rgba(201,168,76,0.05) 100%) border-box" }}>Arrangement</Link>
                        <Link href="/blog" onClick={handleNav("/blog")} className="beam-btn beam-glow px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#e6dbbb", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.025) 0%, rgba(201,168,76,0.045) 50%, rgba(201,168,76,0.07) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.10) 100%) border-box" }}>Blog</Link>
                        <Link href="/about" onClick={handleNav("/about")} className="beam-btn beam-glow px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#ecdcaa", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.11) 50%, rgba(201,168,76,0.155) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.145) 100%) border-box" }}>About</Link>
                        <Link href="/contact" onClick={handleNav("/contact")} className="beam-btn beam-glow px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#f4e9c4", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.155) 0%, rgba(201,168,76,0.21) 50%, rgba(201,168,76,0.275) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.145) 0%, rgba(201,168,76,0.205) 100%) border-box", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>Contact</Link>
                        <Link href="/free-track-preview" onClick={handleNav("/free-track-preview")} className="beam-btn btn-gold px-4 py-2 rounded-r-lg font-semibold whitespace-nowrap" style={{ color: "#161616", border: "1px solid transparent", borderLeft: "none", background: brightGold, boxShadow: "0 0 24px rgba(201,168,76,0.30)" }}>Free Preview</Link>
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
                        <li><Link href="/" onClick={handleNav("/", true)} className="hover:text-gold2 transition block py-1">Home</Link></li>
                        <li><Link href="/mixing-mastering" onClick={handleNav("/mixing-mastering", true)} className="hover:text-gold2 transition block py-1">Mixing & Mastering</Link></li>
                        <li className="flex flex-col items-stretch gap-0 pt-1">
                            <Link href="/arrangement" onClick={handleNav("/arrangement", true)} className="beam-btn px-4 py-2 rounded-t-lg font-medium hover:text-gold2" style={{ border: "1px solid transparent", background: "linear-gradient(180deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0) 62%, rgba(201,168,76,0.025) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0) 60%, rgba(201,168,76,0.05) 100%) border-box" }}>Arrangement</Link>
                            <Link href="/blog" onClick={handleNav("/blog", true)} className="beam-btn beam-glow px-4 py-2 font-medium" style={{ color: "#e6dbbb", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.025) 0%, rgba(201,168,76,0.045) 50%, rgba(201,168,76,0.07) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.10) 100%) border-box" }}>Blog</Link>
                            <Link href="/about" onClick={handleNav("/about", true)} className="beam-btn beam-glow px-4 py-2 font-medium" style={{ color: "#ecdcaa", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.11) 50%, rgba(201,168,76,0.155) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.145) 100%) border-box" }}>About</Link>
                            <Link href="/contact" onClick={handleNav("/contact", true)} className="beam-btn beam-glow px-4 py-2 font-medium" style={{ color: "#f4e9c4", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.155) 0%, rgba(201,168,76,0.21) 50%, rgba(201,168,76,0.275) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.145) 0%, rgba(201,168,76,0.205) 100%) border-box", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>Contact</Link>
                            <Link href="/free-track-preview" onClick={handleNav("/free-track-preview", true)} className="beam-btn btn-gold px-4 py-2.5 rounded-b-lg font-semibold" style={{ color: "#161616", border: "1px solid transparent", borderTop: "none", background: brightGold, boxShadow: "0 0 24px rgba(201,168,76,0.30)" }}>Free Preview</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
