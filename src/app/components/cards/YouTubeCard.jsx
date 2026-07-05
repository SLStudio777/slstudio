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
                border: hovered ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.02)",
                boxShadow: hovered ? "0 8px 32px rgba(201,168,76,0.1)" : "none",
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Header — title lives here, not as a cheap overlay on the thumbnail;
                mirrors BeforeAfterCard's header-then-content structure */}
            <div className="px-4 pt-4 pb-3">
                <p className="text-white text-sm font-medium leading-snug line-clamp-2">
                    {title}
                </p>
            </div>

            <div className="relative aspect-video bg-black mx-4 mb-4 rounded-lg overflow-hidden">
                {!isLoaded ? (
                    <div className="relative w-full h-full cursor-pointer" onClick={() => setIsLoaded(true)}>
                        <img loading="lazy" decoding="async"
                            src={thumbnail}
                            alt={title}
                            className="w-full h-full object-cover transition-all duration-300"
                            style={{ opacity: hovered ? 1 : 0.85 }}
                        />
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
