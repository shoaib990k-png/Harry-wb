"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BookSection() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const frontImage = PlaceHolderImages.find(img => img.id === 'book-front')?.imageUrl || "/img/book1.png";
  const backImage = PlaceHolderImages.find(img => img.id === 'book-back')?.imageUrl || "/img/book2.png";

  return (
    <section className="section-padding bg-background-muted overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex justify-center items-center relative py-10 perspective-1000">
            <motion.div
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
              className="relative w-full max-w-[320px] aspect-[1/1.4] cursor-pointer group z-10 animate-float"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Bestseller Badge */}
              <div className="absolute -top-4 -right-8 z-50 bg-accent-blue text-white px-4 py-2 rounded-lg text-[10px] font-bold shadow-lg flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                #01 BESTSELLER
              </div>

              {/* Front Cover */}
              <div 
                className="absolute inset-0 z-20 overflow-hidden rounded-r-lg shadow-2xl border border-accent-border bg-white"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <Image
                  src={frontImage}
                  alt="The Quantum Advantage Front"
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Back Cover */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden rounded-l-lg shadow-2xl border border-accent-border bg-white"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <Image
                  src={backImage}
                  alt="The Quantum Advantage Back"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Book Spine (Thickness Effect) */}
              <div 
                className="absolute top-0 bottom-0 left-0 w-8 bg-gray-200 border-x border-gray-300 z-15"
                style={{ 
                  transform: 'translateX(-50%) rotateY(-90deg)',
                  transformOrigin: 'left'
                }}
              />

              {/* Dynamic Drop Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-full" />
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