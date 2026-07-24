"use client";
import {
  Shield,
  MessageCircle,
  CreditCard,
  Music,
  Sliders,
  Guitar,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";
import StepFlareCard from "../common/StepFlareCard";
import { useState } from "react";

// Icons, prices, the ?service= key and the featured flag stay here; all text
// comes from labels (English default) so the section can be reused on the
// Polish home via a labels prop.
const SERVICE_META = [
  { icon: Sliders, price: "from $39", featured: false, service: "mastering" },
  {
    icon: Music,
    price: "from $89",
    featured: true,
    service: "mixing-mastering",
  },
  { icon: Guitar, price: "from $119", featured: false, service: "arrangement" },
  {
    icon: Sparkles,
    price: "$39–149",
    featured: false,
    service: "suno-finishing",
    href: "/suno-track-finishing",
  },
];

const PAY_META = [
  { icon: Shield },
  { icon: MessageCircle },
  { icon: CreditCard },
];

const DEFAULTS = {
  eyebrow: "Pricing",
  heading: "Simple, Transparent Pricing",
  sub1: "No hidden fees. Exact price confirmed after discussing your project.",
  sub2: "Solo studio — every project gets my personal, full attention. No handoffs, no junior engineers.",
  mostPopular: "Most Popular",
  getStarted: "Get Started",
  contactHref: "/contact",
  services: [
    {
      title: "Mastering Only",
      description:
        "Final processing of your ready mix. Optimized for streaming, competitive loudness, delivered in WAV and MP3.",
    },
    {
      title: "Mixing & Mastering",
      description:
        "Full mix of all your tracks plus mastering. Works with stems or a rough mix you want taken to release level.",
    },
    {
      title: "Arrangement & Production",
      description:
        "From idea to finished track. Instruments, structure, mix and master. Final price depends on the scope.",
    },
    {
      title: "Suno / AI Track Finishing",
      description:
        "Made a track in Suno or Udio? I separate the stems, clean the artifacts, add live parts and deliver a human mix & master. Fixed packages.",
    },
  ],
  payment: [
    {
      title: "30% upfront",
      description:
        "The rest after you approve the result. No risk on your side.",
    },
    {
      title: "Talk first, pay after",
      description:
        "Exact price confirmed after we discuss your project. First consultation is always free.",
    },
    {
      title: "Wise & bank transfer",
      description: "Working with clients worldwide. No location limitations.",
    },
  ],
};

function ServiceCard({
  icon: Icon,
  title,
  price,
  description,
  featured,
  service,
  href,
  mostPopular,
  getStarted,
  contactHref,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-3 h-full"
      style={{
        background: featured
          ? "rgba(201,168,76,0.08)"
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(201,168,76,0.5)"
          : featured
            ? "1px solid rgba(201,168,76,0.35)"
            : "1px solid rgba(255,255,255,0.05)",
        boxShadow: hovered
          ? "0 0 40px rgba(201,168,76,0.12)"
          : featured
            ? "0 0 40px rgba(201,168,76,0.07)"
            : "none",
        transition: "border 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon + badge row */}
      <div className="flex items-center justify-between">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200"
          style={{
            backgroundColor: "rgba(201,168,76,0.1)",
            transform: hovered ? "scale(1.15)" : "scale(1)",
          }}
        >
          <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
        </div>
        {featured && (
          <span
            className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(201,168,76,0.15)",
              color: "#C9A84C",
            }}
          >
            {mostPopular}
          </span>
        )}
      </div>

      {/* Title + price */}
      <div>
        <p className="text-white/55 text-xs uppercase tracking-widest mb-0.5">
          {title}
        </p>
        <p
          className="step-number price-number text-xl font-semibold"
          style={{ color: "#C9A84C" }}
        >
          {price}
        </p>
      </div>

      {/* Description */}
      <p className="text-white/65 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Button */}
      <Link
        href={href || `${contactHref}?service=${service}`}
        className="btn-gold py-2 px-5 rounded-xl text-xs font-semibold text-center w-full mt-1"
        style={
          featured
            ? { background: "#C9A84C", color: "#161616" }
            : {
                background: "rgba(201,168,76,0.08)",
                color: "#C9A84C",
                border: "1px solid rgba(201,168,76,0.25)",
              }
        }
      >
        {getStarted}
      </Link>
    </div>
  );
}

export default function Pricing({ labels }) {
  const t = { ...DEFAULTS, ...labels };
  const services = SERVICE_META.map((m, i) => ({
    ...m,
    ...t.services[i],
  })).filter((s) => s.title);
  const payment = PAY_META.map((m, i) => ({ ...m, ...t.payment[i] }));
  return (
    <section className="py-12 border-t border-white/5">
      <div className="mb-8">
        <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
          {t.eyebrow}
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
          {t.heading}
        </h2>
        <p className="text-white/55 text-sm mt-2">{t.sub1}</p>
        <p className="text-white/55 text-sm mt-1">{t.sub2}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {services.map((service, i) => (
          <StepFlareCard
            key={service.service}
            delay={i * 120}
            className="h-full"
          >
            <ServiceCard
              {...service}
              mostPopular={t.mostPopular}
              getStarted={t.getStarted}
              contactHref={t.contactHref}
            />
          </StepFlareCard>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {payment.map(({ icon: Icon, title, description }, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div
              className="flex gap-3 p-4 rounded-xl h-full"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.08)" }}
              >
                <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
              </div>
              <div>
                <p className="font-medium text-sm text-white mb-0.5">{title}</p>
                <p className="text-white/55 text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
