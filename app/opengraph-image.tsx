import { ImageResponse } from 'next/og'

export const alt = 'CATΛLS — Build What Matters'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #080808 0%, #15120c 100%)',
          color: '#f5f0e6',
        }}
      >
        <div style={{ fontSize: 40, letterSpacing: 14, color: '#c9a45c' }}>CATΛLS</div>
        <div style={{ fontSize: 110, marginTop: 30, lineHeight: 1 }}>Build what matters.</div>
        <div style={{ fontSize: 34, marginTop: 40, color: '#b8b0a2', maxWidth: 900 }}>
          Practical guides, workbooks &amp; templates to help you earn, learn, and grow.
        </div>
        <div style={{ fontSize: 28, marginTop: 50, color: '#c9a45c' }}>catals.in</div>
      </div>
    ),
    size,
  )
}
