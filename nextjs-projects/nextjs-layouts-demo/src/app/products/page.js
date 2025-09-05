export const metadata = {
  title: 'Products - Our Amazing Collection',
  description: 'Browse our wide range of products',
}

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
