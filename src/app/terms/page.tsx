import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Raj Scans',
  description: 'Terms and Conditions for using Raj Scans services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]} />
      </PageHero>

      <Section>
        <Container>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
            <p><strong>Last Updated: [Date Placeholder]</strong></p>
            
            <p>[Terms & Conditions Introduction Placeholder. Welcome to Raj Scans. By accessing our services and website, you agree to comply with the following terms and conditions.]</p>
            
            <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>1. Services Provided</h2>
            <p>[Services details placeholder. Raj Scans provides diagnostic imaging services based on the prescription of a registered medical practitioner. Our reports are for medical diagnostic purposes and should be interpreted by a qualified doctor.]</p>
            
            <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>2. Appointments & Cancellations</h2>
            <p>[Appointments details placeholder. We request that you arrive 15 minutes prior to your scheduled appointment. Cancellations should be communicated at least 24 hours in advance.]</p>
            
            <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>3. Reports & Delivery</h2>
            <p>[Reports details placeholder. While we strive to provide reports within the stated timeframe, complex cases may require additional review time. Digital reports will be shared via secure channels.]</p>

            <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>4. Liability</h2>
            <p>[Liability details placeholder. Raj Scans shall not be held liable for any direct or indirect consequences arising from the use of our website or services beyond the scope of professional medical diagnostics.]</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
