export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: '#f5f5f5'
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            width: '300px'
          }}>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
