import Link from 'next/link'

export default function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <nav>
        <Link href="/login">Login</Link>  &nbsp; |
        <Link href="/forgot-password">Forgot Password</Link>
      </nav>
      <Link href="/">← Back to Home</Link>
    </div>
  )
}
