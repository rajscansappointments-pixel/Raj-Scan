import Link from 'next/link';
import styles from './PackagesPreview.module.css';

const packages = [
  {
    title: 'Basic Health Check',
    description: 'Essential screening for general well-being and early detection.',
    price: '2,499',
    tests: ['Complete Blood Count', 'Blood Sugar Fasting', 'Lipid Profile', 'Liver Function', 'Kidney Function'],
  },
  {
    title: 'Comprehensive',
    description: 'Thorough evaluation for a complete health overview.',
    price: '5,999',
    tests: ['All Basic Tests', 'Thyroid Profile', 'Vitamin D & B12', 'ECG', 'Ultrasound Abdomen'],
    featured: true,
  },
  {
    title: 'Senior Citizen',
    description: 'Tailored specifically for the health needs of the elderly.',
    price: '4,499',
    tests: ['Cardiac Risk Markers', 'Bone Health Profile', 'Diabetic Screening', 'Urinalysis', 'Chest X-Ray'],
  },
];

export function PackagesPreview() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Preventive Care</p>
        <h2 className={styles.heading}>Health Packages</h2>
      </div>

      <div className={styles.grid}>
        {packages.map((pkg, index) => (
          <div key={index} className={`${styles.card} ${pkg.featured ? styles.featured : ''}`}>
            {pkg.featured && <div className={styles.featuredBadge}>Most Popular</div>}
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <p className={styles.cardDesc}>{pkg.description}</p>
            </div>
            
            <div className={styles.priceWrap}>
              <span className={styles.currency}>₹</span>
              <span className={styles.price}>{pkg.price}</span>
            </div>

            <ul className={styles.testList}>
              {pkg.tests.map((test, i) => (
                <li key={i}>{test}</li>
              ))}
            </ul>

            <Link href="/packages" className={pkg.featured ? styles.btnSolid : styles.btnOutline}>
              Book Package
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
