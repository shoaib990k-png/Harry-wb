
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
  
  // Motion values for tilt and parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // 3D Tilt rotations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Parallax layers movement
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["20%", "-20%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["20%", "-20%"]);
  const imageScale = useTransform(mouseXSpring, [-0.5, 0.5], [1.05, 1.1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize values between -0.5 and 0.5
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: 3D Interactive Book Card */}
          <div className="flex justify-center perspective-[1500px]">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[420px] aspect-[3/4] group cursor-pointer"
            >
              {/* Main Book Surface */}
              <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20">
                {bookImage && (
                  <motion.div 
                    style={{ scale: imageScale }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={bookImage.imageUrl}
                      alt="Strategic Architect Book Cover"
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </motion.div>
                )}
                
                {/* Parallax Glossy Shine/Glow Effect */}
                <motion.div 
                  style={{ 
                    x: glowX, 
                    y: glowY,
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)"
                  }}
                  className="absolute -inset-full pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Stacked Pages Effect (Visible on Tilt) */}
              <div 
                className="absolute inset-0 bg-white rounded-2xl translate-z-[-10px] shadow-sm border-r-4 border-accent-border/50" 
                style={{ transform: "translateZ(-10px)" }}
              />
              <div 
                className="absolute inset-0 bg-white/80 rounded-2xl translate-z-[-20px]" 
                style={{ transform: "translateZ(-20px)" }}
              />

              {/* Floating Ambient Shadow */}
              <div className="absolute -inset-10 bg-black/10 blur-[60px] rounded-full -z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Badge Overlay with Parallax */}
              <motion.div 
                style={{ translateZ: "40px" }}
                className="absolute top-6 right-6 bg-accent-blue text-white label-mono px-3 py-1.5 rounded-lg shadow-lg z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              >
                NEW EDITION
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>THE INDUSTRY MANIFESTO</SectionLabel>
            <h2 className="mb-6">The Blueprint for <span className="text-accent-blue">Modern Logic</span></h2>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              "Strategic Architect" translates complex low-level engineering into high-level market dominance. 
              This 280-page manual contains the exact protocols we use to design scalable architectures.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Hardware stack optimization for high-throughput",
                "Firmware-level networking logic protocols",
                "Strategic positioning for tech-heavy products",
                "Case studies from 9-figure scaling projects"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button asChild size="lg" className="h-14 px-8 btn-hover-effect bg-accent-blue">
                <Link href="/the-book">Order My Copy</Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[51, 52, 53, 54].map((seed) => (
                    <div key={seed} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-accent-border relative">
                      <Image 
                        src={`https://picsum.photos/seed/${seed}/64/64`} 
                        alt="Reader" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <div className="flex text-amber-500 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-text-muted">Trusted by 12,000+ engineers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
