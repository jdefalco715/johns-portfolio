"use client";

import { FormEvent, useState } from "react";
import { PROFILE } from "@/data/content";
import Blueprint from "./Blueprint";

const CONTACT_ROWS: { label: string; value: string; href: string; external: boolean }[] = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, external: false },
  { label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref, external: false },
  { label: "LinkedIn", value: PROFILE.linkedinLabel, href: PROFILE.linkedin, external: true },
  { label: "GitHub", value: PROFILE.githubLabel, href: PROFILE.github, external: true },
];

type FormState = "idle" | "submitting" | "sent" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formState === "submitting") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setFormState("error");
        return;
      }

      form.reset();
      setFormState("sent");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-inner" data-reveal>
        <div>
          <p className="speclabel">06 — Contact</p>
          <h2 className="contact-heading">
            <span>Let&apos;s build</span>
            <span>something</span>
          </h2>
          <p className="contact-intro">
            I&apos;m open to front-end and ecommerce roles, and always happy to talk shop.
          </p>

          <div className="contact-list">
            {CONTACT_ROWS.map((row) => (
              <a
                key={row.label}
                href={row.href}
                target={row.external ? "_blank" : undefined}
                rel={row.external ? "noopener noreferrer" : undefined}
              >
                <span className="speclabel contact-list-label">{row.label}</span>
                <span className="contact-list-value">{row.value}</span>
              </a>
            ))}
          </div>
        </div>

        <Blueprint as="form" className="contact-form" onSubmit={handleSubmit}>
          {formState === "sent" ? (
            <div className="contact-success">
              <p className="contact-success-title">Message sent</p>
              <p className="text-muted contact-success-note">
                Thanks — I&apos;ll get back to you shortly.
              </p>
              <button type="button" className="btn btn-ghost" onClick={() => setFormState("idle")}>
                Send another
              </button>
            </div>
          ) : (
            <>
              <p className="speclabel">Send a message</p>

              {/* Honeypot: hidden from real users, bots tend to fill every field */}
              <div className="visually-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="contact-form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input className="input" id="name" name="name" type="text" placeholder="Jane Doe" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input className="input" id="email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input className="input" id="subject" name="subject" type="text" placeholder="Front-end role at…" />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  className="input"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="A few lines about the role or project."
                  required
                />
              </div>

              {formState === "error" && (
                <p className="contact-form-error" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={formState === "submitting"}
                style={{ padding: "12px", letterSpacing: ".08em", textTransform: "uppercase" }}
              >
                {formState === "submitting" ? "Sending…" : "Send message"}
              </button>
              <p className="text-muted contact-form-note">
                Or email me directly — I usually reply within a day.
              </p>
            </>
          )}
        </Blueprint>
      </div>
    </section>
  );
}
