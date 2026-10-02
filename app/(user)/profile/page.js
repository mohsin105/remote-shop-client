import ProfileCard from '@/app/components/Profile/ProfileCard'
import React from 'react'
  import apiServer from '@/lib/apiServer'
import Image from 'next/image';

export default async function page() {
  const userResponse = await apiServer("profile");
  const user = userResponse.ok? await userResponse.json() : null;
  // console.log("User in profile-> ", user);
  return (
    <div className='bg-gray-50 pt-8'>
      <h1 className='text-3xl font-semibold mb-8 text-center'>
        Profile Page
      </h1>
      <div className='flex gap-4 w-2/3 mx-auto bg-white rounded-md p-4 '>
        <div
          className='bg-violet-100 rounded-md basis-1/2'>
          {user !== null && (
            <Image
              src={user.profile_image}
              alt='profile-image'
              width={300}
              height={300}
              unoptimized
            />
          )}

        </div>
        <div
          className='basis-1/2'>
            <ProfileCard/>
        </div>
      </div>
    </div>
  )
}
