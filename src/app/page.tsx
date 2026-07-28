import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/home/Hero').then((mod) => mod.Hero));
const AboutIntro = dynamic(() => import('@/components/home/AboutIntro').then((mod) => mod.AboutIntro));
const ServicesPreview = dynamic(() => import('@/components/home/ServicesPreview').then((mod) => mod.ServicesPreview));
const PackagesPreview = dynamic(() => import('@/components/home/PackagesPreview').then((mod) => mod.PackagesPreview));
const StorySection = dynamic(() => import('@/components/home/StorySection').then((mod) => mod.StorySection));
const Testimonials = dynamic(() => import('@/components/home/Testimonials').then((mod) => mod.Testimonials));
const FAQ = dynamic(() => import('@/components/home/FAQ').then((mod) => mod.FAQ));

export const metadata = {
  title: 'Raj Scans | Premium Diagnostic Center — Chennai OMR',
  description: 'Experience state-of-the-art diagnostic imaging with unparalleled precision. MRI, CT Scans, Ultrasound, Color Doppler and full health packages in Chennai.',
};

export default function HomePage() {
  return (
    <>
      <Hero />

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

      <StorySection />

      <Section id="testimonials">
        <Container>
          <Testimonials />
        </Container>
      </Section>

      <Section id="faq" alternate>
        <Container>
          <FAQ />
        </Container>
      </Section>

      <ScrollToTop />
    </>
  );
}
