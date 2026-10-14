import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a message to Created to Shine Ministries.",
};

export default function ContactPage() {
  return (
    <Section tone="cream" className="min-h-[60vh]">
      <div className="mx-auto max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Contact</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">
          Send Us a Message
        </h1>
        <p className="mt-4 text-ink/80">
          Have a question, want to volunteer, or interested in partnering with
          one of our programs? Fill out the form below and we&apos;ll get back
          to you.
        </p>
        <div className="mt-8 rounded-xl border border-gold/30 bg-cream-dark p-6">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
