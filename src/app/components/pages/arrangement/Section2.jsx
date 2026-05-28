import BeforeAfterCard from "../../cards/BeforeAfterCard";

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
        a: "That's exactly why I send a demo version first for your approval. You hear the direction before we go any further. No surprises at the end."
    },
    {
        q: "How much does it cost and how does payment work?",
        a: "Every project is individual — it depends on the scope of work. Write to me, describe what you have and what you want, and I'll give you a specific price. First consultation is always free."
    },
];

export default function Section2() {
    return (
        <section className="mt-20 flex flex-col gap-16">

            {/* Before / After */}
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        Before & After
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                        Hear the Difference
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BeforeAfterCard
                        title="Demo 1"
                        before="03-before.mp3"
                        after="03-after.mp3"
                    />
                    <BeforeAfterCard
                        title="Demo 2"
                        before="04-before.mp3"
                        after="04-after.mp3"
                    />
                </div>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        FAQ
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="flex flex-col divide-y divide-white/5">
                    {faqs.map((item, i) => (
                        <div key={i} className="py-6 flex flex-col gap-3">
                            <p className="text-white/90 font-medium text-base">
                                {item.q}
                            </p>
                            <p className="text-white/60 text-[15px] leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}