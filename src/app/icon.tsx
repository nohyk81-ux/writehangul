import { ImageResponse } from 'next/og';



// Image metadata
export const size = {
  width: 64,
  height: 64,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 34,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
        }}
      >
        <span>✍️</span>
        <span>🇰🇷</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
