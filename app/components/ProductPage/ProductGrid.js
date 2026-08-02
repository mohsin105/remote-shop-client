import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({products}) {
  return (
    <div>
        {products.length>0 && (
          <div className='grid grid-cols-3 gap-8'>
              { products.map(product => 
              <Link key={product.id} href={`products/${product.id}`}>
                  <ProductCard product={product}/>
              </Link>
              )}
          </div>
        )}
        {products.length === 0 && (
          <div className='text-2xl font-semibold text-rose-500 text-shadow-2xs text-center my-8'>
            No Products Found
          </div>
        )}
    </div>
  )
}
