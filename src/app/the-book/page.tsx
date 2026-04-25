import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { BookSection } from '@/components/sections/BookSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Star, Quote } from 'lucide-react';

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <BookSection />
      </div>
      
      <section className="section-padding bg-white border-t border-accent-border">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel className="mx-auto">READER TESTIMONIALS</SectionLabel>
              <h2 className="mb-4">Voices from the <span className="text-accent-blue">Frontlines</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "This is the first book that actually bridge the gap between low-level hardware design and high-level strategy. It's my team's new bible.",
                  author: "Sarah Chen",
                  role: "CTO at Nexus Cloud"
                },
                {
                  quote: "Strategic Architect provides a framework for scaling that I haven't seen elsewhere. The logic protocols section alone is worth the price.",
                  author: "Marcus Thorne",
                  role: "VP Architecture, Global Scale Inc."
                }
              ].map((item, i) => (
                <div key={i} className="bg-background-page p-8 rounded-xl border border-accent-border relative">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-accent-blue/10" />
                  <div className="flex text-amber-500 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-text-secondary italic mb-6 leading-relaxed">"{item.quote}"</p>
                  <div>
                    <p className="font-bold text-text-primary text-sm">{item.author}</p>
                    <p className="text-text-muted text-xs">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
