import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Section style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <Container style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: 'var(--text-6xl)', color: 'var(--color-brand-navy)', marginBottom: 'var(--space-16)' }}>
          404
        </h1>
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-24)' }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-40)' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button size="lg" variant="primary">Return Home</Button>
        </Link>
      </Container>
    </Section>
  );
}
