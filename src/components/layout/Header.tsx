'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          {/* Logo Placeholder */}
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <Image 
              src="/images/raj-scans-logo.jpg" 
              alt="Raj Scans Logo" 
              width={70} 
              height={60}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                data-active={pathname === link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            <Link href="tel:+919840067900" style={{ textDecoration: 'none' }}>
              <Button variant="ghost">Call Us</Button>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="accent">Book a Scan</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNavOverlay}>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', marginTop: 'var(--space-24)' }}>
            <Button variant="secondary" size="lg">Call Us</Button>
            <Button variant="accent" size="lg">Book a Scan</Button>
          </div>
        </div>
      )}
    </header>
  );
}
