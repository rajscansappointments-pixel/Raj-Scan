import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { packagesData } from '@/data/packages';
import { AppointmentCard } from '@/components/home/AppointmentCard';

export function generateStaticParams() {
  return packagesData.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) return { title: 'Package Not Found' };
  return {
    title: `${pkg.title} Health Package | Raj Scans`,
    description: `${pkg.description} Book the ${pkg.title} package at Raj Scans starting at ₹${pkg.price}.`,
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) notFound();

  return (
    <>
      <PageHero
        title={pkg.title}
        description={pkg.description}
      >
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Health Packages', href: '/packages' },
          { label: pkg.title },
        ]} />
      </PageHero>

      <Section>
        <Container>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-64)',
            alignItems: 'flex-start',
          }}>

            {/* Left: Package Details */}
            <div>
              <SectionTitle title="What's Included" description="Everything covered in this health package." />

              {/* Price Card */}
              <div style={{
                backgroundColor: 'var(--color-brand-navy)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-32)',
                marginBottom: 'var(--space-32)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Package Price</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.5rem', fontWeight: 600 }}>₹</span>
                  <span style={{ color: '#fff', fontFamily: 'var(--font-serif)', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em' }}>{pkg.price}</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-4)' }}>All-inclusive. No hidden charges.</p>
              </div>

              {/* Tests list */}
              <div style={{
                backgroundColor: 'var(--color-neutral-50)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-neutral-200)',
              }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-20)' }}>
                  Tests & Procedures
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                  {pkg.tests.map((test, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
                      <CheckCircle2 size={18} color="var(--color-brand-red)" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)', fontWeight: 500 }}>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Appointment Booking Section */}
      <AppointmentCard />
    </>
  );
}
