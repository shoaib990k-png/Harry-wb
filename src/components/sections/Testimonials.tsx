"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Dr. Aris Thorne",
    role: "Head of Infrastructure, Global Tech",
    content: "The logic protocols implemented by Strategic Architect reduced our global latency by 45% in the first month. Unprecedented results.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    role: "CEO, Quantum Systems",
    content: "Building our expansion strategy on top of their hardware nodes was the best decision we made this year. The reliability is unmatched.",
    rating: 5
  },
  {
    name: "Marcus Vane",
    role: "CTO, Edge Solutions",
    content: "Precision is an understatement. Every layer of the stack is optimized for maximum performance and growth-ready guardrails.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-background-muted overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <SectionLabel className="mx-auto">CLIENT FEEDBACK</SectionLabel>
          <h2 className="mb-4">Trusted by <span className="text-accent-blue">Industry Titans</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-accent-border relative flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent-blue/5" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic flex-grow">
                "{t.content}"
              </p>
              <div>
                <p className="font-bold text-text-primary text-sm">{t.name}</p>
                <p className="text-text-muted text-[10px] label-mono mt-1 uppercase">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
