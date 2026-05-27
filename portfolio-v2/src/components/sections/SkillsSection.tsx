import { skillCategories } from "@/content/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <p className="hero-eyebrow mb-6">
        <span className="hero-eyebrow-dot" aria-hidden />
        Skills
      </p>
      <h2 className="section-heading mb-3">Tech stack &amp; tools</h2>
      <p className="mb-12 max-w-xl text-muted">
        Languages, frameworks, and platforms I use to build real products.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="hero-stat-card flex flex-col gap-3">
            <div>
              <h3 className="font-semibold">{cat.title}</h3>
              <p className="mt-1 text-xs text-muted">{cat.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
