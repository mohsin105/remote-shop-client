"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function AddToCart({stock}) {
    const {register, formState, onsubmit} = useForm();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    // console.log("Somthing in Client Component, nested in Server Component");
    const increaseQuantity = () =>{
        if(selectedQuantity<stock){
            setSelectedQuantity(selectedQuantity+1);
        }
    };

    const decreaseQuantity = () =>{
        if(selectedQuantity>1){
            setSelectedQuantity(selectedQuantity - 1);
        }
    };
  return (
    <div>
        <form action="" className='space-x-4'>
            <button 
                type='button'  //Important
                onClick={()=>decreaseQuantity()}
                className='p-2 font-bold text-xl rounded-md bg-rose-400'>
                -
            </button>
            <input type="number" 
                value={selectedQuantity}
                max={stock}
                min={1}
                // onChange={()=> setSelectedQuantity(selectedQuantity)}
                className='p-4 bg-gray-100 rounded-md border-2'/>
            <button 
                type='button'  //Important
                onClick={()=> increaseQuantity()}
                className='p-2 font-bold text-xl rounded-md bg-green-400'>
                +
            </button>
            <button type='submit' 
            className='font-semibold text-xl p-4 rounded-lg bg-cyan-500 hover:bg-cyan-600'>
                Add To Cart
            </button>
        </form>
    </div>
  )
}
