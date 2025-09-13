// src/app/products/[id]/page.js
async function getProduct(id) {
  // Simulate error for product ID 3
  if (id === '3') {
    throw new Error('Product not found! This product is currently unavailable.');
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product details');
  }
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Product Details</h1>
      <div style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        border: '1px solid #eee'
      }}>
        <h2 style={{ color: '#333' }}>{product.title}</h2>
        <p style={{ color: '#555', lineHeight: '1.6' }}>{product.body}</p>
      </div>
      <a
        href="/products"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          color: '#45b7d1',
          textDecoration: 'none'
        }}
      >
        &larr; Back to Products
      </a>
    </div>
  );
}
