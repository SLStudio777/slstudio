"use client"
import { useState } from "react"
import { Play } from "lucide-react"

export default function YouTubeCard({ videoId, title }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    return (
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition">
            {/* Video */}
            <div className="relative aspect-video bg-black">
                {!isLoaded ? (
                <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setIsLoaded(true)}
                >
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover opacity-90"
                    />
                    {/* Play */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:scale-105 transition">
                            <Play className="text-white" size={18} />
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
            {/* Title */}
            <div className="p-3">
                <h3 className="text-sm text-white/80">
                    {title}
                </h3>
            </div>
        </div>
    )
}