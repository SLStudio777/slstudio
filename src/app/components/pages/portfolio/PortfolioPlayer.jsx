"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Play,
  Pause,
  Download,
  ChevronDown,
  SkipForward,
  Shuffle,
  Link2,
  X,
} from "lucide-react";
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
    seek: "Seek",
    byGenre: "By genre",
    byArtist: "By artist",
    chooseGenre: "Choose a genre to open its tracks",
    chooseArtist: "Choose an artist to see tracks from every genre",
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
    seek: "Przewiń",
    byGenre: "Według gatunku",
    byArtist: "Według wykonawcy",
    chooseGenre: "Wybierz gatunek, aby rozwinąć utwory",
    chooseArtist: "Wybierz wykonawcę, aby zobaczyć utwory ze wszystkich gatunków",
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

function EqBars({ playing }) {
  return (
    <span
      className="pf-eq inline-flex h-4 shrink-0 items-end gap-[2px]"
      aria-hidden
    >
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
    const rx = (y / r.height - 0.5) * -3.5;
    const ry = (x / r.width - 0.5) * 3.5;
    el.style.transform =
      "perspective(800px) rotateX(" +
      rx.toFixed(2) +
      "deg) rotateY(" +
      ry.toFixed(2) +
      "deg)";
    el.style.setProperty("--px", x + "px");
    el.style.setProperty("--py", y + "px");
  }

  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  const logoBackground =
    band.logoVariant === "light"
      ? "#ddd8cc"
      : band.logoVariant === "color"
        ? "#4e3d4c"
        : "#050507";
  const needsEdgeBlend = ["TM", "ID", "RS"].includes(band.badge);

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-2xl border border-[#C9A84C]/20 bg-[#15120e] p-3 transition-transform duration-200 will-change-transform"
      style={{
        boxShadow:
          "0 22px 45px -30px rgba(0,0,0,0.95), inset 0 1px rgba(255,230,180,0.04)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--px, 50%) var(--py, 50%), rgba(201,168,76,0.12), transparent 72%)",
        }}
      />

      <div className="relative">
        <div
          className="relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-white/10"
          style={{
            background: logoBackground,
            boxShadow:
              "inset 0 0 22px rgba(0,0,0,0.22), 0 10px 22px -16px rgba(0,0,0,0.95)",
          }}
        >
          {band.logo && needsEdgeBlend ? (
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${band.logo})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                filter:
                  band.logoVariant === "light"
                    ? "blur(12px) saturate(0.72)"
                    : "blur(10px) saturate(0.9)",
                opacity: band.logoVariant === "light" ? 0.92 : 0.84,
                transform: "scale(1.16)",
              }}
            />
          ) : null}
          {band.logo && needsEdgeBlend ? (
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"
            />
          ) : null}
          {band.logo ? (
            <img
              src={band.logo}
              alt={`${band.name} logo`}
              loading="lazy"
              className="relative z-[1] h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
              style={
                needsEdgeBlend
                  ? {
                      WebkitMaskImage:
                        "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)",
                      maskImage:
                        "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)",
                    }
                  : undefined
              }
            />
          ) : (
            <span
              className="text-2xl tracking-[0.18em] text-[#C9A84C]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {band.badge}
            </span>
          )}
          <span className="absolute left-3 top-3 z-[2] rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-xs tracking-[0.14em] text-white/75 backdrop-blur-sm">
            ARCHIVE · {band.badge}
          </span>
        </div>

        <div className="px-2 pb-2 pt-4">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h3
                className="text-lg font-semibold text-white/90"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {band.name}
              </h3>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-[#C9A84C]/80">
                {lang === "pl" ? band.cityPl : band.cityEn}
              </div>
            </div>
            <span className="rounded-full border border-[#C9A84C]/30 px-2.5 py-1 text-xs tracking-wider text-[#C9A84C]">
              {band.badge}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-white/70">
            {lang === "pl" ? band.textPl : band.textEn}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPlayer({ lang = "en" }) {
  const t = LABELS[lang] ?? LABELS.en;
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [browseMode, setBrowseMode] = useState("genres");
  const [openCollection, setOpenCollection] = useState(null);
  const [autoNext, setAutoNext] = useState(true);
  const [copiedSlug, setCopiedSlug] = useState(null);

  const allTracks = portfolioSections.flatMap((s) => s.tracks);
  const currentTrack = current
    ? allTracks.find((tr) => tr.slug === current) || null
    : null;

  const artistGroups = [];
  const artistsByKey = new Map();
  portfolioSections.forEach((section) => {
    const genreLabel = lang === "pl" ? section.labelPl : section.labelEn;
    section.tracks.forEach((track) => {
      const caption = lang === "pl" ? track.captionPl : track.captionEn;
      const captionArtist = (caption || "").split("—")[0].trim();
      const artistName = track.band
        ? SUBGROUP_NAMES[track.band] || track.band
        : captionArtist || t.myOwn;
      const artistKey = track.band ? `band-${track.band}` : `artist-${artistName}`;
      let group = artistsByKey.get(artistKey);
      if (!group) {
        group = { key: artistKey, name: artistName, tracks: [], genres: [] };
        artistsByKey.set(artistKey, group);
        artistGroups.push(group);
      }
      group.tracks.push({ track, genreLabel });
      if (!group.genres.includes(genreLabel)) group.genres.push(genreLabel);
    });
  });

  // Spacebar = play/pause
  const toggleCurrent = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !current) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }, [current, playing]);

  useEffect(() => {
    function onKey(e) {
      if (e.code !== "Space") return;
      const tag = document.activeElement?.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "BUTTON" ||
        tag === "A"
      )
        return;
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
    const section = portfolioSections.find((item) =>
      item.tracks.some((candidate) => candidate.slug === track.slug),
    );
    if (section) {
      setBrowseMode("genres");
      setOpenCollection(`genre:${section.genre}`);
      setTimeout(() => {
        document
          .getElementById(`pf-${section.genre}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
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
    if (current === track.slug) {
      toggleCurrent();
      return;
    }
    startTrack(track);
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
    const ratio = Math.min(
      Math.max((e.clientX - rect.left) / rect.width, 0),
      1,
    );
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio * 100);
  }

  function seekKey(e) {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    let ratio = null;
    if (e.key === "ArrowRight" || e.key === "ArrowUp")
      ratio = (progress + 5) / 100;
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown")
      ratio = (progress - 5) / 100;
    else if (e.key === "Home") ratio = 0;
    else if (e.key === "End") ratio = 0.99;
    if (ratio === null) return;
    e.preventDefault();
    const clamped = Math.min(Math.max(ratio, 0), 1);
    audio.currentTime = clamped * audio.duration;
    setProgress(clamped * 100);
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

  function renderTrackRow(track, num, genreLabel = null) {
    const caption = lang === "pl" ? track.captionPl : track.captionEn;
    return (
      <div
        key={track.slug}
        className={`group flex items-center gap-3 rounded-xl border px-3 py-2 transition ${
          current === track.slug
            ? "border-[#C9A84C]/40 bg-[#C9A84C]/[0.06]"
            : "border-white/[0.06] bg-white/[0.02] hover:border-[#C9A84C]/25 hover:bg-white/[0.04]"
        }`}
      >
        <span className="flex w-6 shrink-0 items-center justify-end text-xs tabular-nums text-white/75">
          {current === track.slug ? (
            <Vinyl spinning={playing} />
          ) : (
            String(num).padStart(2, "0")
          )}
        </span>
        <button
          type="button"
          onClick={() => toggle(track)}
          aria-label={track.title}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
            color: "#141414",
          }}
        >
          {current === track.slug && playing ? (
            <Pause size={15} />
          ) : (
            <Play size={15} className="ml-0.5" />
          )}
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="min-w-0 truncate text-sm text-white/85">
              {track.title}
            </span>
            {genreLabel ? (
              <span className="shrink-0 rounded-full border border-[#C9A84C]/35 px-2 py-0.5 text-xs uppercase tracking-wider text-[#C9A84C]">
                {genreLabel}
              </span>
            ) : null}
            {track.band ? (
              <span className="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/45 px-1 text-xs tracking-wider text-[#C9A84C]">
                {track.band}
              </span>
            ) : null}
            {track.cover ? (
              <span className="shrink-0 rounded-full border border-white/20 px-2 py-0.5 text-xs uppercase tracking-wider text-white/75">
                cover
              </span>
            ) : null}
          </div>
          {caption ? (
            <div className="truncate text-xs text-white/75">{caption}</div>
          ) : null}
          <div
            role={current === track.slug ? "slider" : undefined}
            aria-label={current === track.slug ? t.seek : undefined}
            aria-valuemin={current === track.slug ? 0 : undefined}
            aria-valuemax={current === track.slug ? 100 : undefined}
            aria-valuenow={
              current === track.slug ? Math.round(progress) : undefined
            }
            aria-hidden={current === track.slug ? undefined : true}
            tabIndex={current === track.slug ? 0 : undefined}
            onKeyDown={current === track.slug ? seekKey : undefined}
            className="mt-1.5 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/[0.07]"
            onClick={(e) => seek(track, e)}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: current === track.slug ? `${progress}%` : 0,
                background: "linear-gradient(90deg, #C9A84C, #e8c97a)",
              }}
            />
          </div>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-white/75">
          {track.duration}
        </span>
        <button
          type="button"
          onClick={() => copyLink(track)}
          title={copiedSlug === track.slug ? t.copied : t.copyLink}
          aria-label={t.copyLink}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/65 opacity-0 transition hover:text-[#C9A84C] group-hover:opacity-100 focus:opacity-100"
        >
          <Link2 size={14} />
        </button>
        <a
          href={track.file}
          download
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/65 transition hover:text-[#C9A84C]"
          aria-label={t.download}
          title={t.download}
        >
          <Download size={16} />
        </a>
      </div>
    );
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
          const audio = audioRef.current;
          const i = allTracks.findIndex((tr) => tr.slug === current);
          const next = i >= 0 ? allTracks[i + 1] : null;
          if (audio && next && autoNext) {
            audio.src = next.file;
            audio.play();
            setCurrent(next.slug);
            setPlaying(true);
            setProgress(0);
          } else {
            setPlaying(false);
            setProgress(0);
          }
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
          style={{
            background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
            color: "#141414",
          }}
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

      {/* Compact catalogue: one open drawer at a time */}
      <ScrollReveal>
        <section className="mb-14">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div
              className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.03] p-1"
              role="tablist"
              aria-label="Portfolio catalogue mode"
            >
              <button
                type="button"
                role="tab"
                aria-selected={browseMode === "genres"}
                onClick={() => {
                  setBrowseMode("genres");
                  setOpenCollection(null);
                }}
                className={`min-h-10 rounded-full px-5 py-2 text-sm transition ${
                  browseMode === "genres"
                    ? "bg-[#C9A84C] text-[#15120e]"
                    : "text-white/70 hover:text-[#C9A84C]"
                }`}
              >
                {t.byGenre}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={browseMode === "artists"}
                onClick={() => {
                  setBrowseMode("artists");
                  setOpenCollection(null);
                }}
                className={`min-h-10 rounded-full px-5 py-2 text-sm transition ${
                  browseMode === "artists"
                    ? "bg-[#C9A84C] text-[#15120e]"
                    : "text-white/70 hover:text-[#C9A84C]"
                }`}
              >
                {t.byArtist}
              </button>
            </div>
            <p className="m-0 text-sm text-white/65">
              {browseMode === "genres" ? t.chooseGenre : t.chooseArtist}
            </p>
          </div>

          <div className="space-y-3">
            {browseMode === "genres"
              ? portfolioSections.map((section) => {
                  const key = `genre:${section.genre}`;
                  const isOpen = openCollection === key;
                  const rows = [];
                  let prevBand = null;
                  section.tracks.forEach((track, i) => {
                    if (section.genre === "rock") {
                      const bandKey = track.band || "own";
                      if (bandKey !== prevBand) {
                        rows.push({
                          type: "sub",
                          key: `sub-${bandKey}-${i}`,
                          label: track.band
                            ? SUBGROUP_NAMES[track.band] || track.band
                            : t.myOwn,
                        });
                        prevBand = bandKey;
                      }
                    }
                    rows.push({ type: "track", key: track.slug, track, num: i + 1 });
                  });

                  return (
                    <section
                      id={`pf-${section.genre}`}
                      key={section.genre}
                      className={`overflow-hidden rounded-2xl border transition ${
                        isOpen
                          ? "border-[#C9A84C]/35 bg-[#C9A84C]/[0.035]"
                          : "border-white/[0.07] bg-white/[0.02] hover:border-[#C9A84C]/20"
                      }`}
                      style={{ scrollMarginTop: 90 }}
                    >
                      <button
                        type="button"
                        className="flex min-h-16 w-full items-center gap-4 px-5 py-4 text-left"
                        onClick={() => setOpenCollection(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        aria-controls={`panel-${section.genre}`}
                      >
                        <span
                          className="min-w-0 flex-1 text-xl font-semibold tracking-wide text-white/90 md:text-2xl"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {lang === "pl" ? section.labelPl : section.labelEn}
                        </span>
                        <span className="text-sm text-white/65">
                          {section.tracks.length} {t.tracks}
                        </span>
                        <ChevronDown
                          size={19}
                          className={`shrink-0 text-[#C9A84C] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        id={`panel-${section.genre}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-1.5 border-t border-white/[0.06] p-3 sm:p-4">
                            {rows.map((row) =>
                              row.type === "sub" ? (
                                <div
                                  key={row.key}
                                  className="flex items-center gap-3 pb-1 pt-4 first:pt-0"
                                >
                                  <span className="text-xs uppercase tracking-[0.18em] text-[#C9A84C]/80">
                                    {row.label}
                                  </span>
                                  <span className="h-px flex-1 bg-gradient-to-r from-[#C9A84C]/25 to-transparent" />
                                </div>
                              ) : (
                                renderTrackRow(row.track, row.num)
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                })
              : artistGroups.map((artist) => {
                  const key = `artist:${artist.key}`;
                  const isOpen = openCollection === key;
                  return (
                    <section
                      key={artist.key}
                      className={`overflow-hidden rounded-2xl border transition ${
                        isOpen
                          ? "border-[#C9A84C]/35 bg-[#C9A84C]/[0.035]"
                          : "border-white/[0.07] bg-white/[0.02] hover:border-[#C9A84C]/20"
                      }`}
                    >
                      <button
                        type="button"
                        className="flex min-h-16 w-full items-center gap-4 px-5 py-4 text-left"
                        onClick={() => setOpenCollection(isOpen ? null : key)}
                        aria-expanded={isOpen}
                      >
                        <span
                          className="min-w-0 flex-1 text-xl font-semibold tracking-wide text-white/90 md:text-2xl"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {artist.name}
                        </span>
                        <span className="hidden text-xs uppercase tracking-[0.12em] text-white/65 sm:block">
                          {artist.genres.join(" · ")}
                        </span>
                        <span className="text-sm text-white/65">
                          {artist.tracks.length} {t.tracks}
                        </span>
                        <ChevronDown
                          size={19}
                          className={`shrink-0 text-[#C9A84C] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-1.5 border-t border-white/[0.06] p-3 sm:p-4">
                            {artist.tracks.map((item, index) =>
                              renderTrackRow(item.track, index + 1, item.genreLabel),
                            )}
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                })}
          </div>
        </section>
      </ScrollReveal>

      {/* Bands */}
      <ScrollReveal>
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
              style={{
                background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                color: "#141414",
              }}
            >
              {playing ? (
                <Pause size={13} />
              ) : (
                <Play size={13} className="ml-0.5" />
              )}
            </button>
            <EqBars playing={playing} />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="truncate text-sm text-white/85">
                  {currentTrack.title}
                </span>
                {(
                  lang === "pl"
                    ? currentTrack.captionPl
                    : currentTrack.captionEn
                ) ? (
                  <span className="hidden truncate text-xs text-white/75 sm:inline">
                    {lang === "pl"
                      ? currentTrack.captionPl
                      : currentTrack.captionEn}
                  </span>
                ) : null}
              </div>
              <div
                role="slider"
                aria-label={t.seek}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                tabIndex={0}
                onKeyDown={seekKey}
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
            <span className="shrink-0 text-xs tabular-nums text-white/75">
              {currentTrack.duration}
            </span>
            <button
              type="button"
              onClick={() => setAutoNext((v) => !v)}
              aria-pressed={autoNext}
              title={t.autoplay}
              aria-label={t.autoplay}
              className="flex shrink-0 items-center gap-1.5"
            >
              <SkipForward
                size={13}
                className={autoNext ? "text-[#C9A84C]" : "text-white/65"}
              />
              <span
                className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors ${autoNext ? "bg-[#C9A84C]" : "bg-white/15"}`}
              >
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
