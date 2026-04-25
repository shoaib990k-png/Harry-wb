import { cn } from "@/lib/utils";

export function SkeletonBase({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-accent-border animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-accent-border via-slate-100 to-accent-border",
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
    <div className={cn("p-4 sm:p-6 bg-white border border-accent-border rounded-xl space-y-4 w-full h-full flex flex-col", className)}>
      {showImage && <SkeletonBase className="aspect-video w-full rounded-lg shrink-0" />}
      <div className="space-y-3 flex-1">
        <SkeletonBase className="h-6 w-3/4 sm:w-2/3 rounded-md" />
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <SkeletonBase 
              key={i} 
              className={cn("h-3.5 sm:h-4 rounded-md", i === lines - 1 ? "w-4/5 sm:w-3/4" : "w-full")} 
            />
          ))}
        </div>
      </div>
      <div className="pt-2">
        <SkeletonBase className="h-10 sm:h-12 w-32 sm:w-40 rounded-lg" />
      </div>
    </div>
  );
}

export function SkeletonText({ width = "w-full", height = "h-4" }: { width?: string; height?: string }) {
  return <SkeletonBase className={cn(height, width, "rounded-md")} />;
}