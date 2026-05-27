import { Mail, Phone, MapPin, Share2, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

const contacts = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: null },
];

const socials = [
  { icon: Share2, label: "LinkedIn", href: siteConfig.linkedin },
  { icon: Code2, label: "GitHub", href: siteConfig.github },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-container">
      <p className="hero-eyebrow mb-6">
        <span className="hero-eyebrow-dot" aria-hidden />
        Contact
      </p>
      <h2 className="section-heading mb-3">Let&apos;s work together</h2>
      <p className="mb-12 max-w-xl text-muted">
        Open to SDE internships, freelance projects, and collaborations. Reach out anytime.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="hero-stat-card flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-card">
                <Icon size={18} className="text-accent" />
              </span>
              <div>
                <p className="text-xs text-muted">{label}</p>
                {href ? (
                  <a href={href} className="text-sm font-medium transition-colors hover:text-accent">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm text-muted transition-colors hover:border-foreground/25 hover:text-foreground"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-stat-card flex flex-col gap-4">
          <p className="text-sm font-medium">Send a quick message</p>
          <form
            action={`mailto:${siteConfig.email}`}
            method="get"
            className="space-y-3"
          >
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-lg border border-foreground/10 bg-card px-4 py-3 text-sm transition-colors placeholder:text-muted focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
            <textarea
              name="body"
              placeholder="Your message..."
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-foreground/10 bg-card px-4 py-3 text-sm transition-colors placeholder:text-muted focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
            <button
              type="submit"
              className="btn-accent w-full rounded-full py-3 text-sm font-semibold"
            >
              Send via email client
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
