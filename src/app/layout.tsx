import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { SITE_CONFIG } from '@/config/site';
import generateMetadata from '@/lib/metadata';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = generateMetadata({
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: [
    'next.js',
    'react',
    'typescript',
    'shadcn/ui',
    'web development',
    'ui components',
  ],
  // These will be the default values for all pages unless overridden
  type: 'website',
  siteName: SITE_CONFIG.name,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-background')}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
