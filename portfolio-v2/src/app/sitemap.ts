import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

const base = siteConfig.url.replace(/\/$/, "");

const staticRoutes = [
  "",
  "/about/",
  "/work/",
  "/skills/",
  "/experience/",
  "/certificates/",
  "/contact/",
  "/resume/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectEntries = projects.map((p) => ({
    url: `${base}/work/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
