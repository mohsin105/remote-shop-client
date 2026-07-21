"use client";
import useAuthContext from '@/app/_hooks/useAuthContext';
import React from 'react'

export default function OrderList() {
    const {user} = useAuthContext();
  return (
    <div>OrderList</div>
  )
}
