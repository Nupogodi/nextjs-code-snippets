import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { SITE_CONFIG } from '@/config/site';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(SITE_CONFIG.name)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?title=${encodeURIComponent(SITE_CONFIG.name)}`],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-background')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
