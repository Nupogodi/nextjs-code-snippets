const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const siteConfig = {
  name: 'Next.js Code Collection',
  description: 'A collection of reusable Next.js components, hooks, and utilities.',
  url: SITE_URL,
  ogImage: `${SITE_URL}/og.jpg`,
  links: {
    github: 'https://github.com/Nupogodi/nextjs-code-snippets',
  },
} as const;

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  path = '',
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}) {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    authors: [
      {
        name: 'Alex Sherbin',
      },
    ],
    creator: 'Alex Sherbin',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
      creator: '@Nupogodi_dev',
    },
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        'index': true,
        'follow': true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}
