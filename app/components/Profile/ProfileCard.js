"use client";
import useAuthContext from '@/app/_hooks/useAuthContext'
import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ProfileCard() {
    const {user} = useAuthContext();
    console.log(user);
  return (
    <div className='space-y-4 '>
        <h3 className='text-2xl'>
            <span className='font-semibold'>{user?.full_name}</span>
        </h3>
        <p className='font-light'>Username: 
            <span className='font-semibold text-blue-900 ml-2'>
                {user?.username}
            </span>
        </p>
        <p className='font-light flex  items-center'>
            <MdEmail />  
            <span className='font-semibold text-blue-900 ml-2'>
                {user?.email}
            </span>
        </p>
        <p className='font-semibold'>
            Role:
            <span className='p-2 rounded-4xl bg-cyan-900 text-gray-100 ml-2 '>
                {user?.role.toUpperCase()}
            </span>
        </p>
        <div className='flex items-center space-x-2'>
            <FaPhoneAlt />
            <p>35210351</p>
        </div>
        <p><AiFillHome /> </p>
        <div className='flex justify-around font-semibold'>
            <button className='p-2 px-4 rounded-md bg-cyan-400 hover:bg-cyan-700'>
                Update Profile
            </button>
            <button className='p-2 px-4 rounded-md bg-rose-300 hover:bg-rose-500'>
                Change Password
            </button>
        </div>
    </div>
  )
}
