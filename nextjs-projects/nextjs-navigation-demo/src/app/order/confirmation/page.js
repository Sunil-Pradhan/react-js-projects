'use client'

import { useRouter } from 'next/navigation'

export default function ConfirmationPage() {
  const router = useRouter()

  const handleBackToHome = () => {
    router.push('/') // Navigate to home
  }

  return (
    <div>
      <h1>Order Confirmed! 🎉</h1>
      <p>Your order has been successfully placed.</p>
      <p>Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>

      <button onClick={handleBackToHome} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Back to Home
      </button>
    </div>
  )
}
