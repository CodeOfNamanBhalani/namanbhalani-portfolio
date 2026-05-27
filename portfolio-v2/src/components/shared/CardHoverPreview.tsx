"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type HoverPreviewData = {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  imageFit?: "cover" | "contain";
};

export function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return canHover;
}

type CardHoverPreviewProps = {
  data: HoverPreviewData;
  enabled?: boolean;
};

/** Renders on top of the hovered card (parent must be `relative group`). */
export function CardHoverPreview({ data, enabled = true }: CardHoverPreviewProps) {
  if (!enabled) return null;

  const fit = data.imageFit ?? "cover";

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 max-lg:hidden"
      aria-hidden
    >
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-accent/40 bg-background shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
        <div className="relative min-h-0 flex-[1.4] bg-white/[0.04]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className={fit === "contain" ? "object-contain p-3" : "object-cover"}
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="shrink-0 border-t border-white/10 p-4">
          {data.subtitle && (
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              {data.subtitle}
            </p>
          )}
          <p className="mt-0.5 text-base font-semibold leading-snug">{data.title}</p>
          {data.description && (
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
              {data.description}
            </p>
          )}
          {data.tags && data.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {data.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
