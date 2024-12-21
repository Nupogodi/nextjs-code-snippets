import type { ElementType } from 'react';
import type { ContainerProps, ValidElements } from './types';
import { ErrorBoundary } from '@/components/error-boundary';
import { cn } from '@/lib/utils';
import { containerVariants } from './variants';

function Container<T extends ValidElements = 'div'>({
  children,
  className,
  as: Component = 'div' as T,
  fluid = false,
  size,
  padding,
  center,
  gutter,
  isLoading,
  ...props
}: ContainerProps<T>) {
  const Comp = Component as ElementType;

  if (process.env.NODE_ENV === 'development') {
    if (!children && !isLoading) {
      console.warn('Container: No children provided and not in loading state');
    }
  }

  return (
    <ErrorBoundary fallback={<div className="w-full rounded-md bg-red-50 p-4 text-red-500">Error loading container</div>}>
      <Comp
        className={cn(
          containerVariants({
            size: fluid ? 'full' : size,
            padding,
            center,
            gutter,
          }),
          className,
        )}
        {...props}
        {...(Component === 'header' && { 'aria-label': 'Page header' })}
      >
        {isLoading
          ? (
              <div className="size-full animate-pulse bg-muted/10" />
            )
          : children}
      </Comp>
    </ErrorBoundary>
  );
}

export { Container };
