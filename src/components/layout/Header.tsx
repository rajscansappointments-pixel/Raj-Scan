'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Smartphone } from 'lucide-react';
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
  const [isPhonePopoverOpen, setIsPhonePopoverOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <Image
              src="/images/raj-scans-logo.png"
              alt="Raj Scans Logo"
              width={110}
              height={85}
              priority
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
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
            <div 
              className={styles.phoneWrapper}
              onMouseEnter={() => setIsPhonePopoverOpen(true)}
              onMouseLeave={() => setIsPhonePopoverOpen(false)}
            >
              <button className={styles.callUsBtn}>
                <Phone size={15} />
                <span>Call Us</span>
              </button>

              {isPhonePopoverOpen && (
                <div className={styles.phonePopover}>
                  <div className={styles.popoverHeader}>
                    <span className={styles.statusDot}></span>
                    <span>Available Today</span>
                  </div>
                  <div className={styles.popoverContent}>
                    <a href="tel:+914446435198" className={styles.popoverLink}>
                      <Phone size={14} />
                      <span>044 - 4643 5198</span>
                    </a>
                    <a href="tel:+919944498000" className={styles.popoverLink}>
                      <Smartphone size={14} />
                      <span>+91 99444 98000</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link href="/packages" style={{ textDecoration: 'none' }}>
              <Button variant="accent">Book Appointment</Button>
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
                data-active={pathname === link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', marginTop: 'var(--space-24)' }}>
            <Link href="tel:+914446435198" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="lg" style={{ width: '100%' }}>
                <Phone size={16} /> Call 044 - 4643 5198
              </Button>
            </Link>
            <Link href="/packages" style={{ textDecoration: 'none' }}>
              <Button variant="accent" size="lg" style={{ width: '100%' }}>Book Appointment</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
