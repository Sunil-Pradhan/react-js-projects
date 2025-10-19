import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Next.js App Router Rendering Strategies
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-green-600">Static Rendering</h2>
            <p className="text-gray-600 mb-4">
              Pages are built at compile time and served as static files.
              Perfect for content that doesn&apos;t change often.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
              <li>Built at deployment</li>
              <li>Fastest performance</li>
              <li>Cached by CDN</li>
            </ul>
            <Link
              href="/static-blog"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              View Demo
            </Link>
          </div>

          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-yellow-600">Dynamic Rendering</h2>
            <p className="text-gray-600 mb-4">
              Pages are rendered on each request. Used for personalized or frequently updated content.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
              <li>Rendered on every request</li>
              <li>Fresh data each time</li>
              <li>Uses headers/cookies</li>
            </ul>
            <Link
              href="/dynamic-user"
              className="inline-block bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
            >
              View Demo
            </Link>
          </div>

          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">Dynamic Routes</h2>
            <p className="text-gray-600 mb-4">
              Pre-generate popular pages at build time, generate others on-demand.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
              <li>generateStaticParams for SSG</li>
              <li>dynamicParams controls fallback</li>
              <li>Mixed static/dynamic generation</li>
            </ul>
            <div className="space-x-2">
              <Link
                href="/blog/nextjs-rendering"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Pre-generated
              </Link>
              <Link
                href="/blog/custom-post"
                className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                On-demand
              </Link>
            </div>
          </div>

          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-purple-600">Streaming</h2>
            <p className="text-gray-600 mb-4">
              Send UI in chunks as they become ready. Great for better perceived performance.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
              <li>Progressive loading</li>
              <li>Suspense with fallback</li>
              <li>Better user experience</li>
            </ul>
            <Link
              href="/streaming"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              View Demo
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Key Concepts Demonstrated:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Static Rendering:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Build-time generation</li>
                <li>Timestamp doesn&apos;t change</li>
                <li>Ideal for blogs, documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Dynamic Rendering:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Request-time generation</li>
                <li>Timestamp updates every time</li>
                <li>Uses headers() and cookies()</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">generateStaticParams:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Pre-generate specific routes</li>
                <li>SSG for known paths</li>
                <li>dynamicParams for unknown paths</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Streaming:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Suspense boundaries</li>
                <li>Progressive loading</li>
                <li>Fallback UI during loading</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
