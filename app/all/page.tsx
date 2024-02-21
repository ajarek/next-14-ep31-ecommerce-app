import React from 'react'
import { getData } from '@/api/fetch'
import Image from 'next/image'
import Link from 'next/link'
const allProducts = async () => {
  const { products } = await getData()
  return (
    <div className='flex min-h-screen flex-col items-center justify-between px-12 py-24 max-lg:p-4 max-sm:p-2 gap-2'>
      {products
        .filter((el: any) => el.category === 'mens-watches')
        .map((product: any) => (
          <div key={product.id} className='w-full flex items-center justify-between gap-4 border-b-2 p-2'>
           
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={60}
              height={60}
            />
             <p>{product.title}</p>
             <p>{product.price}</p>
             <Link href={`/products/${product.id}`} className='btn btn-primary'>Buy Now</Link>

          </div>
        ))}
    </div>
  )
}

export default allProducts
