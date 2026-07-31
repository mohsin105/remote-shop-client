"use client";
import useAuthContext from '@/app/_hooks/useAuthContext';
import useCartContext from '@/app/_hooks/useCartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function UserSection() {
    const {user, logOutUser} = useAuthContext();
    const {cart} = useCartContext();
    console.log("Users cart->", cart);
    // console.log(cart[0].id);
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
            {cart && (
                <Link href="/cart">
                    <div>
                        View Cart
                    </div>
                </Link>
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
                    <Link href='/signUp'>
                    
                        <button>
                            Sign Up
                        </button>
                    </Link>
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
