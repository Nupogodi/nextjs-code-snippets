import type { Metadata } from 'next';
import { ButtonExample } from '@/examples/components/button-example';

export const metadata: Metadata = {
  title: 'Next.js Code Collection',
  description: 'A collection of reusable Next.js components and utilities.',
  keywords: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Shadcn', 'UI', 'Components', 'Hooks', 'Utilities'],
  openGraph: {
    title: 'Next.js Code Collection',
    description: 'A collection of reusable Next.js components and utilities.',
    url: 'https://nextjs-code-snippets-psi.vercel.app/',
    siteName: 'Next.js Code Collection',
    locale: 'en_US',
    type: 'website',
  },
};

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
