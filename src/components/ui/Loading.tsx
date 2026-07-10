import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import styles from './Loading.module.css';

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export function Loading({ text = 'Loading...', className, ...props }: LoadingProps) {
  return (
    <div className={cn(styles.wrapper, className)} {...props} aria-busy="true">
      <div className={styles.spinner} aria-hidden="true" />
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
}
