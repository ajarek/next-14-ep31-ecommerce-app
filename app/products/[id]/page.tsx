import {getData} from '@/api/fetch'


const ProductDetail =async ({params}:{params:{id:string}}) => {
  const id =params.id    
  const products = await getData()
  const product=products.find((product:any)=>product.id===id)
  return (
    <div>ProductDetail {id}
       <p>{product?.title}</p>
       <p>{product?.description}</p>
       <p>{product?.price}</p>
    </div>
  )
}

export default ProductDetail
