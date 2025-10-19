import { notFound } from 'next/navigation'
import Link from 'next/link'

// Define popular posts in a shared constant
const POPULAR_POSTS = [
  { slug: 'nextjs-rendering' },
  { slug: 'react-server-components' },
  { slug: 'web-performance' }
]

// Pre-generate popular blog posts
export async function generateStaticParams() {
  return POPULAR_POSTS
}


export default function BlogPost({ params }) {
  const { slug } = params
  const timestamp = new Date().toLocaleTimeString()

  // Simulate fetching blog post data
  const posts = {
    'nextjs-rendering': {
      title: 'Next.js Rendering Strategies',
      content: 'Learn about static, dynamic, and streaming rendering.'
    },
    'react-server-components': {
      title: 'React Server Components',
      content: 'Understanding the new paradigm of React components.'
    },
    'web-performance': {
      title: 'Web Performance Optimization',
      content: 'Techniques to make your website faster.'
    },
    // Add some dynamic posts that aren't in POPULAR_POSTS
    'advanced-react-patterns': {
      title: 'Advanced React Patterns',
      content: 'Learn about compound components, render props, and more.'
    },
    'css-grid-guide': {
      title: 'Complete CSS Grid Guide',
      content: 'Master CSS Grid layout with practical examples.'
    }

  }

  const post = posts[slug]

  if (!post) {
    notFound()
  }

  const isPreGenerated = POPULAR_POSTS.find(p => p.slug === slug)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-4">{post.content}</p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p className="font-mono">Page generated at: {timestamp}</p>
        <p className="text-sm mt-2">
          {isPreGenerated
            ? '✅ This page was pre-generated at build time'
            : '🔄 This page was generated on-demand'
          }
        </p>
        {!isPreGenerated && (
          <p className="text-xs mt-1 text-orange-600">
            Note: This slug was not in generateStaticParams()
          </p>
        )}
      </div>

      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  )
}

// Control behavior for non-pre-generated routes
export const dynamicParams = true // false would show 404 for unknown slugs
