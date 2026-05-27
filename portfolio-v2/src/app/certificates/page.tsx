import { createMetadata } from "@/lib/seo";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { CertificateGallery } from "@/components/certificates/CertificateGallery";

export const metadata = createMetadata({
  title: "Certificates",
  description:
    "Professional certificates — IBM, Google Cloud, Udemy, Deloitte, and industry internships.",
  path: "/certificates/",
});

export default function CertificatesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        eyebrow="Credentials"
        title="Certificates & achievements"
        description="Click any certificate to view full size."
      />
      <CertificateGallery />
    </div>
  );
}
