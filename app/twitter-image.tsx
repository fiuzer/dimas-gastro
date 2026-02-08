import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const size = {
  width: 1200,
  height: 600
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px',
          background: 'linear-gradient(120deg, #111111 0%, #1a1a1a 70%, #2b1b12 100%)',
          color: '#F8F6F2'
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A05B' }}>
          Consultor Gastronômico
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, marginTop: 20 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 26, marginTop: 20, color: '#E9E4DA' }}>{siteConfig.description}</div>
      </div>
    ),
    size
  );
}