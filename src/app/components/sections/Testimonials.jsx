"use client";
import Image from "next/image";
import ScrollReveal from "../common/ScrollReveal";

const testimonials = [
    {
        name: "Andrii Holikov",
        role: "Guitarist & Musician",
        photo: "/images/review-andrei3.png",
        text: "Total bomb. Keep this one, don't change a thing. I keep hitting replay. Maestro, bravo."
    },
    {
        name: "Oleg Volos",
        role: "Singer & Songwriter",
        photo: "/images/review-luis2.png",
        text: "Sitting alone in front of the speakers, celebrating my son's 30th birthday — listening to what we made together. Feelings just hit me. No words. Thank you."
    },
    {
        name: "Olga Lalum",
        role: "Vocalist & Composer",
        photo: "/images/review-anna2.png",
        text: "Beautiful music — it just gives you wings. ❤️❤️❤️❤️❤️❤️❤️"
    },
];

export default function Testimonials() {
    return (
        <section className="py-12 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                    Client Reviews
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                    What Artists Say
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <ScrollReveal key={i} delay={i * 120}>
                        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex flex-col gap-6 overflow-hidden h-full" style={{borderLeft: "3px solid #C9A84C"}}>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, j) => (
                                    <span key={j} style={{color: "#C9A84C"}} className="text-sm">★</span>
                                ))}
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed flex-1">
                                {`"${t.text}"`}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2"
                                     style={{borderColor: "rgba(201,168,76,0.3)"}}>
                                    <Image
                                        src={t.photo}
                                        alt={t.name}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-white">{t.name}</p>
                                    <p className="text-white/40 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
