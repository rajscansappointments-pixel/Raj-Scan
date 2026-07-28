'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TrustHighlights.module.css';

const stats = [
  { value: 25,  suffix: '+',  unit: 'Years',    label: 'of Trusted Healthcare' },
  { value: 3,   suffix: '',   unit: 'Branches',  label: 'Dindigul, Chennai & Sivagangai' },
  { value: 7,   suffix: '',   unit: 'Services',  label: 'Under One Roof' },
  { value: 32,  suffix: '',   unit: 'Slice CT',  label: 'Siemens SOMATOM go-Now' },
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
        const duration = 1600;
        const fps = 60;
        const steps = Math.round((duration / 1000) * fps);
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
          setCount(Math.round(ease * target));
          if (step >= steps) clearInterval(timer);
        }, 1000 / fps);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const display = target >= 10000 ? `${Math.floor(count / 1000)}k` : `${count}`;
  return <span ref={ref}>{display}{suffix}</span>;
}

export function TrustHighlights() {
  return (
    <div className={styles.strip}>
      {stats.map((s, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.number}>
            <Counter target={s.value} suffix={s.suffix} />
          </div>
          <div className={styles.unit}>{s.unit}</div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
