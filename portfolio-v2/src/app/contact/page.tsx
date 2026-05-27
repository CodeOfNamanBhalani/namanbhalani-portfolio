import { Mail, Phone, MapPin, Share2, Code2 } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Naman Bhalani for internships and collaborations.",
  path: "/contact/",
});

const links = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}`, text: siteConfig.email },
  { icon: Phone, label: "Phone", href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, text: siteConfig.phone },
  { icon: MapPin, label: "Location", href: "#", text: siteConfig.location },
  { icon: Share2, label: "LinkedIn", href: siteConfig.linkedin, text: "naman-bhalani" },
  { icon: Code2, label: "GitHub", href: siteConfig.github, text: "CodeOfNamanBhalani" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something"
        description="Open to Software Developer internships. I reply within 24–48 hours."
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {links.map((item) => (
            <GlassCard key={item.label} className="flex items-center gap-4">
              <item.icon className="text-foreground" size={22} />
              <div>
                <p className="text-xs text-muted">{item.label}</p>
                {item.href === "#" ? (
                  <p className="font-medium">{item.text}</p>
                ) : (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    {item.text}
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
          <a
            href={siteConfig.resumePath}
            download
            className="inline-block rounded-full border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5"
          >
            Download resume (PDF)
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
