"use client";

import { useState } from "react";

// UI copy per locale. English is the default so a page that passes nothing
// renders English; Russian guides opt in with lang="ru".
const UI = {
    en: {
        copy: "Copy all",
        copied: "✓ Copied",
        done: "✓ Ready to export",
        task: "Task",
        tool: "Tool",
        hint: "Tap each item to mark it done",
    },
    ru: {
        copy: "Скопировать всё",
        copied: "✓ Скопировано",
        done: "✓ Готово к экспорту",
        task: "Задача",
        tool: "Инструмент",
        hint: "Нажми на каждый пункт чтобы отметить выполненным",
    },
};

/**
 * variant="table"     — rows are [task, tool] pairs, renders a table + "Copy all" button
 * variant="checklist" — rows are strings, renders interactive strikethrough checklist
 * lang                — "en" (default) | "ru"
 */
export default function CheatsheetCopy({ title, items, variant = "table", footnote, lang = "en" }) {
    const t = UI[lang] ?? UI.en;
    const [copied, setCopied] = useState(false);
    const [checked, setChecked] = useState([]);

    const handleCopy = () => {
        const text = items
            .map((row) => (Array.isArray(row) ? `${row[0]} → ${row[1]}` : row))
            .join("\n");
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const toggleCheck = (i) => {
        setChecked((prev) =>
            prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
        );
    };

    const allDone = variant === "checklist" && checked.length === items.length;

    return (
        <div
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
            <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                {variant === "table" && (
                    <button
                        onClick={handleCopy}
                        className="text-xs px-3 py-1.5 rounded-lg transition-all duration-200 font-medium"
                        style={{
                            background: copied ? "rgba(100,200,100,0.15)" : "rgba(201,168,76,0.1)",
                            color: copied ? "rgb(100,200,100)" : "#C9A84C",
                            border: copied ? "1px solid rgba(100,200,100,0.3)" : "1px solid rgba(201,168,76,0.25)",
                        }}
                    >
                        {copied ? t.copied : t.copy}
                    </button>
                )}
                {variant === "checklist" && allDone && (
                    <span className="text-xs px-3 py-1.5 rounded-lg" style={{ background: "rgba(100,200,100,0.12)", color: "rgb(100,200,100)", border: "1px solid rgba(100,200,100,0.25)" }}>
                        {t.done}
                    </span>
                )}
            </div>

            {variant === "table" && (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                                <th className="text-left py-3 pr-6 text-white/50 text-xs uppercase tracking-widest font-medium">{t.task}</th>
                                <th className="text-left py-3 text-white/50 text-xs uppercase tracking-widest font-medium">{t.tool}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((row, i) => (
                                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                    <td className="py-3 pr-6 text-white/70 text-sm">{row[0]}</td>
                                    <td className="py-3 font-medium text-sm" style={{ color: "#C9A84C" }}>{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {variant === "checklist" && (
                <div className="flex flex-col gap-2">
                    {items.map((item, i) => {
                        const done = checked.includes(i);
                        return (
                            <button
                                key={i}
                                onClick={() => toggleCheck(i)}
                                className="flex items-start gap-3 text-left rounded-xl p-3 transition-all duration-200 cursor-pointer w-full"
                                style={{
                                    background: done ? "rgba(100,200,100,0.06)" : "rgba(255,255,255,0.02)",
                                    border: done ? "1px solid rgba(100,200,100,0.2)" : "1px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                <div
                                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200"
                                    style={{
                                        background: done ? "rgba(100,200,100,0.2)" : "rgba(255,255,255,0.05)",
                                        border: done ? "1px solid rgba(100,200,100,0.5)" : "1px solid rgba(255,255,255,0.12)",
                                    }}
                                >
                                    {done && <span className="text-xs" style={{ color: "rgb(100,200,100)" }}>✓</span>}
                                </div>
                                <p
                                    className="text-sm transition-all duration-200"
                                    style={{
                                        color: done ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)",
                                        textDecoration: done ? "line-through" : "none",
                                    }}
                                >
                                    {item}
                                </p>
                            </button>
                        );
                    })}
                    <p className="text-white/25 text-xs mt-1 pl-1">{t.hint}</p>
                </div>
            )}

            {footnote && (
                <p className="text-white/60 text-sm leading-relaxed mt-2 italic">{footnote}</p>
            )}
        </div>
    );
}
