export default function ProductDetailsLayout({ children }) {
  return (
    <div>
      <div style={{ background: 'green', color: 'white', padding: '10px', marginBottom: '20px' }}>
        <h2>Product Details Custom Banner</h2>
        <p>This special banner only appears on individual product pages</p>
      </div>
      {children}
    </div>
  )
}
