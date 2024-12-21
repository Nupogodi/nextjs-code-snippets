import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { constructMetadata } from '@/constants/metadata';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = constructMetadata();

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
