function ProductCard() {
  return (
    // JSX must return a single parent element
    <div className="product-card">
      {/* Self-closing tags must be closed */}
      <img
        src="https://picsum.photos/id/237/200/300"
        alt="Product"
        className="product-image"
      />

      {/* ClassName instead of class */}
      <div className="product-info">
        <h2>Awesome Laptop</h2>
        <p>High-performance laptop for developers</p>

        {/* Nested elements */}
        <div className="product-details">
          <span className="price">$999</span>
          <button className="buy-button">Add to Cart</button>
        </div>

        {/* List rendering */}
        <ul className="features">
          <li>16GB RAM</li>
          <li>512GB SSD</li>
          <li>Intel i7 Processor</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
