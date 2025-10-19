import { Suspense } from 'react'
import Link from 'next/link'

// Simulate slow data fetching
async function Reviews() {
  await new Promise(resolve => setTimeout(resolve, 3000))

  const reviews = [
    { id: 1, author: 'John', comment: 'Great product!', rating: 5 },
    { id: 2, author: 'Sarah', comment: 'Very satisfied', rating: 4 },
    { id: 3, author: 'Mike', comment: 'Excellent quality', rating: 5 }
  ]

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Customer Reviews</h3>
      <div className="space-y-3">
        {reviews.map(review => (
          <div key={review.id} className="border p-3 rounded-lg">
            <div className="flex justify-between">
              <span className="font-semibold">{review.author}</span>
              <span>⭐ {review.rating}/5</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReviewsSkeleton() {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Customer Reviews</h3>
      <div className="space-y-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="border p-3 rounded-lg animate-pulse">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-12"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-full mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function StreamingDemo() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Streaming Demo</h1>

      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Amazing Product</h2>
        <p className="text-gray-600 mb-4">
          This product description loads immediately while reviews stream in separately.
        </p>
        <div className="text-green-600 font-semibold">$99.99</div>

        <Suspense fallback={<ReviewsSkeleton />}>
          <Reviews />
        </Suspense>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">What&apos;s happening?</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Product info loads immediately (static)</li>
          <li>Reviews load after 3-second delay (streamed)</li>
          <li>Skeleton loader shows during loading</li>
          <li>Better user experience with progressive loading</li>
        </ul>
      </div>

      <Link href="/" className="inline-block mt-6 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  )
}
