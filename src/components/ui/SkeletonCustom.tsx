import { cn } from "@/lib/utils";

export function SkeletonBase({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-accent-border animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-accent-border via-[#F1F5F9] to-accent-border",
        className
      )}
    />
  );
}

export function SkeletonCard({ 
  lines = 3, 
  showImage = true, 
  className 
}: { 
  lines?: number; 
  showImage?: boolean; 
  className?: string 
}) {
  return (
    <div className={cn("p-6 bg-white border border-accent-border rounded-lg space-y-4", className)}>
      {showImage && <SkeletonBase className="aspect-video w-full rounded-md" />}
      <div className="space-y-2">
        <SkeletonBase className="h-6 w-2/3 rounded-md" />
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonBase 
            key={i} 
            className={cn("h-4 rounded-md", i === lines - 1 ? "w-3/4" : "w-full")} 
          />
        ))}
      </div>
      <SkeletonBase className="h-10 w-32 rounded-lg" />
    </div>
  );
}

export function SkeletonText({ width = "w-full", height = "h-4" }: { width?: string; height?: string }) {
  return <SkeletonBase className={cn(height, width, "rounded-md")} />;
}