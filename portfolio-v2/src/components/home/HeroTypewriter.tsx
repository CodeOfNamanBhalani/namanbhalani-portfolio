"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Software Developer",
  "Mobile App Developer",
  "Full Stack Engineer",
  "AI Enthusiast",
] as const;

// Typing feel tuning (intentionally slow & calm).
const TYPING_SPEED = 200; // ms per character
const ERASE_SPEED = 120; // ms per character when deleting
const HOLD_MS = 2500; // pause when full phrase is typed

export function HeroTypewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = PHRASES[index];

    const isComplete = !isDeleting && text === full;
    const isEmpty = isDeleting && text === "";

    let delay = TYPING_SPEED;

    if (isComplete) {
      delay = HOLD_MS;
    } else if (isEmpty) {
      delay = 600; // small pause before starting next phrase
    } else if (isDeleting) {
      delay = ERASE_SPEED;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setIsDeleting(true);
      } else {
        const next = full.slice(0, Math.max(0, text.length - 1));
        setText(next);

        if (next === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % PHRASES.length);
        }
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [index, isDeleting, text]);

  return (
    <span className="hero-typewriter">
      <span className="hero-typewriter-text">{text}</span>
      <span className="hero-typewriter-cursor" aria-hidden />
    </span>
  );
}

