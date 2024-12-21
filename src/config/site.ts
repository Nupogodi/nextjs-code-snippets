export const SITE_CONFIG = {
  name: 'Next.js Code Snippets',
  description: 'A collection of reusable Next.js components, hooks, and utilities',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://nextjs-code-snippets-psi.vercel.app/',
  ogImage: '/og.jpg',
  links: {
    twitter: 'https://twitter.com/Nupogodi_dev',
    github: 'https://github.com/Nupogodi/nextjs-code-snippets',
  },
  creator: {
    name: 'Alex Sherbin',
    twitter: '@Nupogodi_dev',
    url: 'https://github.com/Nupogodi',
  },
  keywords: [
    'nextjs',
    'react',
    'typescript',
    'tailwindcss',
    'shadcn-ui',
    'components',
    'hooks',
    'utilities',
  ],
  version: '0.1.0',
  license: 'MIT',
  repository: {
    type: 'git',
    url: 'https://github.com/Nupogodi/nextjs-code-snippets',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
