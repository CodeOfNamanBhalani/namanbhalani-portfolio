import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { projects, getProjectBySlug } from "@/content/projects";
import { createMetadata } from "@/lib/seo";
import { CaseStudyGallery } from "@/components/work/CaseStudyGallery";
import { GlassCard } from "@/components/shared/GlassCard";
import { JsonLd } from "@/components/shared/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/work/${slug}/`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          author: { "@type": "Person", name: "Naman Bhalani" },
          keywords: project.tags.join(", "),
        }}
      />
      <article className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/work/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
          data-cursor="hover"
        >
          <ArrowLeft size={16} /> All work
        </Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
          {project.year} · {project.category}
        </p>
        <h1 className="mt-2 text-4xl font-semibold md:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted">{project.description}</p>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.github || project.live) && (
          <div className="mt-6 flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:underline"
              >
                <Code2 size={16} /> GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:underline"
              >
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>
        )}

        <div className="mt-12 space-y-8">
          <GlassCard>
            <h2 className="text-lg font-semibold">Problem</h2>
            <p className="mt-3 text-muted leading-relaxed">{project.problem}</p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-lg font-semibold">Approach</h2>
            <p className="mt-3 text-muted leading-relaxed">{project.approach}</p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-lg font-semibold">Outcome</h2>
            <p className="mt-3 text-muted leading-relaxed">{project.outcome}</p>
          </GlassCard>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-lg font-semibold">Gallery</h2>
          <CaseStudyGallery images={project.gallery} title={project.title} />
        </div>
      </article>
    </>
  );
}
