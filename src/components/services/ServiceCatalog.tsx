'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData, ServiceCategory } from '@/data/services';
import { ServiceCard } from './ServiceCard';

const categories: ServiceCategory[] = ['All', 'Radiology', 'Cardiology', 'Laboratory', 'Wellness'];

export function ServiceCatalog() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');

  const filteredServices = servicesData.filter(
    (service) => activeCategory === 'All' || service.category === activeCategory
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-48)' }}>
      {/* Filter Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 'var(--space-12)',
        marginBottom: 'var(--space-24)'
      }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              position: 'relative',
              padding: '12px 24px',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: activeCategory === category ? 'var(--color-brand-navy)' : 'var(--color-neutral-100)',
              color: activeCategory === category ? '#FFFFFF' : 'var(--color-text-secondary)',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              outline: 'none',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 'var(--space-32)',
          alignItems: 'stretch'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{ height: '100%' }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
