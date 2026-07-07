"use client";
import apiFetch from '@/lib/apiFetch';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddProductForm({categories}) {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = async(data) =>{
        console.log(data);
        try {
            const response = await apiFetch("products",{
                method : "POST",
                body: JSON.stringify(data)
            });
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    };
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'>
            <div>
                <label htmlFor="" className='main-label'>
                    Name
                </label>
                <div>
                    <input 
                        {...register("name",{
                            required:true
                        })}
                        type="text"
                        placeholder='Product Name'
                        className='w-full p-4 rounded-md shadow-md' />
                </div>
            </div>
            <div>
                <label htmlFor="" className='main-label'>
                    Description
                </label>
                <div>
                    <textarea 
                        {...register("description")}
                        type="text"
                        placeholder=''
                        rows={5}
                        className='w-full p-4 rounded-md shadow-md' />
                </div>
            </div>
            <div className='space-x-4'>
                <label htmlFor="" className='main-label'>
                    Category
                </label>
                <select 
                    {...register("category_id", {
                        required:"Category is Required"
                    })}
                    // name="" id="" 
                    className='text-xl p-4 rounded-md shadow-md'>
                    {categories.map(category => (
                        <option key={category.id} 
                            value={category.id}
                            >
                            {category.name}
                        </option>
                    ))}
                </select>
                {/* <div>
                    <input type="text"
                        placeholder=''
                         />
                </div> */}
            </div>
            <div>
                <label htmlFor="" className='main-label'>
                    Price
                </label>
                <div>
                    <input 
                        {...register("price",{
                            required:"Price is Required",
                            valueAsNumber:true,
                            min:{
                                value:0,
                                message:"Price cannot be negative"
                            }
                        })}
                        type="number"
                        step="0.01"
                        placeholder='Product price'
                        className='w-full p-4 rounded-md shadow-md' />
                </div>
            </div>
            <div>
                <label htmlFor="" className='main-label'>
                    Product Stock
                </label>
                <div>
                    <input 
                        {...register("stock", {
                            required:"Product Stock must be given",
                            min:{
                                value:1,
                                message:"Stock cannot be 0"
                            }
                        })}
                        type="number"
                        placeholder='Product Stock'
                        className='w-full p-4 rounded-md shadow-md' />
                </div>
            </div>
            <button type='submit'
                className='p-4 w-full rounded-md text-lg font-semibold bg-cyan-300 hover:bg-cyan-500'>
                Create New Product
            </button>
        </form>
    </div>
  )
}
