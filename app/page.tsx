import { getData } from '@/api/fetch'
import Products from '@/components/Products'

export default async function Home() {
  const { products } = await getData()
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-12 py-24 max-lg:p-4 max-sm:p-2'>
      <h1 className='text-2xl font-semibold mb-2'>Welcome to our Store</h1>
      <Products products={products} />
    </main>
  )
}
