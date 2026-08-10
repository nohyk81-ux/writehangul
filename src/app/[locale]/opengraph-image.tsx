import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

export const alt = 'Write Hangul - Free Korean Writing Practice';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });
  const title = t('title') || 'Write Hangul';
  const description = t('description') || 'Learn to write Korean beautifully. Create your own practice sheets.';

  // Split title if it contains '|' to just show the main part
  const mainTitle = title.split('|')[0].trim();

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #faf8f5, #f1f5f9)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          border: '20px solid #2c3e50',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
          <div
            style={{
              width: '100px',
              height: '100px',
              background: 'white',
              border: '6px solid #e74c3c',
              color: '#e74c3c',
              fontSize: '60px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              marginRight: '30px',
            }}
          >
            한
          </div>
          <h1 style={{ fontSize: '90px', color: '#2c3e50', fontWeight: 'bold', margin: 0 }}>
            Write Hangul
          </h1>
        </div>
        
        <h2 style={{ fontSize: '56px', color: '#e74c3c', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
          {mainTitle}
        </h2>
        <p style={{ fontSize: '36px', color: '#64748b', textAlign: 'center', maxWidth: '1000px', lineHeight: 1.5, margin: 0 }}>
          {description}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
