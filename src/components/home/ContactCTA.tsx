import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CTABanner } from '@/components/shared/CTABanner';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { AppointmentForm } from '@/components/forms/AppointmentForm';

export function ContactCTA({ defaultService }: { defaultService?: string }) {
  return (
    <Section>
      <Container>
        <CTABanner
          title="Ready to Book Your Scan?"
          description="Call our dedicated helpline to schedule an appointment or get answers to your queries. We are here to assist you."
          primaryActionText="Call Us Now"
          primaryActionHref="tel:+919944498000"
          secondaryActionText="Chat on WhatsApp"
          secondaryActionHref="https://wa.me/919944498000"
        />
        
        <div style={{ marginTop: 'var(--space-64)', backgroundColor: 'var(--color-surface-card)', padding: 'var(--space-48)', borderRadius: 'var(--radius-xl)', border: 'var(--border-width) solid var(--color-neutral-200)' }}>
          <SectionTitle 
            title="Book an Appointment Online" 
            description="Prefer to book online? Fill out the enquiry form below and our front desk will call you to confirm your slot." 
          />
          <AppointmentForm defaultService={defaultService} />
        </div>
      </Container>
    </Section>
  );
}
