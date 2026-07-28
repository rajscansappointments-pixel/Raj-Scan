import styles from '@/components/ui/Skeleton.module.css';

// Shown instantly while /packages page data resolves
export default function PackagesLoading() {
  return (
    <div aria-busy="true" aria-label="Loading packages...">
      <div className={styles.pageHero} style={{ textAlign: 'center' }}>
        <div className={styles.pageBody} style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className={`${styles.bone} ${styles.title}`} style={{ width: '50%', margin: '0 auto 12px' }} />
          <div className={`${styles.bone} ${styles.text}`} style={{ width: '70%', margin: '0 auto' }} />
        </div>
      </div>
      <div className={styles.pageBody}>
        <div className={styles.grid3}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} style={{ background: 'var(--color-neutral-50)', borderRadius: 16, padding: 24 }}>
              <div className={`${styles.bone} ${styles.badge}`} style={{ marginBottom: 16 }} />
              <div className={`${styles.bone} ${styles.title}`} style={{ width: '70%', marginBottom: 12 }} />
              <div className={styles.stack}>
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className={`${styles.bone} ${styles.text}`} style={{ width: `${75 + j * 5}%` }} />
                ))}
              </div>
              <div className={`${styles.bone} ${styles.btn}`} style={{ marginTop: 24, width: '100%' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
