import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Online giving for Created to Shine Ministries is coming soon. Learn about our 501(c)(3) status.",
};

export default function DonatePage() {
  return (
    <Section tone="cream" className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Donate</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">
          Online Giving Is Coming Soon
        </h1>
        <p className="mt-5 leading-relaxed text-ink/80">
          We&apos;re setting up a secure way to give online &mdash; check back
          soon. In the meantime, reach out through our contact page and we&apos;ll
          help you make a gift.
        </p>

        <div className="mt-8 rounded-xl border border-gold/30 bg-cream-dark p-6 text-left">
          <h2 className="font-serif text-lg font-semibold text-navy">
            Nonprofit Status
          </h2>
          <dl className="mt-3 space-y-2 text-sm text-ink/80">
            <div className="flex justify-between gap-4">
              <dt className="font-medium text-navy">EIN</dt>
              <dd>42-4268107</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-medium text-navy">Status</dt>
              <dd>501(c)(3) as of July 17, 2026</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-medium text-navy">Public charity status</dt>
              <dd>170(b)(1)(A)(vi)</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Contact Us About Giving
          </Button>
        </div>
      </div>
    </Section>
  );
}
