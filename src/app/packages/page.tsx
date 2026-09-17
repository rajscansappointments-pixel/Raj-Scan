import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

import { PackagesPreview } from '@/components/home/PackagesPreview';

export const metadata: Metadata = {
  title: 'Health Packages | Raj Scans',
  description: 'Preventive master health checkup packages tailored to your needs.',
};

export default function PackagesPage() {
  return (
    <>

      <Section id="packages">
        <Container>
          <PackagesPreview />
        </Container>
      </Section>
    </>
  );
}
