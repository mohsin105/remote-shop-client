import ProductDetailsCard from '@/app/components/ProductDetails/ProductDetailsCard';
import ReviewSection from '@/app/components/ReviewSection/ReviewSection';
import getProductDetails from '@/lib/getProductDetails';
import React from 'react'

export default async function page({params}) {
  //This params is a promise. must be awaited. 
  // console.log("The prop on dynamic details page => ", params);
  const {id} = await params;
  // console.log("The object Id, after awaiting the Param and destructuring => ", id);
  const product = await getProductDetails(id);
  console.log(product);
  return (
    <div className='bg-gray-100'>
      <h1>This is product Details page</h1>
      <div className='my-8 w-3/4 mx-auto'>
        <ProductDetailsCard product={product} id={id}/>
      </div>
      <div className='w-3/4 mx-auto'>
        <ReviewSection/>
      </div>
    </div>
  )
}
