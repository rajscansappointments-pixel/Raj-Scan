import styles from '@/components/ui/Skeleton.module.css';

export default function ContactLoading() {
  return (
    <div aria-busy="true" aria-label="Loading...">
      <div className={styles.pageHero} style={{ textAlign: 'center' }}>
        <div className={styles.pageBody} style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className={`${styles.bone} ${styles.title}`} style={{ width: '35%', margin: '0 auto 12px' }} />
          <div className={`${styles.bone} ${styles.text}`} style={{ width: '65%', margin: '0 auto' }} />
        </div>
      </div>
      <div className={styles.pageBody}>
        <div className={styles.grid2}>
          {/* Form skeleton */}
          <div className={styles.stack} style={{ gap: 16 }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <div className={`${styles.bone} ${styles.text}`} style={{ width: 100, height: 14, marginBottom: 6 }} />
                <div className={`${styles.bone}`} style={{ height: 44, borderRadius: 8, width: '100%' }} />
              </div>
            ))}
            <div className={`${styles.bone} ${styles.btn}`} style={{ width: '100%' }} />
          </div>
          {/* Info card skeleton */}
          <div className={styles.stack}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div className={`${styles.bone} ${styles.avatar}`} style={{ width: 44, height: 44 }} />
                <div className={styles.stack} style={{ flex: 1, gap: 6 }}>
                  <div className={`${styles.bone} ${styles.text}`} style={{ width: '40%' }} />
                  <div className={`${styles.bone} ${styles.text}`} style={{ width: '70%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
