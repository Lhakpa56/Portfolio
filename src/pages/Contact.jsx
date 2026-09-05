import { useState } from "react";
import { profile } from "../data/content.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import LedgerRow from "../components/ui/LedgerRow.jsx";
import Button from "../components/ui/Button.jsx";
import { useSeo } from "../lib/useSeo.js";

export default function Contact() {
  useSeo(
    "Contact",
    "Get in touch with Lhakpa Tenji Sherpa by email, phone, or GitHub."
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <SectionHeading
        index="Contact"
        title="Get in touch"
        description="Open to job applications, freelance work, and professional conversations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <LedgerRow label="Email" first>
            <a href={`mailto:${profile.email}`} className="hover:text-accent underline underline-offset-4">
              {profile.email}
            </a>
          </LedgerRow>
          <LedgerRow label="Phone">
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="hover:text-accent underline underline-offset-4">
              {profile.phone}
            </a>
          </LedgerRow>
          <LedgerRow label="Location">{profile.location}</LedgerRow>
          <LedgerRow label="GitHub">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent underline underline-offset-4"
            >
              {profile.github.replace("https://", "")}
            </a>
          </LedgerRow>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm text-muted mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-line bg-surface px-3.5 py-2.5 rounded-sm text-ink focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-muted mb-1.5">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-line bg-surface px-3.5 py-2.5 rounded-sm text-ink focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-line bg-surface px-3.5 py-2.5 rounded-sm text-ink focus:border-accent resize-none"
            />
          </div>

          <Button type="submit" className="w-fit">
            Send message
          </Button>
          <p className="text-sm text-muted">
            Opens your email client with the message pre-filled.
          </p>
        </form>
      </div>
    </div>
  );
}
