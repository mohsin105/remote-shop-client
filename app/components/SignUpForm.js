"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function SignUpForm() {
    const {register, handleSubmit,watch ,formState:{errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = async(data) =>{
        console.log(data);
        try {
            // const response  = await ;
            // console.log(response);
            console.log("jsata");
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'>
            <div>
                <label className='main-label'>
                    Username
                </label>
                <div>
                    <input 
                        {...register("username", {
                            required:"This field is required",
                            maxLength:{
                                value:20,
                                message:"Username can not be more than 20 characters long"
                            }
                        })}
                        type="text"
                        placeholder=''
                        className='w-full p-4 rounded-md border' />
                </div>
            </div>
            <div>
                <label htmlFor="" className='main-label'>
                        First Name
                </label>
                <div>
                    <input 
                        {...register("first_name", {
                            required:"This field is required"
                        })}
                        type="text"
                        placeholder='First name'
                        className='w-full p-4 rounded-md border' />
                </div>
            </div>
            <div>
                <label htmlFor="" className='main-label'>
                    Last Name
                </label>
                <div>
                    <input 
                        {...register("last_name", {
                            required:"This field is required"
                        })}
                        type="text"
                        placeholder='Last Name'
                        className='w-full p-4 rounded-md border' />
                </div>
            </div>
            <div>
                <label htmlFor="" className='main-label'>
                    Email
                </label>
                <div>
                    <input 
                        {...register("email", {
                            required:"This field is required"
                        })}
                        type="email"
                        placeholder='Enter your emal'
                        className='w-full p-4 rounded-md border' />
                </div>
            </div>
            <div className='space-x-4'>
                <label htmlFor="" className='main-label' >
                    Role
                </label>
                <select 
                    {...register("role", {
                        required:"User Role is required"
                    })}
                    name="" id=""
                    className='w-1/3 p-4 rounded-md border'>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div>
                <label htmlFor="" className='main-label'>
                    Password
                </label>
                <div>
                    <input 
                        {...register("password", {
                            required:"This field is required",
                            min:{
                                value:8,
                                message:"Password length minimun 8 characters long"
                            }
                        })}
                        type={`${showPassword? "text" : "password" }`}
                        placeholder='Enter your password'
                        className='w-full p-4 rounded-md border' />
                </div>
            </div>
            <div>
                <label htmlFor="" className='main-label'>
                    Confirm Password
                </label>
                <div>
                    <input 
                        {...register("confirm_password", {
                            required:"This field is required"
                        })}
                        type={`${showPassword? "text" : "password"}`}
                        placeholder='Enter your password again'
                        className='w-full p-4 rounded-md border' />
                </div>
            </div>
            <button type='submit'
                className='w-full text-xl font-semibold p-4 rounded-md border bg-cyan-500 hover:bg-cyan-600'>
                    Sign Up
            </button>
        </form>
        <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />Show Password
    </div>
  )
}
