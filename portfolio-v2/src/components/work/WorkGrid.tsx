"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/content/projects";
import { ProjectFilters } from "./ProjectFilters";
import { useCanHover } from "@/components/shared/FloatingHoverPreview";

export function WorkGrid() {
  const [category, setCategory] = useState<ProjectCategory>("all");
  const [search, setSearch] = useState("");
  const canHover = useCanHover();

  const [preview, setPreview] = useState<Project | null>(null);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    if (!canHover) return;
    cancelClose();
    closeTimer.current = window.setTimeout(() => setPreview(null), 140);
  };

  const openPreview = (project: Project) => {
    cancelClose();
    setPreview(project);
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return projects.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [category, search]);

  return (
    <>
      {preview && (
        <div
          className="fixed inset-0 z-[90] bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project full image preview"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
          >
            <X size={20} />
          </button>

          <div className="relative mx-auto h-full max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-foreground/10 bg-background">
            <Image
              src={preview.image}
              alt={preview.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 980px"
              priority
            />
          </div>
        </div>
      )}

      <ProjectFilters
        active={category}
        onChange={setCategory}
        search={search}
        onSearchChange={setSearch}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="project-card cursor-pointer transition-colors"
            onMouseEnter={() => canHover && openPreview(project)}
            onMouseLeave={scheduleClose}
            onFocus={() => openPreview(project)}
            onBlur={() => canHover && scheduleClose()}
            onClick={() => {
              if (!canHover) openPreview(project);
            }}
          >
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold">{project.title}</h3>
                <span className="shrink-0 rounded-full border border-foreground/10 px-2 py-0.5 text-xs text-muted">
                  {project.year}
                </span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted">
                {project.shortDescription}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/10 bg-card px-2 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-foreground"
                  >
                    GitHub <ArrowUpRight size={12} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs text-accent transition-opacity hover:opacity-80"
                  >
                    Live demo <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted">No projects match your filters.</p>
      )}
    </>
  );
}
