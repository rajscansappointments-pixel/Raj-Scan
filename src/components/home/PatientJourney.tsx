'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Calendar, Building, Activity, UserCheck, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import styles from './PatientJourney.module.css';

const steps = [
  {
    title: 'Book Appointment',
    description: 'Schedule online or by phone in under 2 minutes.',
    icon: Calendar,
  },
  {
    title: 'Visit Centre',
    description: 'Arrive at our modern, welcoming diagnostic facility.',
    icon: Building,
  },
  {
    title: 'Get Scanned',
    description: 'Experience precise imaging with our advanced equipment.',
    icon: Activity,
  },
  {
    title: 'Expert Review',
    description: 'Senior radiologists analyse every scan meticulously.',
    icon: UserCheck,
  },
  {
    title: 'Receive Report',
    description: 'Get your detailed report the same day — digitally.',
    icon: FileText,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export function PatientJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"]
  });

  // Animates the scaleX of the gold timeline line from 0 to 1 on scroll
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={styles.section} ref={containerRef}>
      {/* Background Enhancements */}
      <div className={styles.noise} />
      <div className={styles.rings} />

      <Container className={styles.contentWrapper}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Experience</p>
          <h2 className={styles.heading}>Seamless care,<br />step by step.</h2>
          <p className={styles.introText}>
            From the moment you book to the delivery of your final report, every step of your journey is designed to be comfortable, efficient, and precise.
          </p>
        </div>

        <motion.div 
          className={styles.timelineContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting Line (Desktop) */}
          <div className={styles.lineTrack}>
            <motion.div 
              className={styles.lineFill} 
              style={{ scaleX }} 
            />
          </div>

          <div className={styles.timelineGrid}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.title} variants={stepVariants} className={styles.step}>
                  
                  {/* Mobile Connecting Line (only visible on small screens) */}
                  {index < steps.length - 1 && <div className={styles.mobileConnector} aria-hidden="true" />}
                  
                  <div className={styles.visual}>
                    <div className={styles.milestoneDot} />
                    <div className={styles.iconWrap}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className={styles.content}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                  
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/packages" style={{ textDecoration: 'none' }}>
            <Button variant="accent" size="lg">
              Book Your Appointment <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}
