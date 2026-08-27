'use client';

import Link from 'next/link';
import { Phone, Calendar, MessageCircle, MapPin } from 'lucide-react';
import styles from './MobileBottomBar.module.css';

export function MobileBottomBar() {
  return (
    <div className={styles.bottomBar}>
      <Link href="tel:+914446435198" className={styles.actionButton}>
        <Phone size={20} />
        <span>Call</span>
      </Link>
      <Link href="https://wa.me/919944498000" className={styles.actionButton} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </Link>
      <Link href="https://maps.google.com/?q=Raj+Scans+OMR" className={styles.actionButton} target="_blank" rel="noopener noreferrer">
        <MapPin size={20} />
        <span>Directions</span>
      </Link>
      <Link href="#book-appointment" className={`${styles.actionButton} ${styles.bookButton}`}>
        <Calendar size={20} />
        <span>Book</span>
      </Link>
    </div>
  );
}
