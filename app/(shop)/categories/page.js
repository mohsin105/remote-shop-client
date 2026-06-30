import getAllCategories from '@/lib/getAllCategories'
import React from 'react'

export default async function page() {
  const categories = await getAllCategories();
  console.log("Categories from Backend API => ", categories)
  return (
    <div>
      <h1>
        This is Categories List page
      </h1>
      <div>
        {categories.map(category =>(
          <div key={category.id}
            className=''>
              <h4>{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
