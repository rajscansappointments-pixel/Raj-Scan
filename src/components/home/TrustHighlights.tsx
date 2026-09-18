'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, MapPin, HeartPulse, Activity } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import styles from './TrustHighlights.module.css';

interface StatItem {
  icon: typeof Award;
  target: number;
  suffix: string;
  label: string;
  theme: 'red' | 'navy' | 'teal' | 'gold';
}

const stats: StatItem[] = [
  { icon: Award, target: 25, suffix: '+', label: 'Years of Trusted Healthcare', theme: 'red' },
  { icon: MapPin, target: 3, suffix: '', label: 'Branches (Dindigul, Chennai, Sivagangai)', theme: 'navy' },
  { icon: HeartPulse, target: 7, suffix: '', label: 'Diagnostic Services Under One Roof', theme: 'teal' },
  { icon: Activity, target: 32, suffix: ' Slice', label: 'CT (Siemens SOMATOM go-Now)', theme: 'gold' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        
        let start: number | null = null;
        const duration = 1000;

        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3); // Smooth easeOutCubic
          setCount(Math.round(ease * target));
          
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const isTextSuffix = suffix.trim() === 'Slice';

  return (
    <span ref={ref} className={styles.counterWrap}>
      <span className={styles.numberDigits}>{count}</span>
      {suffix && (
        <span className={isTextSuffix ? styles.suffixText : styles.suffixSymbol}>
          {suffix}
        </span>
      )}
    </span>
  );
}

export function TrustHighlights() {
  return (
    <section className={styles.section} aria-label="Key Healthcare Highlights">
      <Container>
        <div className={styles.card}>
          <div className={styles.grid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.item}>
                <div className={`${styles.iconWrap} ${styles[s.theme]}`}>
                  <s.icon size={24} strokeWidth={2} className={styles.icon} />
                </div>
                <div className={styles.number}>
                  <Counter target={s.target} suffix={s.suffix} />
                </div>
                <div className={styles.label}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
