"use client";

import ScrollReveal from "./ScrollReveal";

export default function StepFlareCard({
  children,
  delay = 0,
  className = "",
  style,
}) {
  const replayStepFlare = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const numbers = event.currentTarget.querySelectorAll(".step-number");
    if (!numbers.length) return;

    numbers.forEach((number) => {
      number.style.animation = "none";
    });
    void event.currentTarget.offsetWidth;
    numbers.forEach((number) => {
      number.style.animation = "stepFlare 0.9s ease-out both";
    });
  };

  return (
    <ScrollReveal delay={delay}>
      <div className={className} style={style} onMouseEnter={replayStepFlare}>
        {children}
      </div>
    </ScrollReveal>
  );
}
