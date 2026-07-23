"use client";

import { useRef, useState } from "react";
import { Play, Pause, Download, ChevronDown, X } from "lucide-react";
import { portfolioSections, portfolioBands } from "@/data/portfolioTracks";

const LABELS = {
  en: {
    tracks: "tracks",
    bands: "Bands I've played with",
    download: "Download",
    showAll: "Show all",
    showLess: "Show less",
    myOwn: "My own songs",
    stop: "Stop",
  },
  pl: {
    tracks: "utwor\u00f3w",
    bands: "Zespo\u0142y, z kt\u00f3rymi gra\u0142em",
    download: "Pobierz",
    showAll: "Poka\u017c wszystkie",
    showLess: "Zwi\u0144",
    myOwn: "Moje utwory",
    stop: "Stop",
  },
};

const SUBGROUP_NAMES = {
  TM: "Temperatura",
  BB: "Bleuler Band",
  ID: "Idillia",
  PX: "Paradox",
  RS: "Red Sky Syndrome",
};

function Vinyl({ spinning }) {
  return (
    <span
      aria-hidden
      className="inline-block h-5 w-5 rounded-full motion-safe:animate-spin"
      style={{
        background:
          "radial-gradient(circle, #e8c97a 0 16%, #191510 20% 44%, #3a3020 46% 50%, #191510 52% 100%)",
        animationDuration: "2.6s",
        animationPlayState: spinning ? "running" : "paused",
      }}
    />
  );
}

function BandCard({ band, lang }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = (y / r.height - 0.5) * -5;
    const ry = (x / r.width - 0.5) * 5;
    el.style.transform =
      "perspective(700px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg)";
    el.style.setProperty("--px", x + "px");
    el.style.setProperty("--py", y + "px");
  }

  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-transform duration-200 will-change-transform"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--px, 50%) var(--py, 50%), rgba(201,168,76,0.10), transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="mb-2 flex items-center gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/50 text-sm tracking-wider text-[#C9A84C]"
            style={{
              fontFamily: "var(--font-playfair)",
              boxShadow: "inset 0 0 12px rgba(201,168,76,0.15)",
            }}
          >
            {band.badge}
          </span>
          <div>
            <div className="text-sm font-semibold text-white/85">{band.name}</div>
            <div className="text-xs text-white/40">
              {lang === "pl" ? band.cityPl : band.cityEn}
            </div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-white/55">
          {lang === "pl" ? band.textPl : band.textEn}
        </p>
      </div>
    </div>
  );
}

export default function PortfolioPlayer({ lang = "en" }) {
  const t = LABELS[lang] ?? LABELS.en;
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState({});

  const currentTrack = current
    ? portfolioSections.flatMap((s) => s.tracks).find((tr) => tr.slug === current) || null
    : null;

  function toggle(track) {
    const audio = audioRef.current;
    if (!audio) return;
    if (current === track.slug) {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.play();
        setPlaying(true);
      }
      return;
    }
    audio.src = track.file;
    audio.play();
    setCurrent(track.slug);
    setPlaying(true);
    setProgress(0);
  }

  function stop() {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
    }
    setCurrent(null);
    setPlaying(false);
    setProgress(0);
  }

  function seek(track, e) {
    const audio = audioRef.current;
    if (!audio || current !== track.slug || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio * 100);
  }

  return (
    <div className={currentTrack ? "pb-24" : ""}>
      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={(e) => {
          const a = e.currentTarget;
          if (a.duration) setProgress((a.currentTime / a.duration) * 100);
        }}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
        }}
      />

      {/* Genre anchor chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {portfolioSections.map((s) => (
          <a
            key={s.genre}
            href={`#pf-${s.genre}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/70 transition hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"
          >
            {lang === "pl" ? s.labelPl : s.labelEn}
            <span className="text-xs text-[#f5b942]">{s.tracks.length}</span>
          </a>
        ))}
      </div>

      {portfolioSections.map((s) => {
        const isExpandable = s.tracks.length > 10;
        const isExpanded = !!expanded[s.genre];
        const limit = isExpandable && !isExpanded ? 8 : s.tracks.length;
        const shown = s.tracks.slice(0, limit);
        const rows = [];
        let prevBand = null;
        shown.forEach((track, i) => {
          if (s.genre === "rock") {
            const key = track.band || "own";
            if (key !== prevBand) {
              rows.push({
                type: "sub",
                key: "sub-" + key + "-" + i,
                label: track.band ? SUBGROUP_NAMES[track.band] || track.band : t.myOwn,
              });
              prevBand = key;
            }
          }
          rows.push({ type: "track", key: track.slug, track, num: i + 1 });
        });
        return (
          <section
            key={s.genre}
            id={`pf-${s.genre}`}
            className="mb-12"
            style={{ scrollMarginTop: 90 }}
          >
            <h2
              className="mb-4 text-xl md:text-2xl font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {lang === "pl" ? s.labelPl : s.labelEn}{" "}
              <span className="text-sm text-white/35">
                {s.tracks.length} {t.tracks}
              </span>
            </h2>
            <div className="space-y-1.5">
              {rows.map((row) =>
                row.type === "sub" ? (
                  <div key={row.key} className="flex items-center gap-3 pt-4 pb-1 first:pt-0">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#C9A84C]/80">
                      {row.label}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-[#C9A84C]/25 to-transparent" />
                  </div>
                ) : (
                  <div
                    key={row.key}
                    className={`group flex items-center gap-3 rounded-xl border px-3 py-2 transition ${
                      current === row.track.slug
                        ? "border-[#C9A84C]/40 bg-[#C9A84C]/[0.06]"
                        : "border-white/[0.06] bg-white/[0.02] hover:border-[#C9A84C]/25 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="flex w-6 shrink-0 items-center justify-end text-xs tabular-nums text-white/30">
                      {current === row.track.slug ? (
                        <Vinyl spinning={playing} />
                      ) : (
                        String(row.num).padStart(2, "0")
                      )}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggle(row.track)}
                      aria-label={row.track.title}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:opacity-90"
                      style={{
                        background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                        color: "#141414",
                      }}
                    >
                      {current === row.track.slug && playing ? (
                        <Pause size={15} />
                      ) : (
                        <Play size={15} className="ml-0.5" />
                      )}
                    </button>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm text-white/85">
                          {row.track.title}
                        </span>
                        {row.track.band ? (
                          <span className="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/45 px-1 text-[9px] tracking-wider text-[#C9A84C]">
                            {row.track.band}
                          </span>
                        ) : null}
                        {row.track.cover ? (
                          <span className="shrink-0 rounded-full border border-white/20 px-2 py-0.5 text-[9px] uppercase tracking-wider text-white/45">
                            cover
                          </span>
                        ) : null}
                      </div>
                      {(lang === "pl" ? row.track.captionPl : row.track.captionEn) ? (
                        <div className="truncate text-xs text-white/40">
                          {lang === "pl" ? row.track.captionPl : row.track.captionEn}
                        </div>
                      ) : null}
                      <div
                        className="mt-1.5 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/[0.07]"
                        onClick={(e) => seek(row.track, e)}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: current === row.track.slug ? `${progress}%` : 0,
                            background: "linear-gradient(90deg, #C9A84C, #e8c97a)",
                          }}
                        />
                      </div>
                    </div>
                    <span className="shrink-0 text-xs tabular-nums text-white/40">
                      {row.track.duration}
                    </span>
                    <a
                      href={row.track.file}
                      download
                      className="shrink-0 text-white/35 transition hover:text-[#C9A84C]"
                      aria-label={t.download}
                      title={t.download}
                    >
                      <Download size={16} />
                    </a>
                  </div>
                )
              )}
            </div>
            {isExpandable ? (
              <button
                type="button"
                onClick={() =>
                  setExpanded((p) => ({ ...p, [s.genre]: !p[s.genre] }))
                }
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/35 px-4 py-1.5 text-xs text-[#C9A84C] transition hover:bg-[#C9A84C]/10"
              >
                {isExpanded ? t.showLess : t.showAll + " " + s.tracks.length}
                <ChevronDown
                  size={14}
                  className={
                    isExpanded
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
            ) : null}
          </section>
        );
      })}

      {/* Bands */}
      <section className="mt-16">
        <h2
          className="mb-6 text-xl md:text-2xl font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {t.bands}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioBands.map((b) => (
            <BandCard key={b.badge} band={b} lang={lang} />
          ))}
        </div>
      </section>

      {/* Sticky mini player */}
      {currentTrack ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#C9A84C]/30 bg-[#0e0d0b]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-2.5">
            <button
              type="button"
              onClick={() => toggle(currentTrack)}
              aria-label={currentTrack.title}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                color: "#141414",
              }}
            >
              {playing ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="truncate text-sm text-white/85">
                  {currentTrack.title}
                </span>
                {(lang === "pl" ? currentTrack.captionPl : currentTrack.captionEn) ? (
                  <span className="hidden truncate text-xs text-white/40 sm:inline">
                    {lang === "pl" ? currentTrack.captionPl : currentTrack.captionEn}
                  </span>
                ) : null}
              </div>
              <div
                className="mt-1 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/[0.07]"
                onClick={(e) => seek(currentTrack, e)}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #C9A84C, #e8c97a)",
                  }}
                />
              </div>
            </div>
            <span className="shrink-0 text-xs tabular-nums text-white/40">
              {currentTrack.duration}
            </span>
            <button
              type="button"
              onClick={stop}
              aria-label={t.stop}
              title={t.stop}
              className="shrink-0 text-white/40 transition hover:text-white/75"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
