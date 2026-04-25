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
          <div className="relative group">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border border-accent-border">
              {founderImg && (
                <Image 
                  src={founderImg.imageUrl} 
                  alt="Founder of Strategic Architect" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
            {/* Background decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-blue/5 -z-10 rounded-2xl" />
          </div>

          <div>
            <SectionLabel>THE ARCHITECT</SectionLabel>
            <h2 className="mb-6">Built by <span className="text-accent-blue">Engineering</span> Experience</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Our founder didn't start in a boardroom. He started in the data centers, 
                wiring the first generation of high-speed trading architectures.
              </p>
              <p>
                After two decades of building systems that refuse to break, he consolidated his 
                knowledge into Strategic Architect. We combine deep technical expertise with 
                modern business strategy.
              </p>
              <p className="font-code text-sm text-text-primary">
                "Infrastructure is destiny. If your hardware can't handle your ambition, your strategy doesn't matter."
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="border-accent-border hover:border-accent-blue hover:text-accent-blue h-12">
                <Link href="/about">View Full Profile</Link>
              </Button>
              <Button asChild variant="ghost" className="text-text-muted hover:text-accent-blue h-12">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}