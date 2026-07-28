export type ServiceCategory = 'All' | 'Radiology' | 'Cardiology' | 'Laboratory' | 'Wellness';

export interface ServiceData {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: string;
  abbr: string;
  shortDescription: string;
  overview: string;
  equipment: string;
  equipmentDesc: string;
  image: string;
  benefits: string[];
  scans: string[];
  preparation: string[];
  timeline: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'mri',
    slug: 'mri',
    category: 'Radiology',
    title: 'Magnetic Resonance Imaging (MRI)',
    abbr: 'MRI',
    shortDescription: '1.5T MRI providing consistent, high-quality imaging with up to 97% noise reduction.',
    overview: 'MRI uses a powerful magnetic field and radio waves to produce detailed pictures of the body\'s internal structures. At Raj Scans, we utilize the advanced Siemens Magnetom Sempra 1.5T to ensure the highest image clarity while drastically reducing scan times and acoustic noise, prioritizing both diagnostic accuracy and patient comfort.',
    equipment: 'Siemens Magnetom Sempra 1.5T',
    equipmentDesc: 'Features Tim+Dots integrated coil technology, Zero Helium boil-off magnet, and delivers brain scans in under 10 minutes.',
    image: '/images/facility/mri-scanner.jpg',
    benefits: [
      'Zero Helium boil-off magnet technology',
      'Up to 97% acoustic noise reduction for comfort',
      'Brain scans completed in under 10 minutes',
      'Consistent, high-quality resolution across tissue types'
    ],
    scans: [
      'Brain & Neuro Imaging',
      'Spine (Cervical, Thoracic, Lumbar)',
      'Joints (Knee, Shoulder, Ankle, Hip)',
      'Abdomen & Pelvis',
      'MR Angiography'
    ],
    preparation: [
      'Fast for 4 hours if contrast dye is required for your scan.',
      'Remove all metal objects, jewelry, and accessories prior to entering the MRI room.',
      'Inform our staff if you have any pacemakers, cochlear implants, or artificial joints.'
    ],
    timeline: [
      { step: 'Arrival & Registration', desc: 'Arrive 15 minutes early to complete standard medical screening forms.' },
      { step: 'Preparation', desc: 'Change into a safe, metal-free gown provided by our staff.' },
      { step: 'The Scan', desc: 'Relax inside the spacious scanner. Our Siemens 1.5T MRI completes most scans in 10 to 30 minutes.' },
      { step: 'Report Generation', desc: 'Our senior radiologists analyze the high-resolution images and deliver a detailed digital report.' }
    ],
    faqs: [
      { q: 'Is the MRI scan painful?', a: 'No, an MRI is a completely painless and non-invasive procedure.' },
      { q: 'Can I undergo an MRI if I am pregnant?', a: 'Please consult your referring doctor. MRIs are generally avoided during the first trimester unless absolutely medically necessary.' }
    ]
  },
  {
    id: 'ct',
    slug: 'ct-scan',
    category: 'Radiology',
    title: 'Computed Tomography (CT Scan)',
    abbr: 'CT',
    shortDescription: '32-Slice CT scanner with AI-powered automation for faster, safer diagnostics.',
    overview: 'A CT scan combines a series of X-ray images taken from different angles to create cross-sectional slices of bones, blood vessels, and soft tissues. Our Siemens SOMATOM go-Now 32-slice scanner captures highly detailed images rapidly, allowing for 20% faster patient preparation and significantly more face-to-face time with our technologists.',
    equipment: 'Siemens SOMATOM go-Now 32-Slice',
    equipmentDesc: 'Features AI-powered scan automation, built-in camera, and mobile workflow giving technologists higher freedom of movement.',
    image: '/images/facility/ct-scanner.jpg',
    benefits: [
      'AI-powered scan automation for precision',
      '20% faster patient preparation time',
      '90% more time spent directly with the patient',
      'Built-in camera for enhanced patient monitoring'
    ],
    scans: [
      'Brain / Head CT',
      'Chest / HRCT',
      'Abdomen & Pelvis',
      'CT Angiography',
      'KUB (Kidney, Ureter, Bladder)'
    ],
    preparation: [
      'Fasting for 4 to 6 hours is required if your scan involves contrast material.',
      'Wear comfortable, loose-fitting clothing without metal zippers or buttons.',
      'Bring recent serum creatinine blood reports if an intravenous contrast is needed.'
    ],
    timeline: [
      { step: 'Arrival & Registration', desc: 'Check in at the reception desk and provide your prescription.' },
      { step: 'Preparation', desc: 'If required, an IV line will be gently placed for contrast dye administration.' },
      { step: 'The Scan', desc: 'The actual CT scan is extremely rapid and typically takes only a few minutes.' },
      { step: 'Report Generation', desc: 'Digital reports and films are generated on the same day for swift medical action.' }
    ],
    faqs: [
      { q: 'Is there a lot of radiation involved in a CT scan?', a: 'Our modern Siemens 32-slice CT utilizes advanced low-dose protocols to minimize radiation exposure without compromising image quality.' }
    ]
  },
  {
    id: 'ultrasound',
    slug: 'ultrasound',
    category: 'Radiology',
    title: 'Ultrasound 3D / 4D',
    abbr: 'USG',
    shortDescription: 'Advanced ZONE Sonography Technology for sharp imaging across all tissue depths.',
    overview: 'Ultrasound imaging uses high-frequency sound waves to view inside the body in real-time. Our Mindray Resona I9 system provides unparalleled clarity for obstetrics, cardiology, and abdominal evaluations, featuring AI-powered tools that assist in precise fetal brain, breast, and thyroid assessments.',
    equipment: 'Mindray Resona I9',
    equipmentDesc: 'Powered by ZONE Sonography Technology+ (ZST+) with automated clinical tools and microvascular structure visualization.',
    image: '/images/facility/ultrasound.jpg',
    benefits: [
      'ZONE Sonography Technology+ (ZST+) for superior clarity',
      'AI-powered breast & thyroid analysis',
      'Automated fetal brain assessments',
      'Exceptional imaging for superficial and microvascular tissues'
    ],
    scans: [
      'Abdomen & Pelvis',
      'Obstetrics (Pregnancy / 3D / 4D)',
      'Thyroid & Neck',
      'Breast Ultrasound',
      'Soft Tissue & Musculoskeletal'
    ],
    preparation: [
      'Fast for 6 to 8 hours prior to abdominal scans to reduce bowel gas.',
      'Drink 3 to 4 glasses of water 1 hour before pelvic or early pregnancy scans and do not empty your bladder.'
    ],
    timeline: [
      { step: 'Arrival', desc: 'Check in 10 minutes prior to your scheduled appointment slot.' },
      { step: 'The Scan', desc: 'A water-based gel is applied to the skin, and a transducer is gently moved over the area of interest.' },
      { step: 'Review', desc: 'Images are instantly reviewed on-screen by our senior sonologist.' },
      { step: 'Report', desc: 'A comprehensive report is provided shortly after the procedure concludes.' }
    ],
    faqs: [
      { q: 'Is ultrasound safe during pregnancy?', a: 'Yes. Ultrasound utilizes sound waves, not ionizing radiation, making it completely safe for both the mother and the developing baby.' }
    ]
  },
  {
    id: 'xray',
    slug: 'digital-xray',
    category: 'Radiology',
    title: 'Digital X-Ray',
    abbr: 'X-Ray',
    shortDescription: 'Motorised 3D ceiling stand X-Ray with preview images available in under 5 seconds.',
    overview: 'Digital X-Ray provides instant, low-dose imaging with high-definition clarity. Our Digix ECO Plus system is equipped with a fully motorised 3D ceiling stand and over 1000 APR programmes, ensuring we can capture a wide dynamic range from soft tissues to hard bones with optimal contrast.',
    equipment: 'Digix ECO Plus',
    equipmentDesc: 'Features a fully motorised 3D ceiling stand, wide dynamic range, and high image contrast.',
    image: '/images/facility/digital-xray.jpg',
    benefits: [
      'Preview image available in under 5 seconds',
      'Fully motorised 3D ceiling stand for flexible positioning',
      'Over 1000 APR programmes for precision',
      'Wide dynamic range for soft tissues and hard bones'
    ],
    scans: [
      'Chest X-Ray',
      'Bone & Joint X-Rays',
      'Spine X-Rays',
      'Abdominal X-Ray',
      'Sinus X-Ray'
    ],
    preparation: [
      'No special dietary preparation is required for standard X-rays.',
      'You may be asked to remove jewelry, eyeglasses, or clothing containing metal fasteners.'
    ],
    timeline: [
      { step: 'Arrival', desc: 'Standard registration at the front desk.' },
      { step: 'Positioning', desc: 'Our radiographer will position you accurately against the digital detector plate.' },
      { step: 'The Scan', desc: 'The digital image is captured in a fraction of a second while you hold your breath.' },
      { step: 'Report', desc: 'Digital X-rays are instantly transmitted to the radiologist for immediate review.' }
    ],
    faqs: [
      { q: 'Can I have an X-ray if I am pregnant?', a: 'Please inform the technologist immediately. X-rays are usually avoided during pregnancy unless absolutely critical.' }
    ]
  },
  {
    id: 'mammography',
    slug: 'mammography',
    category: 'Radiology',
    title: 'Digital Mammography',
    abbr: 'Mammo',
    shortDescription: 'Fully motorised iso-centric mammography system for precise breast cancer screening.',
    overview: 'Digital Mammography is a specialized medical imaging that uses a low-dose X-ray system to see inside the breasts. Our FAIRY DR ADV / DR+ system aids in the early detection and diagnosis of breast diseases in women, featuring an auto-release compression system for enhanced patient comfort.',
    equipment: 'FAIRY DR ADV / FAIRY DR+',
    equipmentDesc: 'A fully motorised iso-centric system with AEC zero-point exposure, 3D Tomosynthesis, and optional digital stereotactic biopsy capabilities.',
    image: '/images/facility/mammography.jpg',
    benefits: [
      'Fully motorised iso-centric system',
      'AEC zero-point exposure for optimal radiation dose',
      'Auto-release compression for patient comfort',
      '3D Tomosynthesis at site'
    ],
    scans: [
      'Screening Mammography',
      'Diagnostic Mammography',
      '3D Tomosynthesis',
      'Breast Imaging'
    ],
    preparation: [
      'Do not wear deodorant, talcum powder, or lotion under your arms on the day of the exam to prevent imaging artifacts.',
      'Describe any breast symptoms or problems to the technologist before the exam begins.'
    ],
    timeline: [
      { step: 'Arrival', desc: 'Registration and completion of a brief breast health history form.' },
      { step: 'Preparation', desc: 'Change into a specialized medical gown.' },
      { step: 'The Scan', desc: 'The breast is briefly compressed to spread the tissue, allowing for a clear image with a lower X-ray dose.' },
      { step: 'Review', desc: 'Images are sent to our specialized radiologist for detailed analysis.' }
    ],
    faqs: [
      { q: 'Is mammography painful?', a: 'You may feel some pressure during the brief compression, but it lasts only a few seconds and is necessary for a clear image.' }
    ]
  },
  {
    id: 'laboratory',
    slug: 'laboratory',
    category: 'Laboratory',
    title: 'Laboratory Services',
    abbr: 'Lab',
    shortDescription: 'Comprehensive in-house pathology and clinical laboratory services.',
    overview: 'Our laboratory is equipped with state-of-the-art analyzers to process a wide spectrum of blood, urine, and tissue tests accurately and swiftly. With advanced digital scanning and automated chemistry analysis, we provide your physician with the precise data needed for accurate diagnoses and treatment plans.',
    equipment: 'Advanced Pathology Suite',
    equipmentDesc: 'Features EKON Whole Slide Image Scanner, Auto Chemistry analysis, Chroma II reader, Electrolyte Analyser, and automated Urine Analyser.',
    image: '/images/facility/laboratory.jpg',
    benefits: [
      'EKON Whole Slide Image Scanner for digital pathology',
      'Automated chemistry and electrolyte analysis',
      'Rigorous quality control and fast turnaround times',
      'Comprehensive testing menu under one roof'
    ],
    scans: [
      'Complete Blood Count (CBC)',
      'Lipid Profile & Glucose',
      'Thyroid Function Tests',
      'Liver & Kidney Panels',
      'Histopathology & Cytology'
    ],
    preparation: [
      'Certain blood tests (like fasting blood sugar or lipid profiles) require 8 to 12 hours of fasting overnight.',
      'Drink water normally unless instructed otherwise by your doctor.'
    ],
    timeline: [
      { step: 'Sample Collection', desc: 'Our trained phlebotomist gently draws blood or collects necessary samples.' },
      { step: 'Processing', desc: 'Samples are immediately barcoded to ensure zero mix-ups and sent to our automated analyzers.' },
      { step: 'Verification', desc: 'Results are cross-verified by our senior pathologists.' },
      { step: 'Report', desc: 'Digital reports are delivered securely to your phone or email as soon as they are ready.' }
    ],
    faqs: [
      { q: 'How long does a routine blood test take?', a: 'The sample collection takes less than 5 minutes. Most routine biochemistry and hematology reports are available on the same day.' }
    ]
  },
  {
    id: 'echo-ecg',
    slug: 'echo-ecg',
    category: 'Cardiology',
    title: 'Echo & ECG',
    abbr: 'Echo',
    shortDescription: 'Non-invasive cardiac assessments evaluating the heart\'s rhythm, structure, and function.',
    overview: 'Electrocardiogram (ECG) and Echocardiogram (Echo) are fundamental tests for assessing cardiovascular health. While an ECG records the electrical activity of your heart to detect arrhythmias, an Echo uses sound waves to create moving pictures of your heart, allowing our cardiologists to evaluate the valves, chambers, and overall pumping function.',
    equipment: 'Cardiology Suite',
    equipmentDesc: 'High-fidelity ECG machines and dedicated cardiac ultrasound probes for structural evaluation.',
    image: '/images/facility/echo-ecg.jpg',
    benefits: [
      'Painless, non-invasive cardiac evaluation',
      'Immediate detection of rhythm abnormalities',
      'Real-time visualization of heart valves and chambers',
      'Crucial for pre-surgical fitness assessments'
    ],
    scans: [
      '12-Lead Resting ECG',
      '2D Echocardiography',
      'Color Doppler Echocardiography'
    ],
    preparation: [
      'No fasting is required for standard Echo or ECG tests.',
      'Avoid heavy meals, smoking, or excessive caffeine right before the test.'
    ],
    timeline: [
      { step: 'Preparation', desc: 'Small sticky electrodes are placed on your chest and limbs.' },
      { step: 'ECG Recording', desc: 'The electrical activity of your heart is recorded in just a few seconds.' },
      { step: 'Echocardiogram', desc: 'A special gel is applied, and an ultrasound probe captures detailed heart images (15-20 minutes).' },
      { step: 'Report', desc: 'A cardiologist reviews the electrical waveforms and ultrasound images to compile the report.' }
    ],
    faqs: [
      { q: 'What is the exact difference between an ECG and an Echo?', a: 'An ECG checks the electrical rhythm and wiring of the heart, while an Echo checks the physical structure, valves, and pumping strength.' }
    ]
  },
  {
    id: 'health-packages',
    slug: 'health-packages',
    category: 'Wellness',
    title: 'Master Health Packages',
    abbr: 'HCP',
    shortDescription: 'Comprehensive, preventive full-body screening packages for all age groups.',
    overview: 'Preventive healthcare is the cornerstone of a long, healthy life. Raj Scans offers meticulously designed Master Health Checkup packages that combine advanced radiology with comprehensive laboratory tests to provide a complete picture of your health. These packages are tailored for different age groups, genders, and specific corporate wellness requirements.',
    equipment: 'Complete Diagnostic Facility',
    equipmentDesc: 'Utilizing our full suite of Siemens, Mindray, and automated laboratory equipment.',
    image: '/images/facility/health-packages.jpg',
    benefits: [
      'Early detection of lifestyle diseases (diabetes, hypertension)',
      'Cost-effective compared to individual tests',
      'Age and gender-specific test profiles',
      'Holistic evaluation by experienced clinicians'
    ],
    scans: [
      'Basic Wellness Checkup',
      'Comprehensive Cardiac Profile',
      'Women\'s Health & Wellness',
      'Senior Citizen Package',
      'Corporate Screening Programs'
    ],
    preparation: [
      'Strictly 10 to 12 hours of overnight fasting is required.',
      'Bring an early morning urine sample in a sterile container.',
      'Wear comfortable sports clothing and footwear if a Treadmill Test (TMT) is included.'
    ],
    timeline: [
      { step: 'Morning Fasting Blood Draw', desc: 'The first blood and urine samples are collected upon your arrival.' },
      { step: 'Radiology & Cardiology', desc: 'Diagnostic imaging such as Ultrasound, X-Ray, and ECG are conducted.' },
      { step: 'Post-Breakfast Tests', desc: 'A post-prandial blood draw is performed 2 hours after your meal.' },
      { step: 'Physician Consult', desc: 'A comprehensive review of all reports with our consulting physician.' }
    ],
    faqs: [
      { q: 'Can I take my regular medications before the checkup?', a: 'Please continue to take your blood pressure medications with a sip of water. Withhold any diabetes medication until after your fasting blood draw and breakfast.' }
    ]
  }
];
