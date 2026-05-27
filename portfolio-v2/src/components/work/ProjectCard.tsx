"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import type { HoverPreviewData } from "@/components/shared/FloatingHoverPreview";

type ProjectCardProps = {
  project: Project;
  canHover?: boolean;
  onPreview?: (preview: { data: HoverPreviewData; el: HTMLElement } | null) => void;
};

export function ProjectCard({ project, canHover, onPreview }: ProjectCardProps) {
  const data: HoverPreviewData = {
    image: project.image,
    title: project.title,
  };

  return (
    <article className="project-card relative flex flex-col overflow-hidden">
      <div
        className="group relative aspect-[16/10] cursor-pointer overflow-hidden bg-white/[0.04]"
        onMouseEnter={(e) => {
          if (!canHover) return;
          onPreview?.({ data, el: e.currentTarget });
        }}
        onMouseLeave={() => onPreview?.(null)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:opacity-40"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        {canHover && (
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs text-white">
              Preview
            </span>
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-muted">{project.year}</p>
            <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
          </div>
          <ArrowUpRight className="shrink-0 text-muted" size={20} />
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-muted">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
