"use client";

import { projectCategories, type ProjectCategory } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectFilters({
  active,
  onChange,
  search,
  onSearchChange,
}: {
  active: ProjectCategory;
  onChange: (c: ProjectCategory) => void;
  search: string;
  onSearchChange: (q: string) => void;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              active === cat.id
                ? "border-white/30 bg-white/10 text-foreground"
                : "border-white/10 text-muted hover:border-white/20 hover:text-foreground",
            )}
            data-cursor="hover"
          >
            {cat.label}
          </button>
        ))}
      </div>
      <input
        type="search"
        placeholder="Search projects…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none focus:border-foreground/40 sm:max-w-xs"
      />
    </div>
  );
}
