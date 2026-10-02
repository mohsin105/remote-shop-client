"use client";
import React from 'react'
import { RxCrossCircled } from 'react-icons/rx';

export default function CartDetailList({localCart, handleUpdateQuantity,handleRemoveCartItem }) {
  return (
    <div>
        {/* <h3>CartDetailList</h3> */}
        <div className='space-y-4 border-b-2 pb-4 mb-4'>
            {localCart && localCart?.items?.map(item =>(
                <div key={item.id}
                    // className='grid grid-cols-6'>
                    className='grid grid-cols-2 p-2 gap-4 rounded-md bg-cyan-100 '>
                    <div className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <div 
                                className='font-bold w-8 h-8 flex justify-center items-center border rounded-full'>
                                {item.id}
                            </div>
                            <div className='font-semibold'>{item.product.name}</div>
                        </div>
                        <div>$ {item.product.price}</div>
                    </div>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className='col-span-4 md:place-self-center space-x-4'>
                            <button
                                onClick={()=> handleUpdateQuantity(
                                    item.id, Math.max(1, item.quantity-1)
                                )}
                                className='p-1 px-2 font-bold text-xl rounded-md bg-green-400'>
                                -
                            </button>
                            <input 
                                type="number"
                                value={item.quantity} 
                                disabled={true}
                                onChange={(e)=> handleUpdateQuantity(item.id,e.target.value )}
                                className='p-2 text-center w-12 bg-gray-100 rounded-md border-2'/>
                            <button
                                onClick={()=> handleUpdateQuantity(item.id,item.quantity+1 )}
                                className='p-1 px-2 font-bold text-xl rounded-md bg-green-400'>
                                +
                            </button>

                        </div>
                        
                        <div className='col-span-1 place-self-center'>
                            $ {item.total_price.toFixed(2)}
                        </div>
                        <div className='col-span-1 flex items-center'>
                            <button onClick={()=> handleRemoveCartItem(item.id)}>
                                <RxCrossCircled className='text-2xl' />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-2'>
            <div>

            </div>
            <div className='grid grid-cols-2'>
                <div>Total Price</div>
                <div className='place-self-center'>{localCart?.total_price} Tk</div>
            </div>
        </div>
    </div>
  )
}
