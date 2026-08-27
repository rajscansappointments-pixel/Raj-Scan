import { CheckCircle2, Clock, MapPin, Activity } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import styles from './CampaignPackages.module.css';

import { packagesData } from '@/data/packages';

export function CampaignPackages() {
  return (
    <section className={styles.wrapper} id="packages">
      <Container>
        <SectionTitle
          title={
            <>
              Our <span style={{ color: 'var(--color-brand-red)' }}>Health Packages</span>
            </>
          }
          description="Take charge of your well-being with our comprehensive, preventive health checkup packages suitable for all age groups."
          align="center"
        />

        <div className={styles.grid}>
          {packagesData.map((pkg, i) => (
            <div key={i} className={styles.packageCard}>
              <div className={styles.packageHeader}>
                {pkg.parametersCount && <span className={styles.testCount}>{pkg.parametersCount} Parameters</span>}
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <p className={styles.packageTests}>
                  {pkg.tests.map((test, index, array) => (
                    <span key={index} style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
                      {test}
                      {index < array.length - 1 && <span style={{ color: 'var(--color-neutral-300)', margin: '0 6px' }}>•</span>}
                    </span>
                  ))}
                </p>
              </div>
              
              <div className={styles.packageFeatures}>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}>
                    <Clock size={16} color="var(--color-brand-navy)" />
                    10-12 Hrs Fasting Required
                  </li>
                  <li className={styles.featureItem}>
                    <Activity size={16} color="var(--color-brand-navy)" />
                    Recommended For Adults
                  </li>
                  <li className={styles.featureItem}>
                    <CheckCircle2 size={16} color="var(--color-brand-navy)" />
                    Reports within 24 Hours
                  </li>
                  <li className={styles.featureItem}>
                    <MapPin size={16} color="var(--color-brand-navy)" />
                    Free Doorstep Collection
                  </li>
                </ul>
              </div>

              <div className={styles.packageFooter}>
                {pkg.price && (
                  <div style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-brand-navy)' }}>
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </div>
                )}
                <Button variant="primary" style={{ width: '100%' }}>Book This Package</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
