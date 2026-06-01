"use client";

import { useState } from "react";

const CHECKLIST_ITEMS = [
    { check: "I know what I am going for", note: "A direction, not a wish. 'I want something that sounds cool' is not a direction." },
    { check: "Started in Simple Mode", note: "To find the direction first. Custom Mode can wait." },
    { check: "Prompt order is correct", note: "Genre & mood → vocals → instruments → mix feel." },
    { check: "No contradictions in the prompt", note: "If two elements conflict, Suno will guess which one you meant. You will not like the guess." },
    { check: "Vocals are described", note: "Even one line. Gender, delivery, emotional quality." },
    { check: "Only key instruments listed", note: "Not every instrument you have ever heard. The essentials." },
    { check: "Structure tags are in [brackets]", note: "Not in the lyrics. In brackets." },
    { check: "Weirdness & Style Influence around the middle", note: "Not maximum. Never maximum." },
    { check: "If I have a good take — Extend or Cover first", note: "Do not throw away working material to chase something new." },
    { check: "I remember: Suno output is a demo", note: "The DAW finishes the job. Always." },
];

export default function InteractiveChecklist() {
    const [checked, setChecked] = useState(Array(CHECKLIST_ITEMS.length).fill(false));

    const toggle = (i) => {
        const next = [...checked];
        next[i] = !next[i];
        setChecked(next);
    };

    const done = checked.filter(Boolean).length;
    const allDone = done === CHECKLIST_ITEMS.length;

    return (
        <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {/* Progress bar */}
            <div className="flex items-center gap-3 mb-1">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{ width: `${(done / CHECKLIST_ITEMS.length) * 100}%`, background: "#C9A84C" }}
                    />
                </div>
                <span className="text-xs flex-shrink-0" style={{ color: "#C9A84C" }}>{done}/{CHECKLIST_ITEMS.length}</span>
            </div>

            {CHECKLIST_ITEMS.map((item, i) => (
                <button
                    key={i}
                    onClick={() => toggle(i)}
                    className="flex items-start gap-3 py-2 text-left w-full transition"
                    style={{ borderBottom: i < CHECKLIST_ITEMS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                >
                    <div
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition"
                        style={{
                            background: checked[i] ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.08)",
                            border: `1px solid ${checked[i] ? "#C9A84C" : "rgba(201,168,76,0.25)"}`,
                        }}
                    >
                        {checked[i] && <span className="text-xs" style={{ color: "#C9A84C" }}>✓</span>}
                    </div>
                    <div>
                        <p className={`text-sm font-medium transition ${checked[i] ? "line-through text-white/30" : "text-white"}`}>{item.check}</p>
                        <p className="text-white/40 text-xs mt-0.5">{item.note}</p>
                    </div>
                </button>
            ))}

            {allDone && (
                <div
                    className="mt-2 rounded-xl p-4 text-center text-sm font-semibold"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                    ✓ You are ready. Hit Generate.
                </div>
            )}
        </div>
    );
}
