import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, ReactNode } from 'react';
import type { containerVariants } from './variants';

export type ValidElements = 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer';

export type ContainerProps<T extends ValidElements = 'div'> = {
  children: ReactNode;
  className?: string;
  as?: T;
  fluid?: boolean;
  isLoading?: boolean;
} & VariantProps<typeof containerVariants> &
Omit<HTMLAttributes<HTMLElement>, 'children' | 'className' | 'size'>;
