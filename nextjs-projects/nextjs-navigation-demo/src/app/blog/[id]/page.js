import Link from 'next/link'

export default function BlogDetailPage({ params }) {
  const { id } = params

  const blogContent = {
    blog1: 'Content for Next.js Navigation Guide...',
    blog2: 'Content for React Best Practices...',
    blog3: 'Content for Web Development Tips...'
  }

  return (
    <div>
      <Link href="/blog" replace>
        ← Back to Blogs
      </Link>
      <h1>Blog: {id}</h1>
      <p>{blogContent[id] || 'Blog not found'}</p>
    </div>
  )
}
