'use client'

import { useShoppingCart } from 'use-shopping-cart'

const Cart = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart()

  console.log(cartDetails)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-12 py-24 max-lg:px-4 max-sm:px-2 '>Cart</main>
  )
}

export default Cart