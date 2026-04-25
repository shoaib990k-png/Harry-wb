"use client";

import React, { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-svh flex items-center bg-background-hero overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Strategic Background"
            fill
            className="object-cover opacity-30"
            priority
            data-ai-hint="technology network"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background-hero/40 via-background-hero/80 to-background-hero" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="label-mono text-accent-blue inline-block mb-4"
          >
            THE LOGIC LAYER FOR MODERN BUSINESS
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-white mb-6"
          >
            Engineering <span className="text-accent-blue">Precision</span> in Infrastructure & Strategy
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-white/70 text-lg mb-10 max-w-xl leading-relaxed"
          >
            We don't just advise. We build. Integrating custom hardware architectures 
            with optimized data protocols to fuel aggressive strategic growth.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <Button asChild size="lg" className="bg-accent-blue hover:bg-accent-navy transition-colors h-14 px-8 min-w-[160px]">
              <Link href="/contact">Launch Partnership</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 min-w-[160px]">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10"
          >
            <div>
              <p className="text-white text-3xl font-bold mb-1"><Counter value={2} suffix=".5YR" /></p>
              <p className="label-mono text-white/40 text-[10px]">Market Presence</p>
            </div>
            <div>
              <p className="text-white text-3xl font-bold mb-1"><Counter value={3} suffix="" /></p>
              <p className="label-mono text-white/40 text-[10px]">Strategic Pillars</p>
            </div>
            <div>
              <p className="text-white text-3xl font-bold mb-1"><Counter value={280} suffix="+" /></p>
              <p className="label-mono text-white/40 text-[10px]">Pages of Logic</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}