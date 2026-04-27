import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="bg-background-hero py-20 pt-32 lg:pt-48 text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="max-w-xl">
              <SectionLabel className="text-accent-blue">CONTACT US</SectionLabel>
              <h1 className="text-white mb-8 text-4xl lg:text-6xl font-bold leading-tight">
                Let's build your <span className="text-accent-blue">next generation</span> of growth.
              </h1>
              <p className="text-white/70 text-lg mb-12">
                Our team is ready to analyze your current infrastructure and map out a strategic architecture 
                that scales with your ambition.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 label-mono mb-0.5">EMAIL</p>
                    <p className="text-white text-sm font-bold">shoaib990k@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 label-mono mb-0.5">PHONE</p>
                    <p className="text-white text-sm font-bold">03122457391</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 label-mono mb-0.5">Location</p>
                    <p className="text-white text-sm font-bold">Karachi,Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
              <div className="absolute -inset-10 bg-accent-blue/20 blur-[100px] rounded-full -z-10 animate-pulse" />
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
