'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '#over-ons', label: 'Over Ons' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#werken',   label: 'Werken' },
  { href: '#contact',  label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-50/90 backdrop-blur-md border-b border-ink-100'
          : 'bg-ink-50/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="LSR Building"
              width={40}
              height={40}
              priority
              className="w-9 h-9"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-ink-900 text-base tracking-tight">
                LSR
              </span>
              <span
                className="text-[10px] font-semibold text-accent uppercase"
                style={{ letterSpacing: '0.22em' }}
              >
                Building
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium text-ink-900 py-1"
              >
                {l.label}
                <span className="absolute left-0 bottom-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-ink-900 text-ink-50 px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-500"
          >
            Offerte aanvragen
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-ink-900 hover:text-accent transition"
            aria-label="Menu openen"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-ink-100 py-6 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-3 text-ink-900 font-medium text-base hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 px-2">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-ink-900 text-ink-50 px-5 py-3 text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-500"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
