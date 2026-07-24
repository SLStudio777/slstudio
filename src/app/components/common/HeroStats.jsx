"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect on the client, useEffect on the server (avoids the SSR warning)
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// A leading integer with an optional trailing "+" — matches "300+", "10+", "300".
// Anything else ("3–5 Days", "Any Genre", "Każdy gatunek") is left untouched.
const NUMERIC = /^(\d+)(\+?)$/;

function parse(value) {
    const m = String(value).match(NUMERIC);
    return m ? { target: Number(m[1]), suffix: m[2] } : null;
}

// Shared hero stats row. Server-renders the final values (SEO- and hydration-safe),
// then — once the row scrolls into view — counts the numeric ones up from zero.
// Text values just fade in. Pure rAF, no library. Honours reduced-motion.
export default function HeroStats({ items }) {
    const ref = useRef(null);
    const hasNumbers = items.some((it) => parse(it.value));

    // first paint (server + hydration) shows the real values
    const [display, setDisplay] = useState(() => items.map((it) => it.value));
    const [lifted, setLifted] = useState(!hasNumbers); // fade-in trigger

    // reset numeric values to 0 before the browser paints, so the count-up
    // starts from zero without a flash of the final number
    useIsoLayoutEffect(() => {
        if (!hasNumbers) return;
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (reduce || !("IntersectionObserver" in window)) return;
        setDisplay(items.map((it) => {
            const p = parse(it.value);
            return p ? `0${p.suffix}` : it.value;
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (reduce || !("IntersectionObserver" in window)) {
            setLifted(true);
            return;
        }

        let raf = 0;
        let fired = false;
        const DURATION = 1400;

        const countUp = () => {
            setLifted(true);
            const start = performance.now();
            const step = (now) => {
                const t = Math.min(1, (now - start) / DURATION);
                const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
                setDisplay(items.map((it) => {
                    const p = parse(it.value);
                    return p ? `${Math.round(p.target * eased)}${p.suffix}` : it.value;
                }));
                if (t < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
        };

        // rAF is frozen in a background tab, which would leave the count stuck
        // at zero. If the tab is hidden when the row scrolls in, wait for it to
        // become visible before counting.
        const onVisible = () => {
            if (!document.hidden) {
                document.removeEventListener("visibilitychange", onVisible);
                countUp();
            }
        };
        const start = () => {
            if (document.hidden) {
                document.addEventListener("visibilitychange", onVisible);
            } else {
                countUp();
            }
        };

        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !fired) {
                    fired = true;
                    io.disconnect();
                    start();
                }
            },
            { threshold: 0.4 }
        );
        io.observe(el);

        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
            document.removeEventListener("visibilitychange", onVisible);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={ref}
            className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4"
            style={{
                opacity: lifted ? 1 : 0,
                transition: "opacity 0.6s ease",
            }}
        >
            {items.map((item, i) => (
                <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-semibold text-[#f5b942] tabular-nums">
                        {display[i]}
                    </span>
                    <span className="text-white/75 text-xs uppercase tracking-widest">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
