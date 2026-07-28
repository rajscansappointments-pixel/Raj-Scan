'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const heroImages = [
  { src: '/images/facility/reception-lobby.png', alt: 'Premium diagnostic centre reception' },
  { src: '/images/facility/mri-scanner.jpg', alt: 'State-of-the-art MRI Scanner' },
  { src: '/images/facility/exterior.jpg', alt: 'Raj Scans exterior view' },
  { src: '/images/facility/logo-wall.jpg', alt: 'Raj Scans waiting lounge' },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className={styles.hero}>
      <div className={styles.split}>

        {/* ── LEFT: Copy ── */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>New Diagnostic Landmark in OMR, Chennai</p>

          <h1 className={styles.heading}>
            Imaging with<br />
            <em className={styles.italic}>Precision.</em><br />
            Care with<br />Heart.
          </h1>

          <p className={styles.sub}>
            After 25 remarkable years of trusted service in Dindigul, Raj Scans brings advanced diagnostic imaging to Chennai’s OMR corridor — equipped with Siemens MRI, CT, and Mindray Ultrasound systems for accurate, timely results.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Book an Appointment
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link href="/services" className={styles.btnGhost}>
              Our Services
            </Link>
          </div>

          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.badgeMark}>✓</span> 25+ Years of Trusted Care
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeMark}>✓</span> Siemens Imaging Technology
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeMark}>✓</span> Experienced Radiologists
            </div>
          </div>
        </div>

        {/* ── RIGHT: Auto-Sliding Image Carousel ── */}
        <div 
          className={styles.right}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.imageFrame}>
            
            {/* Map over images for crossfade */}
            {heroImages.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0} // Only preload the first image
                quality={index === 0 ? 95 : 85}
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.img}
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  visibility: activeIndex === index ? 'visible' : 'hidden',
                  transition: 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out',
                  objectFit: 'cover'
                }}
              />
            ))}
            
            {/* Slider Indicators */}
            <div style={{ position: 'absolute', bottom: '24px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
              {heroImages.map((_, idx) => (
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
                    background: activeIndex === idx ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.6)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Floating stat card */}
            <div className={styles.statCard} style={{ zIndex: 10 }}>
              <div className={styles.statNum}>25<span>+</span></div>
              <div className={styles.statLabel}>Years of Trusted Care</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
