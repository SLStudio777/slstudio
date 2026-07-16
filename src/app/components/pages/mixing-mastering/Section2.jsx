import { ChevronRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { faqItems } from "./faqData";

export default function Section2() {
  return (
    <section className="mt-16 mb-20 flex flex-col gap-16">
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
                {item.previewLink && (
                  <Link
                    href="/free-track-preview"
                    className="inline-flex mt-3 text-gold underline hover:text-gold2 transition"
                  >
                    Get a free preview →
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

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
          Hear what your track could become
        </h2>
        <p className="text-white/65 text-[15px] leading-relaxed max-w-xl relative z-10">
          Send your track and receive a free 30–60 second processed preview, an
          honest assessment and an exact price for the full job.
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
          Get My Free Preview →
        </Link>
      </div>
    </section>
  );
}
