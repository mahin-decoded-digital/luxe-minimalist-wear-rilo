import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'The Edit', href: '#the-edit' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Atelier', href: '#atelier' },
];

export default function Navbar() {
  const isScrolled = useUIStore((s) => s.isScrolled);
  const setIsScrolled = useUIStore((s) => s.setIsScrolled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, setIsScrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-in-out',
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md py-4 shadow-sm text-zinc-900'
          : 'bg-transparent py-8 text-white'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="text-2xl font-serif tracking-[0.2em] uppercase cursor-pointer"
        >
          Decoded Studio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-[0.15em] font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative hover:opacity-70 transition-opacity duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden block p-2 transition-opacity hover:opacity-70"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 bg-[#FAF9F6] text-zinc-900 shadow-xl md:hidden overflow-hidden transition-all duration-500 ease-in-out border-t border-zinc-200/50',
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        )}
      >
        <nav className="flex flex-col py-4 px-6 space-y-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-[0.15em] font-medium hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}