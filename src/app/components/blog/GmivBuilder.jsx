"use client";

import { useState, useCallback } from "react";

const GENRES = [
    "Future Bass", "Liquid Drum & Bass", "Lo-Fi Hip Hop", "Boom Bap", "Trap",
    "Math Rock", "Pop Punk", "Post-Hardcore", "Indie Folk", "Dream Pop",
    "Synthwave", "Darkwave", "Ambient", "House", "Deep House",
    "Neo Soul", "RnB", "Gospel", "Jazz Fusion", "Cinematic",
];

const MOODS = [
    "Melancholic", "Euphoric", "Aggressive", "Dark", "Ethereal",
    "Nostalgic", "Tense", "Serene", "Sentimental", "Hypnotic",
    "Triumphant", "Eerie", "Romantic", "Gritty", "Dreamy",
];

const INSTRUMENTS = [
    "Distorted 808 Bass", "Plucky Synth", "Acoustic Guitar Fingerstyle",
    "Heavy Drums", "Grand Piano", "Cinematic Strings", "Brass Section",
    "Virtuoso Electric Guitar", "High-Pitched Synth Melody", "Rhodes Piano",
    "Upright Bass", "Vibraphone", "Sub Bass", "Choir", "Organ",
    "Pad Synth", "Minimal Percussion", "Orchestral Drums",
];

const VOCALS = [
    "Female Whisper", "Male Gritty Vocals", "Choir Stacks", "Autotune Vocals",
    "Female Emotional Vocals", "Deep Male Baritone", "No Vocals / Instrumental",
    "Spoken Word", "Falsetto", "Rap Vocals", "Opera", "Harmonized Vocals",
];

const TEMPO_VALUES = ["60 BPM", "80 BPM", "100 BPM", "128 BPM", "160 BPM"];

// UI copy per locale. The tag pools above stay English on purpose — they are
// literal Suno prompt tokens and must be typed into Suno as-is, in any locale.
// English is the default so a page that passes nothing renders English.
const UI = {
    en: {
        subtitle: "Pick your tags — the prompt builds itself",
        reset: "Reset",
        selected: (n, max) => `${n}/${max} selected`,
        genre: "Genre",
        mood: "Mood",
        instruments: "Instruments",
        vocals: "Vocals",
        tempo: "Tempo (optional)",
        tempos: ["Very slow", "Slow", "Moderate", "Fast", "Very fast"],
        output: "Ready prompt",
        tagCount: (n) => `${n} tags`,
        empty: "← Choose at least one tag on the left",
        copy: "Copy prompt",
        copied: "✓ Copied!",
    },
    ru: {
        subtitle: "Выбери теги — промпт соберётся автоматически",
        reset: "Сбросить",
        selected: (n, max) => `выбрано ${n}/${max}`,
        genre: "Genre — жанр",
        mood: "Mood — атмосфера",
        instruments: "Instruments — инструменты",
        vocals: "Vocals — вокал",
        tempo: "Tempo (опционально)",
        tempos: ["Очень медленно", "Медленно", "Умеренно", "Быстро", "Очень быстро"],
        output: "Готовый промпт",
        tagCount: (n) => `${n} тегов`,
        empty: "← Выбери хотя бы один тег слева",
        copy: "Скопировать промпт",
        copied: "✓ Скопировано!",
    },
};

function Tag({ label, selected, onClick }) {
    return (
        <button
            onClick={onClick}
            className="text-xs px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer"
            style={{
                background: selected ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.04)",
                border: selected ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(255,255,255,0.08)",
                color: selected ? "#C9A84C" : "rgba(255,255,255,0.45)",
                transform: selected ? "scale(1.03)" : "scale(1)",
            }}
        >
            {label}
        </button>
    );
}

function Section({ letter, title, items, selected, onToggle, max = 2, countLabel }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <span className="text-lg font-bold" style={{ color: "#C9A84C" }}>{letter}</span>
                <span className="text-white/60 text-sm">— {title}</span>
                <span className="text-white/25 text-xs ml-auto">{countLabel(selected.length, max)}</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <Tag
                        key={item}
                        label={item}
                        selected={selected.includes(item)}
                        onClick={() => onToggle(item)}
                    />
                ))}
            </div>
        </div>
    );
}

export default function GmivBuilder({ lang = "en" }) {
    const t = UI[lang] ?? UI.en;
    const [genre, setGenre] = useState([]);
    const [mood, setMood] = useState([]);
    const [instruments, setInstruments] = useState([]);
    const [vocals, setVocals] = useState([]);
    const [tempo, setTempo] = useState("");
    const [copied, setCopied] = useState(false);

    const toggle = useCallback((list, setList, item, max) => {
        setList((prev) =>
            prev.includes(item)
                ? prev.filter((x) => x !== item)
                : prev.length < max
                ? [...prev, item]
                : prev
        );
    }, []);

    const prompt = [
        genre.join(", "),
        mood.map((m) => `${m} Mood`).join(", "),
        instruments.join(", "),
        vocals.join(", "),
        tempo,
    ]
        .filter(Boolean)
        .join(", ");

    const isEmpty = !prompt;

    const handleCopy = () => {
        if (!isEmpty) {
            navigator.clipboard.writeText(prompt).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    const handleReset = () => {
        setGenre([]);
        setMood([]);
        setInstruments([]);
        setVocals([]);
        setTempo("");
    };

    return (
        <div
            className="rounded-2xl flex flex-col gap-6 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.25)" }}
        >
            {/* Header */}
            <div
                className="px-6 pt-6 pb-4 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
                <div>
                    <p className="text-white font-semibold text-base">G.M.I.V. Prompt Builder</p>
                    <p className="text-white/50 text-xs mt-0.5">{t.subtitle}</p>
                </div>
                <button
                    onClick={handleReset}
                    className="text-xs px-3 py-1.5 rounded-lg transition hover:opacity-70"
                    style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                    {t.reset}
                </button>
            </div>

            {/* Sections */}
            <div className="px-6 flex flex-col gap-6">
                <Section
                    letter="G"
                    title={t.genre}
                    items={GENRES}
                    selected={genre}
                    onToggle={(item) => toggle(genre, setGenre, item, 2)}
                    max={2}
                    countLabel={t.selected}
                />
                <Section
                    letter="M"
                    title={t.mood}
                    items={MOODS}
                    selected={mood}
                    onToggle={(item) => toggle(mood, setMood, item, 2)}
                    max={2}
                    countLabel={t.selected}
                />
                <Section
                    letter="I"
                    title={t.instruments}
                    items={INSTRUMENTS}
                    selected={instruments}
                    onToggle={(item) => toggle(instruments, setInstruments, item, 3)}
                    max={3}
                    countLabel={t.selected}
                />
                <Section
                    letter="V"
                    title={t.vocals}
                    items={VOCALS}
                    selected={vocals}
                    onToggle={(item) => toggle(vocals, setVocals, item, 1)}
                    max={1}
                    countLabel={t.selected}
                />

                {/* Tempo */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold" style={{ color: "#C9A84C" }}>+</span>
                        <span className="text-white/60 text-sm">— {t.tempo}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {TEMPO_VALUES.map((value, i) => (
                            <button
                                key={value}
                                onClick={() => setTempo(tempo === value ? "" : value)}
                                className="flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer"
                                style={{
                                    background: tempo === value ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.04)",
                                    border: tempo === value ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(255,255,255,0.08)",
                                    color: tempo === value ? "#C9A84C" : "rgba(255,255,255,0.45)",
                                }}
                            >
                                <span className="text-xs font-mono font-bold">{value}</span>
                                <span className="text-xs opacity-60">{t.tempos[i]}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Output */}
            <div
                className="mx-6 mb-6 rounded-xl p-4 flex flex-col gap-3"
                style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(201,168,76,0.2)" }}
            >
                <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.6)" }}>
                        {t.output}
                    </p>
                    {!isEmpty && (
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                            {t.tagCount(prompt.split(",").filter(Boolean).length)}
                        </span>
                    )}
                </div>

                <p
                    className="text-sm font-mono leading-relaxed min-h-[2.5rem]"
                    style={{ color: isEmpty ? "rgba(255,255,255,0.2)" : "#C9A84C" }}
                >
                    {isEmpty ? t.empty : prompt}
                </p>

                <button
                    onClick={handleCopy}
                    disabled={isEmpty}
                    className="self-end text-xs px-4 py-2 rounded-lg transition-all duration-200 font-semibold"
                    style={{
                        background: isEmpty
                            ? "rgba(255,255,255,0.04)"
                            : copied
                            ? "rgba(100,200,100,0.2)"
                            : "rgba(201,168,76,0.15)",
                        color: isEmpty
                            ? "rgba(255,255,255,0.2)"
                            : copied
                            ? "rgb(100,200,100)"
                            : "#C9A84C",
                        border: isEmpty
                            ? "1px solid rgba(255,255,255,0.06)"
                            : copied
                            ? "1px solid rgba(100,200,100,0.4)"
                            : "1px solid rgba(201,168,76,0.35)",
                        cursor: isEmpty ? "not-allowed" : "pointer",
                    }}
                >
                    {copied ? t.copied : t.copy}
                </button>
            </div>
        </div>
    );
}
