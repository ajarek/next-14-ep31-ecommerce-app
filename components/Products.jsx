'use client'

import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from './Pagination'

const Products = ({ products }) => {
  const [step,setStep] = useState(0)
  const onChange=(e)=>{
    setStep(0)
    setStep(e.target.value==1?0:e.target.value*9)
  }
  return (
    <>
      <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 '>
        {products
        .filter((item, index) => index < 9+step && index >= step)
        .map((item) => (
          <div
            key={item.id}
            className='card w-full max-w-[300px] bg-base-100 shadow-xl p-2 border-2 border-base-300'
          >
            <figure className='mb-2'>
              <Image
                src={item.thumbnail}
                alt='Shoes'
                width={200}
                height={240}
                className='rounded-xl h-[240px] w-auto '
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{item.title}</h2>
              <p>${item.price}</p>
              <div className='card-actions justify-end'>
                <Link
                  href={`/products/${item.id}`}
                  className='btn btn-primary'
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination i={products.length/10} onChange={onChange} />
    </>
  )
}

export default Products
