import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import generateMetadata from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: `Components | ${SITE_CONFIG.name}`,
  description:
    'A collection of reusable UI components built with shadcn/ui and Next.js.',
  keywords: [
    'ui components',
    'shadcn components',
    'react components',
    'next.js components',
    'component library',
  ],
});

export default function ComponentsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">Components</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        A collection of pre-built components using shadcn/ui.
      </p>
    </main>
  );
}
