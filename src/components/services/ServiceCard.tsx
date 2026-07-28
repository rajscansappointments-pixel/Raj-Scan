'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, FlaskConical, Stethoscope, HeartPulse } from 'lucide-react';
import { ServiceData } from '@/data/services';

const categoryIcons: Record<string, React.ReactNode> = {
  Radiology: <Activity size={16} />,
  Laboratory: <FlaskConical size={16} />,
  Wellness: <Stethoscope size={16} />,
  Cardiology: <HeartPulse size={16} />,
};

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/services/${service.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            backgroundColor: 'var(--color-surface-card)',
            borderRadius: 'var(--radius-2xl)',
            overflow: 'hidden',
            border: 'var(--border-width) solid var(--color-neutral-200)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Image Container */}
          <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ width: '100%', height: '100%' }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            
            <div style={{
              position: 'absolute',
              top: 'var(--space-16)',
              left: 'var(--space-16)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(8px)',
              padding: 'var(--space-8) var(--space-16)',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-8)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--color-brand-navy)',
            }}>
              {categoryIcons[service.category]}
              {service.category}
            </div>
          </div>

          {/* Content Container */}
          <div style={{ padding: 'var(--space-32)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--color-brand-navy)',
              marginBottom: 'var(--space-12)',
              lineHeight: 1.2
            }}>
              {service.title}
            </h3>
            
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: 'var(--space-24)',
              flexGrow: 1
            }}>
              {service.shortDescription}
            </p>

            <div style={{ height: '1px', backgroundColor: 'var(--color-neutral-200)', marginBottom: 'var(--space-20)' }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: 'var(--color-brand-navy)',
              fontWeight: 500,
              fontSize: '0.875rem'
            }}>
              <span>Learn more</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
