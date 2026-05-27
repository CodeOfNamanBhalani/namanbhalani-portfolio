import { aboutContent } from "@/content/about";
import { siteConfig } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="section-container">
      <p className="hero-eyebrow mb-6">
        <span className="hero-eyebrow-dot" aria-hidden />
        About me
      </p>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="section-heading">{aboutContent.headline}</h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            {aboutContent.intro.trim().split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted/80 italic">
            {aboutContent.philosophy}
          </p>
        </div>

        <div className="space-y-6">
          <div className="hero-stat-card">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Quick facts
            </h3>
            <dl className="space-y-3">
              {aboutContent.highlights.map((h) => (
                <div key={h.label} className="flex justify-between gap-4 text-sm">
                  <dt className="text-muted">{h.label}</dt>
                  <dd className="text-right font-medium">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-stat-card">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              What I focus on
            </h3>
            <ul className="space-y-2">
              {aboutContent.focus.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.resumePath}
              download
              className="btn-accent rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Download resume
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-muted hover:text-foreground"
            >
              LinkedIn profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
