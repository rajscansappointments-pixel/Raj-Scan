'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  if (!faqs || faqs.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', marginTop: 'var(--space-24)' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div 
            key={index} 
            style={{ 
              border: '1px solid var(--color-neutral-200)', 
              borderRadius: 'var(--radius-xl)', 
              overflow: 'hidden',
              backgroundColor: 'white'
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--space-20) var(--space-24)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                outline: 'none',
              }}
            >
              <span style={{ 
                fontSize: '1.0625rem', 
                fontWeight: 600, 
                color: 'var(--color-brand-navy)',
                paddingRight: 'var(--space-24)'
              }}>
                {faq.q}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ flexShrink: 0, color: 'var(--color-text-tertiary)' }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div style={{ 
                    padding: '0 var(--space-24) var(--space-24)', 
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    fontSize: '0.9375rem'
                  }}>
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
