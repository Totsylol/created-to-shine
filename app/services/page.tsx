import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { PROGRAMS } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Created to Shine Ministries' programs: the Academy, Coffee Co., Family Education, and Community Inclusion.",
};

export default function ServicesPage() {
  return (
    <>
      <Section tone="cream" className="!pb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Services</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">Our Programs</h1>
        <p className="mt-4 max-w-2xl text-ink/80">
          Four programs working together to equip individuals with disabilities,
          educate families, and build inclusive communities.
        </p>
      </Section>

      {PROGRAMS.map((program, i) => (
        <Section key={program.slug} tone={i % 2 === 0 ? "cream-dark" : "cream"} className="!py-14">
          <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
            {program.name}
          </h2>
          <p className="mt-3 max-w-3xl text-ink/80">{program.summary}</p>
          <ul className="mt-6 space-y-3">
            {program.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm leading-relaxed text-ink/85 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-gold-light">
            Want to partner with one of our programs?
          </h2>
          <p className="mt-3 text-cream/85">
            Churches, businesses, and individuals all play a role in helping
            these programs grow.
          </p>
          <div className="mt-6">
            <Button href="/get-involved" variant="primary">
              See how to get involved
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
