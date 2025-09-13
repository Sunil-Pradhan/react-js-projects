// src/app/blog/[slug]/page.js
import { notFound } from 'next/navigation';

// Mock data for blog posts
const blogPosts = [
  { id: 1, slug: 'first-post', title: 'First Post', content: 'This is the first blog post.' },
  { id: 2, slug: 'second-post', title: 'Second Post', content: 'This is the second blog post.' },
  { id: 3, slug: 'third-post', title: 'Third Post', content: 'This is the third blog post.' },
  { id: 4, slug: 'error-post', title: 'Error Post', content: 'This post will throw an error.' },
];

export default function BlogPostPage({ params }) {
  const { slug } = params;

  // Simulate an error for the 'error-post'
  if (slug === 'error-post') {
    throw new Error('Failed to load blog post content. Please try again later.');
  }

  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
        This is the individual blog post page for: {slug}
      </p>
    </article>
  );
}

// Generate metadata for the page (optional)
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content,
  };
}
