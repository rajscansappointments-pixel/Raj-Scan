'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Clock, MapPin, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
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

export function AppointmentCard() {
  const pathname = usePathname();
  const [activeBranch, setActiveBranch] = useState(0);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (!pathname) return;
    
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];

    const serviceMap: Record<string, string> = {
      'mri': 'mri',
      'ct-scan': 'ct',
      'ultrasound': 'ultrasound',
      'digital-xray': 'xray',
      'mammography': 'mammography',
      'laboratory': 'laboratory',
      'echo-ecg': 'echo-ecg',
      'health-packages': 'package',
      'packages': 'package',
    };

    if (lastSegment && serviceMap[lastSegment]) {
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

          <form className={styles.formGrid}>
            <input type="text" placeholder="Full Name" className={styles.input} required />
            <input type="tel" placeholder="Phone Number" className={styles.input} required />
            
            <input type="email" placeholder="Email Address" className={styles.input} />
            <input type="date" className={styles.input} required />
            
            <select 
              className={styles.input} 
              required 
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="" disabled>Select Service</option>
              <option value="mri">MRI</option>
              <option value="ct">CT Scan</option>
              <option value="ultrasound">Ultrasound</option>
              <option value="xray">Digital X-Ray</option>
              <option value="mammography">Digital Mammography</option>
              <option value="laboratory">Laboratory</option>
              <option value="echo-ecg">Echo ECG</option>
              <option value="package">Health Package</option>
            </select>
            
            <select className={styles.input} required defaultValue="">
              <option value="" disabled>Preferred Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
            
            <textarea 
              placeholder="Message (Optional)" 
              className={cn(styles.textarea, styles.fullWidth)} 
            />
            
            <div className={styles.fullWidth}>
              <button type="submit" className={styles.submitBtn}>
                Book Appointment
              </button>
            </div>
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
