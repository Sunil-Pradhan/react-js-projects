'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link href="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
      <Link href="/blog" style={{ marginRight: '1rem' }}>Blog</Link>
      <Link href="/products" style={{ marginRight: '1rem' }}>Products</Link>
      <Link href="/docs" style={{ marginRight: '1rem' }}>Docs</Link>
      <Link href="/login" style={{ marginRight: '1rem' }}>Login</Link>

      <span style={{ marginLeft: '1rem', color: 'gray' }}>
        Current: {pathname}
      </span>
    </nav>
  )
}
