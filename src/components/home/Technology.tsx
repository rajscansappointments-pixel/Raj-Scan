"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Settings, Monitor, Zap, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import styles from './Technology.module.css';

const equipment = [
  {
    name: 'Siemens Magnetom Sempra (MRI 1.5T)',
    desc: 'Tim+Dots coil technology, 97% noise reduction, Zero Helium boil-off magnet, brain scans in under 10 minutes.',
    icon: <Monitor size={24} />,
  },
  {
    name: 'Siemens SOMATOM go-Now (CT 32-Slice)',
    desc: 'AI-powered scan automation, 20% faster patient prep, 90% more time with the patient per scan session.',
    icon: <Disc size={24} />,
  },
  {
    name: 'Mindray Resona I9 (Ultrasound 3D/4D)',
    desc: 'ZONE Sonography Technology+ (ZST+), AI-powered breast & thyroid analysis, microvascular visualisation.',
    icon: <Zap size={24} />,
  },
  {
    name: 'Digix ECO Plus (Digital X-Ray)',
    desc: 'Motorised 3D ceiling stand, preview in under 5 seconds, 1000+ APR programmes, wide dynamic range.',
    icon: <Settings size={24} />,
  },
];

const images = [
  { src: '/images/facility/mri-scanner.jpg', alt: 'Siemens MRI Scanner' },
  { src: '/images/facility/ct-scanner.jpg', alt: 'Siemens CT Scanner' },
  { src: '/images/facility/ultrasound.jpg', alt: 'Mindray Ultrasound' },
  { src: '/images/facility/digital-xray.jpg', alt: 'Digital X-Ray System' }
];

export function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <SectionTitle
          subtitle="Our Equipment"
          title="Siemens & Mindray Technology"
          description="Raj Scans invests in proven imaging platforms from Siemens Healthineers and Mindray to ensure every patient receives consistent, high-quality diagnostic results."
        />
        
        <div className={styles.equipmentGrid}>
          {equipment.map((item, index) => (
            <div key={index} className={styles.equipmentItem}>
              <div className={styles.icon}>{item.icon}</div>
              <div>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemDesc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imageWrapper} style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              quality={85}
              className={styles.image}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
