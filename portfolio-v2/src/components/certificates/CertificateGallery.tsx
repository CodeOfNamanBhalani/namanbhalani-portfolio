"use client";

import { useState } from "react";
import { certificates, certificateSrc, type Certificate } from "@/content/certificates";
import {
  CardHoverPreview,
  useCanHover,
} from "@/components/shared/CardHoverPreview";
import {
  CertificateLightboxContent,
  CertificateThumbnail,
} from "@/components/certificates/CertificateMedia";

export function CertificateGallery() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const canHover = useCanHover();

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setSelected(cert)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card text-left hover:border-white/25"
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

            <div className="relative aspect-[4/3]">
              <CertificateThumbnail cert={cert} />
            </div>
            <div className="p-4">
              <p className="font-mono text-xs text-muted">{cert.organization}</p>
              <h3 className="mt-1 font-semibold">{cert.name}</h3>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-white/10 bg-background p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="mb-4 rounded-full border border-white/10 px-3 py-1 text-sm"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
            <h3 className="text-xl font-semibold">{selected.name}</h3>
            <p className="text-sm text-accent">{selected.organization}</p>
            <p className="mt-2 text-sm text-muted">{selected.description}</p>
            <div className="mt-4">
              <CertificateLightboxContent cert={selected} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
