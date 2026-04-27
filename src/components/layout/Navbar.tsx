"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'The Book', href: '/the-book' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const ticking = useRef(false);
  
  const isDarkHeroPage = pathname === '/' || pathname === '/contact';

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 20;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    const initialScrolled = window.scrollY > 20;
    if (initialScrolled !== scrolled) setScrolled(initialScrolled);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, scrolled]);

  const isTextDark = scrolled || !isDarkHeroPage;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center transform-gpu will-change-transform",
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-accent-border shadow-sm h-16" 
        : "bg-transparent h-20"
    )}>
      <Container className="flex items-center justify-between">
        <Link href="/" prefetch={true} className="group flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent-blue rounded flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-sm">S</div>
          <span className={cn(
            "font-bold text-lg md:text-xl tracking-tight transition-colors duration-300",
            isTextDark ? "text-text-primary" : "text-white"
          )}>
            Strategic <span className="text-accent-blue">Architect</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              prefetch={true}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-accent-blue py-1 group",
                isTextDark ? "text-text-secondary" : "text-white/80"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0",
                isTextDark ? "bg-accent-blue" : "bg-white"
              )} />
            </Link>
          ))}
          <Button asChild className={cn(
            "btn-hover-effect font-bold tracking-wider text-xs px-6",
            !scrolled && isDarkHeroPage ? "bg-white text-accent-blue hover:bg-white/90 border-none" : "bg-accent-blue text-white"
          )}>
            <Link href="/contact" prefetch={true}>Get Started</Link>
          </Button>
        </div>

        <button 
          className={cn(
            "md:hidden p-2 transition-colors", 
            isTextDark ? "text-text-primary" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </Container>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-[70] shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-xl text-text-primary">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-text-secondary" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold text-text-secondary hover:text-accent-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4 h-12 bg-accent-blue text-white" onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/contact" prefetch={true}>Get Started</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}