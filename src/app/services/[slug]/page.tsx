import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ServiceTimeline } from '@/components/services/ServiceTimeline';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { servicesData } from '@/data/services';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Diagnostic Services | Raj Scans`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.overview,
    bodyLocation: service.scans.join(', '),
    preparation: service.preparation.join('. '),
    provider: {
      '@type': 'MedicalClinic',
      name: 'Raj Scans',
      url: 'https://www.rajscans.com'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero 
        title={service.title} 
        description={service.shortDescription}
        bgImage={service.image}
      >
        <Breadcrumbs items={[
          { label: 'Home', href: '/' }, 
          { label: 'Services', href: '/services' },
          { label: service.title }
        ]} />
      </PageHero>

      <Section>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-64)', alignItems: 'flex-start' }}>
            
            {/* Main Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-64)' }}>
              
              {/* Overview & Tech */}
              <div>
                <SectionTitle title="Overview" />
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-32)' }}>
                  {service.overview}
                </p>
                
                <div style={{ 
                  backgroundColor: 'rgba(185, 28, 28, 0.04)', 
                  padding: 'var(--space-24)', 
                  borderRadius: 'var(--radius-xl)',
                  borderLeft: '4px solid var(--color-brand-red)'
                }}>
                  <h4 style={{ color: 'var(--color-brand-navy)', fontWeight: 700, marginBottom: 'var(--space-8)' }}>
                    {service.equipment}
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem' }}>
                    {service.equipmentDesc}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-20)' }}>
                  Why Choose Raj Scans for {service.abbr}?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 'var(--space-12)', alignItems: 'flex-start' }}>
                      <ShieldCheck size={20} color="var(--color-brand-red)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scans List */}
              {service.scans.length > 0 && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-20)' }}>
                    Available Procedures
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-16)' }}>
                    {service.scans.map((scan, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'center', padding: 'var(--space-12)', backgroundColor: 'var(--color-neutral-50)', borderRadius: 'var(--radius-lg)' }}>
                        <CheckCircle2 size={16} color="var(--color-brand-navy)" />
                        <span style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-brand-navy)' }}>{scan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-48)', position: 'sticky', top: '100px' }}>
              
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Preparation Guidelines */}
              <div style={{ backgroundColor: 'var(--color-neutral-50)', padding: 'var(--space-32)', borderRadius: 'var(--radius-xl)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-16)' }}>
                  Patient Preparation
                </h3>
                <ul style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', paddingLeft: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', fontSize: '0.9375rem' }}>
                  {service.preparation.map((step, idx) => (
                    <li key={idx} style={{ paddingLeft: 'var(--space-8)' }}>{step}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline & FAQs */}
      <Section style={{ backgroundColor: 'var(--color-neutral-50)', borderTop: '1px solid var(--color-neutral-200)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-64)' }}>
            
            <div>
              <SectionTitle title="What to Expect" description="A step-by-step guide to your procedure." />
              <ServiceTimeline timeline={service.timeline} />
            </div>

            <div>
              <SectionTitle title="Frequently Asked Questions" description="Common queries about this service." />
              <ServiceFAQ faqs={service.faqs} />
            </div>

          </div>
        </Container>
      </Section>

      {/* Book Appointment Section */}
      <Section>
        <Container>
          <div style={{
            maxWidth: '720px',
            margin: '0 auto',
            backgroundColor: 'var(--color-surface-card)',
            border: '1px solid var(--color-neutral-200)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-48)',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-red)',
              backgroundColor: 'rgba(185, 28, 28, 0.08)',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              marginBottom: 'var(--space-12)',
            }}>Book an Appointment</span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-brand-navy)',
              fontSize: 'var(--text-3xl)',
              marginBottom: 'var(--space-8)',
            }}>Ready to Book Your {service.abbr}?</h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Fill in your details below and our team will call you to confirm your appointment at any of our branches.
            </p>
            <AppointmentForm defaultService={service.abbr} packageName={service.title} />
          </div>
        </Container>
      </Section>
    </>
  );
}
