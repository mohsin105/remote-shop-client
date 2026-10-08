"use client";
import authAPIFetch from '@/lib/authAPIFetch';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function ReviewForm({productId}) {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onsubmit = async(data)=>{
        console.log(data);
        try {
            const response = await authAPIFetch(`products/${productId}/reviews`);
            console.log(response);
            if(response.status == 200){
                
            }
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div>
        <form 
            onSubmit={handleSubmit} className='space-y-2' >
            <div>
                
            </div>
            <div>
                <textarea
                    {...register("content", {
                        required:"Comment is required"
                    })} 
                    name="" id=""
                    rows={3}
                    className='w-full p-4 rounded-md bg-gray-50'></textarea>
            </div>
            <div className='flex justify-end'>
                <button
                    type='submit'
                    className='p-2 rounded-md bg-gray-200 font-semibold'>
                    Submit Review
                </button>
            </div>
        </form>
    </div>
  )
}
