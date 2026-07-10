import Image from 'next/image';
import { Settings, Monitor, Zap, Disc } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import styles from './Technology.module.css';

const equipment = [
  {
    name: '3 Tesla MRI',
    desc: 'High-resolution imaging for neurology and musculoskeletal diagnostics.',
    icon: <Monitor size={24} />,
  },
  {
    name: '128 Slice CT',
    desc: 'Ultra-fast scanning for cardiac and advanced vascular imaging.',
    icon: <Disc size={24} />,
  },
  {
    name: '4D Ultrasound',
    desc: 'Real-time structural viewing for obstetrics and general sonography.',
    icon: <Zap size={24} />,
  },
  {
    name: 'Digital X-Ray',
    desc: 'Low radiation exposure with immediate digital processing.',
    icon: <Settings size={24} />,
  },
];

export function Technology() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <SectionTitle
          subtitle="Advanced Technology"
          title="Equipped for Precision"
          description="We continually invest in the latest diagnostic technology to ensure our patients receive the most accurate results possible, quickly and safely."
        />
        
        <div className={styles.equipmentGrid}>
          {equipment.map((item, index) => (
            <div key={index} className={styles.equipmentItem}>
              <div className={styles.icon}>{item.icon}</div>
              <div>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemDesc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/equipment/mri-machine.jpg"
          alt="State-of-the-art 3 Tesla MRI machine at Raj Scans"
          fill
          quality={85}
          className={styles.image}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
