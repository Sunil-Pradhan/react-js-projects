// src/app/blog/[slug]/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#ff6b6b' }}>Blog Post Not Found</h2>
      <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/blog"
        style={{
          display: 'inline-block',
          marginTop: '15px',
          padding: '10px 15px',
          backgroundColor: '#4ecdc4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        Back to All Posts
      </Link>
    </div>
  );
}
