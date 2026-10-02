"use client";
import useAuthContext from '@/app/_hooks/useAuthContext';
import React from 'react'
import OrderCard from './OrderCard';

export default function OrderList({orders}) {
    const {user} = useAuthContext();
  return (
    <div className='space-y-4'>
      {orders.map(order =>(
        <OrderCard key={order.id} order={order}/>
      ))}
    </div>
  )
}
