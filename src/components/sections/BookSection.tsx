
"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function BookSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  const frontImage = PlaceHolderImages.find(img => img.id === 'book-front')?.imageUrl || "";
  const hoverImage = PlaceHolderImages.find(img => img.id === 'book-hover')?.imageUrl || "";
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["30%", "-30%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["30%", "-30%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section className="section-padding bg-background-muted overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 3D Interactive Book Showcase */}
          <div className="flex justify-center perspective-[2000px] py-10">
            <motion.div
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[340px] aspect-[1/1.4] cursor-pointer group"
            >
              {/* Stacked Pages Effect (Thickness) */}
              <div 
                className="absolute inset-0 bg-white rounded-r-lg border-y border-r border-accent-border/50" 
                style={{ transform: "translateZ(-2px)" }}
              />
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 bg-white rounded-r-lg border-r border-accent-border/10 shadow-sm"
                  style={{ transform: `translateZ(-${(i + 1) * 2}px) translateX(${i * 0.15}px)` }}
                />
              ))}
              
              {/* Back Cover */}
              <div 
                className="absolute inset-0 bg-[#0F1624] rounded-lg shadow-2xl" 
                style={{ transform: "translateZ(-26px)" }}
              />

              {/* Main Book Visual Container */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden rounded-lg shadow-[30px_30px_70px_rgba(0,0,0,0.5)] border border-white/10"
                style={{ transform: "translateZ(0px)" }}
              >
                {/* Front Image (Image 1) */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={frontImage}
                    alt="The Quantum Advantage - Front View"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint="business book"
                  />
                </motion.div>

                {/* Hover Image (Image 2 - Angled/Other View) */}
                <motion.div 
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={hoverImage}
                    alt="The Quantum Advantage - Detail View"
                    fill
                    className="object-cover"
                    data-ai-hint="book mockup"
                  />
                  {/* Overlay for cinematic feel on hover */}
                  <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay" />
                </motion.div>
                
                {/* Dynamic Parallax Shine / Lighting */}
                <motion.div 
                  style={{ 
                    x: glowX, 
                    y: glowY,
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)"
                  }}
                  className="absolute -inset-full pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Floating Best Seller Badge */}
              <motion.div 
                style={{ translateZ: "40px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-accent-blue text-white label-mono px-5 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(43,108,176,0.4)] z-20 font-bold flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                #01 BESTSELLER
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="max-w-xl">
            <SectionLabel>THE STRATEGIC MANIFESTO</SectionLabel>
            <h2 className="mb-4 leading-tight">The <span className="text-accent-blue">Quantum</span> Advantage</h2>
            <p className="text-accent-blue font-bold text-lg mb-6 tracking-tight">
              Why Early Movers Will Own Tomorrow's Markets
            </p>
            <p className="text-text-secondary mb-8 text-base leading-relaxed">
              In his latest work, <strong>Joel Kremer</strong> breaks down the complex intersection of high-speed 
              hardware and aggressive market strategy. This is the definitive blueprint for the next 
              generation of global industry leaders who refuse to follow.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Mastering early-mover market advantage",
                "Infrastructure optimization for extreme scaling",
                "The logic of first-strike technical strategy",
                "Building resilient technical guardrails"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue transition-transform group-hover:scale-110" />
                  </div>
                  <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <Button asChild size="lg" className="h-14 px-10 btn-hover-effect bg-accent-blue text-[10px] uppercase tracking-widest font-bold shadow-xl">
                <Link href="/contact">Order Hardcover</Link>
              </Button>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[51, 52, 53, 54].map((seed) => (
                    <div key={seed} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-accent-border relative shadow-lg">
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
                  <div className="flex text-amber-500 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-text-muted font-bold">15,000+ copies sold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
