export const metadata = {
  title: 'Register - Create New Account',
}

export default function RegisterPage() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <input type="text" placeholder="Name" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: 'green', color: 'white', border: 'none' }}>
          Register
        </button>
      </form>
    </div>
  )
}
