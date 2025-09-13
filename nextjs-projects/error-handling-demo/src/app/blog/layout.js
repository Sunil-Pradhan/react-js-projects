// src/app/blog/layout.js
export default function BlogLayout({ children }) {
  return (
    <div>
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h1>Blog</h1>
        <nav>
          <a href="/blog" style={{ marginRight: '15px' }}>All Posts</a>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}
