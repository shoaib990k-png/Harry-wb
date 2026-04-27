import React from 'react';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-accent-border py-12 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
          <div className="md:col-span-1">
            <Link href="/" prefetch={true} className="flex items-center space-x-2 mb-8">
              <div className="w-7 h-7 bg-accent-blue rounded flex items-center justify-center text-white font-bold text-sm">S</div>
              <span className="font-bold text-xl text-text-primary tracking-tight">Strategic Architect</span>
            </Link>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="label-mono text-[10px] text-text-primary font-bold">CORE STATUS — MUNICH, DE</p>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed max-w-xs opacity-70">
                Designing the future of business through integrated hardware, protocols, and precision strategy.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-text-primary mb-6 text-[10px] uppercase tracking-[0.2em]">Directory</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" prefetch={true} className="text-text-muted hover:text-accent-blue transition-colors text-xs font-medium tracking-wide">Hardware Systems</Link></li>
              <li><Link href="/about" prefetch={true} className="text-text-muted hover:text-accent-blue transition-colors text-xs font-medium tracking-wide">About Founder</Link></li>
              <li><Link href="/contact" prefetch={true} className="text-text-muted hover:text-accent-blue transition-colors text-xs font-medium tracking-wide">Contact Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-6 text-[10px] uppercase tracking-[0.2em]">Protocols</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions#protocols" prefetch={true} className="text-text-muted hover:text-accent-blue transition-colors text-xs font-medium tracking-wide">Logic Optimization</Link></li>
              <li><Link href="/the-book" prefetch={true} className="text-text-muted hover:text-accent-blue transition-colors text-xs font-medium tracking-wide">Strategic Manifesto</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-accent-blue transition-colors text-xs font-medium tracking-wide">Encrypted Port</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-6 text-[10px] uppercase tracking-[0.2em]">Compliance</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-text-muted hover:text-accent-blue transition-colors text-xs font-medium tracking-wide">Sovereignty Policy</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-accent-blue transition-colors text-xs font-medium tracking-wide">Terms of Protocol</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-accent-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <p className="text-[10px] font-bold text-text-primary tracking-widest uppercase">Integrated Technical Sovereignty</p>
            <p className="text-[10px] text-text-muted opacity-60">© {new Date().getFullYear()} Strategic Architect. All rights reserved.</p>
          </div>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="#" className="label-mono text-[9px] text-text-muted hover:text-accent-blue transition-colors tracking-widest font-bold">LINKEDIN</Link>
            <Link href="#" className="label-mono text-[9px] text-text-muted hover:text-accent-blue transition-colors tracking-widest font-bold">X-LAYER</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
