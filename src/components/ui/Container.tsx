import { cn } from "@/lib/utils";
import React from "react";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto px-4 max-w-[1200px] w-full", className)}>
      {children}
    </div>
  );
}