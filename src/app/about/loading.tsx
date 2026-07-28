import styles from '@/components/ui/Skeleton.module.css';

export default function AboutLoading() {
  return (
    <div aria-busy="true" aria-label="Loading...">
      <div className={styles.pageHero} style={{ textAlign: 'center' }}>
        <div className={styles.pageBody} style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className={`${styles.bone} ${styles.title}`} style={{ width: '40%', margin: '0 auto 12px' }} />
          <div className={`${styles.bone} ${styles.text}`} style={{ width: '70%', margin: '0 auto' }} />
        </div>
      </div>
      <div className={styles.pageBody}>
        <div className={styles.grid2}>
          <div className={styles.stack}>
            <div className={`${styles.bone} ${styles.title}`} style={{ width: '80%' }} />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={`${styles.bone} ${styles.text}`} style={{ width: `${70 + i * 5}%` }} />
            ))}
          </div>
          <div className={`${styles.bone}`} style={{ height: 320, borderRadius: 16 }} />
        </div>
      </div>
    </div>
  );
}
