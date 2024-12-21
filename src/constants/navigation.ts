import type { MainNavItem } from '@/types/navigation';
import { ROUTES } from './routes';

export const MAIN_NAV: readonly MainNavItem[] = [
  {
    title: 'Documentation',
    href: ROUTES.DOCS.ROOT,
    items: [
      {
        title: 'Components',
        href: ROUTES.DOCS.COMPONENTS,
        description: 'Documentation for reusable components.',
      },
      {
        title: 'Hooks',
        href: ROUTES.DOCS.HOOKS,
        description: 'Documentation for custom React hooks.',
      },
      {
        title: 'Utils',
        href: ROUTES.DOCS.UTILS,
        description: 'Documentation for utility functions.',
      },
    ],
  },
  {
    title: 'Components',
    href: ROUTES.COMPONENTS.ROOT,
    items: [
      {
        title: 'UI Components',
        href: ROUTES.COMPONENTS.UI,
        description: 'Basic UI components built with shadcn/ui.',
      },
      {
        title: 'Layout Components',
        href: ROUTES.COMPONENTS.LAYOUT,
        description: 'Components for page layouts and structure.',
      },
      {
        title: 'Form Components',
        href: ROUTES.COMPONENTS.FORMS,
        description: 'Form-related components and validation.',
      },
    ],
  },
  {
    title: 'Examples',
    href: ROUTES.EXAMPLES.ROOT,
    items: [
      {
        title: 'Component Examples',
        href: ROUTES.EXAMPLES.COMPONENTS,
        description: 'Real-world component examples.',
      },
      {
        title: 'Hook Examples',
        href: ROUTES.EXAMPLES.HOOKS,
        description: 'Custom hook usage examples.',
      },
      {
        title: 'Form Examples',
        href: ROUTES.EXAMPLES.FORMS,
        description: 'Form handling examples.',
      },
    ],
  },
] as const;
