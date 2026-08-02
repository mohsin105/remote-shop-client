import React, { Suspense } from 'react'
import RatingStar from '../RatingStar'
import AddToCart from '../AddToCart'

export default function ProductDetailsCard({product, id}) {
  return (
    <div className='grid grid-cols-1  bg-white rounded-md p-4  sm:grid-cols-2 gap-4 '>
        <div className='p-2 bg-violet-100 rounded-md'>
          {/* Image Section */}
        </div>
        <div className='space-y-2'>
          {/* Text Details */}
          <p className=''>
            <span className='text-gray-600 font-semibold'>
              {product?.category?.name}
            </span>
          </p>
          <h2 className='text-2xl font-semibold'>
            {product?.name}
          </h2>
          <div className='flex space-x-4 items-center'>
            <RatingStar/>
            <p>
              <span className='text-lg font-bold'>4.6 </span> 
              (128 Reviews)
            </p>
          </div>
          <p className='text-xl font-bold'>
            $
            <span className=''>
              {product?.price}
            </span>
          </p>
          <p className=''>
            <span className=''>
              {product?.description}
            </span>
          </p>
          <p className=''>
            Stock : 
            <span className=''>{product?.stock} </span>
             left in stock
          </p>
          <div>
            <Suspense fallback = {<div className=''>Loading...</div>}>
              <AddToCart stock={product?.stock} productId={id}/>
            </Suspense>
          </div>
        </div>
      </div>
  )
}
