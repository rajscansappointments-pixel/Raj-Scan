import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/layout/Footer').then((mod) => mod.Footer));
const AppointmentCard = dynamic(() => import('@/components/home/AppointmentCard').then((mod) => mod.AppointmentCard));
const FloatingWhatsApp = dynamic(() => import('@/components/ui/FloatingWhatsApp').then((mod) => mod.FloatingWhatsApp));
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Raj Scans | Diagnostic Centre in OMR, Chennai & Dindigul',
  description: 'Raj Scans — a new diagnostic landmark in OMR, Chennai. 25+ years of trusted healthcare. MRI (1.5T Siemens), CT Scan, Ultrasound (3D/4D), Digital X-Ray, Mammography, Lab Services & Echo-ECG. Book an appointment today.',
  metadataBase: new URL('https://www.rajscans.com'),
  keywords: ['Raj Scans', 'diagnostic centre OMR Chennai', 'MRI scan Chennai', 'CT scan Kottivakkam', 'ultrasound OMR', 'digital X-ray Chennai', 'mammography Chennai', 'lab services OMR', 'Siemens MRI Chennai', 'diagnostic centre Dindigul', 'health checkup Chennai', 'Echo ECG Chennai', 'Mindray ultrasound'],
  authors: [{ name: 'Raj Scans' }],
  openGraph: {
    title: 'Raj Scans | Diagnostic Centre — OMR, Chennai & Dindigul',
    description: 'A new diagnostic landmark in OMR, Chennai. 25+ years of trusted healthcare. MRI, CT Scan, Ultrasound, Digital X-Ray, Mammography, Lab Services & Echo-ECG.',
    url: 'https://www.rajscans.com',
    siteName: 'Raj Scans',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Scans | Diagnostic Centre — OMR, Chennai & Dindigul',
    description: 'A new diagnostic landmark in OMR, Chennai. 25+ years of trusted healthcare. MRI, CT Scan, Ultrasound, Mammography, Lab Services & Echo-ECG.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Raj Scans',
  description: 'A new diagnostic landmark in OMR, Chennai. 25+ years of trusted healthcare combining advanced Siemens imaging technology with experienced radiologists.',
  image: 'https://www.rajscans.com/og-image.jpg',
  '@id': 'https://www.rajscans.com',
  url: 'https://www.rajscans.com',
  telephone: '+914446435198',
  priceRange: '₹₹',
  medicalSpecialty: 'Radiology',
  availableService: [
    { '@type': 'MedicalProcedure', name: 'MRI Scan — Siemens Magnetom Sempra 1.5T' },
    { '@type': 'MedicalProcedure', name: 'CT Scan — Siemens SOMATOM go-Now 32-slice' },
    { '@type': 'MedicalProcedure', name: 'Ultrasound — Mindray Resona I9 (3D/4D)' },
    { '@type': 'MedicalProcedure', name: 'Digital X-Ray — Digix ECO Plus' },
    { '@type': 'MedicalProcedure', name: 'Digital Mammography — FAIRY DR ADV/DR+' },
    { '@type': 'MedicalProcedure', name: 'Laboratory Services — EKON Whole Slide Scanner' },
    { '@type': 'MedicalProcedure', name: 'Echo-ECG' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '08:00',
      closes: '13:00'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 & 26, Srinivasan Nagar, Rajivgandhi Road (OMR), Kottivakkam',
    addressLocality: 'Chennai',
    postalCode: '600041',
    addressCountry: 'IN'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+914446435198',
      contactType: 'Appointment Booking',
      areaServed: 'Chennai',
      email: 'rajscansomr@gmail.com'
    },
    {
      '@type': 'ContactPoint',
      telephone: '+914512436115',
      contactType: 'Appointment Booking',
      areaServed: 'Dindigul'
    },
    {
      '@type': 'ContactPoint',
      telephone: '+914575244607',
      contactType: 'Appointment Booking',
      areaServed: 'Sivagangai'
    }
  ],
  location: [
    {
      '@type': 'Place',
      name: 'Raj Scans — Chennai (OMR)',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2 & 26, Srinivasan Nagar, Rajivgandhi Road (OMR), Kottivakkam',
        addressLocality: 'Chennai',
        postalCode: '600041',
        addressCountry: 'IN'
      },
      telephone: '+914446435198'
    },
    {
      '@type': 'Place',
      name: 'Raj Scans — Dindigul',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '95-A, E.B. Colony, Thiruvalluvar Salai',
        addressLocality: 'Dindigul',
        postalCode: '624003',
        addressCountry: 'IN'
      },
      telephone: '+914512436115'
    },
    {
      '@type': 'Place',
      name: 'Raj Scans — Sivagangai',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Deepam Scans, Raj Clinic, 34-Madurai Main Road, Madurai Mukku',
        addressLocality: 'Sivagangai',
        postalCode: '630561',
        addressCountry: 'IN'
      },
      telephone: '+914575244607'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F7F6F3' }}>
          <Header />
          <main style={{ flex: 1, backgroundColor: '#fff' }}>
            {children}
          </main>
          <AppointmentCard />
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
