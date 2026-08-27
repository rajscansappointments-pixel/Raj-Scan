'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './AboutIntro.module.css';

const aboutImages = [
  { src: '/images/home/about-reception-v2.jpg', alt: 'Raj Scans — diagnostic centre reception, OMR Chennai' },
  { src: '/images/home/about-awards-v3.jpg', alt: 'Raj Scans — awards and certifications' }
];

export function AboutIntro() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutImages.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>

      {/* Image Slider */}
      <div className={styles.imageCol}>
        <div className={styles.imageFrame}>

          {aboutImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              quality={90}
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.img}
              style={{
                opacity: activeIndex === index ? 1 : 0,
                visibility: activeIndex === index ? 'visible' : 'hidden',
                transition: 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out'
              }}
            />
          ))}

          {/* Slider Indicators */}
          <div style={{ position: 'absolute', bottom: '24px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
            {aboutImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: activeIndex === idx ? 'var(--color-brand-red)' : 'rgba(255, 255, 255, 0.6)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeNum}>25<sup>+</sup></span>
          <span className={styles.badgeTxt}>Years of<br />Trusted Care</span>
        </div>
      </div>

      {/* Text */}
      <div className={styles.textCol}>
        <p className={styles.eyebrow}>About Raj Scans</p>
        <h2 className={styles.heading}>Imaging with Care.<br />For 25 Years and Beyond.</h2>
        <p className={styles.body}>
          What began in Dindigul 25 years ago was driven by a single, unwavering vision: to provide patients with clinical excellence in an environment that feels safe, comforting, and deeply human.
        </p>
        <p className={styles.body}>
          Today, that same founding commitment has brought us to Chennai&apos;s OMR corridor. While our technology has continuously evolved, our philosophy remains unchanged. We believe that true healthcare is a delicate balance of absolute diagnostic precision and genuine empathy. When you walk through our doors, you aren&apos;t just a number or a scan — you are a person seeking answers, and our entire team is dedicated to supporting you with clarity and compassionate care.
        </p>

        <Link href="/about" className={styles.link}>
          Our Story <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>

    </div>
  );
}
