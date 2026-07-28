import { CheckCircle2, Clock, MapPin, Activity } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import styles from './CampaignPackages.module.css';

const packages = [
  {
    title: "Basic Health Checkup",
    tests: "60+ Tests",
    description: "Complete Blood Count | Liver Function Test | Kidney Function Test | Lipid Profile | Thyroid Profile | Blood Sugar Fasting",
    mrp: "₹2,500",
    offer: "₹999",
  },
  {
    title: "Comprehensive Health Checkup",
    tests: "80+ Tests",
    description: "Everything in Basic | Vitamin D | Vitamin B12 | Iron Profile | HbA1c (Diabetes) | Urine Routine",
    mrp: "₹4,500",
    offer: "₹1,499",
  },
  {
    title: "Executive Master Health Checkup",
    tests: "90+ Tests",
    description: "Everything in Comprehensive | Cardiac Risk Markers | Testosterone | Pancreatic Profile | Advanced Lipid",
    mrp: "₹6,500",
    offer: "₹2,499",
  },
];

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
          {packages.map((pkg, i) => (
            <div key={i} className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <span className={styles.testCount}>{pkg.tests}</span>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <p className={styles.packageTests}>
                  {pkg.description.split(' | ').map((test, index, array) => (
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
                <div className={styles.priceBlock}>
                  <div className={styles.offerPrice}>
                    <span className={styles.offerLabel}>Offer Price</span>
                    <span className={styles.priceValue}>{pkg.offer}</span>
                  </div>
                  <div className={styles.mrpPrice}>
                    <span className={styles.mrpLabel}>MRP</span>
                    <span className={styles.mrpValue}>{pkg.mrp}</span>
                  </div>
                </div>
                <Button variant="primary" style={{ width: '100%' }}>Book This Package</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
