"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import WaveSurfer from "wavesurfer.js";

export default function BeforeAfterCard({title, before, after}) {
    const [mode, setMode] = useState("before");
    const [isPlaying, setIsPlaying] = useState(false);
    
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
            waveColor: "rgba(255,255,255,0.2)",
            progressColor: "#C9A84C",
            height: 60,
            barWidth: 2,
            barGap: 2,
        });

        afterWS.current = WaveSurfer.create({
            container: afterRef.current,
            waveColor: "rgba(255,255,255,0.2)",
            progressColor: "#C9A84C",
            height: 60,
            barWidth: 2,
            barGap: 2,
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

    const getActive = () => {
        return mode === "before" ? beforeWS.current : afterWS.current;
    };

    const togglePlay = () => {
        const active = getActive();
        const inactive = mode === "before" ? afterWS.current : beforeWS.current;
        inactive.pause();
        active.playPause();
        setIsPlaying(active.isPlaying());
    };

    return (
        <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold2/10 flex items-center justify-center flex-shrink-0">
                    <Play size={14} className="text-gold2" />
                </div>
                <div>
                    <h3 className="font-semibold text-sm">{title}</h3>
                    <span className="text-white/40 text-xs">Before / After</span>
                </div>
            </div>

            <div className="relative">
                <div ref={beforeRef} className={mode === "before" ? "block" : "hidden"} />
                <div ref={afterRef} className={mode === "after" ? "block" : "hidden"} />
            </div>

            <div className="flex items-center justify-between">
                <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                >
                    {isPlaying ? <Pause size={18}/> : <Play size={18}/>}
                </button>

                <div className="flex bg-white/5 rounded-full p-1 text-xs">
                    <button
                        onClick={() => !isPlaying && setMode("before")}
                        disabled={isPlaying}
                        className={`px-3 py-1 rounded-full transition 
                            ${mode === "before" ? "bg-white/10 text-white" : "text-white/60"} 
                            ${isPlaying ? "opacity-75 cursor-not-allowed" : ""}`}
                    >
                        Before
                    </button>
                    <button
                        onClick={() => !isPlaying && setMode("after")}
                        disabled={isPlaying}
                        className={`px-3 py-1 rounded-full transition 
                            ${mode === "after" ? "bg-white/10 text-white" : "text-white/60"} 
                            ${isPlaying ? "opacity-75 cursor-not-allowed" : ""}`}
                    >
                        After
                    </button>
                </div>
            </div>
        </div>
    );
}
