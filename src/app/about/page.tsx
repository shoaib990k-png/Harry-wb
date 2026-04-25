import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { FounderSection } from '@/components/sections/FounderSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Award, Shield, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="bg-background-muted py-20 pt-32 lg:pt-40">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>WHO WE ARE</SectionLabel>
            <h1 className="mb-6">The Architect behind the <span className="text-accent-blue">Architecture</span></h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Strategic Architect was founded on a single premise: complex technical systems 
              should be built with the same tactical precision as a high-stakes market strategy.
            </p>
          </div>
        </Container>
      </section>

      <FounderSection />

      <section className="section-padding bg-background-page border-y border-accent-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-accent-border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Target className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Precision First</h3>
              <p className="text-text-secondary text-sm">We believe that a 1% gain in hardware efficiency equals 100% gain in strategic leverage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-accent-border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Shield className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Unbreakable Logic</h3>
              <p className="text-text-secondary text-sm">Our systems are designed to refuse failure. We build the most resilient logic layers in the industry.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-accent-border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Award className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Growth</h3>
              <p className="text-text-secondary text-sm">Every architecture we design is audited against real-world scaling benchmarks and growth targets.</p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
