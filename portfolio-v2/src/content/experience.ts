export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  mode: string;
  description: string;
  skills: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "whitestone",
    role: "Full Stack Developer",
    company: "WhiteSton Info Tech",
    period: "June 1–15, 2024",
    mode: "Offline · 15 days",
    description:
      "Built responsive web applications with HTML, CSS, and JavaScript. Gained hands-on full-stack workflow experience from layout to interactive UI.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    id: "quicksend",
    role: "Flutter Developer",
    company: "Quicksend",
    period: "June 2–20, 2024",
    mode: "Offline · 15 days",
    description:
      "Developed cross-platform mobile applications using Flutter and Dart. Focused on mobile UI/UX patterns and state management.",
    skills: ["Flutter", "Dart", "Mobile UI/UX"],
  },
  {
    id: "ibm-aiml",
    role: "AI/ML Intern",
    company: "IBM (via Edunet Foundation)",
    period: "June 1–30, 2025",
    mode: "Online · 1 month",
    description:
      "Explored AI/ML pipelines, generative AI concepts, and practical implementation. Strengthened Python skills for data-driven applications.",
    skills: ["Python", "AI", "ML", "Generative AI"],
  },
  {
    id: "valueofcodes",
    role: "Java Developer",
    company: "ValueOfCodes",
    period: "June 1–30, 2025",
    mode: "Online · 1 month",
    description:
      "Focused on Core Java, OOP principles, and software development practices. Built foundation for enterprise-style Java backends.",
    skills: ["Core Java", "OOP", "Software Design"],
  },
];
