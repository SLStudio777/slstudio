"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, Download, ChevronDown, SkipForward, Shuffle, Link2, X } from "lucide-react";
import { portfolioSections, portfolioBands } from "@/data/portfolioTracks";
import ScrollReveal from "../../common/ScrollReveal";

const LABELS = {
  en: {
    tracks: "tracks",
    bands: "Bands I've played with",
    download: "Download",
    showAll: "Show all",
    showLess: "Show less",
    myOwn: "My own songs",
    stop: "Stop",
    autoplay: "Autoplay",
    playAll: "Play all",
    random: "Random track",
    copyLink: "Copy link",
    copied: "Copied!",
  },
  pl: {
    tracks: "utwor\u00f3w",
    bands: "Zespo\u0142y, z kt\u00f3rymi gra\u0142em",
    download: "Pobierz",
    showAll: "Poka\u017c wszystkie",
    showLess: "Zwi\u0144",
    myOwn: "Moje utwory",
    stop: "Stop",
    autoplay: "Autoodtwarzanie",
    playAll: "Odtwarzaj wszystko",
    random: "Losowy utw\u00f3r",
    copyLink: "Kopiuj link",
    copied: "Skopiowano!",
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
        background: "radial-gradient(circle, #e8c97a 0 16%, #191510 20% 44%, #3a3020 46% 50%, #191510 52% 100%)",
        animationDuration: "2.6s",
        animationPlayState: spinning ? "running" : "paused",
      }}
    />
  );
}

function EqBars({ playing }) {
  return (
    <span className="pf-eq inline-flex h-4 shrink-0 items-end gap-[2px]" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="h-full w-[3px] rounded-sm"
          style={{
            background: "linear-gradient(180deg, #e8c97a, #C9A84C)",
            transformOrigin: "bottom",
            animation: `pfEq 0.9s ease-in-out ${i * 0.15}s infinite`,
            animationPlayState: playing ? "running" : "paused",
          }}
        />
      ))}
    </span>
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
    el.style.transform = "perspective(700px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg)";
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
        style={{ background: "radial-gradient(240px circle at var(--px, 50%) var(--py, 50%), rgba(201,168,76,0.10), transparent 70%)" }}
      />
      <div className="relative">
        <div className="mb-2 flex items-center gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/50 text-sm tracking-wider text-[#C9A84C]"
            style={{ fontFamily: "var(--font-playfair)", boxShadow: "inset 0 0 12px rgba(201,168,76,0.15)" }}
          >
            {band.badge}
          </span>
          <div>
            <div className="text-sm font-semibold text-white/85">{band.name}</div>
            <div className="text-xs text-white/75">{lang === "pl" ? band.cityPl : band.cityEn}</div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-white/70">{lang === "pl" ? band.textPl : band.textEn}</p>
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
  const [activeGenre, setActiveGenre] = useState(null);
  const [autoNext, setAutoNext] = useState(true);
  const [copiedSlug, setCopiedSlug] = useState(null);

  const allTracks = portfolioSections.flatMap((s) => s.tracks);
  const currentTrack = current ? allTracks.find((tr) => tr.slug === current) || null : null;

  // Scroll-spy for genre chips
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveGenre(e.target.id.replace("pf-", "")); }); },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    portfolioSections.forEach((s) => { const el = document.getElementById(`pf-${s.genre}`); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  // Spacebar = play/pause
  const toggleCurrent = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !current) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  }, [current, playing]);

  useEffect(() => {
    function onKey(e) {
      if (e.code !== "Space") return;
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON" || tag === "A") return;
      if (!current) return;
      e.preventDefault();
      toggleCurrent();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, toggleCurrent]);

  // Deep-link: ?track=slug
  useEffect(() => {
    if (typeof window === "undefined") return;
    const slug = new URLSearchParams(window.location.search).get("track");
    if (!slug) return;
    const track = allTracks.find((tr) => tr.slug === slug);
    if (!track) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.file;
    audio.play();
    setCurrent(track.slug);
    setPlaying(true);
    const el = document.getElementById(`pf-${track.genre || allTracks[0]?.genre}`);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 400);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startTrack(track) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.file;
    audio.play();
    setCurrent(track.slug);
    setPlaying(true);
    setProgress(0);
  }

  function toggle(track) {
    if (current === track.slug) { toggleCurrent(); return; }
    startTrack(track);
  }

  function stop() {
    const audio = audioRef.current;
    if (audio) { audio.pause(); audio.removeAttribute("src"); }
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

  function playAll() {
    if (allTracks.length > 0) startTrack(allTracks[0]);
  }

  function playRandom() {
    const idx = Math.floor(Math.random() * allTracks.length);
    startTrack(allTracks[idx]);
  }

  function copyLink(track) {
    const url = `${window.location.origin}${window.location.pathname}?track=${track.slug}`;
    navigator.clipboard?.writeText(url).then(() => {
      setCopiedSlug(track.slug);
      setTimeout(() => setCopiedSlug(null), 1800);
    });
  }

  return (
    <div className={currentTrack ? "pb-24" : ""}>
      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={(e) => { const a = e.currentTarget; if (a.duration) setProgress((a.currentTime / a.duration) * 100); }}
        onEnded={() => {
          const audio = audioRef.current;
          const i = allTracks.findIndex((tr) => tr.slug === current);
          const next = i >= 0 ? allTracks[i + 1] : null;
          if (audio && next && autoNext) {
            audio.src = next.file; audio.play();
            setCurrent(next.slug); setPlaying(true); setProgress(0);
          } else { setPlaying(false); setProgress(0); }
        }}
      />

      <style>{`
        @keyframes pfEq {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-eq span { animation: none !important; transform: scaleY(0.5); }
        }
      `}</style>

      {/* Play all + Random */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={playAll}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #C9A84C, #e8c97a)", color: "#141414" }}
        >
          <Play size={14} className="ml-0.5" />
          {t.playAll}
        </button>
        <button
          type="button"
          onClick={playRandom}
          className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 px-5 py-2 text-sm text-[#C9A84C] transition hover:bg-[#C9A84C]/10"
        >
          <Shuffle size={14} />
          {t.random}
        </button>
      </div>

      {/* Genre anchor chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {portfolioSections.map((s) => (
          <a
            key={s.genre}
            href={`#pf-${s.genre}`}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition ${
              activeGenre === s.genre
                ? "border-[#C9A84C]/60 bg-[#C9A84C]/10 text-[#C9A84C]"
                : "border-white/10 bg-white/[0.03] text-white/70 hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"
            }`}
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
              rows.push({ type: "sub", key: "sub-" + key + "-" + i, label: track.band ? SUBGROUP_NAMES[track.band] || track.band : t.myOwn });
              prevBand = key;
            }
          }
          rows.push({ type: "track", key: track.slug, track, num: i + 1 });
        });
        return (
          <ScrollReveal key={s.genre}>
          <section id={`pf-${s.genre}`} className="mb-12" style={{ scrollMarginTop: 90 }}>
            <h2 className="mb-4 text-xl md:text-2xl font-semibold tracking-wide" style={{ fontFamily: "var(--font-playfair)" }}>
              {lang === "pl" ? s.labelPl : s.labelEn}{" "}
              <span className="text-sm text-white/65">{s.tracks.length} {t.tracks}</span>
            </h2>
            <div className="space-y-1.5">
              {rows.map((row) =>
                row.type === "sub" ? (
                  <div key={row.key} className="flex items-center gap-3 pt-4 pb-1 first:pt-0">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#C9A84C]/80">{row.label}</span>
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
                    <span className="flex w-6 shrink-0 items-center justify-end text-xs tabular-nums text-white/75">
                      {current === row.track.slug ? <Vinyl spinning={playing} /> : String(row.num).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggle(row.track)}
                      aria-label={row.track.title}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #C9A84C, #e8c97a)", color: "#141414" }}
                    >
                      {current === row.track.slug && playing ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
                    </button>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm text-white/85">{row.track.title}</span>
                        {row.track.band ? (
                          <span className="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/45 px-1 text-xs tracking-wider text-[#C9A84C]">{row.track.band}</span>
                        ) : null}
                        {row.track.cover ? (
                          <span className="shrink-0 rounded-full border border-white/20 px-2 py-0.5 text-xs uppercase tracking-wider text-white/75">cover</span>
                        ) : null}
                      </div>
                      {(lang === "pl" ? row.track.captionPl : row.track.captionEn) ? (
                        <div className="truncate text-xs text-white/75">{lang === "pl" ? row.track.captionPl : row.track.captionEn}</div>
                      ) : null}
                      <div
                        className="mt-1.5 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/[0.07]"
                        onClick={(e) => seek(row.track, e)}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{ width: current === row.track.slug ? `${progress}%` : 0, background: "linear-gradient(90deg, #C9A84C, #e8c97a)" }}
                        />
                      </div>
                    </div>
                    <span className="shrink-0 text-xs tabular-nums text-white/75">{row.track.duration}</span>
                    <button
                      type="button"
                      onClick={() => copyLink(row.track)}
                      title={copiedSlug === row.track.slug ? t.copied : t.copyLink}
                      aria-label={t.copyLink}
                      className="shrink-0 text-white/65 transition hover:text-[#C9A84C] opacity-0 group-hover:opacity-100"
                    >
                      <Link2 size={14} />
                    </button>
                    <a
                      href={row.track.file}
                      download
                      className="shrink-0 text-white/65 transition hover:text-[#C9A84C]"
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
                onClick={() => setExpanded((p) => ({ ...p, [s.genre]: !p[s.genre] }))}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/35 px-4 py-1.5 text-xs text-[#C9A84C] transition hover:bg-[#C9A84C]/10"
              >
                {isExpanded ? t.showLess : t.showAll + " " + s.tracks.length}
                <ChevronDown size={14} className={isExpanded ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
            ) : null}
          </section>
          </ScrollReveal>
        );
      })}

      {/* Bands */}
      <ScrollReveal>
      <section className="mt-16">
        <h2 className="mb-6 text-xl md:text-2xl font-semibold tracking-wide" style={{ fontFamily: "var(--font-playfair)" }}>
          {t.bands}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioBands.map((b) => <BandCard key={b.badge} band={b} lang={lang} />)}
        </div>
      </section>
      </ScrollReveal>

      {/* Sticky mini player */}
      {currentTrack ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#C9A84C]/30 bg-[#0e0d0b]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-2.5">
            <button
              type="button"
              onClick={() => toggle(currentTrack)}
              aria-label={currentTrack.title}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #C9A84C, #e8c97a)", color: "#141414" }}
            >
              {playing ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
            </button>
            <EqBars playing={playing} />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="truncate text-sm text-white/85">{currentTrack.title}</span>
                {(lang === "pl" ? currentTrack.captionPl : currentTrack.captionEn) ? (
                  <span className="hidden truncate text-xs text-white/75 sm:inline">
                    {lang === "pl" ? currentTrack.captionPl : currentTrack.captionEn}
                  </span>
                ) : null}
              </div>
              <div
                className="mt-1 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/[0.07]"
                onClick={(e) => seek(currentTrack, e)}
              >
                <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #C9A84C, #e8c97a)" }} />
              </div>
            </div>
            <span className="shrink-0 text-xs tabular-nums text-white/75">{currentTrack.duration}</span>
            <button
              type="button"
              onClick={() => setAutoNext((v) => !v)}
              aria-pressed={autoNext}
              title={t.autoplay}
              aria-label={t.autoplay}
              className="flex shrink-0 items-center gap-1.5"
            >
              <SkipForward size={13} className={autoNext ? "text-[#C9A84C]" : "text-white/65"} />
              <span className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors ${autoNext ? "bg-[#C9A84C]" : "bg-white/15"}`}>
                <span
                  className={`inline-block h-3 w-3 transform rounded-full bg-[#0e0d0b] transition-transform ${autoNext ? "translate-x-3.5" : "translate-x-0.5"}`}
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.25)" }}
                />
              </span>
            </button>
            <button
              type="button"
              onClick={stop}
              aria-label={t.stop}
              title={t.stop}
              className="shrink-0 text-white/65 transition hover:text-white/75"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
