import { siteConfig } from "@/lib/site";

export const aboutContent = {
  headline: "Engineering software that ships — not just demos.",
  intro: `I build production-grade software across the stack — native Android (Java) and cross-platform mobile (Flutter/Dart), modern web (React, TypeScript, Tailwind), and backend services in Python with Flask REST APIs deployed on cloud platforms (Firebase, Google Cloud, Vercel).

My recent IBM AI/ML internship deepened my work with Generative AI, machine learning pipelines, and thoughtful system design. I care equally about clean architecture, Data Structures & Algorithms, and shipping products people actually use.`,
  highlights: [
    {
      label: "Education",
      value: `B.Tech Computer Science Engineering — ${siteConfig.semester} semester`,
    },
    { label: "CGPA", value: siteConfig.cgpa },
    { label: "Achievement", value: "Ranked in Top 3% of students" },
    { label: "Location", value: siteConfig.location },
    { label: "Status", value: "Open to Software Developer Internships" },
  ],
  focus: [
    "End-to-end product development (mobile + web + API)",
    "Flask REST APIs & cloud deployment",
    "Flutter & native Android with polished UI/UX",
    "DSA, system thinking, and maintainable code",
  ],
  philosophy: `Whether it's a budget tracker on Flutter, a health records web app, or an API behind a dashboard — I approach every build with the same standard: clear architecture, tested flows, and interfaces that feel intentional. I'm not a surface-level learner; I go deep on the tools I ship with.`,
};
