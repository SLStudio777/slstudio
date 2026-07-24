"use client";
import { useRef, useState } from "react";

// ─── Config ──────────────────────────────────────────────────────────────────
// Which track is the human master is set here, in code only — nothing in the
// UI or file names gives it away before the reader votes.
const TRACKS = [
  { id: "a", label: "Track A", src: "/audio/blind-test/track-a.mp3" },
  { id: "b", label: "Track B", src: "/audio/blind-test/track-b.mp3" },
];
const HUMAN_TRACK = "b"; // TODO: confirm after final audio export

function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

function fmt(sec) {
  if (!isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function BlindTestPlayer() {
  const audioRefs = useRef({});
  const [playing, setPlaying] = useState(null);
  const [progress, setProgress] = useState({ a: 0, b: 0 });
  const [duration, setDuration] = useState({ a: 0, b: 0 });
  const [vote, setVote] = useState(null);

  const toggle = (id) => {
    const el = audioRefs.current[id];
    if (!el) return;
    if (playing === id) {
      el.pause();
      setPlaying(null);
      return;
    }
    TRACKS.forEach((t) => {
      if (t.id !== id) audioRefs.current[t.id]?.pause();
    });
    el.play();
    setPlaying(id);
    trackEvent("blind_test_play", { track: id });
  };

  const seek = (id, e) => {
    const el = audioRefs.current[id];
    if (!el || !duration[id]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    el.currentTime = ratio * duration[id];
  };

  const castVote = (id) => {
    if (vote) return;
    setVote(id);
    trackEvent("blind_test_vote", {
      choice: id,
      correct: id === HUMAN_TRACK ? "yes" : "no",
    });
  };

  const correct = vote === HUMAN_TRACK;

  return (
    <div
      className="rounded-2xl p-6 md:p-8 flex flex-col gap-6"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(201,168,76,0.25)",
        boxShadow: "0 0 30px rgba(201,168,76,0.08)",
      }}
    >
      {TRACKS.map((t) => (
        <div key={t.id} className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => toggle(t.id)}
              aria-label={`Play ${t.label}`}
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold hover:opacity-90 transition"
              style={{ backgroundColor: "#C9A84C" }}
            >
              {playing === t.id ? "❚❚" : "▶"}
            </button>
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-sm">{t.label}</p>
                <p className="text-white/50 text-xs tabular-nums">
                  {fmt(progress[t.id])} / {fmt(duration[t.id])}
                </p>
              </div>
              <div
                className="h-2 rounded-full cursor-pointer"
                style={{ background: "rgba(255,255,255,0.08)" }}
                onClick={(e) => seek(t.id, e)}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    background: "#C9A84C",
                    width: duration[t.id]
                      ? `${(progress[t.id] / duration[t.id]) * 100}%`
                      : "0%",
                  }}
                />
              </div>
            </div>
          </div>
          <audio
            ref={(el) => (audioRefs.current[t.id] = el)}
            src={t.src}
            preload="metadata"
            onTimeUpdate={(e) =>
              setProgress((p) => ({ ...p, [t.id]: e.target.currentTime }))
            }
            onLoadedMetadata={(e) =>
              setDuration((d) => ({ ...d, [t.id]: e.target.duration }))
            }
            onEnded={() => setPlaying(null)}
          />
        </div>
      ))}

      <div
        className="border-t pt-6 flex flex-col gap-4"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        {!vote ? (
          <>
            <p className="text-white font-semibold text-sm text-center">
              Which one was mastered by a human engineer?
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              {TRACKS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => castVote(t.id)}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white hover:border-[#C9A84C] transition"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {t.label} is the human
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-2 text-center">
            <p
              className="font-bold text-base"
              style={{ color: correct ? "#7ac97a" : "#f5b942" }}
            >
              {correct
                ? "Correct — you have good ears."
                : "Not this time — and that's interesting in itself."}
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Track {HUMAN_TRACK.toUpperCase()} was mastered by me, a human.
              Track {HUMAN_TRACK === "a" ? "B" : "A"} is the untouched AI
              export. Keep reading — the differences are broken down below.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
