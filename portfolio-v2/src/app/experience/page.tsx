import { createMetadata } from "@/lib/seo";
import { experiences } from "@/content/experience";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata = createMetadata({
  title: "Experience",
  description: "Internships and industry experience — WhiteSton, Quicksend, IBM, ValueOfCodes.",
  path: "/experience/",
});

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        eyebrow="Experience"
        title="Industry training & internships"
        description="Hands-on roles across web, Flutter, AI/ML, and Java — online and offline."
      />
      <div className="relative space-y-0 border-l border-foreground/10 pl-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pb-12">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-foreground/50 bg-background">
              <span className="h-2 w-2 rounded-full bg-foreground" />
            </span>
            <GlassCard>
              <p className="font-mono text-xs text-muted">{exp.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
              <p className="text-muted">
                {exp.company} · {exp.mode}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-foreground/10 px-2.5 py-0.5 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}
