import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import styles from './SectionTitle.module.css';

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = 'left',
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(styles.wrapper, align === 'center' && styles.center, className)}
      {...props}
    >
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
