export type ProjectCategory =
  | "all"
  | "flutter"
  | "android"
  | "web"
  | "flask"
  | "ai-ml";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  category: Exclude<ProjectCategory, "all">;
  tags: string[];
  image: string;
  gallery: string[];
  github?: string;
  live?: string;
  featured: boolean;
  year: string;
};

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "flutter", label: "Flutter" },
  { id: "android", label: "Android" },
  { id: "web", label: "Web" },
  { id: "flask", label: "Python / Flask" },
  { id: "ai-ml", label: "AI / ML" },
];

export const projects: Project[] = [
  {
    slug: "sant-masala-billing",
    title: "Sant Masala Billing Software",
    shortDescription:
      "PWA-based grocery billing/POS software with thermal printer support and bilingual bills.",
    description:
      "A production-ready Flask billing platform for grocery stores with POS workflows, inventory/product management, and admin analytics. Built as a Progressive Web App so it runs smoothly on desktop, tablet, and phone.",
    problem:
      "Small grocery stores need fast billing, printer support, and simple product handling without expensive enterprise POS systems.",
    approach:
      "Implemented Flask backend + modern web frontend with category-wise product selection, multi-variant pricing, cart management, GST/discount logic, and ESC/POS thermal print integrations (USB, Bluetooth, browser fallback).",
    outcome:
      "Delivered a bilingual (English/Gujarati) billing system that supports daily operations, mobile usage, and offline-friendly PWA behavior.",
    category: "flask",
    tags: ["Flask", "PWA", "POS", "Thermal Printing", "SQLite", "JavaScript"],
    image: "/images/projects/billing%20software%20in%20flask.png",
    gallery: ["/images/projects/billing%20software%20in%20flask.png"],
    featured: true,
    year: "2025",
  },
  {
    slug: "employee-salary-prediction",
    title: "Employee Salary Prediction",
    shortDescription:
      "ML pipeline for income prediction with preprocessing, model comparison, and deployment-ready persistence.",
    description:
      "A complete machine learning system that preprocesses Adult Census data, engineers features, compares multiple algorithms, and persists the selected model for inference.",
    problem:
      "Salary classification datasets contain noisy categories, outliers, and mixed feature types that reduce model reliability without a clean pipeline.",
    approach:
      "Built a structured pipeline with missing-value handling, outlier filtering, categorical encoding, scaling, train-test split, and benchmarked Logistic Regression, Random Forest, KNN, SVM, Gradient Boosting, Decision Tree, Naive Bayes, and MLP.",
    outcome:
      "Produced a reproducible model training framework with measurable performance comparison and deployable serialized model artifacts.",
    category: "ai-ml",
    tags: ["Python", "Machine Learning", "scikit-learn", "Pandas", "Model Evaluation"],
    image: "/images/projects/salary%20pridiction.png",
    gallery: ["/images/projects/salary%20pridiction.png"],
    featured: true,
    year: "2025",
  },
  {
    slug: "student-academic-planner",
    title: "Student Academic Planner",
    shortDescription:
      "Full-stack Flutter app for timetable, assignments, exams, notes, and notices with REST API backend.",
    description:
      "An all-in-one student productivity application with secure authentication, dashboard insights, timetable management, assignment tracking, exam schedules, notes, and campus notices.",
    problem:
      "Students often juggle classes, assignments, and exams across multiple disconnected tools, causing poor planning and missed deadlines.",
    approach:
      "Designed a Flutter client with Provider state management and integrated it with a JWT-secured REST API and PostgreSQL. Added role-based notice workflows, reminders, and cloud synchronization.",
    outcome:
      "Shipped a scalable academic companion with clean UX, robust backend integration, and daily-use workflow optimization for students.",
    category: "flutter",
    tags: ["Flutter", "Dart", "REST API", "PostgreSQL", "JWT", "Provider"],
    image: "/images/projects/acedly.jpeg",
    gallery: ["/images/projects/acedly.jpeg"],
    featured: true,
    year: "2025",
  },
  {
    slug: "zerowaste",
    title: "ZeroWaste",
    shortDescription:
      "Food donation coordination app connecting donors and recipients with pickup workflows.",
    description:
      "A Flutter mobile application with Flask API integration to reduce food waste by enabling donation listing, pickup requests, and verified completion flows.",
    problem:
      "Usable surplus food often goes to waste because donors and recipients lack a real-time coordination platform.",
    approach:
      "Implemented donation lifecycle management, pickup status tracking, QR verification, in-app notifications, map-based discovery, and impact analytics.",
    outcome:
      "Created a practical social-impact platform that improves donation efficiency and transparent pickup execution.",
    category: "flutter",
    tags: ["Flutter", "Flask", "QR Verification", "Maps", "Notifications", "Impact Analytics"],
    image: "/images/projects/zerowast.jpeg",
    gallery: ["/images/projects/zerowast.jpeg"],
    featured: true,
    year: "2025",
  },
  {
    slug: "agromart-ecommerce",
    title: "AgroMart",
    shortDescription:
      "Agricultural e-commerce platform with Firebase backend and full admin operations panel.",
    description:
      "A modern e-commerce web solution focused on agricultural products, including product discovery, cart, checkout, user auth, and an analytics-driven admin dashboard.",
    problem:
      "Agri-retail workflows need simple digital commerce with inventory control, order status tracking, and operational visibility.",
    approach:
      "Built with vanilla JavaScript, Tailwind CSS, and Firebase Firestore. Added role-based admin tools for product CRUD, order updates, stock alerts, and feedback moderation.",
    outcome:
      "Delivered a responsive, production-style commerce experience with real-time data sync and scalable cloud persistence.",
    category: "web",
    tags: ["JavaScript", "Tailwind CSS", "Firebase", "Firestore", "E-commerce", "Admin Panel"],
    image: "/images/projects/AgroMart.png",
    gallery: ["/images/projects/AgroMart.png"],
    featured: true,
    year: "2025",
  },
  {
    slug: "vibecoder",
    title: "VibeCoder",
    shortDescription:
      "Full-stack React + Firebase platform for AI problem solving, prompt libraries, and workflows.",
    description:
      "A community-driven web platform where developers post AI coding problems, share answers, discover curated prompts, and follow structured AI workflows.",
    problem:
      "Developers need a focused space for collaborative AI debugging, prompt iteration, and reusable solution knowledge.",
    approach:
      "Implemented React frontend with Firebase Auth + Firestore backend, protected routes, profile system, voting, best-answer logic, reputation/badges, prompt editor, and workflow tracking.",
    outcome:
      "Built a feature-rich AI collaboration product combining community Q&A and prompt engineering resources in one scalable platform.",
    category: "web",
    tags: ["React", "Firebase", "Firestore", "Authentication", "Prompt Engineering", "Community"],
    image: "/images/projects/vibezcoder.png",
    gallery: ["/images/projects/vibezcoder.png"],
    featured: true,
    year: "2025",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
