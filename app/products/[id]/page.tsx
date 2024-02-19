import { getData } from '@/api/fetch'
import Image from 'next/image'

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)
  const { products } = await getData()
  const product = products.find((product: any) => product.id === id)
  console.log(product)

  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-12 py-24 max-lg:px-4 max-sm:px-2 '>
      <div className=' grid grid-cols-2 max-sm:grid-cols-1 gap-4 w-full'>
        <div  className='flex justify-center items-center relative border-2  p-4'>
          <Image
            src={product?.thumbnail}
            alt={product?.title}
            width={400}
            height={400}
            style={{
              maxHeight: '400px',  
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div className=' flex flex-col justify-center gap-4'>
          <h2 className='text-xl font-semibold'>{product?.title}</h2>
          <p>description: <br /> <span className='font-semibold'>{product?.description}</span></p>
          <p>category: <span className='font-semibold'>{product?.category}</span></p>
          <p>brand: <span className='font-semibold'>{product?.brand}</span></p>
          <p>rating: <span className='font-semibold'>{product?.rating}</span></p>
          <p>stock: <span className='font-semibold'>{product?.stock}</span></p>
          <p>price: <span className='font-semibold'>${(product?.price).toFixed(2)}</span></p>
          <p>discount percentage: <span className='font-semibold'>{product?.discountPercentage}%</span></p>
          <button className='btn btn-primary'>Add Cart</button>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail
