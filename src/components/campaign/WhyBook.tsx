import { ShieldCheck, MapPin, Zap, ThumbsUp } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import styles from './WhyBook.module.css';

const features = [
  {
    icon: <ShieldCheck size={28} strokeWidth={2} />,
    title: "Accurate & Reliable",
    desc: "100% accurate results powered by advanced Siemens & Mindray technology.",
  },
  {
    icon: <MapPin size={28} strokeWidth={2} />,
    title: "Home Collection",
    desc: "Hassle-free doorstep sample collection by trained professionals.",
  },
  {
    icon: <Zap size={28} strokeWidth={2} />,
    title: "Fast Reporting",
    desc: "Get your digital reports quickly within 12–24 hours on your phone.",
  },
  {
    icon: <ThumbsUp size={28} strokeWidth={2} />,
    title: "Honest Pricing",
    desc: "No hidden charges. Just transparent, affordable diagnostic care.",
  }
];

export function WhyBook() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <SectionTitle
          title={
            <>
              Why <span style={{ color: 'var(--color-brand-red)' }}>Book Tests</span> With Us?
            </>
          }
          align="center"
        />
        
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div key={i} className={styles.feature}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <div>
                <h4 className={styles.title}>{feature.title}</h4>
                <p className={styles.description}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
