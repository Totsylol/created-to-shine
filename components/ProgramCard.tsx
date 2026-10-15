import type { Program } from "@/lib/programs";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gold/30 bg-cream p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <h3 className="font-serif text-xl font-semibold text-navy">{program.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{program.summary}</p>
    </div>
  );
}
