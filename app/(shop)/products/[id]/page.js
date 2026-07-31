import AddToCart from '@/app/components/AddToCart';
import getProductDetails from '@/lib/getProductDetails';
import React, { Suspense } from 'react'

export default async function page({params}) {
  //This params is a promise. must be awaited. 
  // console.log("The prop on dynamic details page => ", params);
  const {id} = await params;
  // console.log("The object Id, after awaiting the Param and destructuring => ", id);
  const product = await getProductDetails(id);
  console.log(product);
  return (
    <div>
      <h1>This is product Details page</h1>
      <div className='grid grid-cols-1  sm:grid-cols-2 gap-4 w-3/4 mx-auto'>
        <div className='p-2 bg-violet-100 rounded-md'>
          {/* Image Section */}
        </div>
        <div className='space-y-2'>
          {/* Text Details */}
          <h2 className='text-2xl font-semibold'>
            {product?.name}
          </h2>
          <p className=''>
            Category : 
            <span className=''>
              {product?.category?.name}
            </span>
          </p>
          <p className=''>
            Price
            <span className=''>
              {product?.price}
            </span>
          </p>
          <p className=''>
            Stock : 
            <span className=''>
              {product?.stock}
            </span>
          </p>
          <p className=''>
            <span className=''>
              {product?.description}
            </span>
          </p>
          <Suspense fallback = {<div className=''>Loading...</div>}>
            <AddToCart stock={product?.stock} productId={id}/>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
