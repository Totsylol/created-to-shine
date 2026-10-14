import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "cream-dark" | "navy";
}) {
  const toneClasses =
    tone === "navy"
      ? "bg-navy text-cream"
      : tone === "cream-dark"
        ? "bg-cream-dark text-ink"
        : "bg-cream text-ink";

  return (
    <section className={toneClasses}>
      <div className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
        {children}
      </div>
    </section>
  );
}
