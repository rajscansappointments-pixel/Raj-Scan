import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { PackagesPreview } from '@/components/home/PackagesPreview';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Health Packages | Raj Scans',
  description: 'Preventive master health checkup packages tailored to your needs.',
};

export default function PackagesPage() {
  return (
    <>
      <PageHero 
        title="Diagnostic Health Packages" 
        description="Comprehensive master health checkups to keep you informed about your well-being."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Packages' }]} />
      </PageHero>

      <Section>
        <Container>
          <PackagesPreview />
        </Container>
      </Section>

      <ContactCTA defaultService="Health Package" />
    </>
  );
}
