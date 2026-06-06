"use client";
import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add("is-visible");
                    }, delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className="animate-on-scroll">
            {children}
        </div>
    );
}
