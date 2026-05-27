"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export type HoverPreviewData = {
  image: string;
  title: string;
};

export type HoverPreviewState = {
  data: HoverPreviewData;
  rect: DOMRect;
} | null;

const POPUP_WIDTH = 475;
/** 16:9 — image only, no text block */
const POPUP_HEIGHT = Math.round((POPUP_WIDTH * 9) / 16);

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

function clampPosition(rect: DOMRect) {
  const pad = 16;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const w = Math.min(POPUP_WIDTH, vw - pad * 2);
  const h = Math.min(POPUP_HEIGHT, vh - pad * 2);

  let left = rect.left + rect.width / 2 - w / 2;
  let top = rect.top + rect.height / 2 - h / 2;

  left = Math.max(pad, Math.min(left, vw - w - pad));
  top = Math.max(pad, Math.min(top, vh - h - pad));

  return { left, top, width: w, height: h };
}

type FloatingHoverPreviewProps = {
  preview: HoverPreviewState;
};

export function FloatingHoverPreview({ preview }: FloatingHoverPreviewProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !preview) return null;

  const { data, rect } = preview;
  const pos = clampPosition(rect);

  return createPortal(
    <div
      className="pointer-events-none fixed z-[60] opacity-100 transition-opacity duration-200"
      style={{
        left: pos.left,
        top: pos.top,
        width: pos.width,
        height: pos.height,
      }}
      aria-hidden
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-accent/30 bg-[#0a0a0a] shadow-[0_24px_70px_rgba(0,0,0,0.75)]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-contain p-3"
          sizes="475px"
        />
      </div>
    </div>,
    document.body,
  );
}

export function getPreviewFromElement(
  el: HTMLElement,
  data: HoverPreviewData,
): HoverPreviewState {
  return { data, rect: el.getBoundingClientRect() };
}
