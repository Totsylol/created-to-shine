import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ProgramCard from "@/components/ProgramCard";
import { PROGRAMS } from "@/lib/programs";

export default function Home() {
  return (
    <>
      <Section tone="cream" className="!py-14 sm:!py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
              A Christ-Centered Educational Ministry
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Equipping individuals with disabilities and their families to shine.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80">
              Created to Shine Ministries educates and equips individuals with
              disabilities through vocational training, employment preparation,
              family education, and community partnerships &mdash; creating pathways
              toward greater independence, belonging, and contribution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-involved" variant="primary">
                Get Involved
              </Button>
              <Button href="/donate" variant="secondary">
                Donate
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo.jpg"
              alt="Created to Shine Ministries logo"
              width={380}
              height={380}
              className="w-64 rounded-2xl shadow-lg sm:w-80 lg:w-96"
              priority
            />
          </div>
        </div>
      </Section>

      <Section tone="cream-dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy">Our Vision</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            To create communities where individuals with disabilities are
            recognized for their God-given abilities, equipped through education,
            and empowered to participate fully in life.
          </p>
        </div>
      </Section>

      <Section tone="cream">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy">Our Ministry Programs</h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink/80">
            Four programs working together to equip individuals, educate families,
            and build inclusive communities.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            Learn more about our services
          </Button>
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-gold-light sm:text-3xl">
            &ldquo;So God created man in his own image, in the image of God
            created he him.&rdquo;
          </h2>
          <p className="mt-3 text-cream/80">Genesis 1:27, KJV</p>
          <p className="mx-auto mt-6 max-w-2xl text-cream/90">
            Every person is created in the image of God &mdash; human worth is not
            determined by ability, productivity, or independence. That truth
            guides our commitment to education that develops dignity,
            participation, belonging, and purpose.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/about" variant="outline">
              Read Our Story
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
