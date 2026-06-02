"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import WaveSurfer from "wavesurfer.js";

export default function BeforeAfterCard({title, before, after}) {
    const [mode, setMode] = useState("before");
    const [isPlaying, setIsPlaying] = useState(false);
    const [hovered, setHovered] = useState(false);

    const beforeRef = useRef(null);
    const afterRef = useRef(null);
    const beforeWS = useRef(null);
    const afterWS = useRef(null);

    const sources = {
        before: `/sound/demo/before-after/${before}`,
        after: `/sound/demo/before-after/${after}`,
    };

    useEffect(() => {
        beforeWS.current = WaveSurfer.create({
            container: beforeRef.current,
            waveColor: "rgba(255,255,255,0.15)",
            progressColor: "#C9A84C",
            height: 60,
            barWidth: 2,
            barGap: 2,
            barRadius: 2,
        });

        afterWS.current = WaveSurfer.create({
            container: afterRef.current,
            waveColor: "rgba(255,255,255,0.15)",
            progressColor: "#C9A84C",
            height: 60,
            barWidth: 2,
            barGap: 2,
            barRadius: 2,
        });

        beforeWS.current.load(sources.before);
        afterWS.current.load(sources.after);

        return () => {
            setTimeout(() => {
                beforeWS.current?.destroy();
                afterWS.current?.destroy();
            }, 0);
        };
    }, []);

    const getActive = () => mode === "before" ? beforeWS.current : afterWS.current;

    const togglePlay = () => {
        const active = getActive();
        const inactive = mode === "before" ? afterWS.current : beforeWS.current;
        inactive.pause();
        active.playPause();
        setIsPlaying(active.isPlaying());
    };

    const switchMode = (newMode) => {
        if (isPlaying) return;
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
                .mode-btn:not(:disabled):hover {
                    transform: scale(1.05);
                }
                .mode-btn:not(:disabled):active {
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
                        disabled={isPlaying}
                        className={`mode-btn px-3 py-1 rounded-md font-medium
                            ${mode === "before" ? "text-black" : "text-white/40"}
                            ${isPlaying ? "cursor-not-allowed" : "cursor-pointer"}`}
                        style={mode === "before"
                            ? { backgroundColor: "#C9A84C", boxShadow: "0 0 8px rgba(201,168,76,0.4)" }
                            : {}}
                    >
                        Before
                    </button>
                    <button
                        onClick={() => switchMode("after")}
                        disabled={isPlaying}
                        className={`mode-btn px-3 py-1 rounded-md font-medium
                            ${mode === "after" ? "text-black" : "text-white/40"}
                            ${isPlaying ? "cursor-not-allowed" : "cursor-pointer"}`}
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
                <div ref={beforeRef} className={mode === "before" ? "block" : "hidden"} />
                <div ref={afterRef} className={mode === "after" ? "block" : "hidden"} />
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
                        className="play-btn w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                            backgroundColor: isPlaying ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(201,168,76,0.3)",
                        }}
                    >
                        {isPlaying
                            ? <Pause size={16} style={{color: "#C9A84C"}} />
                            : <Play  size={16} style={{color: "#C9A84C"}} />
                        }
                    </button>
                </div>
                <span className="text-white/25 text-xs">
                    {mode === "before" ? "Playing raw" : "Playing final mix"}
                </span>
            </div>
        </div>
    );
}
