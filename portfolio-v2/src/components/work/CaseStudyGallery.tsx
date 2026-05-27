"use client";

import { useState } from "react";
import Image from "next/image";

export function CaseStudyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className="relative aspect-video overflow-hidden rounded-xl border border-foreground/10 transition-colors hover:border-foreground/20"
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover"
              sizes="50vw"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative h-[70vh] w-full max-w-5xl">
            <Image
              src={images[active]}
              alt={title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
