import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Ways to support Created To Shine Ministries: volunteer, partner your church or business, pray, or spread the word.",
};

const WAYS = [
  {
    title: "Volunteer",
    body: "Lend your time and talents to our programs, from the Coffee Co. cart to family workshops and community events.",
  },
  {
    title: "Partner Your Church or Business",
    body: "Host a training, provide a service site, or become a hiring partner for participants transitioning into employment.",
  },
  {
    title: "Pray",
    body: "Pray for our participants, their families, our leadership team, and the growth of each program.",
  },
  {
    title: "Follow & Share",
    body: "Help us reach more families by sharing our story and our programs with your community.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Section tone="cream" className="!pb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
          Get Involved
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">
          Join Us In This Work
        </h1>
        <p className="mt-4 max-w-2xl text-ink/80">
          Families play a vital role, and so does the community around them.
          Here are a few ways you can help individuals with disabilities and
          their families grow, belong, and thrive.
        </p>
      </Section>

      <Section tone="cream" className="!pt-0">
        <div className="grid gap-6 sm:grid-cols-2">
          {WAYS.map((way) => (
            <div
              key={way.title}
              className="rounded-xl border border-gold/30 bg-cream-dark p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <h2 className="font-serif text-xl font-semibold text-navy">{way.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{way.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-gold-light">
            Ready To Get Started?
          </h2>
          <p className="mt-3 text-cream/85">
            Reach out and let us know how you&apos;d like to help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/donate" variant="outline">
              Donate
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
