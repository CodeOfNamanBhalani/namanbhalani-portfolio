import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H7.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.372 4.267 5.455v6.286zM5.337 7.433c-.889 0-1.604-.72-1.604-1.608 0-.889.715-1.608 1.604-1.608.887 0 1.602.719 1.602 1.608 0 .888-.715 1.608-1.602 1.608zM6.892 20.452H3.783V9h3.109v11.452z" />
    </svg>
  );
}

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.427 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.15-1.11-1.456-1.11-1.456-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.27.098-2.645 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.375.202 2.392.099 2.645.64.7 1.029 1.595 1.029 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.02C22 6.484 17.523 2 12 2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-xs text-muted">
              CGPA {siteConfig.cgpa} · Available for internships
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                Navigate
              </p>
              <ul className="space-y-2 text-muted">
                {[
                  { href: "#about", label: "About" },
                  { href: "#work", label: "Work" },
                  { href: "#experience", label: "Experience" },
                  { href: "#certificates", label: "Certificates" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                Connect
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                  >
                    <LinkedInIcon size={16} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                  >
                    <GitHubIcon size={16} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-foreground/5 pt-6 text-center text-xs text-muted">
          © 2026 {siteConfig.fullName}. Built with Next.js & care.
        </p>
      </div>
    </footer>
  );
}
