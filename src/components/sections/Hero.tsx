"use client";

import React, { useEffect, useState, memo } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Counter = memo(({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    const animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [value]);

  return <span>{count}{suffix}</span>;
});

Counter.displayName = 'Counter';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[85svh] sm:min-h-svh flex items-center bg-background-hero overflow-hidden py-16 sm:py-20 pt-28 sm:pt-32">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Strategic Background"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            quality={75}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background-hero/70 via-background-hero/90 to-background-hero" />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="label-mono text-accent-blue inline-block mb-3 sm:mb-4"
          >
            THE LOGIC LAYER FOR MODERN BUSINESS
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-white mb-4 sm:mb-6 leading-tight"
          >
            Engineering <span className="text-accent-blue">Precision</span> in Infrastructure
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed"
          >
            We don't just advise. We build. Integrating custom hardware architectures 
            with optimized protocols to fuel aggressive strategic growth.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button asChild size="lg" className="bg-accent-blue hover:bg-accent-navy text-white transition-colors h-12 sm:h-14 px-8 w-full sm:w-auto">
              <Link href="/contact">Launch Partnership</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 h-12 sm:h-14 px-8 w-full sm:w-auto">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8 sm:pt-10 max-w-2xl"
          >
            <div className="text-center sm:text-left">
              <p className="text-white text-xl sm:text-3xl font-bold mb-0.5"><Counter value={2} suffix=".5YR" /></p>
              <p className="label-mono text-white/40 text-[9px] sm:text-[10px]">Market Presence</p>
            </div>
            <div className="text-center sm:text-left border-x border-white/10 px-2 sm:px-0 sm:border-none">
              <p className="text-white text-xl sm:text-3xl font-bold mb-0.5"><Counter value={3} suffix="" /></p>
              <p className="label-mono text-white/40 text-[9px] sm:text-[10px]">Strategic Pillars</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white text-xl sm:text-3xl font-bold mb-0.5"><Counter value={280} suffix="+" /></p>
              <p className="label-mono text-white/40 text-[9px] sm:text-[10px]">Pages of Logic</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}