import getAllCategories from '@/lib/getAllCategories'
import React from 'react'

export default async function page() {
  const categories = await getAllCategories();
  // console.log("Categories from Backend API => ", categories)
  return (
    <div>
      <h1 className='text-4xl font-semibold my-8 mx-auto text-center'>
        All Categories 
      </h1>
      <div className='grid grid-cols-3 gap-8 w-11/12 mx-auto'>
        {categories.map(category =>(
          <div key={category.id}
            className='space-y-2 bg-gray-100 rounded-md shadow-2xl border-gray-500 p-4'>
              <h4 className='text-xl font-semibold'>{category.name}</h4>
              <p>Category Id : {category.id}</p>
              <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
