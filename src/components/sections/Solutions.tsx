
"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ArrowRight, Cpu, Network, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    id: 'hardware',
    title: 'Precision Hardware',
    label: 'LAYER 01',
    description: 'Custom server architectures and specialized computing nodes designed for massive data throughput.',
    icon: <Cpu className="w-6 h-6 text-accent-blue" />,
    image: PlaceHolderImages.find(img => img.id === 'hardware')?.imageUrl
  },
  {
    id: 'protocols',
    title: 'Logic Protocols',
    label: 'LAYER 02',
    description: 'Proprietary networking protocols that minimize latency and maximize security across your entire ecosystem.',
    icon: <Network className="w-6 h-6 text-accent-blue" />,
    image: PlaceHolderImages.find(img => img.id === 'protocols')?.imageUrl
  },
  {
    id: 'strategy',
    title: 'Market Strategy',
    label: 'LAYER 03',
    description: 'Data-backed market expansion roadmaps that leverage your technical infrastructure for growth.',
    icon: <BarChart3 className="w-6 h-6 text-accent-blue" />,
    image: PlaceHolderImages.find(img => img.id === 'strategy')?.imageUrl
  }
];

export function Solutions() {
  return (
    <section className="section-padding bg-background-surface">
      <Container>
        <div className="mb-16">
          <SectionLabel>OUR CORE SOLUTIONS</SectionLabel>
          <h2 className="mb-6">The Integrated Architecture for <span className="text-accent-blue">Exponential Scaling</span></h2>
          <p className="text-text-secondary max-w-xl">
            Success isn't about one variable. It's the synergy between your metal, your code, and your vision. 
            We provide the complete stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group"
            >
              <Link href={`/solutions#${item.id}`}>
                <div className="card-hover-effect bg-background-page border border-accent-border rounded-xl overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden">
                    {item.image && (
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="label-mono text-[10px] text-text-muted mb-2 block">{item.label}</span>
                    <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-accent-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center text-accent-blue font-bold text-sm">
                      Detailed Specs <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
