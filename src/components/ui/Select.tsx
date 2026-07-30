'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Select.module.css';
import { cn } from '@/lib/utils';

interface SelectProps {
  name: string;
  options: { label: string; value: string; disabled?: boolean }[];
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export function Select({
  name,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className,
  required,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn(styles.container, className)} ref={containerRef}>
      <input type="hidden" name={name} value={value} required={required} />
      
      <button
        type="button"
        className={cn(styles.trigger, isOpen && styles.triggerOpen, !value && styles.placeholder)}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.triggerValue}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={18} className={cn(styles.chevron, isOpen && styles.chevronOpen)} />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.list} role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className={cn(
                  styles.option,
                  option.value === value && styles.optionSelected,
                  option.disabled && styles.optionDisabled
                )}
                role="option"
                aria-selected={option.value === value}
                onClick={() => {
                  if (!option.disabled) {
                    onChange(option.value);
                    setIsOpen(false);
                  }
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
