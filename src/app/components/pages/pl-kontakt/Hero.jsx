"use client";
import { useState, useEffect } from "react";
import {
  Mail,
  Send,
  ArrowUpRight,
  Loader2,
  Clock,
  MessagesSquare,
  BadgeCheck,
  ChevronDown,
  FileText,
} from "lucide-react";
import LangSwitch from "../../common/LangSwitch";
import StepFlareCard from "../../common/StepFlareCard";
import ScrollFaders from "../../common/ScrollFaders";

const SERVICE_FROM_QUERY = {
  mastering: "Tylko mastering",
  "mixing-mastering": "Miks i mastering",
  arrangement: "Aranżacja i produkcja",
  "suno-master": "Suno Master",
  "suno-finishing": "Suno Finishing",
  "suno-production": "Suno Full Production",
};

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const contacts = [
  {
    href: "https://t.me/serhii_lazariev",
    icon: <TelegramIcon />,
    label: "Telegram",
    sub: "Najszybsza odpowiedź",
    handle: "@serhii_lazariev",
    highlight: true,
  },
  {
    href: "https://www.instagram.com/lazarev_serhii_sl",
    icon: <InstagramIcon />,
    label: "Instagram",
    sub: null,
    handle: "@lazarev_serhii_sl",
    highlight: false,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100044130441850",
    icon: <FacebookIcon />,
    label: "Facebook",
    sub: null,
    handle: "Serhii Lazariev",
    highlight: false,
  },
  {
    href: "mailto:serhii@slstudio.pro",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    sub: null,
    handle: "serhii@slstudio.pro",
    highlight: false,
  },
];

function FaqItem({ q, a, open, onToggle }) {
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
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [service, setService] = useState("");

  // Prefill service from ?service= (links from the Pricing section)
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("service");
    if (param && SERVICE_FROM_QUERY[param])
      setService(SERVICE_FROM_QUERY[param]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.elements["name"].value,
          email: form.elements["email"].value,
          service: form.elements["service"].value,
          message: form.elements["message"].value,
          website: form.elements["website"].value,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setSent(true);
      if (typeof window.gtag === "function") {
        window.gtag("event", "form_submit", {
          form_name: "contact",
          service: form.elements["service"].value,
        });
      }
    } catch {
      setError(
        "Coś poszło nie tak. Spróbuj ponownie albo napisz bezpośrednio na Telegram.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
            animation: "pulse 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
            animation: "pulse 8s ease-in-out infinite reverse",
          }}
        />
        <style>{`@keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:0.6}}`}</style>
      </div>

      <div className="mb-1 md:translate-y-[25px] relative z-20">
        <LangSwitch active="pl" enHref="/contact" plHref="/pl/kontakt" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-stretch md:-translate-y-[36px]">
        {/* LEFT — justify-between spreads the blocks so the column's top and
                    bottom line up exactly with the form column on the right */}
        <div className="flex flex-col gap-3">
          <span className="relative md:top-2 text-white/40 text-xs uppercase tracking-[0.3em]">
            Kontakt
          </span>
          <div className="relative md:top-2">
            <div className="hero-title-glow" aria-hidden="true" />
            <h1 className="relative text-4xl md:text-6xl font-semibold tracking-wide">
              {"Zróbmy "}
              <span className="text-gold2">muzykę</span>
            </h1>
          </div>
          <p className="relative md:top-4 text-white/65 text-[15px] leading-relaxed max-w-sm">
            Wyślij mi swój utwór. Powiedz, do czego dążysz, a ja powiem, co mogę
            z tym zrobić — bez opłat, bez zobowiązań, po prostu szczery odsłuch.
          </p>

          <p className="relative md:top-2 text-white/25 text-xs uppercase tracking-widest mt-1 mb-1">
            Napisz bezpośrednio
          </p>

          <div className="flex flex-col gap-3 flex-1 md:justify-between md:pt-7">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                className={`group flex items-center gap-3 ${c.highlight ? "p-4" : "p-3.5"} rounded-xl transition-all duration-200`}
                style={
                  c.highlight
                    ? {
                        border: "1px solid rgba(201,168,76,0.4)",
                        background: "rgba(201,168,76,0.08)",
                        boxShadow: "0 0 22px rgba(201,168,76,0.14)",
                      }
                    : {
                        border: "1px solid rgba(255,255,255,0.05)",
                        background: "rgba(255,255,255,0.015)",
                      }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.border =
                    "1px solid rgba(201,168,76,0.5)";
                  e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                  e.currentTarget.style.transform = "translateX(3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = c.highlight
                    ? "1px solid rgba(201,168,76,0.4)"
                    : "1px solid rgba(255,255,255,0.05)";
                  e.currentTarget.style.background = c.highlight
                    ? "rgba(201,168,76,0.08)"
                    : "rgba(255,255,255,0.015)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  className={`${c.highlight ? "w-10 h-10" : "w-9 h-9"} rounded-lg flex items-center justify-center flex-shrink-0`}
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    color: "#C9A84C",
                  }}
                >
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p
                      className={`${c.highlight ? "text-white" : "text-white/75"} font-medium text-sm`}
                    >
                      {c.label}
                    </p>
                    {c.sub && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(201,168,76,0.15)",
                          color: "#C9A84C",
                        }}
                      >
                        {c.sub}
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 text-xs truncate">{c.handle}</p>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-70 transition"
                  style={{ color: "#C9A84C" }}
                />
              </a>
            ))}

            <div
              className="p-4 rounded-xl"
              style={{
                border: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: "#C9A84C",
                    boxShadow: "0 0 6px rgba(201,168,76,0.6)",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <p className="text-white/50 text-xs uppercase tracking-widest">
                  Czas odpowiedzi
                </p>
              </div>
              <p className="text-white/60 text-sm">
                Zwykle w ciągu 24 godzin. Najszybciej przez Telegram.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — stretched to match the left column's height (5 contact
                    cards make it taller); compact column header pinned top, form pinned bottom */}
        <div className="flex flex-col gap-4 md:justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-12 self-start md:mt-[28px]">
              <div
                className="relative w-16 h-16 md:w-[100px] md:h-[100px] flex-shrink-0 rounded-full overflow-hidden"
                style={{
                  border: "1px solid rgba(201,168,76,0.35)",
                  boxShadow: "0 0 20px rgba(201,168,76,0.12)",
                }}
              >
                <img
                  src="/images/Serhii-Lazariev-round-avatar.png"
                  alt="Serhii Lazariev"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative text-left">
                <div className="hero-title-glow" aria-hidden="true" />
                <div
                  className="pointer-events-none absolute -inset-x-8 -inset-y-5 rounded-full"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.045) 42%, transparent 74%)",
                    filter: "blur(20px)",
                  }}
                />
                <h2 className="relative whitespace-nowrap text-3xl md:text-[52px] font-semibold tracking-wide leading-none text-white">
                  Wyślij swój <span className="text-gold2">utwór</span>
                </h2>
                <p className="text-white/45 text-sm md:text-base mt-2">
                  Zwykle odpowiadam w ciągu 24 godzin
                </p>
              </div>
            </div>
            {/* Track-prep guide card */}
            <a
              href="/pl/blog/how-to-export-stems-for-mixing"
              className="group relative md:-top-1 flex items-center gap-3 p-4 md:mt-2 rounded-xl transition-all duration-200"
              style={{
                border: "1px solid rgba(201,168,76,0.4)",
                background: "rgba(201,168,76,0.08)",
                boxShadow: "0 0 22px rgba(201,168,76,0.14)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(201,168,76,0.5)";
                e.currentTarget.style.background = "rgba(201,168,76,0.09)";
                e.currentTarget.style.transform = "translateX(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(201,168,76,0.4)";
                e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
              >
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm">
                  Przygotowujesz swój utwór?
                </p>
                <p className="text-white/50 text-xs">
                  Jak dobrze wyeksportować stemy + darmowa checklista PDF
                </p>
              </div>
              <ArrowUpRight
                className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-70 transition"
                style={{ color: "#C9A84C" }}
              />
            </a>
          </div>

          {sent ? (
            <div
              className="flex flex-col items-center justify-center gap-4 text-center p-8 rounded-2xl"
              style={{
                border: "1px solid rgba(201,168,76,0.2)",
                background: "rgba(201,168,76,0.04)",
                minHeight: "320px",
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
                  Wiadomość wys������ana!
                </h3>
                <p className="text-white/50 text-sm">
                  Odezwę się w ciągu 24 godzin.
                </p>
              </div>
            </div>
          ) : (
            <div
              className="rounded-2xl p-6 md:pt-4 md:pb-3 flex flex-col gap-4"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.015)",
              }}
            >
              <p className="text-white/50 text-xs uppercase tracking-widest">
                Napisz wiadomość
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-xs uppercase tracking-widest">
                      Imię
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Jan Kowalski"
                      required
                      className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border =
                          "1px solid rgba(201,168,76,0.4)")
                      }
                      onBlur={(e) =>
                        (e.target.style.border =
                          "1px solid rgba(255,255,255,0.07)")
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-xs uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="jan@email.com"
                      required
                      className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border =
                          "1px solid rgba(201,168,76,0.4)")
                      }
                      onBlur={(e) =>
                        (e.target.style.border =
                          "1px solid rgba(255,255,255,0.07)")
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs uppercase tracking-widest">
                    Usługa
                  </label>
                  <select
                    name="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{
                      colorScheme: "dark",
                      background: "#1b1b1b",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    className="rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition"
                    onFocus={(e) =>
                      (e.target.style.border = "1px solid rgba(201,168,76,0.4)")
                    }
                    onBlur={(e) =>
                      (e.target.style.border =
                        "1px solid rgba(255,255,255,0.07)")
                    }
                  >
                    <option value="">Wybierz usługę...</option>
                    <option>Tylko mastering</option>
                    <option>Miks i mastering</option>
                    <option>Aranżacja i produkcja</option>
                    <option>Suno Master</option>
                    <option>Suno Finishing</option>
                    <option>Suno Full Production</option>
                    <option>Poprawa jakości nagrania</option>
                    <option>Jeszcze nie wiem</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs uppercase tracking-widest">
                    O Twoim projekcie
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Gatunek, co masz nagrane, do czego dążysz..."
                    required
                    className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition resize-none"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1px solid rgba(201,168,76,0.4)")
                    }
                    onBlur={(e) =>
                      (e.target.style.border =
                        "1px solid rgba(255,255,255,0.07)")
                    }
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

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
                  style={{ background: "#C9A84C", backgroundSize: "200% auto" }}
                  onMouseEnter={(e) =>
                    !loading &&
                    (e.currentTarget.style.backgroundPosition = "right center")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundPosition = "left center")
                  }
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Wysyłam...
                    </>
                  ) : (
                    <>
                      <Send size={14} /> Wyślij wiadomość
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Three steps — same style as the "How It Works" cards on the free preview page */}
      <div className="mt-20">
        <div className="mb-8">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
            Co dalej
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            Co się dzieje po wysłaniu wiadomości
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              icon: <Clock className="w-5 h-5" />,
              title: "Odpowiadam w ciągu 24 godzin",
              body: "Zwykle szybciej — najszybciej na Telegramie. Bez botów i automatycznych odpowiedzi, zawsze osobiście.",
            },
            {
              num: "02",
              icon: <MessagesSquare className="w-5 h-5" />,
              title: "Rozmawiamy o utworze",
              body: "Mówisz, co masz nagrane i do czego dążysz. Ja szczerze mówię, co da się z tym zrobić, a czego nie warto.",
            },
            {
              num: "03",
              icon: <BadgeCheck className="w-5 h-5" />,
              title: "Preview albo konkretna cena",
              body: "Dostajesz darmowe preview fragmentu albo dokładną wycenę całości. Zero zobowiązań — decyzja należy do Ciebie.",
            },
          ].map((s, i) => (
            <StepFlareCard
              key={i}
              tilt
              delay={i * 120}
              className="rounded-2xl p-6 flex flex-col gap-4 h-full"
              style={{
                border: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.03)",
                borderLeft: "3px solid rgba(201,168,76,0.4)",
              }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    color: "#C9A84C",
                  }}
                >
                  {s.icon}
                </div>
                <span
                  className="step-number text-2xl font-semibold"
                  style={{ color: "rgba(201,168,76,0.35)" }}
                >
                  {s.num}
                </span>
              </div>
              <p className="text-white font-semibold text-sm">{s.title}</p>
              <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
            </StepFlareCard>
          ))}
        </div>
      </div>

      {/* Mini FAQ — same card and accordion behavior as the homepage */}
      <div className="mt-20">
        <div className="mb-8">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            Częste pytania
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_640px] gap-10 items-start">
          <div className="flex flex-col gap-3 max-w-3xl">
            {[
              {
                q: "W jakim języku mogę pisać?",
                a: "Po polsku, angielsku, ukraińsku albo rosyjsku — jak Ci wygodniej. Odpowiem w tym samym języku.",
              },
              {
                q: "Co napisać w wiadomości?",
                a: "Wystarczy kilka zdań: gatunek, co masz nagrane (demo, stemy, gotowy miks) i co Ci przeszkadza w obecnym brzmieniu. Link do utworu referencyjnego jest mile widziany.",
              },
              {
                q: "Mam duży plik — jak go wysłać?",
                a: "Nie przez formularz — wrzuć link do Google Drive, Dropbox albo WeTransfer. Możesz też skorzystać ze strony darmowego preview, tam jest uploader do 100 MB.",
              },
              {
                  q: "Jak wygląda płatność?",
                  a: "30% zaliczki po ustaleniu zakresu prac, reszta po akceptacji finalnego efektu. Wise albo przelew bankowy (polski IBAN); płatności kartą już wkrótce.",
              },
            ].map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
          <div className="hidden md:flex justify-evenly items-center h-full">
            <ScrollFaders />
          </div>
        </div>
      </div>

      {/* CTA — compact mirror of the final card on the free preview page */}
      <div className="mt-20 py-4">
        <div
          className="rounded-2xl p-10 text-center flex flex-col items-center gap-6 max-w-2xl mx-auto relative overflow-hidden"
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
          <h3 className="text-3xl md:text-4xl font-semibold tracking-wide text-white relative z-10">
            Nie chce Ci się pisać?
          </h3>
          <p className="text-white/65 text-[15px] leading-relaxed max-w-xl relative z-10">
            Po prostu wyślij utwór — dostaniesz darmowe preview, szczere uwagi i
            konkretną cenę. A potem porozmawiamy.
          </p>
          <a
            href="/pl/darmowy-fragment"
            className="btn-gold relative z-10 inline-flex items-center gap-2 text-black font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition text-sm"
            style={{
              background:
                "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
              backgroundSize: "200% auto",
              color: "#161616",
              boxShadow: "0 0 30px rgba(201,168,76,0.25)",
            }}
          >
            Wyślij utwór →
          </a>
        </div>
      </div>
    </section>
  );
}
