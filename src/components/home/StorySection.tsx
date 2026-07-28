'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Users, Microscope, Heart, CircleDollarSign, Building, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import styles from './StorySection.module.css';

const features = [
  {
    title: 'Advanced Imaging',
    description: 'Equipped with MRI, CT, Ultrasound, Digital X-Ray, and Mammography systems.',
    icon: Monitor,
  },
  {
    title: 'Experienced Radiologists',
    description: 'Decades of expertise combined with advanced technology for accurate interpretation.',
    icon: Users,
  },
  {
    title: 'Advanced Technology',
    description: 'Continuous investment in modern imaging solutions like Siemens MRI & CT.',
    icon: Microscope,
  },
  {
    title: 'Patient-Centred Care',
    description: 'Designed to provide a comfortable, hygienic, and stress-free experience.',
    icon: Heart,
  },
  {
    title: 'Affordable & Transparent',
    description: 'Accessible through fair pricing without compromising quality.',
    icon: CircleDollarSign,
  },
  {
    title: 'Complete Diagnostic Centre',
    description: 'Comprehensive imaging and laboratory services under one roof.',
    icon: Building,
  },
];

const trustIndicators = [
  '25+ Years',
  'Advanced Imaging Technology',
  'Experienced Radiologists',
  'Patient-Centered Care',
  'Affordable Diagnostics',
  'Fast Reports',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section} id="why-choose-us" ref={containerRef}>
      <Container>
        {/* Top Section: Two-Column Why Raj Scans */}
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <p className={styles.eyebrow}>WHY RAJ SCANS</p>
            <h2 className={styles.heading}>25+ Years of Trusted Diagnostic Excellence</h2>
            <p className={styles.editorial}>
              From serving thousands of families in Dindigul to establishing our advanced diagnostic centre in Chennai (OMR), Raj Scans combines decades of clinical expertise with world-class imaging technology to deliver accurate, timely, and patient-focused diagnostics.
            </p>
            <Link href="/about" className={styles.learnMoreLink}>
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className={styles.rightColumn}>
            <motion.div 
              className={styles.featureGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={idx} variants={itemVariants} className={styles.featureCard}>
                    <div className={styles.featureHeader}>
                      <span className={styles.featureNum}>0{idx + 1}</span>
                      <Icon size={16} strokeWidth={1.5} className={styles.featureIcon} />
                    </div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Middle Section: Trust Strip */}
        <div className={styles.trustSection}>
          <div className={styles.thinDivider} />
          <motion.div 
            className={styles.trustStrip}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className={styles.trustItem}>
                <span className={styles.trustText}>{indicator}</span>
                {idx < trustIndicators.length - 1 && <span className={styles.trustBullet}>•</span>}
              </div>
            ))}
          </motion.div>
          <div className={styles.thinDivider} />
        </div>
      </Container>
    </section>
  );
}
