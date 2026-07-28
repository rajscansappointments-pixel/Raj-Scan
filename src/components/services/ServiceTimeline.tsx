'use client';

import { motion } from 'framer-motion';

interface TimelineStep {
  step: string;
  desc: string;
}

interface ServiceTimelineProps {
  timeline: TimelineStep[];
}

export function ServiceTimeline({ timeline }: ServiceTimelineProps) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-32)', marginTop: 'var(--space-24)' }}>
      {timeline.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
          style={{ display: 'flex', gap: 'var(--space-24)', position: 'relative' }}
        >
          {/* Connecting Line */}
          {index !== timeline.length - 1 && (
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '19px',
              width: '2px',
              height: 'calc(100% - 10px)',
              backgroundColor: 'var(--color-neutral-200)',
              zIndex: 0
            }} />
          )}

          {/* Number Circle */}
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-brand-red)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '1rem',
            flexShrink: 0,
            zIndex: 1,
            boxShadow: '0 4px 12px rgba(185, 28, 28, 0.2)'
          }}>
            {index + 1}
          </div>

          {/* Content */}
          <div style={{ paddingTop: '8px' }}>
            <h4 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 600, 
              color: 'var(--color-brand-navy)', 
              marginBottom: 'var(--space-8)' 
            }}>
              {item.step}
            </h4>
            <p style={{ 
              fontSize: '0.9375rem', 
              color: 'var(--color-text-secondary)', 
              lineHeight: 1.6 
            }}>
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
