import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function RatingStar() {
  return (
    <div className='flex space-x-1'>
        {Array.from({length:5},(_, i)=> (
            <FaStar key={i+1} className='text-amber-300'></FaStar>
        ))}
    </div>
  )
}
