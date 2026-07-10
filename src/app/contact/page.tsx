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
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>[Full Address Placeholder]</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                <div style={{ color: 'var(--color-brand-teal)', backgroundColor: 'var(--color-neutral-50)', width: '48px', height: '48px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-brand-navy)' }}>Phone</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>[Phone Number Placeholder]</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                <div style={{ color: 'var(--color-brand-teal)', backgroundColor: 'var(--color-neutral-50)', width: '48px', height: '48px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-brand-navy)' }}>Email</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>[Email Address Placeholder]</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531550415!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1614234509341!5m2!1sen!2sin" 
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
