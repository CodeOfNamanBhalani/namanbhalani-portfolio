import { GlassCard } from "@/components/shared/GlassCard";

const stats = [
  { value: "8.5", label: "CGPA" },
  { value: "16", label: "Certificates" },
  { value: "4", label: "Internships" },
  { value: "6+", label: "Shipped projects" },
];

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <GlassCard key={stat.label} className="text-center">
            <p className="text-3xl font-semibold gradient-text">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
