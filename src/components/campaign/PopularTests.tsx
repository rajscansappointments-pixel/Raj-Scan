import { Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import styles from './PopularTests.module.css';

const tests = [
  {
    name: "Infection Panel",
    desc: "Helps diagnose and monitor infections, inflammation, anemia, or blood disorders.",
  },
  {
    name: "Thyroid Panel",
    desc: "Detects imbalances in thyroid hormone levels that affect energy, weight, mood, and metabolism.",
  },
  {
    name: "Liver Function Test",
    desc: "Monitors liver health and detects conditions like fatty liver, hepatitis, or damage.",
  },
  {
    name: "Lipid Profile",
    desc: "Measures cholesterol and triglyceride levels to assess heart health and cardiovascular risk.",
  },
  {
    name: "Iron Profile",
    desc: "Evaluates iron levels to detect anemia or iron overload affecting energy.",
  },
  {
    name: "Vitamin D Test",
    desc: "Checks for Vitamin D deficiency, which may cause bone pain and weakened immunity.",
  }
];

export function PopularTests() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <SectionTitle
          title={
            <>
              Frequently <span style={{ color: 'var(--color-brand-red)' }}>Booked Tests</span>
            </>
          }
          description="At Raj Scans, we offer a wide range of reliable blood tests to help you stay informed about your health using our advanced lab technology."
          align="center"
        />

        <div className={styles.grid}>
          {tests.map((test, index) => (
            <div key={index} className={styles.testCard}>
              <div className={styles.iconWrapper}>
                <Activity size={20} strokeWidth={2.5} />
              </div>
              <h4 className={styles.testName}>{test.name}</h4>
              <p className={styles.testDesc}>{test.desc}</p>
              <Link href="#packages" className={styles.bookLink}>
                Book Test <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
