'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import styles from './ServicesPreview.module.css';

interface PreviewService {
  id: string;
  abbr: string;
  title: string;
  body: string;
  benefits: string[];
  image: string;
  href: string;
  imageFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  imagePosition?: string;
  unoptimized?: boolean;
}

const services: PreviewService[] = [
  {
    id: 'mri',
    abbr: 'MRI',
    title: 'MRI — 1.5 Tesla',
    body: 'The Siemens Magnetom Sempra 1.5T delivers consistent, high-quality imaging with Tim+Dots integrated coil technology, up to 97% noise reduction, auto-align, and brain scans in under 10 minutes.',
    benefits: ['Zero Helium boil-off magnet technology', 'Up to 97% noise reduction', 'Brain scans in under 10 minutes'],
    image: '/images/facility/mri-scanner.jpg',
    href: '/services/mri',
  },
  {
    id: 'ct',
    abbr: 'CT',
    title: 'CT Scan — 32 Slice',
    body: 'The Siemens SOMATOM go-Now is a versatile 32-slice scanner with AI-powered automation, 20% faster patient preparation, and 90% more time spent with the patient for a reassuring experience.',
    benefits: ['AI-powered scan automation', '20% faster patient preparation', 'Higher radiologist freedom of movement'],
    image: '/images/facility/ct-scanner.jpg',
    href: '/services/ct-scan',
  },
  {
    id: 'usg',
    abbr: 'USG',
    title: 'Ultrasound — 3D / 4D',
    body: 'The Mindray Resona I9 uses ZONE Sonography Technology+ (ZST+) for sharp imaging across all tissue depths, AI-powered breast and thyroid analysis, and automated fetal brain assessments.',
    benefits: ['AI-powered breast & thyroid analysis', 'Automated fetal brain assessments', 'Microvascular structure visualisation'],
    image: '/images/facility/ultrasound.jpg',
    href: '/services/ultrasound',
  },
  {
    id: 'xray',
    abbr: 'X-Ray',
    title: 'Digital X-Ray',
    body: 'The Digix ECO Plus features a fully motorised 3D ceiling stand, preview images in under 5 seconds, 1000+ APR programmes, wide dynamic range for soft tissues and hard bones, and high image contrast.',
    benefits: ['Preview image in under 5 seconds', '1000+ APR programmes', 'Wide dynamic range for all tissue types'],
    image: '/images/facility/digital-xray.jpg',
    href: '/services/digital-xray',
  },
  {
    id: 'mammo',
    abbr: 'Mammo',
    title: 'Digital Mammography',
    body: 'The FAIRY DR ADV / FAIRY DR+ offers a fully motorised iso-centric system with auto-release compression, AEC zero-point exposure, 3D Tomosynthesis upgrade, and optional digital stereotactic biopsy.',
    benefits: ['Fully motorised iso-centric system', '3D Tomosynthesis at site', 'Optional digital stereotactic biopsy'],
    image: '/images/facility/mammography.jpg',
    href: '/services/mammography',
  },
  {
    id: 'lab',
    abbr: 'Lab',
    title: 'Laboratory Services',
    body: 'Our laboratory is powered by the EKON Whole Slide Image Scanner with auto chemistry analysis, Chroma II reader, electrolyte analyser, centrifuge, urine analyser, and microscope for comprehensive diagnostics.',
    benefits: ['EKON Whole Slide Image Scanner', 'Automated digital scanning', 'Advanced AI tools for analysis'],
    image: '/images/facility/laboratory.png?v=3',
    imageFit: 'cover',
    unoptimized: true,
    href: '/services/laboratory',
  },
  {
    id: 'echo',
    abbr: 'Echo',
    title: 'Echo & ECG',
    body: 'Cardiac imaging and electrocardiography services for a thorough assessment of heart function and cardiovascular health, performed with care by our experienced clinical team.',
    benefits: ['Cardiac function assessment', 'Electrocardiography (ECG)', 'Dedicated care for all age groups'],
    image: '/images/facility/echo-ecg.png',
    imagePosition: 'right center',
    href: '/services/echo-ecg',
  },
];

export function ServicesPreview() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeId) || services[0];
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  // Sync tab scroll position when activeId changes (e.g. from swiping)
  useEffect(() => {
    if (window.innerWidth < 1024 && tabContainerRef.current) {
      const index = services.findIndex(s => s.id === activeId);
      const tabNode = tabContainerRef.current.children[index] as HTMLElement;
      if (tabNode) {
        tabNode.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeId]);

  const handleTabClick = (id: string, index: number) => {
    setActiveId(id);
    if (window.innerWidth < 1024 && contentContainerRef.current) {
      const width = contentContainerRef.current.clientWidth;
      contentContainerRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    }
  };

  const handleContentScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024) return;
    
    const wrapper = e.currentTarget;
    const width = wrapper.clientWidth;
    const scrollLeft = wrapper.scrollLeft;
    
    if (width > 0) {
      const activeIndex = Math.round(scrollLeft / width);
      const newActiveId = services[activeIndex]?.id;
      
      if (newActiveId && newActiveId !== activeId) {
        setActiveId(newActiveId);
      }
    }
  };

  return (
    <div className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Diagnostic Services</p>
        <h2 className={styles.heading}>Everything under<br />one roof.</h2>
        <p className={styles.sub}>
          From MRI and CT to Mammography, Lab Services, and Echo-ECG — all available at Raj Scans OMR, Chennai.
        </p>
      </div>

      <div className={styles.layout}>
        {/* Left: Interactive Grid */}
        <div className={styles.grid} ref={tabContainerRef}>
          {services.map((s, index) => (
            <div
              key={s.id}
              className={`${styles.card} ${activeId === s.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveId(s.id)}
              onClick={() => handleTabClick(s.id, index)}
            >
              <div className={styles.cardAccent} />
              <div className={styles.cardInner}>
                <span className={styles.abbr}>{s.abbr}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <span className={styles.arrow}><ArrowRight size={16} strokeWidth={2.5} /></span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Dynamic Featured Panel */}
        <div 
          className={styles.featuredWrapper} 
          ref={contentContainerRef}
          onScroll={handleContentScroll}
        >
          {/* Preload images to guarantee 0 network lag */}
          <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
            {services.map(s => (
              <Image key={s.id} src={s.image} alt="" width={800} height={600} priority={true} />
            ))}
          </div>

          {services.map((service) => (
            <div
              key={service.id}
              className={`${styles.featuredPanel} ${activeService.id === service.id ? styles.featuredPanelActive : ''}`}
            >
              <div className={styles.featuredImageWrap}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.featuredImage}
                  style={{
                    objectPosition: service.imagePosition || 'center',
                    objectFit: service.imageFit || 'cover'
                  }}
                  unoptimized={service.unoptimized}
                  priority
                />
                <div className={styles.imageOverlay} />
              </div>
              
              <div className={styles.featuredContent}>
                <h3 className={styles.featuredTitle}>{service.title}</h3>
                <p className={styles.featuredBody}>{service.body}</p>
                
                <ul className={styles.benefitsList}>
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>
                      <Check size={16} className={styles.checkIcon} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className={styles.actions}>
                  <Link href={service.href} className={styles.learnMoreBtn}>
                    Learn More <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                  <Link href={service.href} className={styles.bookBtn}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
