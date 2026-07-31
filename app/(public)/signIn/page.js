import SignInForm from '@/app/components/SignInForm'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-center my-8'>
        This is Sign In page
      </h1>
      <div className='w-1/3 mx-auto p-4'>
        <SignInForm/>
        <div>
          No Account Yet?
          <Link href='/signUp'
            className='text-green-600 hover:text-green-700 hover:font-semibold'>
             Create New One Now!
          </Link>
        </div>
      </div>
    </div>
  )
}
