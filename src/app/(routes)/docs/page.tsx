import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import generateMetadata from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: `Documentation | ${SITE_CONFIG.name}`,
  description: 'Comprehensive documentation for components, hooks, and utilities.',
  keywords: [
    'next.js',
    'react',
    'typescript',
    'shadcn/ui',
    'web development',
  ],
});

export default function DocsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">Documentation</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Comprehensive documentation for components, hooks, and utilities.
      </p>
    </main>
  );
}
