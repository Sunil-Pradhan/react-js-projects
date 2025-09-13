// src/app/products/page.js
async function getProducts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.slice(0, 10).map((product) => (
          <li key={product.id} style={{
            padding: '15px',
            marginBottom: '10px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #eee'
          }}>
            <a
              href={`/products/${product.id}`}
              style={{
                textDecoration: 'none',
                color: '#45b7d1',
                display: 'block'
              }}
            >
              <strong>Product {product.id}:</strong> {product.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
