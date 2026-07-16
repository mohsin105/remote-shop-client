import React, { Suspense } from 'react'
import UserSection from './NavBar/UserSection'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex justify-between p-2 bg-indigo-400 '>
      <div>
        <h3 className='text-2xl font-semibold'>Remote Shop</h3>
      </div>
      <div>
        <ul className='flex justify-around space-x-2'>
          <li>Home</li>
          <li>
            <Link href='/products'>
              Products
            </Link>
          </li>
          <li>About Us</li>
          <li>Contact</li>
          <li>
            <Link href='/profile'>
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback = {<div className=''>Loading...</div>}>

          <UserSection/>
        </Suspense>
      </div>
    </div>
  )
}
