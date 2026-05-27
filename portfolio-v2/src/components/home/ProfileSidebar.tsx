import Image from "next/image";
import Link from "next/link";
import { Mail, FileDown } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { heroRole } from "@/content/hero";

function LinkedInIcon({ size = 18 }: { size?: number }) {
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

function GitHubIcon({ size = 18 }: { size?: number }) {
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

const socials = [
  { href: siteConfig.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: siteConfig.github, label: "GitHub", icon: GitHubIcon },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
] as const;

export function ProfileSidebar() {
  return (
    <aside className="hero-profile-card mx-auto w-full max-w-[340px] lg:mx-0 lg:max-w-none">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <Image
          src={siteConfig.profileImagePath}
          alt={siteConfig.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 340px, 340px"
          priority
        />
      </div>

      <div className="mt-6 text-center lg:text-left">
        <h2 className="text-2xl font-semibold tracking-tight">{siteConfig.name}</h2>
        <p className="mt-1 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {heroRole}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-3 inline-block text-sm text-muted transition-colors hover:text-foreground"
        >
          {siteConfig.email}
        </a>
      </div>

      <div className="mt-5 flex justify-center gap-2 lg:justify-start">
        {socials.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-card text-muted transition-colors hover:border-foreground/25 hover:text-foreground"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <a
          href={siteConfig.resumePath}
          download
          className="flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-card px-4 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          <FileDown size={18} />
          View my CV
        </a>
        <Link
          href="/contact/"
          className="btn-accent flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
        >
          Contact me
        </Link>
      </div>
    </aside>
  );
}
