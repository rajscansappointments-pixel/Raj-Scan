import { Star } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Suresh Kumar',
    quote: '"Very professional and quick service. The facilities are top-notch, and the staff made sure I was comfortable throughout my MRI scan."',
    initial: 'S',
  },
  {
    name: 'Priya Rajan',
    quote: '"Received my reports within hours! The accuracy and detailed explanation from the consulting doctor were truly appreciated."',
    initial: 'P',
  },
  {
    name: 'Anand V.',
    quote: '"Extremely clean environment and very courteous staff. I highly recommend Raj Scans for any diagnostic requirements."',
    initial: 'A',
  },
];

export function Testimonials() {
  return (
    <div>
      <SectionTitle
        align="center"
        subtitle="Patient Feedback"
        title="What Our Patients Say"
      />
      
      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} size={16} fill="currentColor" />
              ))}
            </div>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initial}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>Patient</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
