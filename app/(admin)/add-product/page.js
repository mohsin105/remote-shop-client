import AddProductForm from '@/app/components/AddProductForm'
import getAllCategories from '@/lib/getAllCategories'
import React from 'react'

export default async function page() {
    const categories = await getAllCategories();
  return (
    <div className='w-5/6 mx-auto'>
        <h1 className='text-4xl font-semibold text-center'>
            Create New Product
        </h1>
        <div className='w-1/2 rounded-md p-2 mx-auto'>
            <AddProductForm categories={categories}/>
        </div>
    </div>
  )
}
