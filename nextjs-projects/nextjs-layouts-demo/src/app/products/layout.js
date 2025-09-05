export default function ProductsLayout({ children }) {
  return (
    <div>
      <div style={{ background: 'blue', color: 'white', padding: '10px', marginBottom: '20px' }}>
        <h2>Products Section Banner</h2>
        <p>This banner appears on all product pages</p>
      </div>
      {children}
    </div>
  )
}
