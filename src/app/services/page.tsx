import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Our Services | Raj Scans',
  description: 'Comprehensive diagnostic imaging services including MRI, CT Scans, Ultrasound, and Digital X-Rays.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Diagnostic Services" 
        description="Comprehensive imaging solutions utilizing cutting-edge technology for precise diagnostics."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
      </PageHero>

      <Section>
        <Container>
          <ServicesPreview />
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
