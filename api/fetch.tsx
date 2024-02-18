export const getData = async () => {
  const res = await fetch(`https://dummyjson.com/products?limit=90`) 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
