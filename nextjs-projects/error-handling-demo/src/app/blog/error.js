// src/app/blog/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ff6b6b', borderRadius: '8px' }}>
      <h2>Blog Error!</h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        style={{
          marginTop: '10px',
          padding: '10px 15px',
          backgroundColor: '#4ecdc4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Try Again
      </button>
    </div>
  );
}
