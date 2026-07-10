import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'For Doctors | Raj Scans',
  description: 'Referral information and collaboration details for healthcare professionals.',
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero 
        title="For Referring Physicians" 
        description="Partnering with healthcare professionals to deliver accurate clinical insights."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Doctors' }]} />
      </PageHero>

      <Section>
        <Container>
          <SectionTitle 
            title="Collaborate with Raj Scans" 
            description="We value our relationship with referring physicians. Our goal is to provide you with the most accurate diagnostic reports in the shortest possible time, enabling you to make informed decisions for your patients."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-24)', marginTop: 'var(--space-48)' }}>
            <Card>
              <CardHeader>
                <CardTitle>Fast Turnaround Time</CardTitle>
                <CardDescription>Most standard reports are available within hours of the scan completion.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Direct Radiologist Access</CardTitle>
                <CardDescription>Our senior radiologists are always available for case discussions and consultations.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Digital Report Delivery</CardTitle>
                <CardDescription>Secure, HIPAA-compliant digital delivery of high-resolution images and reports.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
