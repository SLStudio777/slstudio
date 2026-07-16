"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import {
  Clock,
  CreditCard,
  BadgeCheck,
  UploadCloud,
  FileAudio,
  Send,
  Loader2,
  ChevronRight,
  Headphones,
  SlidersHorizontal,
  Sparkles,
  Lock,
} from "lucide-react";
import { uploadPresigned } from "@vercel/blob/client";
import HeroWave from "../../common/HeroWave";
import LangSwitch from "../../common/LangSwitch";
import { faqItems } from "./faqData";

// Keep in sync with MAX_UPLOAD_BYTES in /api/preview-upload/route.js
const MAX_UPLOAD_BYTES = 100 * 1024 * 1024; // 100 MB
const MULTIPART_THRESHOLD = 50 * 1024 * 1024; // 50 MB

const ALLOWED_EXT = [
  "wav",
  "mp3",
  "aif",
  "aiff",
  "flac",
  "ogg",
  "m4a",
  "mp4",
  "webm",
  "zip",
];

// Produce a URL-safe pathname segment: only [A-Za-z0-9._-] survives, matching
// the server-side PATHNAME_RE guard. Cyrillic/spaces/specials are stripped.
function sanitizeFileName(name) {
  const dot = name.lastIndexOf(".");
  let base = dot > 0 ? name.slice(0, dot) : name;
  let ext = dot > 0 ? name.slice(dot + 1) : "";
  base = base
    .normalize("NFKD")
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  ext = ext.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
  if (!base) base = "track";
  return ext ? `${base}.${ext}` : base;
}

const trustChips = [
  { icon: Clock, label: "1–2 days" },
  { icon: CreditCard, label: "No card, no account" },
  { icon: BadgeCheck, label: "No obligation" },
];

const steps = [
  {
    icon: UploadCloud,
    step: "01",
    title: "Send what you have",
    text: "Drop a file or paste a link. Common audio and video formats are accepted, and rough demos or phone recordings are welcome — that is the whole point.",
  },
  {
    icon: SlidersHorizontal,
    step: "02",
    title: "I work on a section of it",
    text: "Not a preset, not an algorithm. I sit down with your track and treat it like a paying job.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "You hear the difference",
    text: "Within 1–2 days you get the processed section back, plus honest notes on what the full version needs and exactly what it would cost.",
  },
];

const checklist = [
  "Send the best version you have — a finished mix, a rough mix, or raw stems.",
  "If you have separate tracks (stems), zip them and send the archive.",
  "Leave some headroom, no clipping. If you don't know what that means — send it anyway, I'll figure it out.",
  "If you have a reference track — a song whose sound you're chasing — mention it in the notes.",
  "If your file is over 100 MB, paste a link instead.",
];

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.07)",
};
const focusOn = (e) =>
  (e.target.style.border = "1px solid rgba(201,168,76,0.4)");
const focusOff = (e) =>
  (e.target.style.border = "1px solid rgba(255,255,255,0.07)");

function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export default function Hero() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const pickFile = (f) => {
    if (!f) return;
    setError(null);
    const ext = f.name.split(".").pop()?.toLowerCase();
    if (f.size > MAX_UPLOAD_BYTES) {
      setError(
        "This file is over 100 MB. Paste a link instead (Google Drive, Dropbox or WeTransfer) and I'll grab it from there.",
      );
      return;
    }
    if (ext && !ALLOWED_EXT.includes(ext)) {
      setError("Audio files and ZIP archives only.");
      return;
    }
    setFile(f);
    trackEvent("preview_file_selected", {
      file_extension: ext || "unknown",
      file_size_mb: Number((f.size / (1024 * 1024)).toFixed(1)),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const link = form.elements["link"].value.trim();

    if (!file && !link) {
      setError("Attach a file or paste a link first.");
      return;
    }

    trackEvent("preview_submit_started", {
      service: form.elements["service"].value || "not_selected",
      submission_method: file ? "file" : "link",
    });

    setLoading(true);
    setProgress(0);

    try {
      let uploadedPathname = null;

      if (file) {
        const pathname = `previews/${Date.now()}-${sanitizeFileName(file.name)}`;
        const blob = await uploadPresigned(pathname, file, {
          access: "private",
          handleUploadUrl: "/api/preview-upload",
          multipart: file.size > MULTIPART_THRESHOLD,
          onUploadProgress: ({ percentage }) => setProgress(percentage),
        });
        uploadedPathname = blob.pathname;
        trackEvent("preview_upload_completed", {
          file_size_mb: Number((file.size / (1024 * 1024)).toFixed(1)),
        });
      }

      const res = await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.elements["name"].value,
          email: form.elements["email"].value,
          service: form.elements["service"].value,
          message: form.elements["message"].value,
          website: form.elements["website"].value,
          pathname: uploadedPathname,
          fileName: file ? file.name : null,
          fileSize: file ? file.size : null,
          link: link || null,
        }),
      });
      if (!res.ok) throw new Error("send failed");

      setSent(true);
      trackEvent("form_submit", {
        form_name: "free_preview",
        service: form.elements["service"].value || "not_selected",
      });
      trackEvent("preview_submit_completed", {
        service: form.elements["service"].value || "not_selected",
        submission_method: file ? "file" : "link",
      });
    } catch (err) {
      console.error("[free-preview] submit error:", err);
      trackEvent("preview_submit_error", {
        service: form.elements["service"].value || "not_selected",
      });
      setError(
        "Something went wrong. Please try again, or write to me directly on Telegram.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 mb-20">
      <LangSwitch
        active="en"
        enHref="/free-track-preview"
        plHref="/pl/darmowy-fragment"
      />
      <div className="flex flex-col gap-20 mt-4">
        {/* ── HERO — two columns: pitch + trust + what-you-get-back | form ──
                On mobile the columns unwrap (mobile-reflow → display:contents)
                so the children reorder to: intro → form → what-you-get-back,
                putting the form before the promises so nobody has to scroll to it. */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* LEFT column — blocks flow top-to-bottom with a normal gap;
                    intentionally shorter than the form, no bottom-alignment. */}
          <div className="mobile-reflow flex flex-col gap-8">
            {/* Intro group — stays intact and in natural order on mobile */}
            <div className="[@media(max-width:767px)]:order-1 flex flex-col">
              <span className="text-white/60 text-xs uppercase tracking-[0.3em]">
                Free Preview · No Obligation
              </span>
              <div className="relative mt-3">
                <div className="hero-title-glow" aria-hidden="true" />
                <h1 className="relative text-4xl md:text-5xl font-semibold tracking-wide">
                  Hear Your Track, <span className="text-gold2">Free</span>
                </h1>
              </div>
              <div className="mt-6">
                <HeroWave />
              </div>
              <p className="text-white/70 text-md md:text-lg leading-relaxed mt-5">
                Send me your track and I'll process a section of it — free. A
                rough demo, a phone recording, stems, an old track that never
                sounded right. You hear what it can become before you decide
                anything.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                {trustChips.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      border: "1px solid rgba(201,168,76,0.25)",
                      background: "rgba(201,168,76,0.06)",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                    <span className="text-white/75 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What you get back — bottom of the column on desktop (faces the
                        form), after the form on mobile (order-3). Gold card kept. */}
            <div
              className="[@media(max-width:767px)]:order-3 rounded-2xl p-6 md:p-8 flex flex-col gap-4"
              style={{
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <Headphones className="w-6 h-6" style={{ color: "#C9A84C" }} />
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  What you get back
                </h2>
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  "A processed section of your own track (usually 30–60 seconds)",
                  "An honest assessment — what can be fixed, what can't",
                  "An exact price for the full job",
                  "No obligation to book anything",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white/75 text-[15px]"
                  >
                    <span style={{ color: "#C9A84C" }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real testimonial (from the site's Testimonials section) +
                        privacy note — fills out the column under the card, after
                        it on mobile (order-4). No card styling, kept modest. */}
            <figure className="[@media(max-width:767px)]:order-4 flex flex-col gap-2">
              <blockquote className="text-white/70 text-[15px] italic leading-relaxed">
                “Total bomb. Keep this one, don't change a thing. I keep hitting
                replay. Maestro, bravo.”
              </blockquote>
              <figcaption className="text-white/45 text-xs">
                — Andrii Holikov, Guitarist &amp; Musician
              </figcaption>
            </figure>

            <p className="[@media(max-width:767px)]:order-5 flex items-start gap-2 text-white/45 text-xs leading-relaxed">
              <Lock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <span>
                Your file goes into private storage and is used only to prepare
                your preview. Nobody can open it without a signed link, and I
                delete it after the preview request is completed.
              </span>
            </p>
          </div>

          {/* RIGHT column — the form (the main element of the screen).
                    id + scrollMarginTop live here so the final CTA scrolls to it. */}
          <div
            id="upload"
            style={{ scrollMarginTop: "80px" }}
            className="[@media(max-width:767px)]:order-2 flex flex-col"
          >
            {sent ? (
              <div
                className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-10 rounded-2xl"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  background: "rgba(201,168,76,0.04)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <Send className="w-7 h-7" style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Got it
                  </h3>
                  <p className="text-white/60 text-sm max-w-sm">
                    I'll listen and send your preview back within 1–2 days —
                    check your email.
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="flex-1 rounded-2xl p-6 md:p-8 flex flex-col gap-5"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-white/40 text-xs uppercase tracking-widest">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition"
                        style={inputStyle}
                        onFocus={focusOn}
                        onBlur={focusOff}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-white/40 text-xs uppercase tracking-widest">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="john@email.com"
                        className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition"
                        style={inputStyle}
                        onFocus={focusOn}
                        onBlur={focusOff}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-widest">
                      What do you need?
                    </label>
                    <select
                      name="service"
                      defaultValue=""
                      style={{
                        colorScheme: "dark",
                        background: "#1b1b1b",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      className="rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition"
                      onFocus={focusOn}
                      onBlur={focusOff}
                    >
                      <option value="">Select...</option>
                      <option>Mastering</option>
                      <option>Mixing &amp; Mastering</option>
                      <option>Arrangement &amp; Production</option>
                      <option>Not sure yet</option>
                    </select>
                    <p className="text-white/35 text-xs leading-relaxed">
                      For arrangement projects, the preview may be a short
                      production concept or an initial assessment, depending on
                      the material.
                    </p>
                  </div>

                  {/* File drop zone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-widest">
                      Your track
                    </label>
                    <button
                      type="button"
                      aria-label="Choose an audio file to upload"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragOver(false);
                        pickFile(e.dataTransfer.files?.[0]);
                      }}
                      className="rounded-xl px-5 py-8 flex flex-col items-center justify-center gap-3 text-center cursor-pointer transition"
                      style={{
                        border: `1px dashed ${
                          dragOver
                            ? "rgba(201,168,76,0.6)"
                            : "rgba(255,255,255,0.12)"
                        }`,
                        background: dragOver
                          ? "rgba(201,168,76,0.06)"
                          : "rgba(255,255,255,0.02)",
                      }}
                    >
                      {file ? (
                        <>
                          <FileAudio
                            className="w-7 h-7"
                            style={{ color: "#C9A84C" }}
                          />
                          <p className="text-white text-sm font-medium break-all">
                            {file.name}
                          </p>
                          <p className="text-white/40 text-xs">
                            {(file.size / (1024 * 1024)).toFixed(1)} MB · click
                            to replace
                          </p>
                        </>
                      ) : (
                        <>
                          <UploadCloud
                            className="w-7 h-7"
                            style={{ color: "rgba(201,168,76,0.7)" }}
                          />
                          <p className="text-white/70 text-sm">
                            Drag a file here, or{" "}
                            <span style={{ color: "#C9A84C" }}>browse</span>
                          </p>
                        </>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".wav,.mp3,.aif,.aiff,.flac,.ogg,.m4a,.mp4,.webm,.zip"
                        className="hidden"
                        onChange={(e) => pickFile(e.target.files?.[0])}
                      />
                    </button>
                    <p className="text-white/35 text-xs">
                      WAV, MP3, AIFF, FLAC, OGG, M4A, MP4, WebM or ZIP · up to
                      100 MB · your file stays private
                    </p>

                    {loading && progress > 0 && (
                      <div className="mt-2 flex flex-col gap-1">
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ background: "rgba(255,255,255,0.08)" }}
                        >
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${progress}%`,
                              background: "#C9A84C",
                            }}
                          />
                        </div>
                        <p className="text-white/40 text-xs">
                          Uploading… {Math.round(progress)}%
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Fallback link */}
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-widest">
                      Or paste a link (Google Drive, Dropbox, WeTransfer)
                    </label>
                    <input
                      name="link"
                      type="url"
                      placeholder="https://…"
                      className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition"
                      style={inputStyle}
                      onFocus={focusOn}
                      onBlur={focusOff}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-widest">
                      Anything I should know?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Genre, reference track, what bothers you about the current sound."
                      className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition resize-none"
                      style={inputStyle}
                      onFocus={focusOn}
                      onBlur={focusOff}
                    />
                  </div>

                  {/* Honeypot — invisible to humans, bots fill it */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      opacity: 0,
                    }}
                    aria-hidden="true"
                  />

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
                    style={{ background: "#C9A84C" }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />{" "}
                        {progress > 0 && progress < 100
                          ? "Uploading…"
                          : "Sending…"}
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send my track →
                      </>
                    )}
                  </button>

                  <p className="text-white/35 text-xs leading-relaxed text-center">
                    Your contact details and file are used only to prepare and
                    deliver this preview. Nothing is published or shared without
                    your permission.
                  </p>

                  <p className="text-white/45 text-xs text-center">
                    Upload not working?{" "}
                    <Link
                      href="/contact"
                      className="text-[#C9A84C] underline hover:text-[#e8c97a] transition"
                    >
                      Contact me directly →
                    </Link>
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section>
          <div className="mb-8">
            <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
              How It Works
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
              Three steps, no catch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, step, title, text }) => (
              <div
                key={step}
                className="rounded-2xl p-6 flex flex-col gap-4 h-full"
                style={{
                  border: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(255,255,255,0.03)",
                  borderLeft: "3px solid rgba(201,168,76,0.4)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                  </div>
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "rgba(201,168,76,0.25)" }}
                  >
                    {step}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="text-white/65 text-[15px] leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BEFORE YOU SEND ── */}
        <section className="max-w-3xl">
          <div className="mb-6">
            <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
              Before You Send
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
              A few things that help
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-white/70 text-[15px] leading-relaxed"
              >
                <span className="mt-0.5" style={{ color: "#C9A84C" }}>
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQ ── */}
        <FAQ />

        {/* ── FINAL CTA ── */}
        <section className="py-4">
          <div
            className="rounded-2xl p-10 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto relative overflow-hidden"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "300px",
                height: "200px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide relative z-10">
              Prefer to talk first?
            </h2>
            <p className="text-white/65 text-[15px] relative z-10">
              If the upload does not work or you want to discuss the project
              first, send me a message directly.
            </p>
            <Link
              href="/contact"
              className="btn-gold relative z-10 inline-flex items-center gap-2 font-semibold px-10 py-4 rounded-xl text-sm"
              style={{
                background:
                  "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
                backgroundSize: "200% auto",
                color: "#161616",
                boxShadow: "0 0 30px rgba(201,168,76,0.25)",
              }}
            >
              Contact Me →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section className="max-w-3xl">
      <div className="mb-6">
        <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
          FAQ
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex flex-col divide-y divide-white/5">
        {faqItems.map((item) => (
          <details key={item.q} className="group py-1">
            <summary className="py-5 flex items-start gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-gold2 transition-transform duration-200 group-open:rotate-90" />
              <span className="text-white/90 font-medium text-base leading-snug">
                {item.q}
              </span>
            </summary>
            <div className="pb-5 pl-7 text-white/60 text-[15px] leading-relaxed">
              <p>{item.a}</p>
              {item.contactLink && (
                <Link
                  href="/contact"
                  className="inline-flex mt-3 text-[#C9A84C] underline hover:text-[#e8c97a] transition"
                >
                  Contact me directly →
                </Link>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
