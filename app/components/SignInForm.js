"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../_hooks/useAuth';
import { useRouter } from 'next/navigation';
import apiFetch from '@/lib/apiFetch';

export default function SignInForm() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const {logInUser} = useAuth();
    const router = useRouter();
    
    const onSubmit = async (data) => {
        // console.log(data);
        try {
            console.log("jesata");
            const response = await logInUser(data);
            console.log(response);
            const user = await apiFetch("profile");
            console.log(user);
            if(response.success){
              console.log(response.message);
              
              router.replace("/products");
            }

        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'>
          <div>
            <label htmlFor=""
              className='main-label'>
                Username
            </label>
            <div>
              <input
                {...register("username",{
                    required:"Username is required"
                })} 
                type="text"
                placeholder='Enter your username' 
                className='w-full p-4 rounded-md border-2 '/>
            </div>
          </div>
          <div>
            <label htmlFor=""
              className='main-label'>
                Password
            </label>
            <div>
              <input
                {...register("password",{
                    required:"Password is required"
                })} 
                type={`${showPassword? "text" : "password" }`}
                placeholder='Enter your password' 
                className="w-full p-4 rounded-md border-2 "/>
            </div>
          </div>
          <button
            type='submit'
            className='w-full text-xl font-semibold p-4 rounded-md border-2 bg-green-500 hover:bg-green-600'>
              Sign In
          </button>

        </form>
        <input 
            type="checkbox"
            onClick={()=> setShowPassword(!showPassword)} />Show Password
    </div>
  )
}
