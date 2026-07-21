"use client";
import React from 'react'

export default function CartDetailList({localCart, handleUpdateQuantity,handleRemoveCartItem }) {
  return (
    <div>
        <h3>CartDetailList</h3>
        <div>
            {localCart?.items?.map(item =>(
                <div key={item.id}
                    className='grid grid-cols-6'>
                    <div>{item.id}</div>
                    <div>{item.product.name}</div>
                    <div>
                        <button
                            onClick={()=> handleUpdateQuantity(
                                item.id, Math.max(1, item.quantity-1)
                            )}>
                            -
                        </button>
                        <input 
                            type="number"
                            value={item.quantity} 
                            onChange={(e)=> handleUpdateQuantity(item.id,e.target.value )}/>
                        <button
                            onClick={()=> handleUpdateQuantity(item.id,item.quantity+1 )}>
                            +
                        </button>

                    </div>
                    <div>{item.product.price}</div>
                    <div>{item.total_price}</div>
                    <div className='flex space-x-2'>
                        <button onClick={()=> handleRemoveCartItem(item.id)}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-2'>
            <div>Total Price</div>
            <div>{localCart.total_price} Tk</div>
        </div>
    </div>
  )
}
