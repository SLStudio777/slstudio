"use client";
import { ChevronRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        q: "I only have an idea recorded on my phone. Is that enough?",
        a: "More than enough. A voice message, a hummed melody, a guitar riff recorded at 2am — all of it is a starting point. Some of the best tracks started exactly like that."
    },
    {
        q: "Do you use live instruments or samples?",
        a: "Both — it depends on the project. Guitars and some parts I record live myself. Where orchestral, brass, or exotic instruments are needed, I use professional sampled libraries and modern technology. Either way, the result sounds organic."
    },
    {
        q: "My band recorded an idea at rehearsal. Can you turn it into a proper track?",
        a: "That's exactly what I'm here for. A rehearsal recording has a live energy that's very hard to recreate in a studio later. I take that energy and wrap it in professional sound."
    },
    {
        q: "I want a simple guitar recording to sound like a full orchestra. Is that possible?",
        a: "Absolutely. That's called arrangement — and it's one of the most exciting parts of my work. You bring the melody or chords, we discuss the mood and scale you want, and I build a complete musical picture around it."
    },
    {
        q: "Can I choose which instruments go into the track?",
        a: "Of course. It's your music. We discuss everything before I start — genre, instruments, mood, references. I bring ideas but the final decision is always yours."
    },
    {
        q: "What if I don't like the direction you take?",
        // Updated: added the word "free" so this matches the explicit offer
        // now stated on the homepage Hero and "How It Works" section — the
        // underlying process here was already the same, just wasn't
        // labeled "free" before.
        a: (
            <>
                That&apos;s exactly why I always send a{" "}
                <Link href="/free-track-preview" className="text-gold underline hover:text-gold2 transition">
                    free demo version
                </Link>{" "}
                first for your approval. You hear the direction before we go any further. No
                surprises at the end.
            </>
        )
    },
    {
        q: "How much does it cost and how does payment work?",
        a: "Every project is individual — it depends on the scope of work. Write to me, describe what you have and what you want, and I'll give you a specific price. First consultation is always free."
    },
];

export default function Section2() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="mt-10 flex flex-col gap-16">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <HelpCircle className="text-gold2 w-6 h-6" />
                    <div className="flex flex-col">
                        <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                            FAQ
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                            Frequently Asked Questions
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col divide-y divide-white/5 max-w-3xl">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="py-5 flex flex-col gap-2 cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <div className="flex items-start gap-3">
                                <ChevronRight
                                    className={`w-4 h-4 mt-1 flex-shrink-0 text-gold2 transition-transform duration-200 ${openIndex === i ? "rotate-90" : ""}`}
                                />
                                <p className="text-white/90 font-medium text-base leading-snug">
                                    {item.q}
                                </p>
                            </div>
                            {openIndex === i && (
                                <p className="text-white/60 text-[15px] leading-relaxed pl-7">
                                    {item.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
