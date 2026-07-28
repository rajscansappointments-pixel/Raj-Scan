import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Suresh Kumar',
    quote: 'The level of professionalism is unmatched. Reports were delivered within hours, allowing my surgeon to proceed without delay. Highly recommended.',
  },
  {
    name: 'Priya Rajan',
    quote: 'Extremely clean environment and very courteous staff. The radiologist took the time to explain the process, which completely eased my anxiety.',
  },
  {
    name: 'Anand V.',
    quote: 'I have visited many diagnostic centres, but Raj Scans stands out for its precision and efficiency. A truly premium healthcare experience.',
  },
];

export function Testimonials() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Patient Stories</p>
        <h2 className={styles.heading}>Trusted by thousands.</h2>
      </div>
      
      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />
              ))}
            </div>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <p className={styles.name}>— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
