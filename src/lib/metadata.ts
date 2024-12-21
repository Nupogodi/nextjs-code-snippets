import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

type GenerateMetadataProps = {
  title: string;
  description: string;
  ogImagePath?: string;
  baseUrl?: string;
  siteName?: string;
  locale?: string;
  type?: 'website' | 'article' | 'profile';
  keywords?: string[];
};

function generateMetadata({
  title,
  description,
  ogImagePath = '/api/og',
  baseUrl = SITE_CONFIG.url,
  siteName = SITE_CONFIG.name,
  locale = 'en',
  type = 'website',
  keywords = [],
}: GenerateMetadataProps): Metadata {
  const allKeywords = [
    ...keywords,
    ...SITE_CONFIG.keywords || [],
  ].filter((value, index, self) => self.indexOf(value) === index);

  const ogImageUrl = `${baseUrl}${ogImagePath}?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    keywords: allKeywords.join(', '),
    metadataBase: new URL(baseUrl),
    openGraph: {
      type,
      locale,
      siteName,
      title,
      description,
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
      creator: '@Nupogodi_dev',
    },
    alternates: {
      canonical: baseUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default generateMetadata;
