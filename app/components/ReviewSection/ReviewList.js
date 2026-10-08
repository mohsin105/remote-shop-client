import React, { Suspense } from 'react'
import ReviewCard from './ReviewCard'
import apiFetch from '@/lib/apiFetch'
import ReviewForm from './ReviewForm';

export default async function ReviewList({productId}) {
  const response = await apiFetch(`products/${productId}/reviews`);
  const reviews = await response.json();
  console.log(reviews);
  return (
    <div>
        {reviews.length> 0 ? (
          <div>
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review}/>
            ))}
          </div>
        ): (
          <div className='p-4 bg-rose-100 text-lg text-center font-semibold rounded-md border-2 border-rose-900'>
            No reviews yet. Be the first to comment
          </div>
        )}
        <div>
          <Suspense fallback={<div >Loading....</div>}>
            <ReviewForm productId={productId}/>
          </Suspense>
        </div>
    </div>
  )
}
