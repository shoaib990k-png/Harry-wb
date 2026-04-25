import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Ticker } from '@/components/sections/Ticker';
import { Solutions } from '@/components/sections/Solutions';
import { BookSection } from '@/components/sections/BookSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { ContactForm } from '@/components/sections/ContactForm';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <Solutions />
      <Testimonials />
      <BookSection />
      <FounderSection />
      <FAQ />
      
      <section className="section-padding bg-background-muted" id="contact">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mx-auto">PARTNERSHIP INQUIRY</SectionLabel>
              <h2 className="mb-4">Let's Design Your <span className="text-accent-blue">Growth Architecture</span></h2>
              <p className="text-text-secondary max-w-lg mx-auto text-sm sm:text-base">
                Tell us about your infrastructure goals. We'll provide an initial strategic logic map within 24 hours.
              </p>
            </div>
            <ContactForm className="max-w-2xl mx-auto" />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
