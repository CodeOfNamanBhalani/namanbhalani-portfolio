import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/content/projects";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ArrowRight } from "lucide-react";

export function FeaturedWork() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow="Selected work"
        title="Projects that show range"
        description="From Flutter finance apps to Flask APIs — real builds, not tutorial clones."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}/`}
            className="block overflow-hidden rounded-2xl border border-white/10 bg-card"
          >
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <p className="font-mono text-xs text-muted">{project.year}</p>
              <h3 className="mt-1 font-semibold">{project.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted">
                {project.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted">
                Case study <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/work/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground"
        >
          View all projects <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
