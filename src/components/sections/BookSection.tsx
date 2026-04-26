"use client";

import React, { useState, useCallback } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BookSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  const frontImage = PlaceHolderImages.find(img => img.id === 'book-front')?.imageUrl || "";
  const hoverImage = PlaceHolderImages.find(img => img.id === 'book-hover')?.imageUrl || "";
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }, [x, y]);

  return (
    <section className="section-padding bg-background-muted overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex justify-center items-center relative py-10">
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                setIsHovered(false);
                x.set(0);
                y.set(0);
              }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[320px] aspect-[1/1.4] cursor-pointer group z-10 will-change-transform"
            >
              <div className="absolute -top-4 -right-8 z-30 bg-accent-blue text-white px-4 py-2 rounded-lg text-[10px] font-bold shadow-lg flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                #01 BESTSELLER
              </div>

              <div className="absolute inset-0 z-10 overflow-hidden rounded-lg shadow-2xl border border-accent-border bg-white transform-gpu">
                <motion.div 
                  className="absolute inset-0"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={frontImage}
                    alt="The Quantum Advantage Front"
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority
                  />
                </motion.div>

                <motion.div 
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={hoverImage}
                    alt="The Quantum Advantage Angle"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
              </div>
              
              <div className="absolute inset-0 bg-white/50 rounded-lg -z-10 translate-x-2 translate-y-2 border border-accent-border" />
            </motion.div>
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
              <Button asChild size="lg" className="bg-accent-blue hover:bg-accent-navy text-white px-8 h-14 uppercase font-bold tracking-widest text-xs rounded-xl shadow-lg">
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