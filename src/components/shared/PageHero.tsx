import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Container } from '../layout/Container';
import styles from './PageHero.module.css';

export interface PageHeroProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  bgImage?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  description,
  bgImage,
  children,
  className,
  ...props
}: PageHeroProps) {
  return (
    <div className={cn(styles.hero, bgImage && styles.hasImage, className)} {...props}>
      {bgImage && (
        <>
          <Image 
            src={bgImage} 
            alt="Background" 
            fill 
            className={styles.heroImage} 
            priority
          />
          <div className={styles.overlay} />
        </>
      )}
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {children}
        </div>
      </Container>
    </div>
  );
}
