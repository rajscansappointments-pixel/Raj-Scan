'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import styles from './CampaignHero.module.css';

export function CampaignHero() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Complete Body Health Checkups in <span className={styles.highlight}>Chennai</span>
            </h1>
            <p className={styles.description}>
              Your health matters. Experience clinical excellence with Siemens-grade imaging, 100% accurate results, and hassle-free home sample collection.
            </p>
          </div>

          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Book Your Health Check-Up</h3>
            <p className={styles.formDesc}>Fill out the form below and our team will call you to confirm your appointment.</p>
            
            <form className={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className={styles.label}>Full Name *</label>
                <Input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div>
                <label htmlFor="mobile" className={styles.label}>Mobile Number *</label>
                <Input type="tel" id="mobile" placeholder="+91 90000 00000" required />
              </div>
              
              <Button variant="primary" size="lg" style={{ width: '100%', marginTop: 'var(--space-8)' }}>
                Get a Call Back
              </Button>
              
              <p className={styles.disclaimer}>
                By clicking "Get a Call Back", you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
