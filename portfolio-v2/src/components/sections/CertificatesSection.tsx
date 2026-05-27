"use client";

import { useState } from "react";
import { certificates, certificateSrc, type Certificate } from "@/content/certificates";
import { X } from "lucide-react";
import {
  CardHoverPreview,
  useCanHover,
} from "@/components/shared/CardHoverPreview";
import {
  CertificateLightboxContent,
  CertificateThumbnail,
} from "@/components/certificates/CertificateMedia";

export function CertificatesSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const canHover = useCanHover();

  return (
    <section id="certificates" className="section-container">
      <p className="hero-eyebrow mb-6">
        <span className="hero-eyebrow-dot" aria-hidden />
        Certificates
      </p>
      <h2 className="section-heading mb-3">Credentials &amp; learning</h2>
      <p className="mb-8 max-w-xl text-muted">
        {certificates.length} certificates — internships, AI/ML, cloud simulations, and
        development programs. Click any card to view full size.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certificates.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setSelected(cert)}
            className="group hero-stat-card relative text-left transition hover:border-white/20"
          >
            {cert.type === "image" && (
              <CardHoverPreview
                enabled={canHover}
                data={{
                  image: certificateSrc(cert.file),
                  title: cert.name,
                  subtitle: cert.organization,
                  description: cert.description,
                  imageFit: "contain",
                }}
              />
            )}

            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg">
              <CertificateThumbnail cert={cert} className="transition group-hover:scale-[1.02]" />
            </div>
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium leading-snug">{cert.name}</p>
              {cert.year && (
                <span className="shrink-0 text-[10px] text-muted">{cert.year}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-accent">{cert.organization}</p>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate full view"
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            className="max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-background p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 pr-8">
              <p className="text-lg font-semibold">{selected.name}</p>
              <p className="text-sm text-accent">{selected.organization}</p>
              {selected.description && (
                <p className="mt-1 text-sm text-muted">{selected.description}</p>
              )}
            </div>
            <CertificateLightboxContent cert={selected} />
            {selected.type === "pdf" && (
              <a
                href={certificateSrc(selected.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-accent hover:underline"
              >
                Open PDF in new tab
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
