'use client'

const Pagination = ({i,onChange}) => {
  const array= new Array(i).fill(0)
  
  

  return (
    <div className="join">
      {array.map((item, index) => (
        <>
  <input className="join-item btn btn-square" type="radio" name="options" value={index+1} aria-label={index+1} onChange={onChange} />
  </> 
      ))}
  
</div>
  )
}

export default Pagination