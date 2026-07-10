import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';

export function generateMetadata({ params }: { params: { slug: string } }) {
  // formatting slug to title case for placeholder
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | Raj Scans Blog`,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <>
      <PageHero title={title}>
        <div style={{ marginBottom: 'var(--space-24)' }}>
          <Badge variant="secondary">Article</Badge>
        </div>
        <Breadcrumbs items={[
          { label: 'Home', href: '/' }, 
          { label: 'Blog', href: '/blog' },
          { label: title }
        ]} />
      </PageHero>

      <Section>
        <Container>
          <article style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ width: '100%', height: '400px', backgroundColor: 'var(--color-neutral-200)', borderRadius: 'var(--radius-xl)', marginBottom: 'var(--space-48)' }} />
            
            <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
              <p>[Blog content paragraph 1 placeholder. This area will be populated by a CMS or static markdown content in the future.]</p>
              <p>[Blog content paragraph 2 placeholder.]</p>
              <h2 style={{ color: 'var(--color-brand-navy)', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-24)' }}>Key Takeaways</h2>
              <ul style={{ paddingLeft: 'var(--space-24)' }}>
                <li>[Takeaway 1]</li>
                <li>[Takeaway 2]</li>
                <li>[Takeaway 3]</li>
              </ul>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
