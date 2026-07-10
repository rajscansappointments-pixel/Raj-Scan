'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { submitAppointment, ActionState } from '@/app/actions';
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
      {pending ? 'Submitting...' : 'Request Appointment'}
    </Button>
  );
}

export function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, formAction] = useActionState(submitAppointment, initialState);

  if (state.success) {
    return (
      <div 
        aria-live="polite" 
        style={{ padding: 'var(--space-24)', backgroundColor: 'var(--color-success-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-success)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-12)' }}
      >
        <CheckCircle2 color="var(--color-success)" style={{ flexShrink: 0 }} aria-hidden="true" />
        <div>
          <h4 style={{ color: 'var(--color-success)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Request Received</h4>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-16)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <label htmlFor="name" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Full Name *</label>
          <Input type="text" id="name" name="name" placeholder="John Doe" required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <label htmlFor="phone" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Phone Number *</label>
          <Input type="tel" id="phone" name="phone" placeholder="+91 00000 00000" required />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <label htmlFor="service" style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Service Required *</label>
        <select 
          id="service"
          name="service"
          required
          defaultValue={defaultService}
          style={{ 
            width: '100%', padding: 'var(--space-12)', 
            borderRadius: 'var(--radius-md)', border: 'var(--border-width) solid var(--color-neutral-300)', 
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', backgroundColor: 'white'
          }} 
        >
          <option value="">Select a service...</option>
          <option value="MRI">MRI</option>
          <option value="CT Scan">CT Scan</option>
          <option value="Ultrasound">Ultrasound</option>
          <option value="X-Ray">X-Ray</option>
          <option value="Health Package">Health Package</option>
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>
      
      <SubmitButton />
    </form>
  );
}
