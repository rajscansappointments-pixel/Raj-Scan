import styles from '@/components/ui/Skeleton.module.css';

// Global fallback loading — shown for any route without its own loading.tsx
export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Loading page...">
      {/* Hero area */}
      <div className={styles.pageHero} style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <div className={`${styles.bone} ${styles.badge}`} />
          <div className={`${styles.bone} ${styles.title}`} style={{ width: '55%' }} />
          <div className={`${styles.bone} ${styles.text}`} style={{ width: '80%' }} />
          <div className={`${styles.bone} ${styles.text}`} style={{ width: '60%' }} />
          <div className={`${styles.bone} ${styles.btn}`} style={{ marginTop: 8 }} />
        </div>
      </div>
      {/* Content cards */}
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
