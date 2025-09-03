import Link from 'next/link'
export default function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>
      <br/>
      <nav>
        <a href="/blog/first">First Post</a> | &nbsp;
        <a href="/blog/second">Second Post</a>
      </nav>
      <br/>
    <Link href="/">← Back to Home</Link>
    </div>
  )
}
