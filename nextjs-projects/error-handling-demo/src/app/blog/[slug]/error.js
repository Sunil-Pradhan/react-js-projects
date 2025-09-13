// src/app/blog/[slug]/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ff6b6b', borderRadius: '8px' }}>
      <h2>Blog Post Error!</h2>
      <p>Something went wrong when loading this blog post.</p>
      <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>{error.message}</p>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={reset}
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
        <a
          href="/blog"
          style={{
            padding: '10px 15px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          Back to All Posts
        </a>
      </div>
    </div>
  );
}
