"use client";

import { useEffect, useState, type CSSProperties } from "react";

const NAME = "Naman Bhalani";
const CHAR_COUNT = NAME.length;
const MS_PER_CHAR = 100;
const HOLD_MS = 1400;
const FADE_MS = 600;
const TYPE_MS = CHAR_COUNT * MS_PER_CHAR;
const TOTAL_MS = TYPE_MS + HOLD_MS + FADE_MS;

export function SplashScreen() {
  const [phase, setPhase] = useState<"show" | "fade" | "done">("show");

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setPhase("fade"), TYPE_MS + HOLD_MS);
    const doneTimer = window.setTimeout(() => setPhase("done"), TOTAL_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  const typerStyle: CSSProperties = {
    ["--splash-chars" as string]: CHAR_COUNT,
    animationDuration: `${TYPE_MS}ms, 0.75s`,
  };

  return (
    <div
      className={`splash-root${phase === "fade" ? " splash-root--hide" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${NAME}`}
    >
      <div className="splash-inner">
        <span className="splash-typer" style={typerStyle}>
          <span className="splash-typer-text">{NAME}</span>
        </span>
      </div>
    </div>
  );
}