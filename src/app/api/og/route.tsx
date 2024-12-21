import { SITE_CONFIG } from '@/config/site';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const logoURL = '../../../../public/nextjs-logo.svg';

  try {
    const { searchParams } = new URL(request.url);

    // Get dynamic parameters with fallbacks
    const title = searchParams.get('title') ?? SITE_CONFIG.name;
    const description = searchParams.get('description') ?? SITE_CONFIG.description;

    // Load and convert the logo to base64
    const logoData = await fetch(new URL(logoURL, import.meta.url)).then(
      res => res.arrayBuffer(),
    );
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(logoData)),
    );
    const logoBase64 = `data:image/svg+xml;base64,${base64String}`;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '40px 80px',
            fontFamily: 'system-ui',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoBase64}
              alt="Logo"
              width="64"
              height="64"
            />
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              textAlign: 'center',
              marginBottom: '20px',
              color: '#000',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              color: 'rgb(107 114 128)',
              marginTop: 8,
              textAlign: 'center',
              maxWidth: '800px', // Limit width for better readability
            }}
          >
            {description}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.error('OG Image generation error:', e);

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            fontSize: 32,
            fontFamily: 'system-ui',
          }}
        >
          {SITE_CONFIG.name}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  }
}
