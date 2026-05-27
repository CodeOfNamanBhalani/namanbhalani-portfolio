import { createMetadata } from "@/lib/seo";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = createMetadata({
  title: "Resume",
  description: "Resume of Naman Bhalani — Software Developer.",
  path: "/resume/",
});

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionTitle
        eyebrow="Resume"
        title="Curriculum Vitae"
        description="View inline or download the PDF."
      />
      <a
        href="/resume.pdf"
        download
        className="btn-primary mb-6 inline-block rounded-full px-5 py-2.5 text-sm font-medium"
      >
        Download PDF
      </a>
      <div className="overflow-hidden rounded-2xl border border-foreground/10">
        <iframe
          src="/resume.pdf"
          title="Naman Bhalani Resume"
          className="h-[80vh] w-full"
        />
      </div>
    </div>
  );
}
