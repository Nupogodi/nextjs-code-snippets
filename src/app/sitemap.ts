import type { MetadataRoute } from 'next';
import { ROUTES } from '@/constants/routes';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nextjs-code-snippets-psi.vercel.app/';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ROUTES.HOME,
    ROUTES.DOCS.ROOT,
    ROUTES.DOCS.COMPONENTS,
    ROUTES.DOCS.HOOKS,
    ROUTES.DOCS.UTILS,
    ROUTES.COMPONENTS.ROOT,
    ROUTES.COMPONENTS.UI,
    ROUTES.COMPONENTS.LAYOUT,
    ROUTES.COMPONENTS.FORMS,
    ROUTES.EXAMPLES.ROOT,
    ROUTES.EXAMPLES.COMPONENTS,
    ROUTES.EXAMPLES.HOOKS,
    ROUTES.EXAMPLES.FORMS,
  ];

  return routes.map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === ROUTES.HOME ? 1 : 0.8,
  }));
}
