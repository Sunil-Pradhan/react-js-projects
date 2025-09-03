import Link from 'next/link'

export default function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Password</h1>
      <nav>
        <Link href="/login">Login</Link>  &nbsp; |
        <Link href="/register">Register</Link>
      </nav>
      <Link href="/">← Back to Home</Link>
    </div>
  )
}
