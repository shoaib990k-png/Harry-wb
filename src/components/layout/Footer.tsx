import React from 'react';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-accent-border py-12 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-accent-blue rounded flex items-center justify-center text-white font-bold text-sm">S</div>
              <span className="font-bold text-lg text-text-primary">Strategic Architect</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Designing the future of business through integrated hardware, protocols, and precision strategy.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions#hardware" className="text-text-muted hover:text-accent-blue transition-colors text-sm">Hardware Systems</Link></li>
              <li><Link href="/solutions#protocols" className="text-text-muted hover:text-accent-blue transition-colors text-sm">Logic Protocols</Link></li>
              <li><Link href="/solutions#strategy" className="text-text-muted hover:text-accent-blue transition-colors text-sm">Strategic Insight</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-text-muted hover:text-accent-blue transition-colors text-sm">About Founder</Link></li>
              <li><Link href="/the-book" className="text-text-muted hover:text-accent-blue transition-colors text-sm">The Book</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-accent-blue transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-text-muted hover:text-accent-blue transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-accent-blue transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-accent-border flex flex-col md:flex-row justify-between items-center text-text-muted text-xs">
          <p>© {new Date().getFullYear()} Strategic Architect. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent-blue transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-accent-blue transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-accent-blue transition-colors">YouTube</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}