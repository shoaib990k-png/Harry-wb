import React from 'react';
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  center?: boolean;
}

export function Spinner({ size = 'md', className, center = false }: SpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4 sm:w-5 sm:h-5',
    md: 'w-6 h-6 sm:w-8 sm:h-8',
    lg: 'w-10 h-10 sm:w-12 sm:h-12',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const spinnerContent = (
    <svg
      className={cn("animate-spin text-accent-blue mx-auto", sizes[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  if (center) {
    return (
      <div className="flex items-center justify-center w-full p-4 min-h-[100px] sm:min-h-[150px]">
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
}
