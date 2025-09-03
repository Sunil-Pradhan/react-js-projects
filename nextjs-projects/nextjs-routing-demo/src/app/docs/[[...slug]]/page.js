import Link from 'next/link'

export default function Docs({ params }) {
  const slug = params.slug || ['overview']

  return (
    <div>
      <h1>Documentation: {slug.join(' / ')}</h1>
      <p>You&apos;re viewing docs for: {slug.join(' → ')}</p>

      <h3>Try these URLs:</h3>
      <ul>
        <li><Link href="/docs/feature1/concept1">/docs/feature1/concept1</Link></li>
        <li><Link href="/docs/feature1/concept2">/docs/feature1/concept2</Link></li>
        <li><Link href="/docs/feature2/concept1">/docs/feature2/concept1</Link></li>
        <li><Link href="/docs/feature2/concept2">/docs/feature2/concept2</Link></li>
      </ul>

      <Link href="/">← Back to Home</Link>
    </div>
  )
}
