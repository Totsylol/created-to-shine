import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, vision, theological foundation, and leadership behind Created To Shine Ministries.",
};

const LEADERSHIP = [
  {
    name: "Avdi Muco",
    role: "President, Coffee Co. Director",
  },
  {
    name: "Christina Muco",
    role: "Vice President, Education Program Director",
  },
  {
    name: "Megan Tucci",
    role: "Treasurer, Curriculum Development",
  },
  {
    name: "Andy Palm",
    role: "Secretary, Operations Management",
  },
];

const SCRIPTURES = [
  {
    ref: "Genesis 1:27",
    note: "Every person is created in the image of God.",
  },
  {
    ref: "Exodus 4",
    note: "God equips Moses through partnership and support.",
  },
  {
    ref: "John 9",
    note: "Jesus rejects the belief that disability is the result of personal failure.",
  },
  {
    ref: "2 Samuel 9",
    note: "David extends covenant kindness to Mephibosheth, restoring him to a place of belonging at the king's table.",
  },
  {
    ref: "Luke 14",
    note: "Jesus calls His followers to intentionally welcome those often excluded.",
  },
  {
    ref: "1 Corinthians 12",
    note: "Paul teaches that every member of the body of Christ has value and purpose.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="cream">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">About Us</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">Our Story</h1>
        <Image
          src="/images/our-story-wide.jpg"
          alt="Created To Shine Ministries team members joining hands together"
          width={775}
          height={560}
          className="mx-auto mt-8 w-full max-w-[775px] rounded-xl object-cover shadow-md"
          priority
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-ink/85 leading-relaxed">
            <p>
              After serving internationally with TeachBeyond for almost a decade,
              our founders witnessed the significant barriers many individuals
              with disabilities and their families experience across cultures.
            </p>
            <p>
              In many communities, disability is often misunderstood, leading to
              isolation, limited educational opportunities, and reduced
              expectations for individuals with disabilities. Families frequently
              lack access to disability education, transition planning, advocacy
              resources, and supportive communities.
            </p>
            <p>
              Through years of cross-cultural ministry, God developed a passion
              to create educational environments where individuals with
              disabilities are recognized as image-bearers of God, families are
              equipped with knowledge and resources, and communities learn how to
              welcome and include people of all abilities.
            </p>
            <p>
              Created To Shine Ministries continues this calling in Michigan by
              developing educational pathways that strengthen individuals,
              families, churches, and communities.
            </p>
          </div>
          <div className="rounded-xl border border-gold/30 bg-cream-dark p-6">
            <h2 className="font-serif text-lg font-semibold text-navy">At A Glance</h2>
            <dl className="mt-4 space-y-3 text-sm text-ink/80">
              <div>
                <dt className="font-semibold text-navy">Location</dt>
                <dd>
                  37706 Colonial Dr S
                  <br />
                  Westland, MI 48185
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Status</dt>
                <dd>501(c)(3) tax-exempt as of July 17, 2026</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">EIN</dt>
                <dd>42-4268107</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Public charity status</dt>
                <dd>170(b)(1)(A)(vi)</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="cream-dark">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy">Mission</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Created To Shine Ministries educates and equips individuals with
              disabilities through vocational training, employment preparation,
              family education, and community partnerships, creating pathways
              toward greater independence, belonging, and contribution.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy">Vision</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              To create communities where individuals with disabilities are
              recognized for their God-given abilities, equipped through
              education, and empowered to participate fully in life.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <h2 className="font-serif text-2xl font-semibold text-navy">Leadership</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((leader) => (
            <div
              key={leader.name}
              className="rounded-xl border border-gold/30 bg-cream-dark p-5"
            >
              <p className="font-serif text-lg font-semibold text-navy">{leader.name}</p>
              <p className="mt-1 text-sm text-ink/75">{leader.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <h2 className="font-serif text-2xl font-semibold text-gold-light">
          Theological Foundation
        </h2>
        <p className="mt-4 max-w-3xl text-cream/85">
          Created To Shine Ministries is founded on the biblical truth that
          every person is created in the image of God (Genesis 1:27).
          Throughout Scripture, God demonstrates that human worth is not
          determined by ability, productivity, or independence.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SCRIPTURES.map((s) => (
            <div key={s.ref} className="rounded-lg border border-cream/20 p-4">
              <p className="font-serif font-semibold text-gold-light">{s.ref}</p>
              <p className="mt-1 text-sm text-cream/80">{s.note}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
