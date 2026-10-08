"use client";
import apiFetch from '@/lib/apiFetch';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import BASE_URL from '../../lib/apiFetch';

export default function AddProductForm({categories}) {
    const {register, handleSubmit, formState:{errors}} = useForm();
    // console.log("Base_url->", BASE_URL);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [onSuccess, setOnSuccess] = useState(false);
    const handleImageChange=(givenImages)=>{
        const files = Array.from(givenImages);
        const urls = files.map((singleImage)=> URL.createObjectURL(singleImage));
        setImagePreviews(urls);
    };


    const onSubmit = async(data) =>{
        console.log(data);
        const formdata = new FormData();
        
        formdata.append("name", data.name);
        formdata.append("description", data.description);
        formdata.append("category_id", data.category_id);
        formdata.append("price", data.price);
        formdata.append("stock", data.stock);

        for (const image of data.images){
            formdata.append("images", image);
        }

        try {
            // const response = await apiFetch("products",{
            //     method : "POST",
            //     // body: JSON.stringify(data)
            //     body: formdata
            // });
            const response = await fetch(`http://localhost:8000/add-product`,{
                method:"POST", 
                body:formdata,
                credentials:'include'
            })
            console.log(response);
            if(response.status == 200){
                setOnSuccess(true);
            }
        } catch (error) {
            console.log(error)
        }
    };
  return (
    <div>
        {onSuccess && (
            <div className='p-2 rounded-md bg-green-300 font-semibold my-2'>
                Request Successfull, Product with Image created. 
            </div>
        )}
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
            {/* Product Images Section */}
            <div>
                <label htmlFor="" className='main-label'>Product Images</label>
                <div>
                    <input 
                        {...register("images")}
                        type="file"
                        accept='image/*'
                        multiple
                        onChange={(e)=> handleImageChange(e.target.files)}
                        className='w-full p-4 rounded-md shadow-md' />
                </div>
            </div>
            <button type='submit'
                className='p-4 w-full rounded-md text-lg font-semibold bg-cyan-300 hover:bg-cyan-500'>
                Create New Product
            </button>
        </form>
        {/* Image Previews =>  */}
        <div className='flex gap-2 flex-wrap my-2'>
            {imagePreviews.map((preview, indx)=>(
                <img 
                    key={indx}
                    src={preview} 
                    alt={`Preview-${indx}`}
                    width={150}
                    className=' rounded-md' />
            ))}
        </div>
    </div>
  )
}
