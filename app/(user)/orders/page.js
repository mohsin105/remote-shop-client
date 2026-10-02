import OrderList from '@/app/components/OrderPage/OrderList';
import apiServer from '@/lib/apiServer'
import React from 'react'

export default async function page() {
  const response = await apiServer("orders");
  const orders = await response.json();
  return (
    <div className='bg-amber-50'>
      <div className='w-3/7 mx-auto '>
        <h1 className='text-2xl font-semibold my-8 '>Hello, here are all your Orders </h1>
        <div className=''>
          <OrderList orders={orders} />
        </div>
      </div>
    </div>
  )
}
