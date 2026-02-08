import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 55%, #402818 100%)',
          color: '#F8F6F2'
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A05B' }}>
          Consultoria Gastronômica Premium
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1, marginTop: 24 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, marginTop: 24, maxWidth: 900, color: '#E9E4DA' }}>
          Estratégia, operação e experiência para negócios gastronômicos de alta performance.
        </div>
      </div>
    ),
    size
  );
}