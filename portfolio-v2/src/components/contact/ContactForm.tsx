"use client";

import { useState, type FormEvent } from "react";
import { GlassCard } from "@/components/shared/GlassCard";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const formspreeEndpoint = "https://formspree.io/f/xredovdj";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Formspree request failed");

      setStatus("success");
      setMessage("Message sent. I'll get back to you soon, thanks!");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try email directly.");

      // Fallback: open mail client using the same fields.
      const email = String(formData.get("email") ?? "");
      const body = String(formData.get("message") ?? "");
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${body}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${mailBody}`;
    }
  }

  return (
    <GlassCard>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full rounded-full py-3 text-sm font-medium disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {message && (
          <p
            className={`text-sm ${status === "error" ? "text-red-400" : "text-muted"}`}
          >
            {message}
          </p>
        )}
      </form>
    </GlassCard>
  );
}
