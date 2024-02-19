'use client'
type Props = {
  children: React.ReactNode 
}
import { CartProvider as CProvider } from 'use-shopping-cart'
const CartProvider = ({ children }: Props) => {
  return (
    <CProvider
      mode='payment'
      cartMode='client-only'
      stripe=''
      successUrl='success'
      cancelUrl='error'
      language='en-US'
      currency='USD'
      shouldPersist={true}
      billingAddressCollection={true}
    >
      {children}
    </CProvider>
  )
}

export default CartProvider