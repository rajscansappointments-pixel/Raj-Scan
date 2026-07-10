import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

import { Hero } from '@/components/home/Hero';
import { TrustHighlights } from '@/components/home/TrustHighlights';
import { AboutIntro } from '@/components/home/AboutIntro';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { PackagesPreview } from '@/components/home/PackagesPreview';
import { Technology } from '@/components/home/Technology';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata = {
  title: 'Raj Scans | Premium Diagnostic Center',
  description: 'Experience state-of-the-art diagnostic imaging with unparalleled precision. MRI, CT Scans, Ultrasound, and full health packages.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustHighlights />

      <Section id="about">
        <Container>
          <AboutIntro />
        </Container>
      </Section>

      <Section id="services" alternate>
        <Container>
          <ServicesPreview />
        </Container>
      </Section>

      <Section id="packages">
        <Container>
          <PackagesPreview />
        </Container>
      </Section>

      <Section id="technology" alternate>
        <Container>
          <Technology />
        </Container>
      </Section>

      <Section id="why-choose-us">
        <Container>
          <WhyChooseUs />
        </Container>
      </Section>

      <Section id="testimonials" alternate>
        <Container>
          <Testimonials />
        </Container>
      </Section>

      <ContactCTA />
      
      <ScrollToTop />
    </>
  );
}
