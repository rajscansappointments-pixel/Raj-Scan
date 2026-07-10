import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { CareerForm } from '@/components/forms/CareerForm';

export const metadata: Metadata = {
  title: 'Careers | Raj Scans',
  description: 'Join our team of dedicated healthcare professionals.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero 
        title="Careers at Raj Scans" 
        description="Build your career in an environment that fosters growth and clinical excellence."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />
      </PageHero>

      <Section>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-48)' }}>
            <div>
              <SectionTitle 
                title="Why Work With Us" 
                description="We believe that our team is our greatest asset. At Raj Scans, we provide a supportive, technologically advanced environment where medical professionals can thrive."
              />
              <ul style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', paddingLeft: 'var(--space-24)', marginTop: 'var(--space-16)' }}>
                <li>Access to state-of-the-art diagnostic technology</li>
                <li>Continuous learning and professional development</li>
                <li>Collaborative and respectful workplace culture</li>
                <li>Competitive compensation packages</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'var(--color-surface-card)', padding: 'var(--space-48)', borderRadius: 'var(--radius-xl)', border: 'var(--border-width) solid var(--color-neutral-200)', textAlign: 'center' }}>
              <SectionTitle 
                align="center"
                title="Current Opportunities" 
                description="We are always looking for talented Radiologists, Technicians, and Support Staff."
              />
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Fill out the form below to apply.
              </p>
              <CareerForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
