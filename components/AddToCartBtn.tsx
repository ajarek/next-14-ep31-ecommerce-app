'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { useRouter } from 'next/navigation'

type Props = {
  id: number
  title: string
  description: string
  thumbnail: string
  price: number
  
}
const AddToCartBtn = ({ id, title, description, thumbnail, price }: Props ) => {
  const router = useRouter()
  const { addItem } = useShoppingCart()

  const item :any= {
    id: id,
    title: title,
    description: description,
    thumbnail: thumbnail,
    price: price,
    
  }
  const handleCartBtn= () => {
    addItem(item)
    router.push('/all')
  }
  return (
    <button 
      className='btn btn-primary'
      onClick={ handleCartBtn}
     
    >
      Add to cart
    </button>
  )
}

export default AddToCartBtn