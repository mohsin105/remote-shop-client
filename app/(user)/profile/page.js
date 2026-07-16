import ProfileCard from '@/app/components/Profile/ProfileCard'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className='text-3xl font-semibold my-8 text-center'>
        Profile Page
      </h1>
      <div className='flex gap-4 w-2/3 mx-auto '>
        <div
          className='bg-violet-300 rounded-md basis-1/2'>

        </div>
        <div
          className='basis-1/2'>
            <ProfileCard/>
        </div>
      </div>
    </div>
  )
}
