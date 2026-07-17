"use client";
import useAuthContext from '@/app/_hooks/useAuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function UserSection() {
    const {user, logOutUser} = useAuthContext();
    const router = useRouter();
    // console.log(user);
    const signOutUser = () => {
        try {
            logOutUser();
            router.replace('signIn');
        } catch (error) {
            console.log(error);
        }
    };
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
                    onClick={()=> signOutUser()}
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
