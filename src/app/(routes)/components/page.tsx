import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Components | Next.js Code Collection',
  description:
    'A collection of reusable UI components built with shadcn/ui and Next.js.',
  openGraph: {
    title: 'Components | Next.js Code Collection',
    description:
      'A collection of reusable UI components built with shadcn/ui and Next.js.',
    type: 'website',
    url: '/components',
  },
};

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
