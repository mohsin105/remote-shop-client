"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

export default function UpdateProductButton({productId}) {
  const router = useRouter()
  const handleClick = () =>{
    router.push(`/update-product/${productId}`);
  };
  return (
    <div className='my-4'>
        <button 
            onClick={()=> handleClick()}
            className='p-4 font-semibold rounded-md bg-violet-400 hover:bg-violet-600'>
            Update Product Information
        </button>
    </div>
  )
}
