import { headers, cookies } from 'next/headers'
import Link from 'next/link'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function DynamicUser() {
  const headersList = headers()
  const cookieStore = cookies()

  const timestamp = new Date().toLocaleTimeString()
  const userAgent = headersList.get('user-agent') || 'Unknown'
  const hasThemeCookie = cookieStore.has('theme')

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dynamic Rendering Demo</h1>
      <p className="text-lg mb-4">
        This page is dynamically rendered on each request. The timestamp updates every time:
      </p>

      <div className="bg-yellow-100 p-4 rounded-lg mb-4">
        <p className="text-xl font-mono">Current Time: {timestamp}</p>
      </div>

      <div className="grid gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="font-bold">Headers Info:</h3>
          <p>User Agent: {userAgent.substring(0, 50)}...</p>
        </div>

        <div className="bg-green-100 p-4 rounded">
          <h3 className="font-bold">Cookies Info:</h3>
          <p>Theme Cookie Present: {hasThemeCookie ? 'Yes' : 'No'}</p>
        </div>
      </div>

      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  )
}
