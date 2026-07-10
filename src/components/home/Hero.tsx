import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero/hero-blank.png"
        alt="Raj Scans premium diagnostic imaging center reception lobby"
        fill
        priority
        quality={85}
        className={styles.heroImage}
        sizes="100vw"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Clarity in Diagnosis, Confidence in Care
          </h1>
          <p className={styles.description}>
            Experience state-of-the-art diagnostic imaging with unparalleled precision. 
            Raj Scans combines advanced technology with expert radiologists to deliver results you can trust.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="accent" size="lg">Book a Scan</Button>
            </Link>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="lg" style={{ borderColor: 'white', color: 'white' }}>
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
