import getAllProducts from '@/lib/getAllProducts'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const products = await getAllProducts();
  // console.log("Products => ", products)
  return (
    <div>
      <h1>This is Product List page</h1>
      <div className='grid grid-cols-3 gap-8'>
        {products.map(product => 
          <Link key={product.id} href={`products/${product.id}`}>
            <div 
              className='border-2 rounded-md p-4 bg-gray-50 shadow-xl'>
                <h4>{product.name}</h4>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
