import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources for individuals with disabilities and their families, from Created To Shine Ministries.",
};

const CATEGORIES = [
  "Disability Education",
  "Family & Caregiver Support",
  "Employment & Transition Planning",
  "Community Inclusion",
];

export default function ResourcesPage() {
  return (
    <Section tone="cream" className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Resources</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">
          Resources Coming Soon
        </h1>
        <p className="mt-5 leading-relaxed text-ink/80">
          We&apos;re building out a library to support individuals with
          disabilities, their families, and the churches and communities that
          walk alongside them, including:
        </p>
        <ul className="mx-auto mt-6 grid max-w-md gap-2 text-left text-sm text-ink/80">
          {CATEGORIES.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Suggest a Resource
          </Button>
        </div>
      </div>
    </Section>
  );
}
