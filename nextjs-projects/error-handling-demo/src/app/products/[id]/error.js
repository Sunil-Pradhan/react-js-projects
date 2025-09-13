// src/app/products/[id]/error.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error('Product error:', error);
  }, [error]);

  const handleTryAgain = () => {
    // Reset the error boundary and retry the render
    startTransition(() => {
      reset();
    });
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ff6b6b',
      borderRadius: '8px',
      maxWidth: '500px',
      margin: '40px auto'
    }}>
      <h2 style={{ color: '#ff6b6b' }}>Something went wrong!</h2>
      <p style={{ margin: '15px 0', color: '#555' }}>{error.message}</p>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleTryAgain}
          style={{
            marginRight: '10px',
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

        <button
          onClick={handleGoBack}
          style={{
            padding: '10px 15px',
            backgroundColor: '#45b7d1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
