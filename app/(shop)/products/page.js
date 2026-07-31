import FilterSection from '@/app/components/ProductPage/FilterSection';
import PaginationSection from '@/app/components/ProductPage/PaginationSection';
import ProductGrid from '@/app/components/ProductPage/ProductGrid';
import getAllCategories from '@/lib/getAllCategories';
import getAllProducts from '@/lib/getAllProducts'
import Link from 'next/link'
import React from 'react'

export default async function page({searchParams}) {
  const params = await searchParams;
  // console.log(params);
  // console.log(params.toString());
  const page = Number(params.page ?? 1);
  // console.log("Page",page);
  const cateogry = params.category ?? "";
  // console.log("Category", cateogry);
  const searchName = params.name ?? "";
  const sort = params.order_by ?? "";
  const price_gt = Number(params.price_gt ?? 0);
  const price_lt = Number(params.price_lt ?? Number.MAX_SAFE_INTEGER);

  // const filter = params.filter ?? "";
  const products = await getAllProducts(`page=${page}&name=${searchName}&category=${cateogry}&price_lt=${price_lt}&price_gt=${price_gt}&order_by=${sort}`);
  const categories = await getAllCategories();
  // console.log("Products => ", products);
  return (
    <div>
      <h1 className='text-4xl font-semibold my-6 text-center'>This is Product List page</h1>
      <div className='my-4'>
        <FilterSection categories={categories}/>
      </div>
      <div>
        <ProductGrid products={products.items}/>
      </div>
      <div className='my-4 text-center'>
        <PaginationSection totalPages={products.total_pages}/>
      </div>
    </div>
  )
}
