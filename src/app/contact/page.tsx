import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="bg-background-hero py-24 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel className="text-accent-blue">CONTACT US</SectionLabel>
              <h1 className="text-white mb-6">Let's build your <span className="text-accent-blue">next generation</span> of growth.</h1>
              <p className="text-white/70 text-lg max-w-lg mb-12">
                Our team is ready to analyze your current infrastructure and map out a strategic architecture 
                that scales with your ambition.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 label-mono">EMAIL</p>
                    <p className="text-white font-bold">architect@strategic.tech</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 label-mono">PHONE</p>
                    <p className="text-white font-bold">+1 (800) LOGIC-STACK</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 label-mono">HEADQUARTERS</p>
                    <p className="text-white font-bold">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-accent-blue/20 blur-[100px] rounded-full -z-10" />
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}