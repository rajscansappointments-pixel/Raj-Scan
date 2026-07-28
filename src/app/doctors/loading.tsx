import styles from '@/components/ui/Skeleton.module.css';

// Shown instantly while /doctors page resolves
export default function DoctorsLoading() {
  return (
    <div aria-busy="true" aria-label="Loading...">
      <div className={styles.pageHero} style={{ textAlign: 'center' }}>
        <div className={styles.pageBody} style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className={`${styles.bone} ${styles.title}`} style={{ width: '55%', margin: '0 auto 12px' }} />
          <div className={`${styles.bone} ${styles.text}`} style={{ width: '75%', margin: '0 auto' }} />
        </div>
      </div>
      <div className={styles.pageBody}>
        <div className={styles.grid3}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} style={{ borderRadius: 12, padding: 24, border: '1px solid var(--color-neutral-200)' }}>
              <div className={`${styles.bone} ${styles.title}`} style={{ width: '60%', marginBottom: 12 }} />
              <div className={styles.stack}>
                <div className={`${styles.bone} ${styles.text}`} style={{ width: '90%' }} />
                <div className={`${styles.bone} ${styles.text}`} style={{ width: '75%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
