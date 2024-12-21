import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import generateMetadata from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: `Examples | ${SITE_CONFIG.name}`,
  description:
    'Real-world examples and implementations of components, hooks, and patterns.',
  keywords: [
    'next.js',
    'react',
    'typescript',
    'shadcn/ui',
    'web development',
  ],
});

export default function ExamplesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">Examples</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Real-world examples and use cases.
      </p>
    </main>
  );
}
