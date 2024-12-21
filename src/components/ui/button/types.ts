import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from './variants';

export type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;
