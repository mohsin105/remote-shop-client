"use client";
import useAuthContext from '@/app/_hooks/useAuthContext'
import React from 'react'

export default function ProfileCard() {
    const {user} = useAuthContext();
  return (
    <div className='space-y-4'>
        <h3 className='text-2xl'>
            
            <span className='font-semibold'>{user.full_name}</span>
        </h3>
        <p className='font-light'>Username: 
            <span className='font-semibold text-blue-900 ml-2'>
                {user.username}
            </span>
        </p>
        <p className='font-semibold'>
            Role:
            <span className='p-2 rounded-4xl bg-cyan-900 text-gray-100 ml-2 '>
                {user.role.toUpperCase()}
            </span>
        </p>
        <p>Phone Number: </p>
    </div>
  )
}
