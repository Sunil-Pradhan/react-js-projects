import Link from 'next/link'

// This component uses static rendering
export default function StaticBlog() {
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Static Rendering Demo</h1>
      <p className="text-lg mb-4">
        This page is statically rendered at build time. The timestamp below won&apos;t change on refresh:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="text-xl font-mono">Build Time: {timestamp}</p>
      </div>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  )
}
