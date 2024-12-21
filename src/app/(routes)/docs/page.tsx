import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation | Next.js Code Collection',
  description:
    'Comprehensive documentation for components, hooks, and utilities in our Next.js code collection.',
  openGraph: {
    title: 'Documentation | Next.js Code Collection',
    description:
      'Comprehensive documentation for components, hooks, and utilities in our Next.js code collection.',
    type: 'website',
    url: '/docs',
  },
};

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
