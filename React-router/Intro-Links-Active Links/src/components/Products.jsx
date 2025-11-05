const Products = () => {
  const products = [
    { id: 1, name: 'Web Development Course', price: '$99' },
    { id: 2, name: 'React Masterclass', price: '$149' },
    { id: 3, name: 'JavaScript Fundamentals', price: '$79' },
    { id: 4, name: 'CSS & Styling Guide', price: '$59' }
  ]

  return (
    <div className="page-container">
      <h1>Our Products</h1>
      <p>Check out our amazing learning resources!</p>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
