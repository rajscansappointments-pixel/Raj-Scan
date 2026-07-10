'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { submitCareerEnquiry, ActionState } from '@/app/actions';
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
      style={{ marginTop: 'var(--space-16)' }}
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit Application'}
    </Button>
  );
}

export function CareerForm() {
  const [state, formAction] = useActionState(submitCareerEnquiry, initialState);

  if (state.success) {
    return (
      <div 
        aria-live="polite" 
        style={{ padding: 'var(--space-24)', backgroundColor: 'var(--color-success-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-success)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-12)', textAlign: 'left' }}
      >
        <CheckCircle2 color="var(--color-success)" style={{ flexShrink: 0 }} aria-hidden="true" />
        <div>
          <h4 style={{ color: 'var(--color-success)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Application Received</h4>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', marginTop: 'var(--space-24)', textAlign: 'left' }}>
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <label htmlFor="name" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Full Name *</label>
        <Input type="text" id="name" name="name" placeholder="John Doe" required />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <label htmlFor="email" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Email Address *</label>
        <Input type="email" id="email" name="email" placeholder="john@example.com" required />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <label htmlFor="role" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Position Applied For *</label>
        <Input type="text" id="role" name="role" placeholder="e.g., Senior Radiologist" required />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <label htmlFor="resume" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Upload Resume (PDF/DOCX) *</label>
        <Input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required style={{ paddingTop: 'var(--space-8)' }} />
      </div>
      
      <SubmitButton />
    </form>
  );
}
