import Link from 'next/link';
import { Check } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './PackagesPreview.module.css';

const packages = [
  {
    title: 'Basic Health Check',
    description: 'Essential screening for general well-being and early detection.',
    price: '₹2,499',
    tests: ['Complete Blood Count', 'Blood Sugar Fasting', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test'],
  },
  {
    title: 'Comprehensive Package',
    description: 'Thorough evaluation for a complete health overview.',
    price: '₹5,999',
    tests: ['All Basic Tests', 'Thyroid Profile', 'Vitamin D & B12', 'ECG', 'Ultrasound Abdomen'],
  },
  {
    title: 'Senior Citizen Care',
    description: 'Tailored specifically for the health needs of the elderly.',
    price: '₹4,499',
    tests: ['Cardiac Risk Markers', 'Bone Health Profile', 'Diabetic Screening', 'Detailed Urinalysis', 'Chest X-Ray'],
  },
];

export function PackagesPreview() {
  return (
    <div>
      <SectionTitle
        align="center"
        subtitle="Health Packages"
        title="Preventive Health Checkups"
        description="Choose from our specially designed master health checkup packages."
      />

      <div className={styles.grid}>
        {packages.map((pkg, index) => (
          <Card key={index} className={styles.card}>
            <CardHeader>
              <CardTitle>{pkg.title}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
              <div className={styles.price}>{pkg.price}</div>
            </CardHeader>
            <CardContent style={{ flex: 1 }}>
              <div className={styles.testList}>
                {pkg.tests.map((test, i) => (
                  <div key={i} className={styles.testItem}>
                    <Check className={styles.check} size={16} />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="primary" style={{ width: '100%' }}>Book Package</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: 'var(--space-40)' }}>
        <Link href="/packages">
          <Button variant="secondary">View All Packages</Button>
        </Link>
      </div>
    </div>
  );
}
