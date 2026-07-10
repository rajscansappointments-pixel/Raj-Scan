import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
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
  title: 'Raj Scans | Premium Diagnostic Center',
  description: 'Experience state-of-the-art diagnostic imaging with unparalleled precision. MRI, CT Scans, Ultrasound, and full health packages.',
  metadataBase: new URL('https://www.rajscans.com'),
  keywords: ['diagnostic center', 'MRI scan', 'CT scan', 'ultrasound', 'blood tests', 'medical imaging', 'health checkup', 'radiology'],
  authors: [{ name: 'Raj Scans' }],
  openGraph: {
    title: 'Raj Scans | Premium Diagnostic Center',
    description: 'Experience state-of-the-art diagnostic imaging with unparalleled precision.',
    url: 'https://www.rajscans.com',
    siteName: 'Raj Scans',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Scans | Premium Diagnostic Center',
    description: 'Experience state-of-the-art diagnostic imaging with unparalleled precision.',
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
  image: 'https://www.rajscans.com/og-image.jpg',
  '@id': 'https://www.rajscans.com',
  url: 'https://www.rajscans.com',
  telephone: '+919840067900',
  priceRange: '₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '07:00',
      closes: '14:00'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Healthcare Avenue, Medical District',
    addressLocality: 'Chennai',
    postalCode: '600001',
    addressCountry: 'IN'
  }
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
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
