import { experiences } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <p className="hero-eyebrow mb-6">
        <span className="hero-eyebrow-dot" aria-hidden />
        Experience
      </p>
      <h2 className="section-heading mb-12">Where I&apos;ve worked</h2>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-foreground/10 md:left-6" aria-hidden />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12 md:pl-16">
              <span className="absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-accent bg-background md:left-4" />

              <div className="hero-stat-card">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="mt-0.5 text-sm text-accent">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{exp.period}</p>
                    <p className="text-xs text-muted">{exp.mode}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-foreground/10 bg-card px-2.5 py-0.5 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
