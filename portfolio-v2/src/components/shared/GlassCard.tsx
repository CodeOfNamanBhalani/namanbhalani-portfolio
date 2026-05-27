import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-foreground/10 bg-card p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
