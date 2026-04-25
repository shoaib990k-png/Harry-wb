import { cn } from "@/lib/utils";

export function Pill({ 
  children, 
  className,
  clickable = false
}: { 
  children: React.ReactNode; 
  className?: string;
  clickable?: boolean;
}) {
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full label-mono text-[10px] bg-background-muted border border-accent-border text-text-secondary transition-all duration-200",
      clickable ? "cursor-pointer hover:bg-accent-blueLight hover:border-accent-blue" : "cursor-default",
      className
    )}>
      {children}
    </span>
  );
}