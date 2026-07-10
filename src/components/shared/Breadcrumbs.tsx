import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={item.label} className={styles.item}>
            {item.href && !isLast ? (
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.current} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            )}
            
            {!isLast && <ChevronRight size={14} />}
          </div>
        );
      })}
    </nav>
  );
}
