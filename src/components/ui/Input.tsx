import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './Input.module.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(styles.input, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
