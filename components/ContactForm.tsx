"use client";

import { useState, type FormEvent } from "react";

// TODO: replace with the organization's own inbox once one is set up.
const CONTACT_RECIPIENT = "jonahp@onsite-computers.com";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = `Website contact form: ${name || "New message"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${CONTACT_RECIPIENT}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-md border border-gold/40 bg-cream px-3 py-2 text-sm text-ink outline-none focus:border-navy"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-md border border-gold/40 bg-cream px-3 py-2 text-sm text-ink outline-none focus:border-navy"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-md border border-gold/40 bg-cream px-3 py-2 text-sm text-ink outline-none focus:border-navy"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
      >
        Send Message
      </button>
      {sent && (
        <p className="text-sm text-navy/80">
          Your email application should now open with your message ready to
          send. If it didn&apos;t open, please check your device&apos;s default
          mail app settings.
        </p>
      )}
    </form>
  );
}
