import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ContactCTA } from '@/components/home/ContactCTA';
import { SectionTitle } from '@/components/shared/SectionTitle';

const serviceData: Record<string, { title: string, description: string, overview: string, image: string, preparation: string[], formOption: string }> = {
  'mri': {
    title: 'Magnetic Resonance Imaging (MRI)',
    description: 'High-resolution imaging for neurology and musculoskeletal diagnostics.',
    overview: 'MRI uses a powerful magnetic field, radio waves and a computer to produce detailed pictures of the body\'s internal structures. It is primarily used to evaluate anomalies of the brain, spinal cord, joints, and soft tissues. At Raj Scans, we utilize advanced 3-Tesla MRI technology to ensure the highest image clarity while reducing scan times, prioritizing both diagnostic accuracy and patient comfort.',
    image: '/images/equipment/mri-machine.jpg',
    preparation: [
      'Remove all metal objects, including jewelry, watches, and hairpins.',
      'Inform our staff if you have a pacemaker, artificial joints, or any metal implants.',
      'Wear comfortable, loose-fitting clothing without metal zippers or buttons.',
      'If your scan requires contrast dye, you may be asked to fast for 4 hours prior.'
    ],
    formOption: 'MRI'
  },
  'ct': {
    title: 'Computed Tomography (CT Scan)',
    description: 'Advanced computed tomography providing clear and precise cross-sectional images.',
    overview: 'A CT scan combines a series of X-ray images taken from different angles around your body and uses computer processing to create cross-sectional images (slices) of the bones, blood vessels and soft tissues inside your body. Our multi-slice CT scanners capture highly detailed images in seconds, allowing for rapid diagnosis in both routine and emergency scenarios.',
    image: '/images/services/ct-scan.jpg',
    preparation: [
      'Fasting for 4-6 hours is typically required if a contrast material is being used.',
      'Drink plenty of water before your scan, unless instructed otherwise.',
      'Please inform the technician if you are pregnant or suspect you might be.',
      'Remove any metal objects that may interfere with the imaging.'
    ],
    formOption: 'CT Scan'
  },
  'ultrasound': {
    title: 'Ultrasound Imaging',
    description: 'Non-invasive diagnostic imaging using high-frequency sound waves.',
    overview: 'Ultrasound imaging uses high-frequency sound waves to view inside the body. Because ultrasound images are captured in real-time, they can show the structure and movement of the body\'s internal organs, as well as blood flowing through blood vessels. This radiation-free technology is highly safe and versatile, ideal for obstetrics, cardiology, and abdominal evaluations.',
    image: '/images/services/ultrasound.jpg',
    preparation: [
      'For abdominal ultrasounds, you may need to fast for 8-12 hours.',
      'For pelvic ultrasounds, you will be asked to drink water to ensure a full bladder.',
      'Wear loose, comfortable clothing that allows easy access to the area being examined.',
      'Bring any previous related scan reports for comparison.'
    ],
    formOption: 'Ultrasound'
  }
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Raj Scans`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={service.title} 
        description={service.description}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-64)', alignItems: 'flex-start' }}>
            
            {/* Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-48)' }}>
              <div>
                <SectionTitle title="Overview" />
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', fontSize: 'var(--text-lg)' }}>
                  {service.overview}
                </p>
              </div>
              
              <div style={{ backgroundColor: 'var(--color-neutral-50)', padding: 'var(--space-32)', borderRadius: 'var(--radius-xl)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-16)' }}>
                  Preparation Guidelines
                </h3>
                <ul style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', paddingLeft: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                  {service.preparation.map((step, idx) => (
                    <li key={idx} style={{ paddingLeft: 'var(--space-8)' }}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Column */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

          </div>
        </Container>
      </Section>

      <ContactCTA defaultService={service.formOption} />
    </>
  );
}
