'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/aboutus', label: 'About Us' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px', background: '#f0f0f0' }}>
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            color: pathname === item.href ? 'blue' : 'black',
            fontWeight: pathname === item.href ? 'bold' : 'normal',
            textDecoration: 'none'
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
