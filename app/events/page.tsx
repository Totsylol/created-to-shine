import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events from Created to Shine Ministries.",
};

export default function EventsPage() {
  return (
    <Section tone="cream" className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Events</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">
          No Events Scheduled Yet
        </h1>
        <p className="mt-5 leading-relaxed text-ink/80">
          Check back soon &mdash; we&apos;ll post upcoming Coffee Co. appearances,
          family workshops, and community events here as they&apos;re scheduled.
        </p>
        <p className="mt-3 leading-relaxed text-ink/80">
          Want to host or co-host an event with us?
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </div>
    </Section>
  );
}
