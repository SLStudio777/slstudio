"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const shimmerCSS = `
@keyframes beamShimmer {
  0%   { transform: translateX(-160%) skewX(-18deg); opacity: 0; }
  8%   { opacity: 0.65; }
  82%  { opacity: 0.65; }
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
  opacity: 0;
}
.strike-run .beam-shimmer::after {
  animation: beamShimmer 2.9s cubic-bezier(0.45,0,0.55,1) 1 both;
}
.beam-btn {
  transition: transform 0.12s ease, filter 0.2s ease, opacity 0.2s ease, color 0.2s ease;
}
.beam-btn:hover { filter: brightness(1.1); }
.beam-btn:active { transform: translateY(1px) scale(0.96); filter: brightness(1.18); }
.beam-glow:hover { color: #e8c97a !important; }
@keyframes arcStrike {
  0% { opacity: 0.95; }
  14% { opacity: 0.25; }
  28% { opacity: 1; }
  42% { opacity: 0.2; }
  56% { opacity: 0.7; }
  70% { opacity: 0; }
  100% { opacity: 0; }
}
.beam-arc svg { overflow: visible; display: block; }
.beam-arc path {
  filter: drop-shadow(0 0 3px rgba(232,201,122,0.85));
  opacity: 0;
}
.strike-flash .beam-arc path { animation: arcStrike 1.4s steps(1) 1; }
.strike-flash .beam-arc .arc-2 { animation-delay: 0.15s; }
.strike-flash .beam-arc .arc-3 { animation-delay: 0.35s; }
@media (prefers-reduced-motion: reduce) {
  .strike-run .beam-shimmer::after, .strike-flash .beam-arc path { animation: none; }
  .beam-arc path { opacity: 0; }
}
`;

// The bright gold fill for the Free Preview button — matches the FinalCTA
// "Send Your Track" button so the header CTA reads just as vivid.
const brightGold =
    "linear-gradient(135deg, #C9A84C 0%, #e8c97a 55%, #C9A84C 100%) border-box";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const navRef = useRef(null);

    // The shimmer and the lightning are one choreography. JS starts a single
    // 2.9s sweep every 24s; the strike is triggered by the sweep's own
    // animationend event, so the flash always lands the moment the shimmer
    // dies -- two separate CSS timelines can never drift apart again.
    useEffect(() => {
        const el = navRef.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let cleanupTimer;
        const onEnd = (e) => {
            if (e.animationName !== "beamShimmer") return;
            el.classList.add("strike-flash");
            cleanupTimer = setTimeout(() => {
                el.classList.remove("strike-run", "strike-flash");
            }, 1800);
        };
        const startSweep = () => el.classList.add("strike-run");
        el.addEventListener("animationend", onEnd);
        const first = setTimeout(startSweep, 5000);
        const every = setInterval(startSweep, 24000);
        return () => {
            el.removeEventListener("animationend", onEnd);
            clearTimeout(first);
            clearInterval(every);
            clearTimeout(cleanupTimer);
            el.classList.remove("strike-run", "strike-flash");
        };
    }, []);

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
        <nav ref={navRef} className="sticky top-0 z-50 bg-[#1b1b1b]/80 backdrop-blur-xs border-b border-white/5">
            <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />
            <div className="container py-4 flex items-center justify-between">
                <Link href="/" onClick={handleNav("/")}>
                    <img
                        src="/images/logo-animated.svg"
                        alt="SL Studio"
                        style={{ height: "24px"}}
                    />
                </Link>
                <ul className="flex items-center gap-6 text-white/70 text-base font-medium tracking-wide max-[768px]:hidden">
                    <li className="beam-group flex items-center gap-0">
                        <div className="beam-shimmer" aria-hidden="true" />
                        <Link href="/mixing-mastering" onClick={handleNav("/mixing-mastering")} className="beam-btn px-4 py-2 rounded-l-lg font-medium whitespace-nowrap hover:text-gold2" style={{ border: "1px solid transparent", background: "linear-gradient(90deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0.008) 55%, rgba(201,168,76,0.022) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0.035) 100%) border-box" }}>Mixing & Mastering</Link>
                        <Link href="/arrangement" onClick={handleNav("/arrangement")} className="beam-btn px-4 py-2 font-medium whitespace-nowrap hover:text-gold2" style={{ border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.022) 0%, rgba(201,168,76,0.035) 50%, rgba(201,168,76,0.05) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.035) 0%, rgba(201,168,76,0.075) 100%) border-box" }}>Arrangement</Link>
                        <Link href="/suno-track-finishing" onClick={handleNav("/suno-track-finishing")} className="beam-btn px-4 py-2 font-medium whitespace-nowrap hover:text-gold2" style={{ border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.062) 50%, rgba(201,168,76,0.075) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.075) 0%, rgba(201,168,76,0.105) 100%) border-box" }}>Suno Finishing</Link>
                        <Link href="/blog" onClick={handleNav("/blog")} className="beam-btn beam-glow px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#e6dbbb", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.075) 0%, rgba(201,168,76,0.09) 50%, rgba(201,168,76,0.105) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.105) 0%, rgba(201,168,76,0.135) 100%) border-box" }}>Blog</Link>
                        <Link href="/about" onClick={handleNav("/about")} className="beam-btn beam-glow px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#ecdcaa", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.105) 0%, rgba(201,168,76,0.15) 50%, rgba(201,168,76,0.21) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.135) 0%, rgba(201,168,76,0.20) 100%) border-box" }}>About</Link>
                        <Link href="/contact" onClick={handleNav("/contact")} className="beam-btn beam-glow px-4 py-2 rounded-r-lg font-medium whitespace-nowrap" style={{ color: "#f4e9c4", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.21) 0%, rgba(201,168,76,0.29) 50%, rgba(201,168,76,0.385) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.20) 0%, rgba(201,168,76,0.30) 100%) border-box", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>Contact</Link>
                        <span className="beam-arc flex items-center" aria-hidden="true">
                            <svg width="10" height="24" viewBox="0 0 10 24" fill="none">
                                <path className="arc-1" d="M0 6 L4 8 L2 10 L7 9 L5 12 L10 10" stroke="#e8c97a" strokeWidth="1.1" strokeLinejoin="round" />
                                <path className="arc-2" d="M0 12 L4 11 L3 14 L8 12 L6 16 L10 14" stroke="#C9A84C" strokeWidth="0.9" strokeLinejoin="round" />
                                <path className="arc-3" d="M0 18 L5 16 L3 19 L7 17 L10 19" stroke="#e8c97a" strokeWidth="0.8" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <Link href="/free-track-preview" onClick={handleNav("/free-track-preview")} className="beam-btn btn-gold px-4 py-2 rounded-lg font-semibold whitespace-nowrap" style={{ color: "#161616", border: "1px solid transparent", background: brightGold, boxShadow: "0 0 30px rgba(201,168,76,0.45), 0 0 70px rgba(201,168,76,0.15)" }}>Free Preview</Link>
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
                    <ul className="container py-4 flex flex-col gap-3 text-white/70 text-base font-medium">
                        <li className="flex flex-col items-stretch gap-0 pt-1">
                            <Link href="/" onClick={handleNav("/", true)} className="beam-btn px-4 py-2 rounded-t-lg font-medium hover:text-gold2" style={{ border: "1px solid transparent", background: "linear-gradient(180deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0.002) 60%, rgba(201,168,76,0.006) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0.012) 100%) border-box" }}>Home</Link>
                            <Link href="/mixing-mastering" onClick={handleNav("/mixing-mastering", true)} className="beam-btn px-4 py-2 font-medium hover:text-gold2" style={{ border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.006) 0%, rgba(201,168,76,0.012) 50%, rgba(201,168,76,0.022) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.012) 0%, rgba(201,168,76,0.035) 100%) border-box" }}>Mixing & Mastering</Link>
                            <Link href="/arrangement" onClick={handleNav("/arrangement", true)} className="beam-btn px-4 py-2 font-medium hover:text-gold2" style={{ border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.022) 0%, rgba(201,168,76,0.035) 50%, rgba(201,168,76,0.05) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.035) 0%, rgba(201,168,76,0.075) 100%) border-box" }}>Arrangement</Link>
                            <Link href="/suno-track-finishing" onClick={handleNav("/suno-track-finishing", true)} className="beam-btn px-4 py-2 font-medium hover:text-gold2" style={{ border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.062) 50%, rgba(201,168,76,0.075) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.075) 0%, rgba(201,168,76,0.105) 100%) border-box" }}>Suno Finishing</Link>
                            <Link href="/blog" onClick={handleNav("/blog", true)} className="beam-btn beam-glow px-4 py-2 font-medium" style={{ color: "#e6dbbb", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.075) 0%, rgba(201,168,76,0.09) 50%, rgba(201,168,76,0.105) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.105) 0%, rgba(201,168,76,0.135) 100%) border-box" }}>Blog</Link>
                            <Link href="/about" onClick={handleNav("/about", true)} className="beam-btn beam-glow px-4 py-2 font-medium" style={{ color: "#ecdcaa", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.105) 0%, rgba(201,168,76,0.15) 50%, rgba(201,168,76,0.21) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.135) 0%, rgba(201,168,76,0.20) 100%) border-box" }}>About</Link>
                            <Link href="/contact" onClick={handleNav("/contact", true)} className="beam-btn beam-glow px-4 py-2 rounded-b-lg font-medium" style={{ color: "#f4e9c4", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.21) 0%, rgba(201,168,76,0.29) 50%, rgba(201,168,76,0.385) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.20) 0%, rgba(201,168,76,0.30) 100%) border-box", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>Contact</Link>
                            <span className="beam-arc flex justify-center" aria-hidden="true">
                                <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
                                    <path className="arc-1" d="M6 0 L8 3 L11 2 L9 7 L12 5 L10 10" stroke="#e8c97a" strokeWidth="1.1" strokeLinejoin="round" />
                                    <path className="arc-2" d="M14 0 L12 4 L15 3 L13 8 L15 10" stroke="#C9A84C" strokeWidth="0.9" strokeLinejoin="round" />
                                    <path className="arc-3" d="M19 0 L17 3 L20 2 L18 7 L21 6 L19 10" stroke="#e8c97a" strokeWidth="0.8" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <Link href="/free-track-preview" onClick={handleNav("/free-track-preview", true)} className="beam-btn btn-gold px-4 py-2.5 rounded-lg font-semibold" style={{ color: "#161616", border: "1px solid transparent", background: brightGold, boxShadow: "0 0 30px rgba(201,168,76,0.45), 0 0 70px rgba(201,168,76,0.15)" }}>Free Preview</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
