'use client';

import { useState, useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { usePathname } from 'next/navigation';
import { Phone, Clock, MapPin, Shield, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitAppointment, ActionState } from '@/app/actions';
import { packagesData } from '@/data/packages';
import { Select } from '@/components/ui/Select';
import styles from './AppointmentCard.module.css';
import { cn } from '@/lib/utils';

const BRANCHES = [
  {
    id: 'chennai',
    name: 'Chennai (OMR)',
    phone: '+91 99444 98000',
    tel: '+919944498000',
    hours: '7:00 AM – 10:00 PM',
    address: (
      <>
        Raj Scans OMR<br />
        2 & 26 Srinivasan Nagar<br />
        Rajiv Gandhi Salai (OMR)<br />
        Kottivakkam<br />
        Chennai – 600041
      </>
    ),
  },
  {
    id: 'dindigul',
    name: 'Dindigul',
    phone: '+91 451 243 6115',
    tel: '+914512436115',
    hours: '8:00 AM – 8:00 PM',
    address: (
      <>
        95-A, E.B. Colony<br />
        Thiruvalluvar Salai<br />
        Dindigul – 624003
      </>
    ),
  },
  {
    id: 'sivagangai',
    name: 'Sivagangai',
    phone: '+91 457 524 4607',
    tel: '+914575244607',
    hours: '8:00 AM – 8:00 PM',
    address: (
      <>
        Deepam Scans, Raj Clinic<br />
        34-Madurai Main Road<br />
        Madurai Mukku<br />
        Sivagangai – 630561
      </>
    ),
  },
];

const initialState: ActionState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.submitBtn} disabled={pending}>
      {pending ? 'Submitting...' : 'Book Appointment'}
    </button>
  );
}

export function AppointmentCard() {
  const pathname = usePathname();
  const [state, formAction] = useActionState(submitAppointment, initialState);
  const [activeBranch, setActiveBranch] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const locationOptions = BRANCHES.map(b => ({ label: b.name, value: b.name }));
  
  const serviceOptions = [
    { label: 'MRI', value: 'mri' },
    { label: 'CT Scan', value: 'ct' },
    { label: 'Ultrasound', value: 'ultrasound' },
    { label: 'Digital X-Ray', value: 'xray' },
    { label: 'Digital Mammography', value: 'mammography' },
    { label: 'Laboratory', value: 'laboratory' },
    { label: 'Echo ECG', value: 'echo-ecg' },
    ...packagesData.map(pkg => ({ label: pkg.title, value: pkg.title }))
  ];

  const timeOptions = [
    { label: 'Morning', value: 'morning' },
    { label: 'Afternoon', value: 'afternoon' },
    { label: 'Evening', value: 'evening' },
  ];

  useEffect(() => {
    if (!pathname) return;
    
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const isPackagePage = segments.includes('packages') || segments.includes('health-packages');

    const serviceMap: Record<string, string> = {
      'mri': 'mri',
      'ct-scan': 'ct',
      'ultrasound': 'ultrasound',
      'digital-xray': 'xray',
      'mammography': 'mammography',
      'laboratory': 'laboratory',
      'echo-ecg': 'echo-ecg',
    };

    if (isPackagePage) {
      if (lastSegment !== 'packages' && lastSegment !== 'health-packages') {
        const pkg = packagesData.find(p => p.slug === lastSegment);
        if (pkg) {
          setSelectedService(pkg.title);
        }
      }
    } else if (lastSegment && serviceMap[lastSegment]) {
      setSelectedService(serviceMap[lastSegment]);
    } else {
      // Reset if we navigate to a page that isn't tied to a specific service
      setSelectedService("");
    }
  }, [pathname]);

  const nextBranch = () => setActiveBranch((prev) => (prev + 1) % BRANCHES.length);
  const prevBranch = () => setActiveBranch((prev) => (prev - 1 + BRANCHES.length) % BRANCHES.length);

  const branch = BRANCHES[activeBranch];

  return (
    <section className={styles.section} id="book-appointment">
      <div className={styles.card}>
        {/* Left Side: Form */}
        <div className={styles.formSide}>
          <h2 className={styles.heading}>Book an Appointment Online</h2>
          <p className={styles.subtext}>
            Prefer to book online? Fill out the enquiry form and our front desk team will contact you shortly to confirm your appointment.
          </p>

          <form action={formAction} className={styles.formGrid}>
            
            {state.success && (
              <div 
                aria-live="polite" 
                style={{ gridColumn: '1 / -1', padding: 'var(--space-16)', backgroundColor: 'var(--color-success-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-success)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-12)' }}
              >
                <CheckCircle2 color="var(--color-success)" style={{ flexShrink: 0 }} aria-hidden="true" />
                <div>
                  <h4 style={{ color: 'var(--color-success)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Request Received</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>{state.message}</p>
                </div>
              </div>
            )}

            {state.error && (
              <div 
                aria-live="assertive" 
                role="alert"
                style={{ gridColumn: '1 / -1', padding: 'var(--space-12)', backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}
              >
                <AlertCircle size={16} aria-hidden="true" />
                {state.error}
              </div>
            )}

            {!state.success && (
              <>
                <input type="text" name="name" placeholder="Full Name" className={styles.input} required />
                <input type="tel" name="phone" placeholder="Phone Number" className={styles.input} required />
                
                <input type="email" name="email" placeholder="Email Address" className={styles.input} />
                <input type="date" name="date" className={styles.input} required />
                
                <Select 
                  name="location"
                  options={locationOptions}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  placeholder="Preferred Location"
                  required
                />

                <Select 
                  name="service"
                  options={serviceOptions}
                  value={selectedService}
                  onChange={setSelectedService}
                  placeholder="Select Service or Package"
                  required
                />
                
                <Select 
                  name="time"
                  options={timeOptions}
                  value={selectedTime}
                  onChange={setSelectedTime}
                  placeholder="Preferred Time"
                  required
                />
                
                <textarea 
                  name="message"
                  placeholder="Message (Optional)" 
                  className={cn(styles.textarea, styles.fullWidth)} 
                />
                
                <div className={styles.fullWidth}>
                  <SubmitButton />
                </div>
              </>
            )}
          </form>
        </div>

        {/* Right Side: Info Card with Slider */}
        <div className={styles.infoCard}>
          
          <div className={styles.sliderHeader}>
            <h3 className={styles.branchName}>{branch.name}</h3>
            <div className={styles.sliderControls}>
              <button type="button" onClick={prevBranch} className={styles.controlBtn} aria-label="Previous Location">
                <ChevronLeft size={18} />
              </button>
              <button type="button" onClick={nextBranch} className={styles.controlBtn} aria-label="Next Location">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className={styles.slideContainer} key={branch.id}>
            <div className={styles.infoBlock}>
              <div className={styles.iconWrap}>
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoLabel}>Book by Phone</h4>
                <p className={styles.infoValue}>{branch.phone}</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrap}>
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoLabel}>Open Daily</h4>
                <p className={styles.infoValue}>{branch.hours}</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrap}>
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoLabel}>Location</h4>
                <p className={styles.infoText}>{branch.address}</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrap}>
                <Shield size={24} strokeWidth={1.5} />
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoLabel}>Emergency Queries</h4>
                <p className={styles.infoValue}>Call Anytime</p>
              </div>
            </div>
          </div>

          <div className={styles.sliderDots}>
            {BRANCHES.map((b, i) => (
              <button
                key={b.id}
                type="button"
                className={cn(styles.dot, activeBranch === i && styles.dotActive)}
                onClick={() => setActiveBranch(i)}
                aria-label={`Go to ${b.name}`}
              />
            ))}
          </div>

          <a href={`tel:${branch.tel}`} className={styles.callNowBtn}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
