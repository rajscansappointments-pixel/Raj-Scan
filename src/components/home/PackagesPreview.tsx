import Link from 'next/link';
import styles from './PackagesPreview.module.css';
import { packagesData } from '@/data/packages';

export function PackagesPreview() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Preventive Care</p>
        <h2 className={styles.heading}>Health Packages</h2>
      </div>

      <div className={styles.grid}>
        {packagesData.map((pkg, index) => (
          <div key={index} className={`${styles.card} ${pkg.featured ? styles.featured : ''}`}>
            {pkg.featured && <div className={styles.featuredBadge}>Most Popular</div>}
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <p className={styles.cardDesc}>{pkg.description}</p>
            </div>


            <ul className={styles.testList}>
              {pkg.tests.map((test, i) => (
                <li key={i}>{test}</li>
              ))}
            </ul>

            <Link href={`/packages/${pkg.slug}`} className={pkg.featured ? styles.btnSolid : styles.btnOutline}>
              View & Book Package
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
