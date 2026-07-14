import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Raj Scans',
  description: 'Get in touch with Raj Scans for appointments, enquiries, and location details.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us" 
        description="We are here to assist you with your diagnostic needs."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      </PageHero>

      <Section>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-64)' }}>
            
            {/* Contact Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-32)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                <div style={{ color: 'var(--color-brand-teal)', backgroundColor: 'var(--color-neutral-50)', width: '48px', height: '48px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-brand-navy)' }}>Location</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                  2 & 26, Srinivasan Nagar<br/>
                  Rajiv Gandhi Salai (OMR)<br/>
                  Kottivakkam<br/>
                  Chennai - 600 041
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                <div style={{ color: 'var(--color-brand-teal)', backgroundColor: 'var(--color-neutral-50)', width: '48px', height: '48px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-brand-navy)' }}>Phone</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>+91 99444 98000</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                <div style={{ color: 'var(--color-brand-teal)', backgroundColor: 'var(--color-neutral-50)', width: '48px', height: '48px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-brand-navy)' }}>Email</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>rajscansappointments@gmail.com</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                <div style={{ color: 'var(--color-brand-teal)', backgroundColor: 'var(--color-neutral-50)', width: '48px', height: '48px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-brand-navy)' }}>Business Hours</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Mon - Sat: 8:00 AM - 8:00 PM<br/>Sun: 8:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Form and Map Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-48)' }}>
              
              <div style={{ backgroundColor: 'var(--color-surface-card)', padding: 'var(--space-32)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', border: 'var(--border-width) solid var(--color-neutral-200)' }}>
                <SectionTitle title="Send an Enquiry" description="Fill out the form below and our team will get back to you promptly." />
                <ContactForm />
              </div>

              {/* Map Embedded */}
              <div style={{ width: '100%', height: '400px', backgroundColor: 'var(--color-neutral-200)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=2%20%26%2026%2C%20Srinivasan%20Nagar%2C%20Rajiv%20Gandhi%20Salai%20(OMR)%2C%20Kottivakkam%2C%20Chennai%20-%20600%20041&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Raj Scans Location Map"
                ></iframe>
              </div>

            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
