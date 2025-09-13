// src/app/blog/page.js
import Link from 'next/link';

// Mock data for blog posts
const blogPosts = [
  { id: 1, slug: 'first-post', title: 'First Post', content: 'This is the first blog post.' },
  { id: 2, slug: 'second-post', title: 'Second Post', content: 'This is the second blog post.' },
  { id: 3, slug: 'third-post', title: 'Third Post', content: 'This is the third blog post.' },
];

export default function BlogPage() {
  return (
    <div>
      <h2>All Blog Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {blogPosts.map(post => (
          <li key={post.id} style={{ marginBottom: '15px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <Link
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: '#0070f3', fontSize: '18px' }}
            >
              {post.title}
            </Link>
            <p style={{ marginTop: '8px', color: '#666' }}>{post.content}</p>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        <h3>Test Error Scenarios:</h3>
        <ul>
          <li>
            <Link href="/blog/non-existent-post" style={{ color: '#ff6b6b' }}>
              Visit a non-existent post (will trigger error)
            </Link>
          </li>
          <li>
            <Link href="/blog/error-post" style={{ color: '#ff6b6b' }}>
              Visit a post that throws an error
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
