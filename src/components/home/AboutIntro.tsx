import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import styles from './AboutIntro.module.css';

const features = [
  'Highly qualified team of Radiologists',
  'State-of-the-art diagnostic equipment',
  'Fast and accurate reporting',
  'Patient-centric comfortable environment',
];

export function AboutIntro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about/about-facility.png"
          alt="Raj Scans modern clinic reception and waiting area"
          fill
          quality={85}
          className={styles.image}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      
      <div className={styles.content}>
        <SectionTitle
          subtitle="About Raj Scans"
          title="Committed to Diagnostic Excellence"
          description="Since our establishment, Raj Scans has been at the forefront of medical imaging. We believe that accurate diagnosis is the first and most crucial step towards effective treatment."
        />
        
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <CheckCircle2 className={styles.icon} size={20} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-16)' }}>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="lg">More About Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
