'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function OrderPage() {
  const router = useRouter()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = () => {
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true)

      // Redirect to confirmation after 2 seconds
      setTimeout(() => {
        router.push('/order/confirmation')
      }, 2000)
    }, 1000)
  }

  if (orderPlaced) {
    return (
      <div>
        <h2>Order Processing...</h2>
        <p>Your order is being placed. Redirecting to confirmation...</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Place Your Order</h1>
      <button onClick={handlePlaceOrder} style={{ padding: '10px 20px' }}>
        Place Order
      </button>
    </div>
  )
}
