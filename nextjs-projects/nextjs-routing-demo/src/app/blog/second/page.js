import Link from 'next/link'
export default function SecondPost() {
  return (
    <div>
      <h1>Second Blog Post</h1>
      <p>This is the second blog post content.</p>
     <Link href="/blog">← Back to Blog</Link>
    </div>
  )
}
