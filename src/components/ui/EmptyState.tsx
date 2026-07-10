import { HTMLAttributes } from 'react';
import { FileSearch } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './EmptyState.module.css';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.icon}>
        {icon || <FileSearch size={48} />}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
