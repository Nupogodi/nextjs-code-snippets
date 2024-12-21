export const ROUTES = {
  HOME: '/',
  DOCS: {
    ROOT: '/docs',
    COMPONENTS: '/docs/components',
    HOOKS: '/docs/hooks',
    UTILS: '/docs/utils',
  },
  COMPONENTS: {
    ROOT: '/components',
    UI: '/components/ui',
    LAYOUT: '/components/layout',
    FORMS: '/components/forms',
  },
  EXAMPLES: {
    ROOT: '/examples',
    COMPONENTS: '/examples/components',
    HOOKS: '/examples/hooks',
    FORMS: '/examples/forms',
  },
} as const;

export type RouteKey = keyof typeof ROUTES;
