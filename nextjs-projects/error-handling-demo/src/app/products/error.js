// src/app/products/error.js
'use client';

import { useEffect } from 'react';

export default function ProductsError({ error, reset }) {
  useEffect(() => {
    console.error('Products page error:', error);
  }, [error]);

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ff6b6b',
      borderRadius: '8px',
      maxWidth: '500px',
      margin: '40px auto',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#ff6b6b' }}>Failed to load products</h2>
      <p style={{ margin: '15px 0', color: '#555' }}>{error.message}</p>

      <button
        onClick={reset}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4ecdc4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Try Again
      </button>
    </div>
  );
}
