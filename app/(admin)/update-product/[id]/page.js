import UpdateProductForm from '@/app/components/UpdateProductForm';
import getAllCategories from '@/lib/getAllCategories';
import getProductDetails from '@/lib/getProductDetails';
import React, { Suspense } from 'react'

export default async function page({params}) {
    const {id} = await params;
    const product = await getProductDetails(id);
    const categories = await getAllCategories();
  return (
    <div className='w-2/5 mx-auto bg-gray-100 border-2 border-gray-300 rounded-md my-8 shadow-2xl p-4'>
      <h2 className='text-4xl font-semibold my-4 text-center'>
        Update Product
      </h2>
      <Suspense fallback = {<div className=''>Loading...</div>}>
        <UpdateProductForm product={product} categories={categories}/>
      </Suspense>
    </div>
  )
}
