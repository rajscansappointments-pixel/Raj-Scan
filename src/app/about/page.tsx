import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { AboutIntro } from '@/components/home/AboutIntro';
import { Technology } from '@/components/home/Technology';
import { MissionVision } from '@/components/about/MissionVision';

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
          <MissionVision />
        </Container>
      </Section>

      <Section>
        <Container>
          <Technology />
        </Container>
      </Section>
    </>
  );
}
