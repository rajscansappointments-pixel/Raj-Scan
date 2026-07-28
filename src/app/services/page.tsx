import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ServiceCatalog } from '@/components/services/ServiceCatalog';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'Diagnostic Services | Raj Scans',
  description: 'Explore our comprehensive range of diagnostic services including 1.5T MRI, 32-Slice CT, 3D/4D Ultrasound, Digital X-Ray, Mammography, Echo-ECG, and Lab Services.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Raj Scans Diagnostic Services',
  description: 'Explore our comprehensive range of diagnostic services.',
  url: 'https://www.rajscans.com/services',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Diagnostic Imaging and Lab Services',
    itemListElement: servicesData.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'MedicalProcedure',
        name: service.title,
        description: service.overview
      },
      position: index + 1
    }))
  }
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero 
        title="Diagnostic Services" 
        description="Advanced imaging and diagnostic solutions designed to provide accurate results with modern technology and experienced specialists."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
      </PageHero>

      <Section style={{ backgroundColor: 'var(--color-neutral-50)' }}>
        <Container>
          <ServiceCatalog />
        </Container>
      </Section>
    </>
  );
}
