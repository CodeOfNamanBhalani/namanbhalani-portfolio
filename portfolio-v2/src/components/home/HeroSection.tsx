import Link from "next/link";
import { ProfileSidebar } from "./ProfileSidebar";
import { HeroTypewriter } from "./HeroTypewriter";
import { heroBio, heroHeadline, heroStats } from "@/content/hero";

export function HeroSection() {
  return (
    <section id="hero" className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(280px,340px)_1fr] lg:gap-14 xl:gap-20">
        <ProfileSidebar />

        <div className="flex flex-col justify-center pt-2 lg:pt-8">
          <p className="hero-eyebrow mb-6">
            <span className="hero-eyebrow-dot" aria-hidden />
            About
          </p>

          <p className="text-lg text-muted md:text-xl">
            Hello! I&apos;m{" "}
            <span className="hero-role-highlight">
              <HeroTypewriter />
            </span>
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
            {heroHeadline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {heroBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-foreground/10 bg-card px-3 py-1 text-xs text-muted">
              Bhavnagar, Gujarat
            </span>
            <span className="rounded-full border border-foreground/10 bg-card px-3 py-1 text-xs text-muted">
              Open to SDE internships
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat-card">
                <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#work" className="btn-accent rounded-full px-6 py-3 text-sm font-semibold">
              View portfolio
            </Link>
            <Link
              href="#about"
              className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              More about me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
