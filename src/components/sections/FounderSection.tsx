import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FounderSection() {
  const founderImg = PlaceHolderImages.find(img => img.id === 'founder');

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative group transform-gpu">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border border-accent-border">
              {founderImg && (
                <Image 
                  src={`${founderImg.imageUrl}&w=800&q=80`} 
                  alt="Joel Kremer, Founder of Strategic Architect" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="professional portrait"
                />
              )}
            </div>
            {/* Background decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-blue/5 -z-10 rounded-2xl" />
          </div>

          <div>
            <SectionLabel>THE ARCHITECT</SectionLabel>
            <h2 className="mb-6">Joel Kremer: <span className="text-accent-blue">Engineering</span> Growth</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Joel Kremer is the driving force behind Strategic Architect. He started his career in the trenches of 
                high-frequency trading data centers, wiring the first generation of low-latency quantum protocols.
              </p>
              <p>
                As the author of <strong>"The Quantum Advantage"</strong>, Joel has consolidated 
                two decades of systems engineering into a framework for why early movers will own tomorrow's markets.
              </p>
              <p className="font-code text-sm text-text-primary italic">
                "Infrastructure is destiny. If your hardware can't handle your ambition, your strategy will always be limited."
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="border-accent-border hover:border-accent-blue hover:text-accent-blue h-12">
                <Link href="/about" prefetch={true}>View Full Profile</Link>
              </Button>
              <Button asChild variant="ghost" className="text-text-muted hover:text-accent-blue h-12">
                <Link href="/contact" prefetch={true}>Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}