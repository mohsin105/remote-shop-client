"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function UpdateImage({productId}) {
    const [imageForm, setImageForm] = useState(false);
    const {register, handleSubmit, formState:{isSubmitting, isSubmitted}} = useForm();
    const [imagesPreview, setImagesPreview] = useState(null);
    const handleImageChange = (images)=>{
        const files = Array.from(images);
        const urls = files.map((singleImage) => URL.createObjectURL(singleImage));
        setImagesPreview(urls);
    };
    const onsubmit = async(data) => {
        const formdata = new FormData();
        for(const image of data.images)
        {
            formdata.append("images", image);
        }

        try {
            const response = await fetch(`http://localhost:8000/products/${productId}/add-image`,{
                method:'PATCH',
                body:formdata,
                credentials:"include"
            }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div>
        
        <button 
            onClick={()=> setImageForm(true)}
            className='bg-gray-100  shadow-2xl font-semibold text-cyan-800 p-4 border-cyan-950 border-2'>
            Update Image
        </button>
        <div>
            {imageForm && (
                <div>
                    <div>
                        <form 
                            onSubmit={handleSubmit(onsubmit)}
                            className='my-2'>
                            <div>
                                <input 
                                    {...register("images")}
                                    type="file"
                                    multiple
                                    onChange={(e)=> handleImageChange(e.target.files)}
                                    className='p-4 rounded-md my-4 bg-gray-100' />
                            </div>
                            <div className='flex gap-4'>

                                <button 
                                    className='bg-cyan-300 hover:bg-cyan-600 font-semibold p-4 text-lg'>
                                        {isSubmitted? "Submitted": isSubmitting? "Submitting...": "Submit Images"}
                                </button>
                                <button
                                    onClick={()=> setImageForm(false)}
                                    className='bg-rose-400 hover:bg-rose-600 p-4 rounded-md font-semibold'>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        {imagesPreview && (
                            <div className='flex gap-4 flex-wrap'>
                                {imagesPreview.map((img, indx)=> (
                                    <img 
                                        key={indx}
                                        src={img} 
                                        alt="image preview"
                                        height={150}
                                        width={150}
                                        className=''
                                        />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
