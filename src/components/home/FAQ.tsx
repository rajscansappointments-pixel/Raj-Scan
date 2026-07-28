'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: "Do I need a doctor's referral to get a scan at Raj Scans?",
    a: "A referral is recommended for most imaging studies as it helps our radiologists understand your clinical history. However, we also welcome walk-in patients for many tests. Please call us on 044-46435198 or +91 99444 98000 to confirm for your specific scan.",
  },
  {
    q: "How long does it take to get my report?",
    a: "Most reports are ready the same day. Emergency and critical findings are communicated directly to your doctor promptly. Reports are shared digitally and can also be collected in person at the centre.",
  },
  {
    q: "Are your imaging machines radiation-safe?",
    a: "Our digital X-ray and CT equipment is designed for low-dose imaging while maintaining the highest image quality. MRI and Ultrasound are completely radiation-free. All our equipment follows standard safety protocols.",
  },
  {
    q: "Can I eat or drink before my scan?",
    a: "Preparation requirements vary by scan type. For abdominal ultrasounds, fasting for 4–6 hours is typically required. Our team will provide clear preparation instructions when you book your appointment. Please call us if you have any questions.",
  },
  {
    q: "Do you offer dedicated care for expectant mothers, children, and senior citizens?",
    a: "Yes. Raj Scans provides dedicated care for expectant mothers, children, and senior citizens — ensuring a comfortable, patient-first experience for every age group.",
  },
  {
    q: "Is parking available at Raj Scans OMR?",
    a: "Yes, parking is available at our centre at 2&26, Srinivasan Nagar, Rajivgandhi Road (OMR), Kottivakkam, Chennai – 600 041. We are conveniently accessible via OMR. Please contact us at rajscansomr@gmail.com for any further assistance.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>FAQs</span>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>
          Everything you need to know before your visit to Raj Scans.
        </p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
            <button
              className={styles.question}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{faq.q}</span>
              <ChevronDown size={20} className={`${styles.chevron} ${open === i ? styles.chevronOpen : ''}`} />
            </button>
            <div className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
