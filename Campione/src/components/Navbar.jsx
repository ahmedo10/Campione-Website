'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonctionnalités', href: '/#features' },
  { label: 'Tarifs', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'À propos', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'background 0.3s, border-color 0.3s',
      background: scrolled ? 'rgba(8,12,26,0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
    }}>
      <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px'}}>

        {/* Logo */}
        <Link href="/" style={{display: 'flex', alignItems: 'center'}}>
          <img src="/logos/logo campione dark plat.png" alt="Campione" style={{height: '36px', width: 'auto'}} />
        </Link>

        {/* Desktop nav */}
        <nav style={{display: 'flex', alignItems: 'center', gap: '36px'}} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}} className="desktop-nav">
          <Link href="/contact" className="nav-link" style={{padding: '8px 16px'}}>
            Connexion
          </Link>
          <Link href="/contact" className="btn-primary" style={{padding: '10px 24px', fontSize: '14px'}}>
            Essai gratuit
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="mobile-nav"
                style={{width: '40px', height: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
          <span style={{width: '22px', height: '2px', background: '#F0F2F8', borderRadius: '2px', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none'}} />
          <span style={{width: '22px', height: '2px', background: '#F0F2F8', borderRadius: '2px', opacity: open ? 0 : 1, transition: 'opacity 0.3s'}} />
          <span style={{width: '22px', height: '2px', background: '#F0F2F8', borderRadius: '2px', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none'}} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{background: 'rgba(8,12,26,0.98)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 24px 28px'}}>
          <nav style={{display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px'}}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                    style={{fontSize: '16px', fontWeight: 500, color: '#8892A4', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>
            Essai gratuit
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
