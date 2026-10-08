import React from 'react'
import RatingStar from '../RatingStar'
import { RiEdit2Line } from 'react-icons/ri'
import { MdOutlineDeleteForever } from 'react-icons/md'
import dayjs from 'dayjs'

export default function ReviewCard({review}) {
  return (
    <div className='bg-gray-200 p-4 rounded-md space-y-4'>
        <div className='flex justify-between'>
            <div className='flex space-x-4'>
                <div className='rounded-full size-12 bg-violet-300'>
                {/* Profile Image Thumbnail */}
                </div>
                <div >
                    <p className='font-semibold'>
                        {review.user.first_name} {review.user.last_name}
                    </p>
                    <p>
                        {dayjs(review.updated_at).format("DD MMM YYYY, hh:mm A")}
                    </p>
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
            <RatingStar rating={review.rating}/>
            <p>
                {review.content}
            </p>
        </div>
    </div>
  )
}
