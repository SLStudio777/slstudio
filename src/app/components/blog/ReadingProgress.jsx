"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
        };
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                zIndex: 50,
                background: "rgba(201,168,76,0.12)",
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #C9A84C, #e8c96a)",
                    transition: "width 0.1s linear",
                    boxShadow: "0 0 6px rgba(201,168,76,0.6)",
                }}
            />
        </div>
    );
}
