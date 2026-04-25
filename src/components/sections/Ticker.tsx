import React from 'react';

const brands = [
  "HARDWARE", "PROTOCOLS", "STRATEGY", "ARCHITECTURE", "SCALING", 
  "OPTIMIZATION", "INFRASTRUCTURE", "LOGIC", "PRECISION", "GROWTH"
];

function TickerRow({ direction = 'left', speed = '25s' }: { direction?: 'left' | 'right', speed?: string }) {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  
  return (
    <div className="flex overflow-hidden marquee-container py-2 select-none border-b border-accent-border/10">
      <div 
        className={`flex whitespace-nowrap marquee-content ${animationClass}`}
        style={{ animationDuration: speed }}
      >
        {/* Triple for seamlessness */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {brands.map((brand) => (
              <span key={brand} className="text-white/20 font-code font-bold text-4xl mx-12">
                {brand}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  return (
    <div className="bg-background-hero py-4 border-t border-white/5 overflow-hidden">
      <TickerRow direction="left" speed="35s" />
      <TickerRow direction="right" speed="30s" />
    </div>
  );
}