import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { aboutContent } from "@/content/about";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Naman Bhalani — full-stack developer across Flutter, Android, React, Flask, and cloud.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        eyebrow="About"
        title={aboutContent.headline}
        description={aboutContent.intro}
      />
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={siteConfig.profileImagePath}
            alt="Naman Bhalani"
            fill
            className="object-cover"
            sizes="280px"
            loading="lazy"
          />
        </div>
        <div className="space-y-6">
          <GlassCard>
            <h3 className="font-semibold">Philosophy</h3>
            <p className="mt-3 leading-relaxed text-muted">
              {aboutContent.philosophy}
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-semibold">Current focus</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {aboutContent.focus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutContent.highlights.map((h) => (
              <GlassCard key={h.label}>
                <p className="font-mono text-xs uppercase text-muted">
                  {h.label}
                </p>
                <p className="mt-2 font-medium">{h.value}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
