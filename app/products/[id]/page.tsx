import { getData } from '@/api/fetch'

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)
  const { products } = await getData()
  const product = products.find((product: any) => product.id === id)
  console.log(product)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12 max-lg:p-4 max-sm:p-2 '>
     <h1> ProductDetail {id}</h1>
      <p>{product?.title}</p>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </main>
  )
}

export default ProductDetail
