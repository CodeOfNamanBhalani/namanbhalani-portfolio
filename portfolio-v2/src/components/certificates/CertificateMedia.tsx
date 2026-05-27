"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import type { Certificate } from "@/content/certificates";
import { certificateSrc } from "@/content/certificates";

export function CertificateThumbnail({
  cert,
  className = "",
}: {
  cert: Certificate;
  className?: string;
}) {
  const src = certificateSrc(cert.file);

  if (cert.type === "pdf") {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-white/[0.04] text-muted ${className}`}
      >
        <FileText size={40} strokeWidth={1.25} className="text-accent" />
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">
          PDF · Click to view
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={cert.name}
      fill
      className={`object-contain p-1 ${className}`}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  );
}

export function CertificateLightboxContent({
  cert,
}: {
  cert: Certificate;
}) {
  const src = certificateSrc(cert.file);

  if (cert.type === "pdf") {
    return (
      <iframe
        src={src}
        title={cert.name}
        className="h-[85vh] w-full rounded-xl bg-white"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={cert.name}
      width={1200}
      height={900}
      className="h-auto max-h-[85vh] w-full object-contain"
    />
  );
}
