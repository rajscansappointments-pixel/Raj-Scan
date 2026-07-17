import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

import { PackagesPreview } from '@/components/home/PackagesPreview';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Health Packages | Raj Scans',
  description: 'Preventive master health checkup packages tailored to your needs.',
};

export default function PackagesPage() {
  return (
    <>

      <Section>
        <Container>
          <PackagesPreview />
        </Container>
      </Section>

      <ContactCTA defaultService="Health Package" />
    </>
  );
}
