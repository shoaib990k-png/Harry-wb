
"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { Pill } from '@/components/ui/Pill';

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
    <section className="section-padding bg-background-hero overflow-hidden text-white relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* 3D Interactive Book Showcase */}
          <div className="flex justify-center items-center perspective-[2000px] py-10 relative">
            <motion.div
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[340px] aspect-[1/1.4] cursor-pointer group z-10"
            >
              {/* Stacked Pages Effect (Thickness) */}
              <div 
                className="absolute inset-0 bg-white rounded-r-lg border-y border-r border-white/10" 
                style={{ transform: "translateZ(-2px)" }}
              />
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 bg-white rounded-r-lg border-r border-black/5 shadow-sm"
                  style={{ transform: `translateZ(-${(i + 1) * 2}px) translateX(${i * 0.1}px)` }}
                />
              ))}
              
              {/* Back Cover */}
              <div 
                className="absolute inset-0 bg-slate-900 rounded-lg shadow-2xl" 
                style={{ transform: "translateZ(-32px)" }}
              />

              {/* Main Book Visual Container with Crossfade */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden rounded-lg shadow-[50px_50px_100px_rgba(0,0,0,0.8)] border border-white/10"
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
                    alt="The Quantum Advantage Front"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Hover Image (Image 2) */}
                <motion.div 
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={hoverImage}
                    alt="The Quantum Advantage Angle"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay" />
                </motion.div>
                
                {/* Dynamic Lighting Shine */}
                <motion.div 
                  style={{ 
                    x: glowX, 
                    y: glowY,
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)"
                  }}
                  className="absolute -inset-full pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-[1px] bg-amber-500" />
              <span className="label-mono text-amber-500 tracking-[0.2em] text-[10px]">THE DEFINITIVE GUIDE</span>
            </div>
            
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              2.5 Years of <span className="text-accent-blue italic">Quantum Research</span>—Distilled.
            </h2>
            
            <p className="text-white/60 text-base mb-10 leading-relaxed font-light">
              Written for C-suite executives and infrastructure architects, this definitive guide navigates 
              the shift from classical sensing to quantum-grade security.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {["QUANTUM STRATEGY", "ENTERPRISE ROI", "SECURE COMMS", "R&D FRAMEWORKS"].map((tag) => (
                <Pill key={tag} className="bg-white/5 border-white/10 text-white/70 px-4 py-2 hover:bg-white/10 transition-colors">
                  {tag}
                </Pill>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button asChild size="lg" className="h-14 px-10 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-[0_10px_30px_rgba(245,158,11,0.2)]">
                <Link href="/contact">Get Your Copy →</Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="h-14 px-8 border-white/10 text-white hover:bg-white/5 rounded-xl">
                <Link href="#" className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                  <Download className="w-4 h-4" />
                  Free Chapter Preview
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
