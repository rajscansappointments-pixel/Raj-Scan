import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
export const metadata: Metadata = {
  title: 'Contact Us | Raj Scans — Chennai, Dindigul & Sivagangai',
  description: 'Reach Raj Scans at our Chennai OMR, Dindigul, and Sivagangai branches. Find location maps, phone numbers, and our email address.',
};

const cardStyle = {
  backgroundColor: 'var(--color-surface-card)',
  border: '1px solid var(--color-neutral-200)',
  borderRadius: '16px',
  padding: 'var(--space-32)',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 'var(--space-20)',
};

const iconBoxStyle = {
  color: 'var(--color-brand-red)',
  backgroundColor: 'rgba(185,28,28,0.06)',
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const rowStyle = {
  display: 'flex',
  gap: 'var(--space-12)',
  alignItems: 'flex-start',
};

const labelStyle = {
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: 'var(--color-text-tertiary)',
  marginBottom: '4px',
};

const valueStyle = {
  fontSize: '0.9375rem',
  color: 'var(--color-brand-navy)',
  lineHeight: 1.6,
};

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Find Us"
        description="Three locations. The same standard of care."
      >
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      </PageHero>

      <Section>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-64)' }}>

            {/* Branch Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-32)' }}>

              {/* Chennai OMR */}
              <div style={cardStyle}>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brand-red)', marginBottom: '6px' }}>
                    Branch 01
                  </p>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-brand-navy)', letterSpacing: '-0.02em', margin: 0 }}>
                    Chennai (OMR)
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    New Diagnostic Landmark in OMR
                  </p>
                </div>

                <div style={{ height: '1px', background: 'var(--color-neutral-200)' }} />

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><MapPin size={18} /></div>
                  <div>
                    <p style={labelStyle}>Address</p>
                    <p style={valueStyle}>
                      <a href="https://maps.google.com/?q=2+%2626+Srinivasan+Nagar+Rajivgandhi+Road+OMR+Kottivakkam+Chennai+600041" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        2 &amp; 26, Srinivasan Nagar,<br/>
                        Rajivgandhi Road (OMR),<br/>
                        Kottivakkam, Chennai &ndash; 600 041
                      </a>
                    </p>
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><Phone size={18} /></div>
                  <div>
                    <p style={labelStyle}>Phone</p>
                    <p style={valueStyle}>
                      <a href="tel:+914446435198" style={linkStyle}>044-46435198</a><br/>
                      <a href="tel:+919944498000" style={linkStyle}>+91 99444 98000</a>
                    </p>
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><Mail size={18} /></div>
                  <div>
                    <p style={labelStyle}>Email</p>
                    <p style={valueStyle}>
                      <a href="mailto:rajscansomr@gmail.com" style={linkStyle}>rajscansomr@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><Clock size={18} /></div>
                  <div>
                    <p style={labelStyle}>Hours</p>
                    <p style={valueStyle}>Mon &ndash; Sat: 8:00 AM &ndash; 8:00 PM<br/>Sun: 8:00 AM &ndash; 1:00 PM</p>
                  </div>
                </div>

                <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginTop: 'var(--space-8)' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=2+%2626+Srinivasan+Nagar+Rajivgandhi+Road+OMR+Kottivakkam+Chennai+600041&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Raj Scans Chennai OMR Location Map"
                  ></iframe>
                </div>
              </div>

              {/* Dindigul */}
              <div style={cardStyle}>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brand-red)', marginBottom: '6px' }}>
                    Branch 02
                  </p>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-brand-navy)', letterSpacing: '-0.02em', margin: 0 }}>
                    Dindigul
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    25+ years of trusted diagnostic care
                  </p>
                </div>

                <div style={{ height: '1px', background: 'var(--color-neutral-200)' }} />

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><MapPin size={18} /></div>
                  <div>
                    <p style={labelStyle}>Address</p>
                    <p style={valueStyle}>
                      <a href="https://maps.google.com/?q=95-A+EB+Colony+Thiruvalluvar+Salai+Dindigul+624003" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        95-A, E.B. Colony,<br/>
                        Thiruvalluvar Salai,<br/>
                        Dindigul &ndash; 624 003
                      </a>
                    </p>
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><Phone size={18} /></div>
                  <div>
                    <p style={labelStyle}>Phone</p>
                    <p style={valueStyle}>
                      <a href="tel:+914512436115" style={linkStyle}>0451 2436115</a><br/>
                      <a href="tel:+914512420336" style={linkStyle}>0451 2420336</a>
                    </p>
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><Clock size={18} /></div>
                  <div>
                    <p style={labelStyle}>Hours</p>
                    <p style={valueStyle}>Mon &ndash; Sat: 8:00 AM &ndash; 8:00 PM<br/>Sun: 8:00 AM &ndash; 1:00 PM</p>
                  </div>
                </div>

                <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginTop: 'var(--space-8)' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=95-A+EB+Colony+Thiruvalluvar+Salai+Dindigul+624003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Raj Scans Dindigul Location Map"
                  ></iframe>
                </div>
              </div>

              {/* Sivagangai */}
              <div style={cardStyle}>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brand-red)', marginBottom: '6px' }}>
                    Branch 03
                  </p>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-brand-navy)', letterSpacing: '-0.02em', margin: 0 }}>
                    Sivagangai
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    Deepam Scans &amp; Raj Clinic
                  </p>
                </div>

                <div style={{ height: '1px', background: 'var(--color-neutral-200)' }} />

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><MapPin size={18} /></div>
                  <div>
                    <p style={labelStyle}>Address</p>
                    <p style={valueStyle}>
                      <a href="https://maps.google.com/?q=Deepam+Scans+Raj+Clinic+34+Madurai+Main+Road+Sivagangai+630561" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        DEEPAM SCANS, RAJ CLINIC,<br/>
                        34-Madurai Main Road,<br/>
                        Madurai Mukku,<br/>
                        Sivagangai &ndash; 630 561
                      </a>
                    </p>
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><Phone size={18} /></div>
                  <div>
                    <p style={labelStyle}>Phone</p>
                    <p style={valueStyle}>
                      <a href="tel:+914575244607" style={linkStyle}>04575-244607</a><br/>
                      <a href="tel:+918807712607" style={linkStyle}>88077 12607</a>
                    </p>
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={iconBoxStyle}><Clock size={18} /></div>
                  <div>
                    <p style={labelStyle}>Hours</p>
                    <p style={valueStyle}>Mon &ndash; Sat: 8:00 AM &ndash; 8:00 PM<br/>Sun: 8:00 AM &ndash; 1:00 PM</p>
                  </div>
                </div>

                <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginTop: 'var(--space-8)' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Deepam+Scans+Raj+Clinic+34+Madurai+Main+Road+Sivagangai+630561&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Raj Scans Sivagangai Location Map"
                  ></iframe>
                </div>
              </div>

            </div>



          </div>
        </Container>
      </Section>
    </>
  );
}
