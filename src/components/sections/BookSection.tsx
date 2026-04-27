"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BookSection() {
  return (
    <section className="section-padding bg-background-muted overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex justify-center items-center relative py-12">
            {/* User provided exact book container code */}
            <div 
              className="relative w-[300px] h-[420px]"
              style={{ perspective: '1000px' }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}
              >
                {/* Front */}
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img src="/img/book1.png" alt="Book Front" className="w-full h-full object-contain" />
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <img src="/img/book2.png" alt="Book Back" className="w-full h-full object-contain" />
                </div>
              </div>
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