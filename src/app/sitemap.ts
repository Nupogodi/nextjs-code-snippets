import type { MetadataRoute } from 'next';
import { ROUTES } from '@/constants/routes';

// Ensure trailing slash consistency
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://nextjs-code-snippets-psi.vercel.app';

// Define route priorities and change frequencies
const ROUTE_CONFIG = {
  home: { priority: 1.0, changeFrequency: 'daily' as const },
  docs: { priority: 0.8, changeFrequency: 'weekly' as const },
  components: { priority: 0.8, changeFrequency: 'weekly' as const },
  examples: { priority: 0.6, changeFrequency: 'monthly' as const },
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes = [
    {
      url: `${SITE_URL}${ROUTES.HOME}`,
      lastModified: new Date(),
      changeFrequency: ROUTE_CONFIG.home.changeFrequency,
      priority: ROUTE_CONFIG.home.priority,
    },
    {
      url: `${SITE_URL}${ROUTES.DOCS.ROOT}`,
      lastModified: new Date(),
      changeFrequency: ROUTE_CONFIG.docs.changeFrequency,
      priority: ROUTE_CONFIG.docs.priority,
    },
    // Documentation routes
    ...Object.values(ROUTES.DOCS).map(route => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: ROUTE_CONFIG.docs.changeFrequency,
      priority: ROUTE_CONFIG.docs.priority,
    })),
    // Component routes
    ...Object.values(ROUTES.COMPONENTS).map(route => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: ROUTE_CONFIG.components.changeFrequency,
      priority: ROUTE_CONFIG.components.priority,
    })),
    // Example routes
    ...Object.values(ROUTES.EXAMPLES).map(route => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: ROUTE_CONFIG.examples.changeFrequency,
      priority: ROUTE_CONFIG.examples.priority,
    })),
  ];

  // You can add dynamic routes here if needed
  // const dynamicRoutes = await fetchDynamicRoutes()
  // const dynamicSitemapEntries = dynamicRoutes.map(...)

  return [
    ...staticRoutes,
    // ...dynamicSitemapEntries
  ];
}

// Type for dynamic routes if needed
// type DynamicRoute = {
//   slug: string;
//   lastModified: Date;
// };

// Helper function to fetch dynamic routes if needed
// async function fetchDynamicRoutes(): Promise<DynamicRoute[]> {
//   // Implement your dynamic route fetching logic here
//   return [];
// }
