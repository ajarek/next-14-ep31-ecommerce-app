import React from 'react'
import { getData } from '@/api/fetch'
import AllProducts from '@/components/AllProducts'

const allProducts = async () => {
  const { products } = await getData()
  return (
    <div className='flex min-h-screen flex-col items-center justify-between px-12 py-24 max-sm:px-2 gap-2'>
      <AllProducts products={products} />
    </div>
  )
}

export default allProducts
