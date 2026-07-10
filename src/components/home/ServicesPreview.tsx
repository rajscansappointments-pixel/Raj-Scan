import Link from 'next/link';
import { ArrowRight, Activity, Scan, Stethoscope } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './ServicesPreview.module.css';

const services = [
  {
    title: 'MRI Scan',
    description: 'High-resolution magnetic resonance imaging for detailed anatomical evaluation.',
    icon: <Activity size={24} />,
    href: '/services/mri',
  },
  {
    title: 'CT Scan',
    description: 'Advanced computed tomography providing clear and precise cross-sectional images.',
    icon: <Scan size={24} />,
    href: '/services/ct',
  },
  {
    title: 'Ultrasound',
    description: 'Non-invasive diagnostic imaging using high-frequency sound waves.',
    icon: <Stethoscope size={24} />,
    href: '/services/ultrasound',
  },
];

export function ServicesPreview() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--space-24)' }}>
        <SectionTitle
          subtitle="Our Services"
          title="Advanced Diagnostic Solutions"
          description="We offer a comprehensive range of imaging services using the latest technology."
          style={{ marginBottom: 0 }}
        />
        <Link href="/services" style={{ textDecoration: 'none' }}>
          <Button variant="secondary">View All Services</Button>
        </Link>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <Link key={index} href={service.href} style={{ textDecoration: 'none' }}>
            <Card className={styles.card}>
              <CardHeader>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ marginBottom: 'var(--space-16)' }}>
                  {service.description}
                </CardDescription>
                <div className={styles.action}>
                  Learn more <ArrowRight size={16} />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
