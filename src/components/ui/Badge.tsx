import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning';
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.badge, styles[variant], className)}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
