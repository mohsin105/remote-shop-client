"use client";
import apiFetch from '@/lib/apiFetch';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export default function UpdateProductForm({product, categories}) {
    // console.log(product.category.name);
    const {register, handleSubmit, setValue,formState:{errors, isSubmitting} } = useForm();
    const [isSuccessfull, setIsSuccessfull] = useState(false);
    useEffect(()=>{
        Object.keys(product).forEach((key)=> setValue(key, product[key]));
    }, [product])
    const onsubmit = async(data) =>{
        console.log(data);
        try {
            const response = await apiFetch(`products/${product.id}`,{
                method:"PATCH", 
                body: JSON.stringify(data)
            })
            // console.log(response);
            if(response.status == 200){
                setIsSuccessfull(true);
            }
        } catch (error) {
            console.log(error)
        }
    };
  return (
    <div>
        <div>
            <div className='my-2'>
                {isSuccessfull && (
                    <p className='p-2 bg-cyan-300 text-center rounded-md'>Product Updated Successfully. Redirecting .....</p>
                )}
            </div>
            <form
                onSubmit={handleSubmit(onsubmit)} 
                className='space-y-4'>
                <div>
                    <label htmlFor="" className='main-label'>Name</label>
                    <div>
                    <input
                        {...register("name",{
                        
                        })} 
                        type="text"
                        className='w-full p-4 text-lg rounded-md shadow-xl' />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='main-label'>Description</label>
                    <div>
                    <textarea
                        {...register("description")} 
                        type="text"
                        rows={5}
                        className='w-full p-4 text-lg rounded-md shadow-xl' />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='main-label'>Category</label>
                    <div>
                        <select 
                            {...register("category", {
                                required:"Category is Required"
                            })}
                            className='w-full p-4 rounded-md shadow-xl'
                            name="" id="">
                            <option value={product.category_id}>
                                {product.category.name}
                            </option>
                            {categories.map(category=> (
                                <option
                                    key={category.id} 
                                    value={category.id}>
                                        {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='main-label'>Stock</label>
                    <div>
                    <input
                        {...register("stock",{

                        })} 
                        type="number"
                        className='w-full p-4 text-lg rounded-md shadow-xl' />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='main-label'>Price</label>
                    <div>
                    <input
                        {...register("price",{

                        })} 
                        type="number"
                        className='w-full p-4 text-lg rounded-md shadow-xl' />
                    </div>
                </div>
                <button 
                    type='submit'
                    className='p-4 w-full rounded-md bg-slate-500 hover:bg-slate-700 text-lg text-gray-200'>
                    {isSubmitting? "Submitting..." :"Submit form"}
                </button>
            </form>
        </div>
    </div>
  )
}
