"use client";
import { ChevronRight, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "What files do I need to send you?",
        a: "Ideally — separate tracks (stems) for each instrument. But if you only have a rough stereo mix or even a single recording, that works too. Send what you have and we'll figure it out."
    },
    {
        q: "How long does it take?",
        a: "Usually 3–5 business days for a single track. Albums and larger projects are discussed individually."
    },
    {
        q: "How many revisions are included?",
        a: "Up to three rounds of revisions. In practice, one or two is usually enough — we discuss what you want before I start, so I'm already heading in the right direction."
    },
    {
        q: "I have an old studio recording from ten years ago. Can you give it a new sound?",
        a: "Yes — and this is one of the most interesting requests I get. Same song, same vocals, same instruments — but with fresh mixing and modern mastering it sounds completely different. Many artists re-release older material this way."
    },
    {
        q: "Will my track sound good on phone speakers and headphones?",
        a: "I check every track on multiple systems — studio monitors, regular headphones, and a phone speaker. It's only done when it sounds right on all of them."
    },
    {
        q: "What if I don't like the result?",
        // Updated: previously this only promised revisions after work started.
        // Now it also states the free preview step that happens before the
        // full mix begins, matching the offer introduced on the homepage
        // Hero and "How It Works" section.
        a: "This rarely happens — before I start the full mix, I send a short processed preview so you can hear the direction and confirm it's right. If something still isn't right after that, revisions are included, and I keep working until it is."
    },
    {
        q: "Do you work with low-quality recordings?",
        a: "Yes. A poor recording quality is not a death sentence. I've worked with recordings from garages, rehearsal rooms, and phones. What matters is that the performance is alive — the sound I can fix."
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
