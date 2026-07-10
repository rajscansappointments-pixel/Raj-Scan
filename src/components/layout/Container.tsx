import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import styles from './Container.module.css';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(styles.container, className)}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export { Container };
