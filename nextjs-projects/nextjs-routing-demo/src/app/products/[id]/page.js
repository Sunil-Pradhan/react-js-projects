import Link from 'next/link'
export default function ProductDetail({ params }) {
  return (
    <div>
      <h1>Product {params.id} Details</h1>
      <p>Details for product {params.id}</p>

      <br/>
      <br/>
      <h3>Reviews:</h3>
      <br/>
      <nav>
        <Link href={`/products/${params.id}/reviews/1`}>Review 1</Link>  |&nbsp;
        <Link href={`/products/${params.id}/reviews/2`}>Review 2</Link>
      </nav>
      <br/>
       <Link href="/products">← Back to Products</Link>
    </div>
  )
}
