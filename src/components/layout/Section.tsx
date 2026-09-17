import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import styles from './Section.module.css';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  alternate?: boolean;
  compact?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, alternate = false, compact = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          styles.section,
          alternate && styles.alternate,
          compact && styles.compact,
          className
        )}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

export { Section };
