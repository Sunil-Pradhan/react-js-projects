import Link from 'next/link'
export default function Products() {
  const products = ['1', '2', '3']

  return (
    <div>
      <h1>Products Page</h1>
      <nav>
        {products.map(product => (
          <div key={product}>
              <Link href={`/products/${product}`}>Product {product}</Link>
          </div>
        ))}
      </nav>
      <Link href="/">← Back to Home</Link>
    </div>
  )
}
