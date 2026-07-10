import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Raj Scans',
  description: 'Privacy Policy and data handling practices at Raj Scans.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      </PageHero>

      <Section>
        <Container>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
            <p><strong>Last Updated: [Date Placeholder]</strong></p>
            
            <p>[Privacy Policy Introduction Placeholder. At Raj Scans, we are committed to protecting your privacy and ensuring the security of your personal and medical information.]</p>
            
            <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>1. Information We Collect</h2>
            <p>[Information collection details placeholder. We collect information you provide directly to us when booking an appointment, including your name, contact details, and relevant medical history.]</p>
            
            <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>2. How We Use Your Information</h2>
            <p>[Usage details placeholder. Your information is used strictly to provide diagnostic services, deliver reports, and for necessary internal clinical auditing.]</p>
            
            <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>3. Data Security</h2>
            <p>[Security details placeholder. We implement robust security measures to ensure your medical records are kept confidential and are compliant with applicable healthcare data regulations.]</p>

            <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>4. Contact Us</h2>
            <p>[Contact details placeholder. If you have any questions about this Privacy Policy, please contact us at email@example.com.]</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
