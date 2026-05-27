import type { Metadata } from "next";
import { siteConfig } from "./site";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${siteConfig.profileImagePath}`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: desc,
      images: [`${siteConfig.url}${siteConfig.profileImagePath}`],
    },
    robots: { index: true, follow: true },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    image: `${siteConfig.url}${siteConfig.profileImagePath}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhavnagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.codolio],
    url: siteConfig.url,
    knowsAbout: [
      "Flutter",
      "Android",
      "React",
      "Next.js",
      "Python",
      "Flask",
      "REST APIs",
      "Google Cloud",
      "Generative AI",
      "Machine Learning",
    ],
  };
}
