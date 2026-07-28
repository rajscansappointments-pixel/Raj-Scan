import styles from './Skeleton.module.css';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Skeleton({ className, style }: SkeletonProps) {
  return <div className={cn(styles.bone, className)} style={style} aria-hidden="true" />;
}

// Reusable preset shapes
export const SkeletonText     = (p: SkeletonProps) => <Skeleton {...p} className={cn(styles.text, p.className)} />;
export const SkeletonTitle    = (p: SkeletonProps) => <Skeleton {...p} className={cn(styles.title, p.className)} />;
export const SkeletonHero     = (p: SkeletonProps) => <Skeleton {...p} className={cn(styles.hero, p.className)} />;
export const SkeletonCard     = (p: SkeletonProps) => <Skeleton {...p} className={cn(styles.card, p.className)} />;
export const SkeletonAvatar   = (p: SkeletonProps) => <Skeleton {...p} className={cn(styles.avatar, p.className)} />;
export const SkeletonBadge    = (p: SkeletonProps) => <Skeleton {...p} className={cn(styles.badge, p.className)} />;
export const SkeletonButton   = (p: SkeletonProps) => <Skeleton {...p} className={cn(styles.btn, p.className)} />;
