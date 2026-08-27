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
            {(pkg.badge || pkg.featured) && (
              <div className={styles.featuredBadge}>
                {pkg.badge || 'Most Popular'}
              </div>
            )}
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <p className={styles.cardDesc}>{pkg.description}</p>
            </div>

            {pkg.price && (
              <div className={styles.priceWrap}>
                <span className={styles.currency}>₹</span>
                <span className={styles.price}>{pkg.price.toLocaleString('en-IN')}</span>
              </div>
            )}

            <ul className={styles.testList}>
              {pkg.tests.slice(0, 5).map((test, i) => (
                <li key={i}>{test}</li>
              ))}
              {pkg.tests.length > 5 && (
                <li style={{ color: 'var(--color-brand-red)', fontWeight: 600, fontSize: '0.875rem', marginTop: '0.5rem', listStyle: 'none' }} className={styles.moreTestsText}>
                  + {pkg.tests.length - 5} more parameters
                </li>
              )}
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
