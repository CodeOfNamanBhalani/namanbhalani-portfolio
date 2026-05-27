import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <GlassCard className="text-center md:p-12">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Let&apos;s build
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Ready for your next intern who ships end-to-end?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Mobile, web, APIs, cloud — I learn fast and deliver with intention.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact/" className="btn-primary rounded-full px-6 py-3 text-sm font-medium">
            Start a conversation
          </Link>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Download resume
          </a>
        </div>
      </GlassCard>
    </section>
  );
}
