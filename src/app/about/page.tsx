import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { AboutIntro } from '@/components/home/AboutIntro';
import { Technology } from '@/components/home/Technology';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'About Us | Raj Scans',
  description: 'Learn about Raj Scans, our mission, vision, and our commitment to providing accurate and timely diagnostic imaging services.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Raj Scans" 
        description="Pioneering Excellence in Diagnostic Imaging."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
      </PageHero>

      <Section>
        <Container>
          <AboutIntro />
        </Container>
      </Section>

      <Section alternate>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-48)' }}>
            <div>
              <SectionTitle 
                title="Our Mission" 
                description="To provide the highest quality diagnostic services with utmost precision, care, and compassion, ensuring our patients and referring physicians receive accurate information for better health outcomes."
              />
            </div>
            <div>
              <SectionTitle 
                title="Our Vision" 
                description="To be the most trusted and preferred diagnostic center, recognized for our commitment to technological advancement, clinical excellence, and patient-centric care."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Technology />
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
