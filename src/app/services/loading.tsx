import styles from '@/components/ui/Skeleton.module.css';

// Shown instantly while /services page data resolves
export default function ServicesLoading() {
  return (
    <div aria-busy="true" aria-label="Loading services...">
      {/* Hero skeleton */}
      <div className={styles.pageHero} style={{ textAlign: 'center' }}>
        <div className={styles.pageBody} style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className={`${styles.bone} ${styles.badge}`} style={{ margin: '0 auto 16px' }} />
          <div className={`${styles.bone} ${styles.title}`} style={{ width: '60%', margin: '0 auto 12px' }} />
          <div className={`${styles.bone} ${styles.text}`} style={{ width: '80%', margin: '0 auto 8px' }} />
          <div className={`${styles.bone} ${styles.text}`} style={{ width: '65%', margin: '0 auto' }} />
        </div>
      </div>
      {/* Services grid skeleton */}
      <div className={styles.pageBody}>
        <div className={styles.grid3}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`${styles.bone} ${styles.card}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
