import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.column}>
            <div className={styles.logo}>Raj Scans</div>
            <p className={styles.description}>
              Premium diagnostic imaging center committed to clinical excellence and accurate results.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.title}>Quick Links</h4>
            <nav className={styles.linkList}>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/doctors" className={styles.link}>For Doctors</Link>
              <Link href="/careers" className={styles.link}>Careers</Link>
              <Link href="/blog" className={styles.link}>Blog</Link>
            </nav>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.title}>Services</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/mri" className={styles.link}>MRI Scan</Link>
              </li>
              <li>
                <Link href="/services/ct" className={styles.link}>CT Scan</Link>
              </li>
              <li>
                <Link href="/services/ultrasound" className={styles.link}>Ultrasound</Link>
              </li>
              <li>
                <Link href="/packages" className={styles.link}>Health Packages</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h4 className={styles.title}>Contact</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <MapPin size={16} className={styles.icon} />
                <span>
                  2 & 26, Srinivasan Nagar,<br/>
                  Rajiv Gandhi Salai (OMR),<br/>
                  Kottivakkam, Chennai - 600 041
                </span>
              </li>
              <li className={styles.listItem}>
                <Phone size={16} className={styles.icon} />
                <a href="tel:+919944498000" className={styles.link}>+91 99444 98000</a>
              </li>
              <li className={styles.listItem}>
                <Mail size={16} className={styles.icon} />
                <a href="mailto:info@rajscans.com" className={styles.link}>info@rajscans.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Raj Scans. All rights reserved.</p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
