import Link from 'next/link'
export default function FirstPost() {
  return (
    <div>
      <h1>First Blog Post</h1>
      <p>This is the first blog post content.</p>
      <Link href="/blog">← Back to Blog</Link>
    </div>
  )
}
