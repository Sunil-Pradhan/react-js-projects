import { redirect } from 'next/navigation'

export default function RedirectExample() {
  // This will redirect immediately when the page loads
  redirect('/order')

  // This code won't execute because redirect stops execution
  return (
    <div>
      <h1>You won&apos;t see this</h1>
    </div>
  )
}
