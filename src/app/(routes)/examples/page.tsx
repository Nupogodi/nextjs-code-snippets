import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Examples | Next.js Code Collection',
  description:
    'Real-world examples and implementations of components, hooks, and patterns.',
  openGraph: {
    title: 'Examples | Next.js Code Collection',
    description:
      'Real-world examples and implementations of components, hooks, and patterns.',
    type: 'website',
    url: '/examples',
  },
};

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
