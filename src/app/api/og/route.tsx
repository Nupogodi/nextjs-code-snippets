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
            // Navy blue gradient background
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
            padding: '40px 80px',
            fontFamily: 'system-ui',
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle at center, #60a5fa33 0%, transparent 70%)',
              opacity: 0.8,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle at center, #60a5fa22 0%, transparent 70%)',
              opacity: 0.6,
            }}
          />

          {/* Content container with glass effect */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(15, 23, 42, 0.3)',
              maxWidth: '900px',
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '12px',
                borderRadius: '12px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoBase64}
                alt="Logo"
                width="48"
                height="48"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))',
                }}
              />
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                textAlign: 'center',
                marginBottom: '16px',
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: 28,
                color: 'rgba(255, 255, 255, 0.9)',
                marginTop: 8,
                textAlign: 'center',
                maxWidth: '700px',
                lineHeight: 1.4,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
              }}
            >
              {description}
            </div>
          </div>

          {/* Site URL at bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            {SITE_CONFIG.url.replace('https://', '')}
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
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
            fontSize: 32,
            fontFamily: 'system-ui',
            color: '#ffffff',
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
