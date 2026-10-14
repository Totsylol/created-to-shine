import { STATS } from "@/lib/stats";

export default function Stats() {
  const uniqueSources = Array.from(
    new Map(STATS.map((s) => [s.sourceUrl, s])).values(),
  );

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gold/30 bg-cream-dark p-6 text-center"
          >
            <p className="font-serif text-4xl font-bold text-navy sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-ink/60">
        Sources:{" "}
        {uniqueSources.map((s, i) => (
          <span key={s.sourceUrl}>
            <a
              href={s.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy"
            >
              {s.sourceName}
            </a>
            {i < uniqueSources.length - 1 ? "; " : ""}
          </span>
        ))}
      </p>
    </div>
  );
}
