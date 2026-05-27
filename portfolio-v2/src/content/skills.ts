export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core languages I write production code in daily.",
    skills: ["Java", "Python", "Dart", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Mobile",
    description: "Native and cross-platform apps with real-world UX.",
    skills: [
      "Flutter",
      "Dart",
      "Android (Java)",
      "Android Studio",
      "Material Design",
      "SQLite",
    ],
  },
  {
    title: "Web",
    description: "Modern, responsive, and performant frontends.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Server logic, REST, and data layers.",
    skills: [
      "Flask",
      "REST APIs",
      "Python",
      "Firebase",
      "SQLite",
      "JSON / HTTP",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and hosting production workloads.",
    skills: [
      "Google Cloud",
      "Firebase Hosting",
      "Vercel",
      "Git & GitHub",
      "GitHub Actions",
      "Environment config",
    ],
  },
  {
    title: "AI / ML",
    description: "Applied AI from coursework and IBM internship.",
    skills: [
      "Generative AI",
      "Machine Learning basics",
      "Deep Learning concepts",
      "scikit-learn",
      "IBM Skill Build",
    ],
  },
  {
    title: "Core CS",
    description: "Foundations that scale across every stack.",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Problem Solving",
      "System Design basics",
    ],
  },
];
