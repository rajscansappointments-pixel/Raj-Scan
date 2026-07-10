import { FileCheck, HeartPulse, Clock } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    title: 'Accurate Reports',
    description: 'Our stringent quality control processes ensure that every report generated is highly accurate and reliable.',
    icon: <FileCheck size={32} />,
  },
  {
    title: 'Expert Doctors',
    description: 'A team of highly qualified and experienced radiologists interpret your scans to provide the best clinical insights.',
    icon: <HeartPulse size={32} />,
  },
  {
    title: 'Timely Service',
    description: 'We respect your time. From minimal waiting periods to prompt report delivery, efficiency is our priority.',
    icon: <Clock size={32} />,
  },
];

export function WhyChooseUs() {
  return (
    <div>
      <SectionTitle
        align="center"
        subtitle="Our Advantages"
        title="Why Choose Raj Scans"
        description="We combine technology, expertise, and care to deliver a superior diagnostic experience."
      />
      
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.icon}>{reason.icon}</div>
            <h3 className={styles.title}>{reason.title}</h3>
            <p className={styles.description}>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
