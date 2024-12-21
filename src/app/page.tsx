import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { ButtonExample } from '@/examples/components/button-example';
import generateMetadata from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: `${SITE_CONFIG.name}`,
  description: 'A collection of reusable Next.js components and utilities.',
  keywords: [
    'next.js',
    'react',
    'typescript',
    'shadcn/ui',
    'web development',
  ],
});

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">Next.js Code Collection</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        A collection of reusable Next.js components and utilities.
      </p>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold">Button Examples</h2>
        <ButtonExample />
      </section>
    </main>
  );
}
