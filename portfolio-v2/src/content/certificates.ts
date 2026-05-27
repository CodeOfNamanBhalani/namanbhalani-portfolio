export type CertificateType = "image" | "pdf";

export type Certificate = {
  id: string;
  name: string;
  organization: string;
  description: string;
  /** Filename under public/images/certificates/ */
  file: string;
  type: CertificateType;
  year?: string;
};

/** Build a safe public URL for certificate assets (handles spaces in filenames). */
export function certificateSrc(file: string): string {
  return `/images/certificates/${encodeURIComponent(file)}`;
}

/**
 * Ordered for portfolio display:
 * 1. Internship completion
 * 2. Hackathons & AI/ML
 * 3. IBM / professional programs
 * 4. Industry job simulations
 * 5. Development courses
 * 6. Other achievements
 */
export const certificates: Certificate[] = [
  // —— Internships ——
  {
    id: "ibm-aiml-internship",
    name: "AI/ML Internship — Completion",
    organization: "IBM · Edunet Foundation (AICTE)",
    description:
      "One-month AI/ML internship covering generative AI, ML pipelines, and Python for data-driven applications.",
    file: "aicte internship.jpg",
    type: "image",
    year: "2025",
  },
  {
    id: "valueofcodes-internship",
    name: "Java Developer Internship — Completion",
    organization: "ValueOfCodes",
    description:
      "One-month Core Java internship focused on OOP, software design, and development best practices.",
    file: "vaultofcode internship.jpg",
    type: "image",
    year: "2025",
  },
  {
    id: "quicksend-internship",
    name: "Flutter Developer Internship — Completion",
    organization: "Quicksend",
    description:
      "15-day offline Flutter internship building cross-platform mobile apps with Dart and modern UI patterns.",
    file: "certificate flutter oflline internship.jpg",
    type: "image",
    year: "2024",
  },
  {
    id: "whitestone-internship",
    name: "Full Stack Developer Internship — Completion",
    organization: "WhiteSton Info Tech",
    description:
      "15-day full-stack internship building responsive web apps with HTML, CSS, and JavaScript.",
    file: "whitestone internship.jpg",
    type: "image",
    year: "2024",
  },

  // —— Hackathons & AI/ML ——
  {
    id: "isro hackathon",
    name: "Hackathon / Program Certificate",
    organization: "Hack2skill",
    description: "Recognition from Hack2skill technology program or hackathon participation.",
    file: "Hack2skill-Certificate.png",
    type: "image",
    year: "2025",
  },
  {
    id: "ai-agent-hackathon",
    name: "AI Agent Hackathon",
    organization: "Hackathon Program",
    description: "Certificate of participation or achievement in an AI Agent hackathon.",
    file: "40.AI Agent hackathon.jpg",
    type: "image",
    year: "2025",
  },
  {
    id: "hp-ai",
    name: "Artificial Intelligence",
    organization: "HP",
    description: "HP AI certification covering foundational artificial intelligence concepts.",
    file: "ai hp.jpg",
    type: "image",
  },
  {
    id: "ai-primer",
    name: "Artificial Intelligence Primer",
    organization: "Professional Certification",
    description: "AI Primer certification covering core AI concepts and applications.",
    file: "47.Artificial Intelligence Primer Certification.jpg",
    type: "image",
  },
  {
    id: "coursera",
    name: "Coursera Specialization / Course",
    organization: "Coursera",
    description: "Course completion certificate via Coursera (April 2025).",
    file: "4.Coursera 10-4-25.jpg",
    type: "image",
    year: "2025",
  },

  // —— IBM & professional programs ——
  {
    id: "ibm-design",
    name: "IBM Certificate",
    organization: "IBM",
    description: "IBM professional learning certificate (Design / technology program, July 2025).",
    file: "4.31IBMDesign20250729-30-cls2fx.jpg",
    type: "image",
    year: "2025",
  },
  {
    id: "unstop",
    name: "Unstop Achievement",
    organization: "Unstop",
    description: "Certificate from Unstop — competitions, challenges, or learning programs.",
    file: "5.33.unstop.jpg",
    type: "image",
  },

  // —— Industry job simulations ——
  {
    id: "deloitte",
    name: "Technology Job Simulation",
    organization: "Deloitte",
    description:
      "Deloitte technology job simulation — real-world industry challenges and professional workflows.",
    file: "1.14.Deloitte.jpg",
    type: "image",
  },
  {
    id: "aws-simulation",
    name: "AWS Job Simulation",
    organization: "Amazon Web Services",
    description:
      "Hands-on AWS job simulation exploring cloud workflows and industry-style problem solving.",
    file: "aws job simulation.jpg",
    type: "image",
  },

  // —— Development courses ——
  {
    id: "android-udemy",
    name: "Full Android Development Masterclass",
    organization: "Udemy",
    description: "Complete Android development course from fundamentals to advanced topics.",
    file: "3.29.android udamy.jpg",
    type: "image",
  },
  {
    id: "python-udemy",
    name: "Python Complete Course",
    organization: "Udemy",
    description: "Python programming from beginner to advanced with practical exercises.",
    file: "6.python udamy.jpg",
    type: "image",
  },

  // —— Other ——
  {
    id: "achievement-named",
    name: "Certificate of Achievement",
    organization: "Program Completion",
    description: "Personal certificate of completion issued in the name of Naman Bhalani.",
    file: "37 . Bhalani Naman S.png",
    type: "image",
  },
];
