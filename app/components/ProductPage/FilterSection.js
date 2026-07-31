"use client";
import getAllCategories from '@/lib/getAllCategories';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import PriceRangeFilter from './PriceRangeFilter';

export default function FilterSection({categories}) {
    // const categories = await getAllCategories();
    const searchParams = useSearchParams();
    const router = useRouter();
    // const handleFiltering = (filteringValue) =>{
    //     const params = new URLSearchParams(searchParams);
    //     params.set("search", filteringValue);
    //     router.push(`/products?search=${filteringValue}`);
    // };
    const [selectedCategory, setSelectedCategory] = useState("");
    // Search By Name
    const handleSearchFilter = (searchValue) => {
      // console.log("Search Value =>", searchValue);
      router.push(`/products?name=${searchValue}`);
    };
    const handleCategoryChange = (categoryValue) => {
      // console.log("Category=> ",categoryValue);
      setSelectedCategory(categoryValue);
      const params = new URLSearchParams(searchParams);
      params.set("category",categoryValue );
      router.push(`/products?${params.toString()}`);
    };
    const handleOrderFilter = (orderValue) =>{
      // console.log("Order=> ", orderValue);
      const params = new URLSearchParams(searchParams);
      params.set("order_by", orderValue);
      router.push(`/products?${params.toString()}`);
    };
    
  return (
    <div className='flex justify-between'>
      {/* Price Range */}
      <PriceRangeFilter/>
      {/* Search By Name */}
      <div>
        <h4 className='text-lg font-semibold text-gray-500'>Search Specific Product By Name</h4>
        <input 
          type="text"
          onChange={(e)=> handleSearchFilter(e.target.value)}
          className='p-4 text-base font-semibold rounded-md bg-gray-100'
          placeholder='Enter Product Name' />
      </div>
      {/* Sort By Price */}
      <div>
        <h4 className='text-lg font-semibold text-gray-500'>Price</h4>
        <select 
          onChange={(e)=> handleOrderFilter(e.target.value)}
          //name="" id=""
          className='p-4 bg-gray-100 rounded-md font-semibold text-base'
          >
          <option value="price">Low to High</option>
          <option value="-price">High to Low</option>
        </select>
      </div>
      {/* Filter by Category  */}
      <div>
        <h4 className='text-lg font-semibold text-gray-500'>Filter By Category</h4>
        <select 
          value={selectedCategory}
          onChange={(e)=> handleCategoryChange(e.target.value)}
          className='p-4 bg-gray-100 rounded-md font-semibold text-base'
          //name="" id=""
          >
            <option >Select a Category</option>
          {categories.map(category => (
            <option 
              key={category.id}
              value={category.name}>
                {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
