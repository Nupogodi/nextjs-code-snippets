import type { ReactNode } from 'react';

// Error boundary types
export type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};
