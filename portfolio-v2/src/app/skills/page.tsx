import { createMetadata } from "@/lib/seo";
import { skillCategories } from "@/content/skills";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata = createMetadata({
  title: "Skills",
  description:
    "Technical skills — Flutter, Android, React, Next.js, Flask, Python, Google Cloud, AI/ML.",
  path: "/skills/",
});

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        eyebrow="Skills"
        title="Depth across the stack"
        description="Languages, mobile, web, backends, cloud, and AI — organized by how I actually ship."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => (
          <GlassCard key={cat.title}>
            <h3 className="text-lg font-semibold">{cat.title}</h3>
            <p className="mt-2 text-sm text-muted">{cat.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
