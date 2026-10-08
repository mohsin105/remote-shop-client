import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function RatingStar({rating}) {
  return (
    <div className='flex space-x-1'>
        {Array.from({length:5},(_, i)=> (
            <FaStar 
              key={i+1} 
              className={`${i+1 > rating? "text-gray-400" : "text-amber-300"}`}></FaStar>
        ))}
    </div>
  )
}
