'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{
          padding: '40px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h1 style={{ color: '#ff6b6b' }}>Global Error Occurred!</h1>
          <p style={{ margin: '20px 0' }}>{error.message}</p>

          <button
            onClick={reset}
            style={{
              padding: '12px 20px',
              backgroundColor: '#4ecdc4',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Try Again
          </button>

          <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            If the problem persists, please contact support.
          </p>
        </div>
      </body>
    </html>
  );
}
