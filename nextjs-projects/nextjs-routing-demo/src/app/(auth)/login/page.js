import Link from 'next/link'
export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <nav>
        <Link href="/register">Register</Link>  &nbsp; |
        <Link href="/forgot-password">Forgot Password</Link>
      </nav>
      <Link href="/">← Back to Home</Link>
    </div>
  )
}
