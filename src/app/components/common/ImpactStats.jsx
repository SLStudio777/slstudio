"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect on the client, useEffect on the server (avoids the SSR warning)
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// A stat value: optional "<" prefix, an integer, optional suffix.
// Matches "7 million", "7 mln", "44%", "<3%", "300+".
const NUMERIC = /^(<?)(\d+)( million| mln|%|\+)?$/;

function parse(value) {
  const m = String(value).match(NUMERIC);
  return m
    ? { prefix: m[1] || "", target: Number(m[2]), suffix: m[3] || "" }
    : null;
}

// Impact-stats row: gold numbers + long grey captions. Same behaviour as
// HeroStats — server-renders the final values (SEO- and hydration-safe),
// counts up once scrolled into view, honours reduced motion. Pure rAF.
export default function ImpactStats({ items }) {
  const ref = useRef(null);
  const hasNumbers = items.some((it) => parse(it.value));

  const [display, setDisplay] = useState(() => items.map((it) => it.value));
  const [lifted, setLifted] = useState(!hasNumbers);

  useIsoLayoutEffect(() => {
    if (!hasNumbers) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    setDisplay(
      items.map((it) => {
        const p = parse(it.value);
        return p ? `${p.prefix}0${p.suffix}` : it.value;
      })
    );
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
        setDisplay(
          items.map((it) => {
            const p = parse(it.value);
            return p
              ? `${p.prefix}${Math.round(p.target * eased)}${p.suffix}`
              : it.value;
          })
        );
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    // rAF is frozen in a background tab — wait for visibility before counting.
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
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4"
      style={{ opacity: lifted ? 1 : 0, transition: "opacity 0.6s ease" }}
    >
      {items.map((item, i) => (
        <div key={item.value}>
          <p className="text-xl md:text-2xl font-semibold text-[#f5b942] tabular-nums">
            {display[i]}
          </p>
          <p className="text-white/70 text-sm leading-relaxed mt-1">
            {item.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
