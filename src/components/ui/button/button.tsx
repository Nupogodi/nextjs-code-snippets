import type { ButtonProps } from './types';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

import * as React from 'react';
import { buttonVariants } from './variants';

const Button = ({ ref, className, variant, size, asChild = false, ...props }: ButtonProps & { ref?: React.RefObject<HTMLButtonElement> }) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};

Button.displayName = 'Button';

export { Button };
