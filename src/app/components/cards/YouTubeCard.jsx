"use client"
import { useState } from "react"
import { Play } from "lucide-react"

export default function YouTubeCard({ videoId, title }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hovered, setHovered] = useState(false)
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

    return (
        <div
            className="rounded-xl overflow-hidden border transition-all duration-300"
            style={{
                border: hovered ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: hovered ? "0 8px 32px rgba(201,168,76,0.1)" : "none",
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative aspect-video bg-black">
                {!isLoaded ? (
                    <div className="relative w-full h-full cursor-pointer" onClick={() => setIsLoaded(true)}>
                        <img
                            src={thumbnail}
                            alt={title}
                            className="w-full h-full object-cover transition-all duration-300"
                            style={{ opacity: hovered ? 1 : 0.85 }}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0" style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)"
                        }} />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="relative flex items-center justify-center rounded-full transition-all duration-200"
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    background: hovered ? "#C9A84C" : "rgba(0,0,0,0.7)",
                                    border: hovered ? "2px solid #C9A84C" : "2px solid rgba(255,255,255,0.3)",
                                    boxShadow: hovered ? "0 0 20px rgba(201,168,76,0.4)" : "none",
                                    transform: hovered ? "scale(1.1)" : "scale(1)",
                                }}
                            >
                                <Play
                                    size={16}
                                    style={{
                                        color: hovered ? "#000" : "#fff",
                                        marginLeft: "2px",
                                    }}
                                />
                            </div>
                        </div>
                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                            <p className="text-white text-xs font-medium leading-snug line-clamp-2"
                                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                                {title}
                            </p>
                        </div>
                    </div>
                ) : (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={title}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    )
}
