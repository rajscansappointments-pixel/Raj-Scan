import { Users, Award, Clock, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import styles from './TrustHighlights.module.css';

const highlights = [
  {
    icon: <Users size={32} />,
    number: '50k+',
    label: 'Patients Served',
  },
  {
    icon: <Award size={32} />,
    number: '15+',
    label: 'Years Experience',
  },
  {
    icon: <Clock size={32} />,
    number: '24/7',
    label: 'Support Available',
  },
  {
    icon: <ShieldCheck size={32} />,
    number: '100%',
    label: 'Quality Assured',
  },
];

export function TrustHighlights() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.grid}>
          {highlights.map((highlight, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrapper}>
                {highlight.icon}
              </div>
              <div className={styles.number}>{highlight.number}</div>
              <div className={styles.label}>{highlight.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
