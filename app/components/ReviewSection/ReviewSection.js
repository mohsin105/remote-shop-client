import React from 'react'
import RatingStar from '../RatingStar'
import ReviewList from './ReviewList'

export default function ReviewSection({productId}) {
  return (
    <div>
        <h3 className='text-2xl font-semibold mb-4'>Reviews & Ratings : </h3>
        <div className='space-y-2'>
            <p className='text-3xl font-bold'>3.0</p>
            <RatingStar/>
            <p>28 Reviews</p>
        </div>
        <div className='my-2'>
            <ReviewList productId={productId}/>
        </div>
    </div>
  )
}
