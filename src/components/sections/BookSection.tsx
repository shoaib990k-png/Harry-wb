"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BookSection() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultTransform = 'rotateY(-5deg) rotateX(3deg)';
  const hoverTransform = 'rotateY(5deg) rotateX(-3deg) scale(1.04)';
  
  const defaultShadow = '-8px 8px 30px rgba(0,0,0,0.6)';
  const hoverShadow = '-12px 12px 40px rgba(0,0,0,0.7), 0 0 30px rgba(59,130,246,0.15)';

  const commonImgStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px 12px 12px 4px',
    transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease',
    transform: isHovered ? hoverTransform : defaultTransform,
    boxShadow: isHovered ? hoverShadow : defaultShadow,
  };

  return (
    <section className="section-padding bg-background-muted overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex justify-center items-center relative py-12">
            <div 
              className="relative w-[280px] h-[400px] cursor-pointer"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Back Image (Underneath) */}
              <img 
                src="/img/book2.png" 
                alt="Book Back" 
                style={{ 
                  ...commonImgStyle, 
                  opacity: isHovered ? 1 : 0,
                  zIndex: 1 
                }} 
              />
              
              {/* Front Image (Top) */}
              <img 
                src="/img/book1.png" 
                alt="Book Front" 
                style={{ 
                  ...commonImgStyle, 
                  opacity: isHovered ? 0 : 1,
                  zIndex: 2 
                }} 
              />
            </div>
          </div>

          <div className="max-w-xl">
            <span className="label-mono text-text-muted mb-4 block">THE STRATEGIC MANIFESTO</span>
            
            <h2 className="text-text-primary text-4xl lg:text-5xl font-bold mb-4">
              The <span className="text-accent-blue">Quantum</span> Advantage
            </h2>
            
            <h3 className="text-accent-blue font-bold text-lg mb-8">
              Why Early Movers Will Own Tomorrow's Markets
            </h3>
            
            <p className="text-text-secondary mb-10 leading-relaxed">
              In his latest work, <strong>Joel Kremer</strong> breaks down the complex intersection of 
              high-speed hardware and aggressive market strategy. This is the definitive blueprint 
              for the next generation of global industry leaders.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Mastering early-mover market advantage",
                "Infrastructure optimization for extreme scaling",
                "The logic of first-strike technical strategy",
                "Building resilient technical guardrails"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button asChild size="lg" className="bg-accent-blue hover:bg-accent-navy text-white px-8 h-14 uppercase font-bold tracking-widest text-xs rounded-xl shadow-lg btn-hover-effect">
                <Link href="/contact">Order Hardcover</Link>
              </Button>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="border-2 border-white w-8 h-8">
                      <AvatarImage src={`https://picsum.photos/seed/${i + 10}/100/100`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-[10px] text-text-muted font-bold">15,000+ copies sold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
