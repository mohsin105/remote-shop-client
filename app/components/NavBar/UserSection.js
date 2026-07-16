"use client";
import useAuthContext from '@/app/_hooks/useAuthContext';
import Link from 'next/link';
import React from 'react'

export default function UserSection() {
    const {user, logOutUser} = useAuthContext();
  return (
    <div className='flex gap-4'>
        <div className=''>
            {user && (
                <div>
                    {user.email}
                </div>
            )}
        </div>
        <div>
            {user !== null  ? (
                <button
                    onClick={()=> logOutUser()}
                    className='p-2 bg-rose-400 hover:bg-rose-500'>
                    Log Out
                </button>
            ) : (
                <div className='flex gap-2'>
                    <button>Sign Up</button>
                    <Link href="/signIn">
                        <button
                            
                            className=''>
                            Sign In
                        </button>
                    </Link>
                    
                </div>
            )}
        </div>
    </div>
  )
}
