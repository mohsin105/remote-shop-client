"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function PriceRangeFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [priceRange, setPriceRange] = useState([0,10000]);
  const handlePriceChange = (index, value) =>{
    setPriceRange((prev)=>{
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    const newPricerange = [...priceRange];
    newPricerange[index] = value;
    // console.log("Price range", newPricerange);
    const params = new URLSearchParams(searchParams);

    params.set("price_gt", Number(newPricerange[0]));
    params.set("price_lt", Number(newPricerange[1]));
    router.push(`/products?${params.toString()}`);
  };
  return (
    <div className='space-y-2'>
      <h4 className='text-lg font-semibold text-gray-600'>Filter By Price Range</h4>
      {/* <button>-</button> */}
      <div className='space-x-2'>
        {/* Lower limit of Price Range */}
        <input 
          type="number" 
          min={0}
          max={10000}
          value={priceRange[0]}
          onChange={(e)=> handlePriceChange(0, e.target.value)}
          className='p-1 bg-gray-100 rounded-md w-auto'
        />
        <input 
          type="range"
          min="0"
          // max={1000}
          max="10000"
          step={10}
          value={priceRange[0]}
          onChange={(e)=> handlePriceChange(0, e.target.value)}
          // className='bg-gray-300 p-2 rounded-md'
            />
      </div>
      {/* Upper limit of Price Range */}
      <div className='space-x-2'>
        <input 
          type="number"
          min={priceRange[0]}
          max="10000"
          value={priceRange[1]}
          onChange={(e)=> handlePriceChange(1, e.target.value)}
          className='p-1 bg-gray-100 rounded-md' />
        <input 
          type="range"
          min={priceRange[0]}
          max="10000"
          step="10"
          value={priceRange[1]}
          onChange={(e)=> handlePriceChange(1, e.target.value)} />
      </div>
      {/* <button>+</button> */}
    </div>
  )
}
