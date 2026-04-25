"use client";

import React, { useState, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function BookSection() {
  const bookImage = PlaceHolderImages.find(img => img.id === 'book-cover');
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
    <section className="section-padding bg-background-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Book */}
          <div className="flex justify-center perspective-[1000px]">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[400px] aspect-[3/4] group cursor-pointer animate-float"
            >
              {bookImage && (
                <Image
                  src={bookImage.imageUrl}
                  alt="Strategic Architect Book Cover"
                  fill
                  className="object-cover rounded-lg shadow-[20px_20px_60px_rgba(0,0,0,0.1)] border border-accent-border transition-all duration-300"
                />
              )}
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 rounded-lg pointer-events-none" />
              <div className="absolute -inset-4 bg-accent-blue/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div>
            <SectionLabel>THE INDUSTRY MANIFESTO</SectionLabel>
            <h2 className="mb-6">280 Pages of Pure <span className="text-accent-blue">Tactical Logic</span></h2>
            <p className="text-text-secondary mb-8 text-lg">
              "Strategic Architect" isn't just a book. It's the blueprint we use to build 9-figure infrastructures. 
              Learn the exact protocols for hardware optimization and market conquest.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Scaling infrastructure from zero to massive throughput",
                "Defining the logic layers that prevent data bottlenecks",
                "Strategic market positioning for technical products",
                "Case studies from world-class architecture projects"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <Button asChild size="lg" className="h-14 px-8 btn-hover-effect">
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
                  <p className="text-text-muted">Trusted by 12,000+ readers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}