'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { submitContactForm, ActionState } from '@/app/actions';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const initialState: ActionState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button 
      variant="primary" 
      type="submit" 
      size="lg" 
      style={{ alignSelf: 'flex-start', marginTop: 'var(--space-8)' }}
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Submit Enquiry'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div 
        aria-live="polite" 
        style={{ padding: 'var(--space-24)', backgroundColor: 'var(--color-success-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-success)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-12)' }}
      >
        <CheckCircle2 color="var(--color-success)" style={{ flexShrink: 0 }} aria-hidden="true" />
        <div>
          <h4 style={{ color: 'var(--color-success)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Success</h4>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', marginTop: 'var(--space-24)' }}>
      {state.error && (
        <div 
          aria-live="assertive" 
          role="alert"
          style={{ padding: 'var(--space-12)', backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}
        >
          <AlertCircle size={16} aria-hidden="true" />
          {state.error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-16)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <label htmlFor="name" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Full Name *</label>
          <Input type="text" id="name" name="name" placeholder="John Doe" required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <label htmlFor="phone" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Phone Number *</label>
          <Input type="tel" id="phone" name="phone" placeholder="+91 98400 67900" required />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <label htmlFor="message" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Message *</label>
        <textarea 
          id="message"
          name="message"
          required
          style={{ 
            width: '100%', minHeight: '120px', padding: 'var(--space-12)', 
            borderRadius: 'var(--radius-md)', border: 'var(--border-width) solid var(--color-neutral-300)', 
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', resize: 'vertical'
          }} 
          placeholder="How can we help you?"
        />
      </div>
      
      <SubmitButton />
    </form>
  );
}
