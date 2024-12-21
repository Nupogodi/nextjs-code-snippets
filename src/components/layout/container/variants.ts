import { cva } from 'class-variance-authority';

const containerVariants = cva('relative mx-auto w-full', {
  variants: {
    size: {
      '2xl': 'max-w-[96rem]',
      'full': 'max-w-none',
      'lg': 'max-w-5xl',
      'md': 'max-w-4xl',
      'sm': 'max-w-2xl',
      'xl': 'max-w-7xl',
    },
    padding: {
      none: '',
      sm: 'px-3 sm:px-4',
      md: 'px-4 sm:px-6',
      lg: 'px-4 sm:px-6 lg:px-8',
      xl: 'px-4 sm:px-6 lg:px-8 xl:px-10',
    },
    center: {
      false: '',
      true: 'flex items-center justify-center',
    },
    gutter: {
      false: '',
      true: 'py-4 sm:py-6 lg:py-8',
    },
  },
  defaultVariants: {
    size: 'xl',
    padding: 'lg',
    center: false,
    gutter: false,
  },
  compoundVariants: [
    {
      center: true,
      gutter: true,
      className: 'flex-col',
    },
  ],
});

export { containerVariants };
