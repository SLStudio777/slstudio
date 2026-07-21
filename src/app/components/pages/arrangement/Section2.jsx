import Link from "next/link";
import FAQ from "../../sections/FAQ";
import { faqItems } from "./faqData";

const faqLabels = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  sub: "Direct answers about arrangement, production and how we start.",
  items: faqItems.map((item) => ({
    q: item.q,
    a: item.a,
    link: item.previewLink
      ? { href: "/free-track-preview", label: "Send your idea for a free preview →" }
      : undefined,
  })),
};

export default function Section2() {
  return (
    <section className="mt-16 mb-20 flex flex-col gap-16">
      <FAQ labels={faqLabels} />

      <div
        className="rounded-2xl p-10 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto w-full relative overflow-hidden"
        style={{
          background: "rgba(201,168,76,0.06)",
          border: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[320px] h-[220px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide relative z-10">
          Your rough idea is enough
        </h2>
        <p className="text-white/65 text-[15px] leading-relaxed max-w-xl relative z-10">
          Send the recording you already have. I will listen, explain what the
          arrangement needs and prepare a short free concept or assessment
          before you commit.
        </p>
        <Link
          href="/free-track-preview"
          className="btn-gold relative z-10 inline-flex items-center gap-2 font-semibold px-10 py-4 rounded-xl text-sm text-black"
          style={{
            background:
              "linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",
            backgroundSize: "200% auto",
            boxShadow: "0 0 30px rgba(201,168,76,0.25)",
          }}
        >
          Send My Idea →
        </Link>
      </div>
    </section>
  );
}
