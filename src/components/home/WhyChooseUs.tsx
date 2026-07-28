'use client';

import { useRef } from 'react';
import { Microscope, Monitor, Users, Heart, CircleDollarSign, Building, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    n: '01',
    title: 'State-of-the-Art Imaging',
    description: 'Our centre is equipped with advanced MRI, CT, Ultrasound, Digital X-Ray, Mammography and laboratory systems designed to provide high-quality diagnostic imaging with exceptional precision.',
    icon: Monitor,
  },
  {
    n: '02',
    title: 'Experienced Radiologists',
    description: 'Our highly qualified radiologists combine decades of expertise with advanced technology to deliver accurate interpretations that support confident clinical decisions.',
    icon: Users,
  },
  {
    n: '03',
    title: 'Advanced Diagnostic Technology',
    description: 'We continuously invest in modern imaging solutions, including Siemens MRI and CT systems and advanced ultrasound platforms, ensuring reliable performance and high diagnostic quality.',
    icon: Microscope,
  },
  {
    n: '04',
    title: 'Patient-Centred Experience',
    description: 'From registration to final reporting, every step is designed to provide a comfortable, hygienic and stress-free experience for patients of every age.',
    icon: Heart,
  },
  {
    n: '05',
    title: 'Affordable & Transparent Care',
    description: 'We believe advanced diagnostics should remain accessible through fair pricing without compromising technology, quality or patient care.',
    icon: CircleDollarSign,
  },
  {
    n: '06',
    title: 'Complete Diagnostic Centre',
    description: 'Raj Scans offers MRI, CT Scan, Digital X-Ray, Ultrasound, Mammography, Laboratory Services and Echo-ECG under one roof for a seamless diagnostic experience.',
    icon: Building,
  },
];

const trustIndicators = [
  '25+ Years of Excellence',
  'Advanced Imaging Technology',
  'Experienced Radiologists',
  'Patient-Centred Care',
  'Affordable Diagnostics',
  'Fast & Accurate Reports',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const }
  },
};

const leftVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const }
  },
};

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className={styles.section} ref={containerRef}>
      {/* Background Texture & Glow */}
      <div className={styles.bgGlow} />
      <div className={styles.bgTexture} />

      <div className={styles.contentWrapper}>
        {/* Left Side: Editorial Copy */}
        <motion.div 
          className={styles.leftColumn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={leftVariants}
        >
          <div className={styles.stickyContent}>
            <p className={styles.eyebrow}>Why Raj Scans</p>
            <h2 className={styles.heading}>25+ Years of Trusted<br />Diagnostic Excellence.</h2>
            <p className={styles.editorial}>
              From serving thousands of families in Dindigul to establishing our advanced diagnostic centre in Chennai (OMR), Raj Scans combines decades of clinical expertise with world-class imaging technology to deliver accurate, timely, and patient-focused diagnostics.
            </p>
            <a href="/about" className={styles.cta}>
              Explore Our Technology <ArrowRight size={18} strokeWidth={2} />
            </a>
          </div>
        </motion.div>

        {/* Visual Divider */}
        <div className={styles.dividerZone}>
          <div className={styles.verticalLine}>
            <motion.div 
              className={styles.glowingDot} 
              style={{ top: dotY }} 
            />
          </div>
        </div>

        {/* Right Side: Interactive Grid */}
        <motion.div 
          className={styles.rightColumn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className={styles.grid}>
            {features.map((r) => {
              const Icon = r.icon;
              return (
                <motion.div key={r.n} variants={itemVariants} className={styles.featureCard}>
                  <div className={styles.cardAccent} />
                  
                  <div className={styles.cardHeader}>
                    <span className={styles.num}>{r.n}</span>
                    <div className={styles.titleWrap}>
                      <Icon size={18} className={styles.icon} strokeWidth={1.5} />
                      <h3 className={styles.cardTitle}>{r.title}</h3>
                    </div>
                  </div>
                  
                  <div className={styles.thinDivider} />
                  
                  <div className={styles.cardFooter}>
                    <p className={styles.cardBody}>{r.description}</p>
                    <ArrowRight size={20} className={styles.arrow} strokeWidth={1.5} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Trust Strip */}
      <motion.div 
        className={styles.trustStrip}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {trustIndicators.map((indicator, idx) => (
          <div key={idx} className={styles.trustItem}>
            <span>{indicator}</span>
            {idx < trustIndicators.length - 1 && <span className={styles.trustBullet}>•</span>}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
