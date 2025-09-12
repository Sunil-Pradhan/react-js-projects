export default function LoginTemplate({ children }) {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '400px',
      margin: '0 auto',
      border: '1px solid #eee',
      borderRadius: '8px',
      marginTop: '2rem'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Login Form</h2>
      {children}
    </div>
  );
}
