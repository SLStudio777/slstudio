"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Loader2 } from "lucide-react";
import WaveSurfer from "wavesurfer.js";

const STOP_EVENT = "slstudio:stop-all";

// Deterministic decorative bars shown before the real waveform is loaded —
// audio files are only fetched on the first Play click (they are multi-MB).
const PLACEHOLDER_BARS = Array.from({ length: 64 }, (_, i) => {
    const h = 12 + Math.abs(Math.sin(i * 0.55) * 34) + ((i * 13) % 9);
    return Math.round(h);
});

export default function BeforeAfterCard({title, before, after}) {
    const [mode, setMode] = useState("before");
    const [isPlaying, setIsPlaying] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [ready, setReady] = useState(false);
    const [audioLoading, setAudioLoading] = useState(false);
    const cardId = useRef(Math.random().toString(36).slice(2));
    const initialized = useRef(false);

    const beforeRef = useRef(null);
    const afterRef = useRef(null);
    const beforeWS = useRef(null);
    const afterWS = useRef(null);

    const sources = {
        before: `/sound/demo/before-after/${before}`,
        after: `/sound/demo/before-after/${after}`,
    };

    const createInstances = () => {
        if (initialized.current) return;
        initialized.current = true;

        const opts = {
            waveColor: "rgba(255,255,255,0.15)",
            progressColor: "#C9A84C",
            height: 60,
            barWidth: 2,
            barGap: 2,
            barRadius: 2,
        };
        beforeWS.current = WaveSurfer.create({ ...opts, container: beforeRef.current });
        afterWS.current = WaveSurfer.create({ ...opts, container: afterRef.current });

        beforeWS.current.on("finish", () => setIsPlaying(false));
        afterWS.current.on("finish", () => setIsPlaying(false));

        beforeWS.current.load(sources.before);
        afterWS.current.load(sources.after);
        setReady(true);
    };

    useEffect(() => {
        // Слушаем событие остановки от других карточек
        const handleStopAll = (e) => {
            if (e.detail.id !== cardId.current) {
                beforeWS.current?.pause();
                afterWS.current?.pause();
                setIsPlaying(false);
            }
        };
        window.addEventListener(STOP_EVENT, handleStopAll);

        return () => {
            window.removeEventListener(STOP_EVENT, handleStopAll);
            setTimeout(() => {
                beforeWS.current?.destroy();
                afterWS.current?.destroy();
            }, 0);
        };
    }, []);

    const getActive = () => mode === "before" ? beforeWS.current : afterWS.current;

    const togglePlay = () => {
        // Первый клик: создаём инстансы, грузим аудио и играем когда готово
        if (!initialized.current) {
            setAudioLoading(true);
            createInstances();
            const active = getActive();
            active.once("ready", () => {
                setAudioLoading(false);
                window.dispatchEvent(new CustomEvent(STOP_EVENT, { detail: { id: cardId.current } }));
                active.play();
                setIsPlaying(true);
            });
            return;
        }

        const active = getActive();
        const inactive = mode === "before" ? afterWS.current : beforeWS.current;

        if (!active.isPlaying()) {
            // Останавливаем все остальные карточки
            window.dispatchEvent(new CustomEvent(STOP_EVENT, { detail: { id: cardId.current } }));
        }

        inactive.pause();
        active.playPause();
        setIsPlaying(active.isPlaying());
    };

    const switchMode = (newMode) => {
        if (newMode === mode) return;
        if (!initialized.current) {
            setMode(newMode);
            return;
        }
        const current = mode === "before" ? beforeWS.current : afterWS.current;
        const next = newMode === "before" ? beforeWS.current : afterWS.current;
        const currentTime = current.getCurrentTime();
        const duration = next.getDuration();
        current.pause();
        if (duration > 0) {
            next.seekTo(Math.min(currentTime / duration, 1));
        }
        if (isPlaying) next.play();
        setMode(newMode);
    };

    return (
        <div
            className="rounded-xl border border-white/10 bg-white/5 overflow-hidden flex flex-col"
            style={{
                borderLeft: "3px solid #C9A84C",
                transition: "box-shadow 0.3s ease",
                boxShadow: hovered ? "0 0 0 1px rgba(201,168,76,0.15), 0 4px 24px rgba(201,168,76,0.07)" : "none"
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <style>{`
                @keyframes ring-pulse {
                    0%   { transform: scale(1);   opacity: 0.6; }
                    100% { transform: scale(1.9); opacity: 0; }
                }
                .play-ring {
                    animation: ring-pulse 1.2s ease-out infinite;
                }
                .mode-btn {
                    transition: transform 0.15s ease, background-color 0.15s ease;
                }
                .mode-btn:hover {
                    transform: scale(1.05);
                }
                .mode-btn:active {
                    transform: scale(0.96);
                }
                .play-btn {
                    transition: transform 0.15s ease, background-color 0.2s ease, box-shadow 0.2s ease;
                }
                .play-btn:hover {
                    transform: scale(1.08);
                    box-shadow: 0 0 12px rgba(201,168,76,0.3);
                }
                .play-btn:active {
                    transform: scale(0.94);
                }
            `}</style>

            {/* Header */}
            <div className="px-5 pt-5 pb-3 flex items-start justify-between">
                <div>
                    <h3 className="font-semibold text-base text-white">{title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-white/30 text-xs uppercase tracking-widest">
                            {mode === "before" ? "Raw Recording" : "Final Mix"}
                        </span>
                        {isPlaying && (
                            <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold2 animate-pulse"></span>
                                <span className="text-gold2 text-xs">Live</span>
                            </span>
                        )}
                    </div>
                </div>

                {/* Before / After toggle */}
                <div className="flex bg-white/5 rounded-lg p-1 text-xs border border-white/5">
                    <button
                        onClick={() => switchMode("before")}
                        className={`mode-btn px-3 py-1 rounded-md font-medium cursor-pointer
                            ${mode === "before" ? "text-black" : "text-white/55"}`}
                        style={mode === "before"
                            ? { backgroundColor: "#C9A84C", boxShadow: "0 0 8px rgba(201,168,76,0.4)" }
                            : {}}
                    >
                        Before
                    </button>
                    <button
                        onClick={() => switchMode("after")}
                        className={`mode-btn px-3 py-1 rounded-md font-medium cursor-pointer
                            ${mode === "after" ? "text-black" : "text-white/55"}`}
                        style={mode === "after"
                            ? { backgroundColor: "#C9A84C", boxShadow: "0 0 8px rgba(201,168,76,0.4)" }
                            : {}}
                    >
                        After
                    </button>
                </div>
            </div>

            {/* Waveform */}
            <div className="px-5 py-2">
                {!ready && (
                    <div className="flex items-end gap-[2px]" style={{ height: 60 }} aria-hidden="true">
                        {PLACEHOLDER_BARS.map((h, i) => (
                            <span key={i} className="flex-1 rounded-[2px]"
                                  style={{ height: `${h}px`, background: "rgba(255,255,255,0.12)" }} />
                        ))}
                    </div>
                )}
                <div ref={beforeRef} className={ready && mode === "before" ? "block" : "hidden"} />
                <div ref={afterRef} className={ready && mode === "after" ? "block" : "hidden"} />
            </div>

            {/* Controls */}
            <div className="px-5 pb-5 pt-2 flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                    {isPlaying && (
                        <div
                            className="play-ring absolute rounded-full"
                            style={{
                                width: 40,
                                height: 40,
                                border: "1.5px solid rgba(201,168,76,0.6)",
                                pointerEvents: "none",
                            }}
                        />
                    )}
                    <button
                        onClick={togglePlay}
                        disabled={audioLoading}
                        aria-label={isPlaying ? "Pause" : "Play"}
                        className="play-btn w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                            backgroundColor: isPlaying ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(201,168,76,0.3)",
                            opacity: audioLoading ? 0.7 : 1,
                        }}
                    >
                        {audioLoading
                            ? <Loader2 size={16} className="animate-spin" style={{color: "#C9A84C"}} />
                            : isPlaying
                                ? <Pause size={16} style={{color: "#C9A84C"}} />
                                : <Play  size={16} style={{color: "#C9A84C"}} />
                        }
                    </button>
                </div>
                <span className="text-white/25 text-xs">
                    {audioLoading ? "Loading audio..." : mode === "before" ? "Playing raw" : "Playing final mix"}
                </span>
            </div>
        </div>
    );
}
