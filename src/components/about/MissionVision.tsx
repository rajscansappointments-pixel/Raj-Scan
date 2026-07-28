import { Compass, Eye } from 'lucide-react';
import styles from './MissionVision.module.css';

export function MissionVision() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardAccent} />
        <div className={styles.iconWrapper}>
          <Compass size={28} strokeWidth={2} />
        </div>
        <h2 className={styles.title}>Our Mission</h2>
        <p className={styles.description}>
          To provide the highest quality diagnostic services with utmost precision, care, and compassion, ensuring our patients and referring physicians receive accurate information for better health outcomes.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardAccent} />
        <div className={styles.iconWrapper}>
          <Eye size={28} strokeWidth={2} />
        </div>
        <h2 className={styles.title}>Our Vision</h2>
        <p className={styles.description}>
          To be the most trusted and preferred diagnostic center, recognized for our commitment to technological advancement, clinical excellence, and patient-centric care.
        </p>
      </div>
    </div>
  );
}
