import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("label-mono text-text-muted mb-3 block", className)}>
      {children}
    </span>
  );
}