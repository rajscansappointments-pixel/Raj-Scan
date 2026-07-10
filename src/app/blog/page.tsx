import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Health Blog | Raj Scans',
  description: 'Latest health insights and medical diagnostic updates.',
};

const posts = [
  {
    title: 'Understanding the Importance of Preventive Health Checkups',
    excerpt: 'Why early detection is the key to effectively managing potential health risks...',
    category: 'Wellness',
    slug: 'preventive-health-checkups',
    date: 'Oct 12, 2023',
    image: '/images/blog/blog-3.jpg',
    imageAlt: 'Modern health screening examination room',
  },
  {
    title: 'What to Expect During Your First MRI Scan',
    excerpt: 'A complete guide to preparing for your MRI scan to ease your anxiety.',
    category: 'Patient Guide',
    slug: 'first-mri-scan-expectations',
    date: 'Sep 28, 2023',
    image: '/images/blog/blog-1.jpg',
    imageAlt: 'Brain MRI scan results on a diagnostic display',
  },
  {
    title: 'The Role of 4D Ultrasound in Prenatal Care',
    excerpt: 'How advanced 4D imaging provides clearer insights into fetal development.',
    category: 'Technology',
    slug: '4d-ultrasound-prenatal-care',
    date: 'Sep 15, 2023',
    image: '/images/blog/blog-2.jpg',
    imageAlt: 'Cardiac ultrasound imaging workstation',
  }
];

export default function BlogListingPage() {
  return (
    <>
      <PageHero 
        title="Health & Diagnostic Blog" 
        description="Stay informed with the latest insights from our medical experts."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      </PageHero>

      <Section>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-32)' }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden', borderTopLeftRadius: 'var(--radius-xl)', borderTopRightRadius: 'var(--radius-xl)' }}>
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      quality={80}
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-12)' }}>
                      <Badge variant="secondary">{post.category}</Badge>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>{post.date}</span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent style={{ flex: 1 }}>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
