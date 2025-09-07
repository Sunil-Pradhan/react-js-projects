import Link from 'next/link'

export default function BlogPage() {
  const blogs = [
    { id: 'blog1', title: 'Next.js Navigation Guide' },
    { id: 'blog2', title: 'React Best Practices' },
    { id: 'blog3', title: 'Web Development Tips' }
  ]

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
