export type PackageData = {
  slug: string;
  title: string;
  description: string;
  price: string;
  tests: string[];
  featured?: boolean;
};

export const packagesData: PackageData[] = [
  {
    slug: 'basic-health-check',
    title: 'Basic Health Check',
    description: 'Essential screening for general well-being and early detection.',
    price: '2,499',
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Sugar Fasting',
      'Lipid Profile',
      'Liver Function Test (LFT)',
      'Kidney Function Test (KFT)',
    ],
  },
  {
    slug: 'comprehensive',
    title: 'Comprehensive Health Check',
    description: 'Thorough evaluation for a complete health overview.',
    price: '5,999',
    tests: [
      'All Basic Tests',
      'Thyroid Profile (T3, T4, TSH)',
      'Vitamin D & B12',
      'ECG',
      'Ultrasound Abdomen',
    ],
    featured: true,
  },
  {
    slug: 'senior-citizen',
    title: 'Senior Citizen Health Check',
    description: 'Tailored specifically for the health needs of the elderly.',
    price: '4,499',
    tests: [
      'Cardiac Risk Markers',
      'Bone Health Profile',
      'Diabetic Screening',
      'Urinalysis',
      'Chest X-Ray',
    ],
  },
];
