import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './AboutIntro.module.css';

export function AboutIntro() {
  return (
    <div className={styles.wrapper}>

      {/* Image */}
      <div className={styles.imageCol}>
        <div className={styles.imageFrame}>
          <Image
            src="/images/facility/logo-wall.jpg"
            alt="Raj Scans — diagnostic centre reception, OMR Chennai"
            fill
            quality={90}
            sizes="(max-width: 900px) 100vw, 48vw"
            className={styles.img}
          />
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
