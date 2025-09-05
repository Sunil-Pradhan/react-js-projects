export const metadata = {
  title: 'Login - Access Your Account',
}

export default function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: 'blue', color: 'white', border: 'none' }}>
          Login
        </button>
      </form>
    </div>
  )
}
