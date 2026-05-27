import { createMetadata } from "@/lib/seo";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Portfolio projects — Flutter, Android, Web, Flask APIs, and AI/ML explorations.",
  path: "/work/",
});

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        eyebrow="Work"
        title="Projects with depth"
        description="Filter by technology or search by name."
      />
      <WorkGrid />
    </div>
  );
}
