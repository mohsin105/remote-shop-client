"use client";
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export default function PaginationSection({totalPages}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const handlePagination = (selectedPage) =>{
      setCurrentPage(selectedPage);
      // console.log("Selected Page =>", selectedPage);
      const params = new URLSearchParams(searchParams);
      params.set("page", selectedPage);

      // router.push(`/products?page=${selectedPage}`);
      router.push(`/products?${params.toString()}`);
    };
    
  return (
    <div className='space-x-2 '>
      {Array.from({length:totalPages}, (_,i) => (
        <button 
          key={i}
          onClick={()=> handlePagination(i+1)}
          className={`p-2  hover:bg-gray-400 rounded-md font-bold active:bg-amber-300 shadow-md ${currentPage === i+1? 'bg-amber-300':'bg-gray-200'}`}>
            {i+1}
        </button>
      ))}
    </div>
  )
}
