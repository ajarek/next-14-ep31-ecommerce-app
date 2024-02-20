'use client'
import { useShoppingCart } from 'use-shopping-cart'
import { useRouter } from 'next/navigation'

const CheckoutBtn = () => {
  const { clearCart } = useShoppingCart()
  const router = useRouter()
  const handleCheckout = () => {
    clearCart()
    alert('Thank you for your purchase!')
    router.push('/')
  }
  return (
    <button onClick={handleCheckout} className='btn btn-primary'>Checkout</button>
  )
}

export default CheckoutBtn