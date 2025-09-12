'use client';

import { useState } from 'react';

export default function RegisterTemplate({ children }) {
  const [showWelcome, setShowWelcome] = useState(false);

  // This effect demonstrates template behavior
  // It will run on every navigation to the register page
  useState(() => {
    console.log('Register template mounted');
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 100);

    return () => {
      console.log('Register template unmounted');
      clearTimeout(timer);
    };
  });

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '400px',
      margin: '0 auto',
      border: '1px solid #eee',
      borderRadius: '8px',
      marginTop: '2rem',
      position: 'relative'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Register Form</h2>
      {showWelcome && (
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          fontSize: '0.8rem'
        }}>
          Welcome!
        </div>
      )}
      {children}
    </div>
  );
}
