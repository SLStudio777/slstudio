"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";

// All text comes from labels (English default) so the section can be reused
// on the Polish home via a labels prop, same pattern as Pricing/HowItWorks.
const DEFAULTS = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  sub: "Direct answers about pricing, timelines and how we work.",
  items: [
    {
      q: "How much does mixing and mastering cost?",
      a: "Mastering starts at $39 per track, mixing & mastering at $89, arrangement & production at $119. Finishing an AI-generated track (Suno/Udio) is $39\u2013149 depending on the package. The exact price is confirmed after a free consultation \u2014 no hidden fees.",
    },
    {
      q: "How long does it take?",
      a: "Most projects are delivered in 3\u20135 business days. You get a reply the same day and a short processed preview before any work is booked.",
    },
    {
      q: "What files should I send?",
      a: "Whatever you have: stems (WAV, 24-bit preferred), a rough mix, or even a phone recording. Any format, any quality \u2014 I\u2019ll tell you if something is missing.",
    },
    {
      q: "How many revisions are included?",
      a: "Revisions are included until you\u2019re completely happy with the result. No per-revision fees.",
    },
    {
      q: "Do you work with AI-generated tracks (Suno, Udio)?",
      a: "Yes \u2014 it\u2019s a dedicated service. I separate the stems, clean the artifacts, replace weak parts with live instruments and deliver a human mix and master. See the Suno Track Finishing page for packages.",
    },
    {
      q: "How does the free preview work?",
      a: "You send your track, I process a short section and send it back for free. You hear the direction before paying anything \u2014 no commitment.",
    },
    {
      q: "How do payments work?",
      a: "50% upfront, the rest after you approve the result. PayPal and bank transfer \u2014 working with clients worldwide.",
    },
  ],
};

function FaqItem({ q, a, link, open, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: open
          ? "1px solid rgba(201,168,76,0.35)"
          : "1px solid rgba(255,255,255,0.05)",
        transition: "border 0.2s ease",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
      >
        <span className="font-medium text-white text-[15px]">{q}</span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{
            color: "#C9A84C",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p className="text-white/65 text-sm leading-relaxed px-5 pb-4">{a}</p>
          {link && (
            <Link
              href={link.href}
              onClick={link.onClick}
              className="inline-flex px-5 pb-4 -mt-2 text-sm underline transition hover:opacity-80"
              style={{ color: "#C9A84C" }}
            >
              {link.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ labels }) {
  const t = { ...DEFAULTS, ...labels };
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="py-12 border-t border-white/5 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 85% 40%, rgba(201,168,76,0.10), transparent 65%)",
        }}
      />
      <div className="mb-8">
        <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
          {t.eyebrow}
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
          {t.heading}
        </h2>
        <p className="text-white/55 text-sm mt-2">{t.sub}</p>
      </div>
      <div className="relative flex flex-col gap-3 max-w-3xl">
        {t.items.map((item, i) => (
          <ScrollReveal key={i} delay={Math.min(i * 60, 240)}>
            <FaqItem
              q={item.q}
              a={item.a}
              link={item.link}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
