"use client";
import { useEffect, useRef, useState } from "react";

const RAIL_TOP = 5;
const RAIL_RANGE = 162;
const CONTAINER_H = 190;
const CONTAINER_W = 46;

// Symmetric console-style scale: 0.0 dB sits exactly at mid-travel, +12 at
// the top, −12 at the bottom, moving linearly with the cap.
function posToDb(pos) {
  const db = (0.5 - pos) * 24;
  const rounded = Math.round(db * 10) / 10;
  if (rounded === 0) return "0.0";
  const text = Math.abs(rounded).toFixed(1);
  return rounded > 0 ? `+${text}` : `\u2212${text}`;
}

// A single draggable mixing-console fader. Starts near the top, glides to a
// random resting position once the row scrolls into view, then can be
// grabbed and dragged up/down like a real fader — a live dB readout sits to
// the side of the cap and rises/fades with it while you touch it.
function Fader({ triggered, delay, uid }) {
  const [target, setTarget] = useState(0.12);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const settledRef = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (triggered && !settledRef.current) {
      settledRef.current = true;
      const t = window.setTimeout(() => {
        setTarget(0.14 + Math.random() * 0.68);
      }, delay);
      return () => window.clearTimeout(t);
    }
  }, [triggered, delay]);

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const raw = (clientY - rect.top - RAIL_TOP) / RAIL_RANGE;
      setTarget(Math.min(1, Math.max(0, raw)));
    };
    const handleUp = () => setDragging(false);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging]);

  const nudge = !dragging && hovered ? (target > 0.5 ? -0.09 : 0.09) : 0;
  const pos = Math.min(0.96, Math.max(0.04, target + nudge));
  const active = hovered || dragging;
  const capY = RAIL_TOP + pos * RAIL_RANGE;

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{
        width: CONTAINER_W,
        height: CONTAINER_H,
        cursor: dragging ? "grabbing" : "grab",
        touchAction: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
    >
      {/* dB readout: hangs to the left of the rail and tracks the cap's
          vertical position, sliding up a touch and fading in while active */}
      <div
        className="absolute text-[10px] tabular-nums pointer-events-none"
        style={{
          right: "calc(100% + 8px)",
          top: 0,
          whiteSpace: "nowrap",
          color: "rgba(201,168,76,0.75)",
          opacity: active ? 1 : 0,
          transform: `translateY(${capY - 4 + (active ? 0 : 6)}px)`,
          transition: dragging
            ? "none"
            : "transform 1.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease",
        }}
      >
        {posToDb(pos)} dB
      </div>
      <svg
        viewBox={`0 0 ${CONTAINER_W} ${CONTAINER_H}`}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <defs>
          <linearGradient id={`sfRail-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0b0b0b" />
            <stop offset="50%" stopColor="#181818" />
            <stop offset="100%" stopColor="#0b0b0b" />
          </linearGradient>
          <linearGradient id={`sfCap-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c2a25a" />
            <stop offset="100%" stopColor="#7a5f22" />
          </linearGradient>
        </defs>

        <rect
          x="15"
          y="5"
          width="16"
          height="180"
          rx="8"
          fill={`url(#sfRail-${uid})`}
          stroke="rgba(201,168,76,0.12)"
          strokeWidth="1"
        />
        <rect
          x="21.25"
          y="10"
          width="3.5"
          height="170"
          rx="1.5"
          fill="rgba(0,0,0,0.5)"
        />

        {[0.18, 0.38, 0.58, 0.78].map((p) => (
          <rect
            key={p}
            x="2"
            y={5 + p * 180}
            width="10"
            height="1.3"
            fill="rgba(255,255,255,0.10)"
          />
        ))}

        <g
          style={{
            transform: `translateY(${capY}px)`,
            transition: dragging
              ? "none"
              : "transform 1.3s cubic-bezier(0.22, 1, 0.36, 1)",
            filter: active
              ? "drop-shadow(0 0 7px rgba(201,168,76,0.5))"
              : "none",
          }}
        >
          {/* wing / grip bar — wider than the body, like a real P&G fader cap */}
          <rect
            x="0"
            y="0"
            width={CONTAINER_W}
            height="4"
            rx="2"
            fill={`url(#sfCap-${uid})`}
            opacity={active ? 0.85 : 0.6}
          />
          <rect
            x="5"
            y="3"
            width="36"
            height="19"
            rx="4"
            fill={`url(#sfCap-${uid})`}
            opacity={active ? 0.85 : 0.6}
            stroke="rgba(20,20,20,0.4)"
            strokeWidth="1"
          />
          <rect
            x="8"
            y="5"
            width="30"
            height="3"
            rx="1.5"
            fill="rgba(255,255,255,0.16)"
          />
          <rect
            x="10"
            y="11"
            width="26"
            height="2"
            rx="1"
            fill="rgba(20,20,20,0.45)"
          />
          <rect x="8" y="16" width="30" height="1.8" fill="rgba(0,0,0,0.22)" />
        </g>
      </svg>
    </div>
  );
}

// Eight faders, spaced well apart. They stay near the top until this row
// scrolls into view, glide to a random position and settle — after that
// each one can be grabbed and dragged up/down freely, with a live dB readout
// tracking the cap from the side.
export default function ScrollFaders() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="hidden md:flex justify-evenly items-center w-full h-full"
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Fader key={i} triggered={triggered} delay={200 + i * 170} uid={i} />
      ))}
    </div>
  );
}
