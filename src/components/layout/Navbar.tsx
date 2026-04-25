"use client";

import React, { useState, useEffect } from 'react';
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
  
  const isDarkHeroPage = pathname === '/' || pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center",
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-accent-border shadow-sm h-16" 
        : "bg-transparent h-20"
    )}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="group flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent-blue rounded flex items-center justify-center text-white font-bold text-lg">S</div>
          <span className={cn(
            "font-bold text-xl tracking-tight transition-colors",
            scrolled || !isDarkHeroPage ? "text-text-primary" : "text-white drop-shadow-sm"
          )}>
            Strategic <span className="text-accent-blue">Architect</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-accent-blue py-1 group",
                scrolled || !isDarkHeroPage ? "text-text-secondary" : "text-white/80"
              )}
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
          <Button asChild className="btn-hover-effect">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors", 
            scrolled || !isDarkHeroPage ? "text-text-primary" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </Container>

      {/* Mobile Menu */}
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
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold text-text-secondary hover:text-accent-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
