"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Section({
  children,
  className = "",
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "cream-dark" | "navy";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toneClasses =
    tone === "navy"
      ? "bg-navy text-cream"
      : tone === "cream-dark"
        ? "bg-cream-dark text-ink"
        : "bg-cream text-ink";

  return (
    <section className={toneClasses}>
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 py-16 transition-all duration-700 ease-out sm:px-6 sm:py-20 motion-reduce:transition-none ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        } ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
