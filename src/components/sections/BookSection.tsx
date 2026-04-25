
"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function BookSection() {
  const bookImage = PlaceHolderImages.find(img => img.id === 'book-cover');
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["25%", "-25%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["25%", "-25%"]);
  const imageScale = useTransform(mouseXSpring, [-0.5, 0.5], [1.02, 1.05]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="section-padding bg-background-muted overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 3D Mockup Container */}
          <div className="flex justify-center perspective-[2000px]">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[380px] aspect-[1/1.4] cursor-pointer group"
            >
              {/* Stacked Pages (Thickness) */}
              <div 
                className="absolute inset-0 bg-white rounded-r-lg border-y border-r border-accent-border/50" 
                style={{ transform: "translateZ(-1px)" }}
              />
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 bg-white rounded-r-lg border-r border-accent-border/10"
                  style={{ transform: `translateZ(-${(i + 1) * 2}px) translateX(${i * 0.2}px)` }}
                />
              ))}
              
              {/* Back Cover */}
              <div 
                className="absolute inset-0 bg-[#0F1624] rounded-lg shadow-2xl" 
                style={{ transform: "translateZ(-22px)" }}
              />

              {/* Main Front Cover */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden rounded-lg shadow-[20px_20px_60px_rgba(0,0,0,0.4)] border border-white/10"
                style={{ transform: "translateZ(0px)" }}
              >
                {bookImage && (
                  <motion.div 
                    style={{ scale: imageScale }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={bookImage.imageUrl}
                      alt="The Quantum Advantage - Joel Kremer"
                      fill
                      className="object-cover"
                      priority
                      data-ai-hint="business book"
                    />
                    {/* Dark Overlay for dramatic effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />
                  </motion.div>
                )}
                
                {/* Dynamic Shine Layer */}
                <motion.div 
                  style={{ 
                    x: glowX, 
                    y: glowY,
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)"
                  }}
                  className="absolute -inset-full pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                style={{ translateZ: "50px" }}
                className="absolute -top-4 -right-4 bg-accent-blue text-white label-mono px-4 py-2 rounded-lg shadow-xl z-20 font-bold"
              >
                BESTSELLER
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="max-w-xl">
            <SectionLabel>THE STRATEGIC MANIFESTO</SectionLabel>
            <h2 className="mb-4 leading-tight">The <span className="text-accent-blue">Quantum</span> Advantage</h2>
            <p className="text-accent-blue font-bold text-lg mb-6">
              Why Early Movers Will Own Tomorrow's Markets
            </p>
            <p className="text-text-secondary mb-8 text-base leading-relaxed">
              In his latest work, <strong>Joel Kremer</strong> breaks down the complex intersection of high-speed 
              hardware and aggressive market strategy. This is the definitive blueprint for the next 
              generation of global industry leaders.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Mastering early-mover market advantage",
                "Infrastructure optimization for extreme scaling",
                "The logic of first-strike technical strategy",
                "Building resilient technical guardrails"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button asChild size="lg" className="h-14 px-8 btn-hover-effect bg-accent-blue text-sm uppercase tracking-widest font-bold">
                <Link href="/contact">Order Hardcover</Link>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[51, 52, 53, 54].map((seed) => (
                    <div key={seed} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-accent-border relative shadow-sm">
                      <Image 
                        src={`https://picsum.photos/seed/${seed}/64/64`} 
                        alt="Reader" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="flex text-amber-500 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                  </div>
                  <p className="text-text-muted font-medium">Join 15,000+ readers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
