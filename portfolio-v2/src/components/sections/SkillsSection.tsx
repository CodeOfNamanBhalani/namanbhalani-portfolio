import { skillCategories } from "@/content/skills";
import {
  Atom,
  Blocks,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  FileCode2,
  Flame,
  GitBranch,
  Globe,
  GraduationCap,
  Layout,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconBySkill: Record<string, LucideIcon> = {
  Java: FileCode2,
  Python: Code2,
  Dart: Code2,
  TypeScript: FileCode2,
  JavaScript: FileCode2,
  SQL: Database,
  Flutter: Smartphone,
  "Android (Java)": Smartphone,
  "Android Studio": Wrench,
  "Material Design": Layout,
  SQLite: Database,
  React: Atom,
  "Next.js": Globe,
  HTML5: FileCode2,
  CSS3: FileCode2,
  "Tailwind CSS": Layout,
  Bootstrap: Layout,
  Flask: Flame,
  "REST APIs": Server,
  Firebase: Flame,
  "JSON / HTTP": Server,
  "Google Cloud": Cloud,
  "Firebase Hosting": Cloud,
  Vercel: Cloud,
  "Git & GitHub": GitBranch,
  "GitHub Actions": GitBranch,
  "Environment config": Wrench,
  "Generative AI": Bot,
  "Machine Learning basics": BrainCircuit,
  "Deep Learning concepts": BrainCircuit,
  "scikit-learn": BrainCircuit,
  "IBM Skill Build": GraduationCap,
  "Data Structures": Blocks,
  Algorithms: BrainCircuit,
  OOP: Code2,
  "Problem Solving": BrainCircuit,
  "System Design basics": Server,
};

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
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card px-2.5 py-1 text-xs text-muted"
                >
                  {(() => {
                    const Icon = iconBySkill[skill] ?? Code2;
                    return <Icon size={14} className="text-accent" aria-hidden />;
                  })()}
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
