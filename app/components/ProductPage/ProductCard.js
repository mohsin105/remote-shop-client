import React from 'react'
import RatingStar from '../RatingStar'

export default function ProductCard({product}) {
  return (
    <div 
        className='border-2 border-gray-200 rounded-md p-4 bg-gray-50 shadow-xl space-y-2'>
          {/* Image section */}
          <div className='bg-cyan-200 rounded-md w-full h-64'>

          </div>
          <div className='space-y-2'>
            <p className='text-gray-600'>{product.category.name}</p>
            <h4 className='text-lg font-semibold'>{product.name}</h4>
            <div>Rating : <RatingStar/> </div>
            <p className='text-lg font-bold'>$ {product.price}</p>
          </div>
    </div>
  )
}
