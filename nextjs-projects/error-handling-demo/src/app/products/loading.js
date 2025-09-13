// src/app/products/loading.js
export default function ProductsLoading() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <div style={{ marginTop: '20px' }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              padding: '15px',
              marginBottom: '10px',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                marginRight: '15px',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}
            ></div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  height: '16px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  marginBottom: '8px',
                  width: '60%',
                  animation: 'pulse 1.5s ease-in-out infinite'
                }}
              ></div>
              <div
                style={{
                  height: '14px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  width: '40%',
                  animation: 'pulse 1.5s ease-in-out infinite'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
