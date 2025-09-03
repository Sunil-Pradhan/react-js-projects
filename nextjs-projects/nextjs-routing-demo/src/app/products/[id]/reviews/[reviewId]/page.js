import Link from 'next/link'
export default function ReviewDetail({ params }) {
  return (
    <div>
      <h1>Review {params.reviewId} for Product {params.id}</h1>
      <p>This is review content for product {params.id}</p>
       <Link href={`/products/${params.id}`}>← Back to Product</Link>
    </div>
  )
}
