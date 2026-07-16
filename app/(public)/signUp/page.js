import SignUpForm from '@/app/components/SignUpForm'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center my-8'>
        This is Sign-Up / Registration page
      </h1>
      <div className='w-1/3 mx-auto p-4 bg-amber-50 rounded-md shadow-xl'>
        <SignUpForm/>
        <div>
          <p>
            Already Have an Account ? Sign In Here
          </p>
        </div>
      </div>
    </div>
  )
}
