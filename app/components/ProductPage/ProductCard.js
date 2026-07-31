import React from 'react'

export default function ProductCard({product}) {
  return (
    <div 
        className='border-2 rounded-md p-4 bg-gray-50 shadow-xl'>
        <h4>{product.name}</h4>
    </div>
  )
}
