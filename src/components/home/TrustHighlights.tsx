'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, MapPin, HeartPulse, Activity } from 'lucide-react';
import styles from './TrustHighlights.module.css';

const stats = [
  { icon: Award, target: 25, suffix: '+', label: 'Years of Trusted Healthcare' },
  { icon: MapPin, target: 3, suffix: '', label: 'Branches (Dindigul, Chennai, Sivagangai)' },
  { icon: HeartPulse, target: 7, suffix: '', label: 'Diagnostic Services Under One Roof' },
  { icon: Activity, target: 32, suffix: ' Slice', label: 'CT (Siemens SOMATOM go-Now)' },
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
        const duration = 1000; // Faster duration (1 second)

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
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function TrustHighlights() {
  return (
    <div className={styles.strip}>
      {stats.map((s, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.iconWrap}>
            <s.icon size={24} strokeWidth={1.5} className={styles.icon} />
          </div>
          <div className={styles.number}>
            <Counter target={s.target} suffix={s.suffix} />
          </div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
