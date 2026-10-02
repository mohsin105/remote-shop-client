import dayjs from 'dayjs'
import React from 'react'

export default function OrderCard({order}) {
  return (
    <div 
        className='p-4 rounded-md bg-gray-50 shadow-2xl'>
        <div className='flex justify-between'>
            <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Order #{order.id}</h3>
                <div>
                    Placed On : {dayjs(order.created_at).format("DD MMM YYYY, hh:mm A")}
                </div>
            </div>
            <div className='space-y-4'>

                <h4 className='px-2 py-1 flex justify-center rounded-2xl font-bold border'>{order.status}</h4>
                <p className='text-right text-xl font-bold'>$ {order.total_price}</p>
            </div>
        </div>
        
        <div>
            {order.user.username}
        </div>
    </div>
  )
}
