import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Ticker } from '@/components/sections/Ticker';
import { Solutions } from '@/components/sections/Solutions';
import { BookSection } from '@/components/sections/BookSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <Solutions />
      <BookSection />
      <FounderSection />
      <ContactForm />
      <Footer />
    </main>
  );
}