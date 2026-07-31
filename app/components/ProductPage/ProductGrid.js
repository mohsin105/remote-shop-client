import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({products}) {
  return (
    <div>
        <div className='grid grid-cols-3 gap-8'>
            {products.length>0 && products.map(product => 
            <Link key={product.id} href={`products/${product.id}`}>
                <ProductCard product={product}/>
            </Link>
            )}
        </div>
    </div>
  )
}
