import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.grid}>
          {/* Column 1: Brand & Description */}
          <div className={styles.column}>
            <div className={styles.logo}>Raj Scans</div>
            <p className={styles.description}>
              Premium diagnostic imaging centre committed to clinical excellence and accurate results.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/about" className={styles.link}>About</Link></li>
              <li><Link href="/services" className={styles.link}>Services</Link></li>
              <li><Link href="/doctors" className={styles.link}>Doctors</Link></li>
              <li><Link href="/packages" className={styles.link}>Packages</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.column}>
            <h4 className={styles.title}>Services</h4>
            <ul className={styles.linkList}>
              <li><Link href="/services/mri" className={styles.link}>MRI</Link></li>
              <li><Link href="/services/ct-scan" className={styles.link}>CT Scan</Link></li>
              <li><Link href="/services/ultrasound" className={styles.link}>Ultrasound</Link></li>
              <li><Link href="/services/digital-xray" className={styles.link}>Digital X-Ray</Link></li>
              <li><Link href="/services/mammography" className={styles.link}>Digital Mammography</Link></li>
              <li><Link href="/services/laboratory" className={styles.link}>Laboratory</Link></li>
              <li><Link href="/services/echo-ecg" className={styles.link}>Echo ECG</Link></li>
              <li><Link href="/packages" className={styles.link}>Health Packages</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.column}>
            <h4 className={styles.title}>Contact</h4>
            <div className={styles.contactBlock}>
              
              <div className={styles.contactGroup}>
                <span className={styles.contactLabel}>Address</span>
                <span>Raj Scans OMR</span>
                <span>2 & 26 Srinivasan Nagar</span>
                <span>Rajiv Gandhi Salai (OMR)</span>
                <span>Kottivakkam</span>
                <span>Chennai – 600041</span>
              </div>

              <div className={styles.contactGroup}>
                <span className={styles.contactLabel}>Phone</span>
                <a href="tel:04446435198" className={styles.link}>044-46435198</a>
                <a href="tel:+919944498000" className={styles.link}>+91 99444 98000</a>
              </div>

              <div className={styles.contactGroup}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:rajscansomr@gmail.com" className={styles.link}>rajscansomr@gmail.com</a>
              </div>

              <div className={styles.contactGroup}>
                <span className={styles.contactLabel}>Working Hours</span>
                <span>Mon–Sun</span>
                <span>7:00 AM – 10:00 PM</span>
              </div>

            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>

          </div>
          <div>&copy; {new Date().getFullYear()} Raj Scans</div>
          <div className={styles.designed}>Designed with care.</div>
        </div>

      </div>
    </footer>
  );
}
