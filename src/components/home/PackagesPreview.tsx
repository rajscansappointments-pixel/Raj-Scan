import Link from 'next/link';
import styles from './PackagesPreview.module.css';
import { packagesData } from '@/data/packages';

export function PackagesPreview() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>Preventive Care</span>
        </div>
        <h2 className={styles.heading}>Health Packages</h2>
        <p className={styles.subheading}>
          Comprehensive health screening tailored for you & your family • Certified NABL Quality
        </p>
      </div>

      <div className={styles.grid}>
        {packagesData.map((pkg, index) => (
          <div key={index} className={`${styles.card} ${pkg.featured ? styles.featured : ''}`}>
            {pkg.featured && (
              <div className={styles.featuredBadge}>
                <svg className={styles.starIcon} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 1.5l1.9 4.3 4.6.4-3.5 3.1 1.1 4.6L8 11.5l-4.1 2.4 1.1-4.6-3.5-3.1 4.6-.4z" />
                </svg>
                <span>Most Popular</span>
              </div>
            )}

            <div className={styles.cardHeader}>
              <div className={styles.titleRow}>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                {pkg.parametersCount && (
                  <span className={styles.paramPill}>
                    {pkg.parametersCount} Tests
                  </span>
                )}
              </div>
              <p className={styles.cardDesc}>
                {pkg.description.includes(' - ') ? pkg.description.split(' - ')[0] : pkg.description}
              </p>
            </div>

            {pkg.price && (
              <div className={styles.priceWrap}>
                <div className={styles.priceMain}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.price}>{pkg.price.toLocaleString('en-IN')}</span>
                </div>
                <span className={styles.priceNote}>All Inclusive</span>
              </div>
            )}

            <ul className={styles.testList}>
              {pkg.tests.slice(0, 5).map((test, i) => (
                <li key={i}>
                  <svg className={styles.checkIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7.5" className={styles.checkCircle} />
                    <path d="M5.2 8.2L7.2 10.2L11 6" className={styles.checkTick} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className={styles.testName}>{test}</span>
                </li>
              ))}
              {pkg.tests.length > 5 && (
                <li className={styles.moreTestsItem}>
                  <span className={styles.moreTestsBadge}>
                    + {pkg.tests.length - 5} more parameters included
                  </span>
                </li>
              )}
            </ul>

            <Link href={`/packages/${pkg.slug}`} className={pkg.featured ? styles.btnSolid : styles.btnOutline}>
              <span>View & Book Package</span>
              <svg className={styles.btnArrow} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
