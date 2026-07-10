import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';
import styles from './CTABanner.module.css';

export interface CTABannerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  primaryActionHref?: string;
  secondaryActionHref?: string;
}

export function CTABanner({
  title,
  description,
  primaryActionText = 'Book an Appointment',
  secondaryActionText = 'Contact Us',
  primaryActionHref = '/contact',
  secondaryActionHref = '/contact',
  className,
  ...props
}: CTABannerProps) {
  return (
    <div className={cn(styles.banner, className)} {...props}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Link href={primaryActionHref} style={{ textDecoration: 'none' }}>
            <Button variant="accent" size="lg">{primaryActionText}</Button>
          </Link>
          <Link href={secondaryActionHref} style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="lg" style={{ borderColor: 'white', color: 'white' }}>
              {secondaryActionText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
