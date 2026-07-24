"use client";
import Image from "next/image";
import ScrollReveal from "../common/ScrollReveal";

// Names/photos stay; heading + quote text + role come from labels (English
// default) so the section can be reused on the Polish home via a labels prop.
const TESTI_META = [
    { name: "Andrii Holikov", photo: "/images/review-andrei3.webp" },
    { name: "Oleg Volos", photo: "/images/review-oleg.webp" },
    { name: "Olga Lalum", photo: "/images/review-olga.webp" },
];

const DEFAULTS = {
    eyebrow: "Client Reviews",
    heading: "What Artists Say",
    factLabels: { before: "Before", after: "After" },
    items: [
        {
            role: "Guitarist & Musician",
            genre: "Metal / Rock",
            before: "Band tracks from a budget studio — good takes, but the sound lacked glue and didn't hit like the live rehearsals.",
            after: "Tight and powerful, every instrument in its place. Six months on, every new song goes straight here.",
            text: "Total bomb. Keep this one, don't change a thing. I keep hitting replay. Maestro, bravo."
        },
        {
            role: "Singer & Songwriter",
            genre: "Acoustic ballad",
            before: "A home recording of a song for a son's 30th birthday — flat, muffled vocal, guitar burying the lyrics.",
            after: "Every word clear, warm live guitar — a real song, like on the radio, not a home demo.",
            text: "Sitting alone in front of the speakers, celebrating my son's 30th birthday — listening to what we made together. Feelings just hit me. No words. Thank you."
        },
        {
            role: "Vocalist & Composer",
            genre: "Pop ballad",
            before: "A self-written love song — harsh, piercing high notes and a narrow, boxed-in sound.",
            after: "Soft, airy, spacious vocal — the high notes soar instead of cutting.",
            text: "Beautiful music — it just gives you wings. ❤️❤️❤️❤️❤️❤️❤️"
        },
    ],
};

export default function Testimonials({ labels }) {
    const L = {
        ...DEFAULTS,
        ...labels,
        factLabels: { ...DEFAULTS.factLabels, ...(labels?.factLabels || {}) },
    };
    const testimonials = TESTI_META.map((m, i) => ({ ...m, ...L.items[i] }));
    return (
        <section className="py-12 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
                    {L.eyebrow}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                    {L.heading}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <ScrollReveal key={i} delay={i * 120}>
                        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex flex-col gap-6 overflow-hidden h-full" style={{borderLeft: "3px solid #C9A84C"}}>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, j) => (
                                        <span key={j} style={{color: "#C9A84C"}} className="text-sm">★</span>
                                    ))}
                                </div>
                                {t.genre && (
                                    <span className="text-xs px-3 py-1 rounded-full flex-shrink-0"
                                          style={{
                                              color: "#C9A84C",
                                              background: "rgba(201,168,76,0.1)",
                                              border: "1px solid rgba(201,168,76,0.25)",
                                          }}>
                                        {t.genre}
                                    </span>
                                )}
                            </div>
                            {(t.before || t.after) && (
                                <div className="flex flex-col gap-2.5 text-sm">
                                    {t.before && (
                                        <div className="flex gap-3">
                                            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold w-12 flex-shrink-0 pt-0.5"
                                                  style={{ color: "rgba(201,168,76,0.7)" }}>
                                                {L.factLabels.before}
                                            </span>
                                            <span className="text-white/55 leading-relaxed">{t.before}</span>
                                        </div>
                                    )}
                                    {t.after && (
                                        <div className="flex gap-3">
                                            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold w-12 flex-shrink-0 pt-0.5"
                                                  style={{ color: "#C9A84C" }}>
                                                {L.factLabels.after}
                                            </span>
                                            <span className="text-white/70 leading-relaxed">{t.after}</span>
                                        </div>
                                    )}
                                </div>
                            )}
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
                                    <p className="text-white/55 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
