'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
type Props = {
  category: string
  id: number
  title: string
  description: string
  thumbnail: string
  price: number
}

const AllProducts = ({ products }: { products: Props[] }) => {
  const [filter, setFilter] = useState('all')
  const[search,setSearch] = useState('')
  return (
    <div className='w-full mb-2'>
      <label className='input input-bordered flex items-center gap-2 mb-4'>
        <input
          type='text'
          className='grow'
          placeholder='Search'
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-4 h-4 opacity-70'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
      <div className='flex flex-wrap gap-4'>
        <button
          className='btn'
          onClick={() => setFilter('all')}
        >
          all products
        </button>
        <button
          className='btn'
          onClick={() => setFilter('mens-watches')}
        >
          mens watches
        </button>
        <button
          className='btn'
          onClick={() => setFilter('smartphones')}
        >
          smartphones
        </button>
        <button
          className='btn'
          onClick={() => setFilter('laptops')}
        >
          laptops
        </button>
        <button
          className='btn'
          onClick={() => setFilter('fragrances')}
        >
          fragrances
        </button>
        <button
          className='btn'
          onClick={() => setFilter('skincare')}
        >
          skincare
        </button>
        <button
          className='btn'
          onClick={() => setFilter('groceries')}
        >
          groceries
        </button>
        <button
          className='btn'
          onClick={() => setFilter('home-decoration')}
        >
          home decoration
        </button>
        <button
          className='btn'
          onClick={() => setFilter('furniture')}
        >
          furniture
        </button>
      </div>
      {products
      .filter((el: any) =>el.title.toLowerCase().includes(search.toLowerCase()))
        .filter((el: any) =>
          filter === 'all' ? el.category : el.category === filter
        )
        .map((product: any) => (
          <div
            key={product.id}
            className='grid grid-cols-4 items-center place-items-start gap-4 border-b-2 p-2'
          >
            <div>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={60}
                height={60}
                style={{
                  maxHeight: '60px',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
            </div>
            <p>{product.title}</p>
            <p className='place-self-end'>{product.price.toFixed(2)}$</p>
            <Link
              href={`/products/${product.id}`}
              className='btn btn-primary w-fit place-self-end'
            >
              Buy Now
            </Link>
          </div>
        ))}
    </div>
  )
}

export default AllProducts
