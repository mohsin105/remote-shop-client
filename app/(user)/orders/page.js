import apiServer from '@/lib/apiServer'
import React from 'react'

export default async function page() {
  const response = await apiServer("orders");
  const orders = await response.json();
  return (
    <div>
      <h1>This is the Users Order List page</h1>
      <div className='space-y-4'>
        {orders.map(order =>(
          <div key={order.id}
            className='p-4 rounded-md bg-gray-50 shadow-2xl'>
              <div className='flex justify-between'>
                <h3>{order.id}</h3>
                <h4>{order.status}</h4>
                <p>{order.total_price}</p>
              </div>
              <div>
                {order.created_at}
              </div>
              <div>
                {order.user.username}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}
