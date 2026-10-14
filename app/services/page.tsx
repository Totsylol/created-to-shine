import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { PROGRAMS } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Created To Shine Ministries' programs: the Academy, Coffee Co., Family Education, and Community Inclusion.",
};

export default function ServicesPage() {
  return (
    <>
      <Section tone="cream" className="!pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Services</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">Our Programs</h1>
            <p className="mt-4 max-w-2xl text-ink/80">
              Four programs working together to equip individuals with disabilities,
              educate families, and build inclusive communities.
            </p>
          </div>
          <Image
            src="/images/our-programs.jpg"
            alt="A Created To Shine Ministries participant planning a program on a whiteboard"
            width={580}
            height={435}
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </Section>

      {PROGRAMS.map((program, i) => {
        const imageOnLeft = i % 2 === 1;
        return (
          <Section key={program.slug} tone={i % 2 === 0 ? "cream-dark" : "cream"} className="!py-14">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className={imageOnLeft ? "lg:order-2" : undefined}>
                <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
                  {program.name}
                </h2>
                <p className="mt-3 text-ink/80">{program.summary}</p>
                <ul className="mt-6 space-y-3">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-relaxed text-ink/85 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={program.image}
                alt={program.imageAlt}
                width={800}
                height={600}
                className={`aspect-[4/3] w-full rounded-xl object-cover shadow-md ${
                  imageOnLeft ? "lg:order-1" : ""
                }`}
              />
            </div>
          </Section>
        );
      })}

      <Section tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-gold-light">
            Want To Partner With One Of Our Programs?
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
