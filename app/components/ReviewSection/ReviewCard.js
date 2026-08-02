import React from 'react'
import RatingStar from '../RatingStar'
import { RiEdit2Line } from 'react-icons/ri'
import { MdOutlineDeleteForever } from 'react-icons/md'

export default function ReviewCard() {
  return (
    <div className='bg-gray-200 p-4 rounded-md space-y-4'>
        <div className='flex justify-between'>
            <div className='flex space-x-4'>
                <div className='rounded-full size-12 bg-violet-300'>
                {/* Profile Image Thumbnail */}
                </div>
                <div >
                    <p className='font-semibold'>User Name</p>
                    <p>3rd August 2026</p>
                </div>
            </div>
            <div className='space-x-2'>
                <button className='p-1 bg-gray-50 rounded-md'>
                    <RiEdit2Line className='text-xl' />
                </button>
                <button className='p-1 bg-rose-300 rounded-md'>
                    <MdOutlineDeleteForever  className='text-xl'/>
                </button>
            </div>
        </div>

        <div className='space-y-2'>
            <RatingStar/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla nisi quis voluptates. Accusantium, fuga? Voluptatum nisi architecto esse, corrupti sed at possimus. Officiis fuga magni iure provident, distinctio dolore cum inventore voluptas labore, quo pariatur voluptatum dolor accusantium?
            </p>
        </div>
    </div>
  )
}
