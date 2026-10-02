"use client";
import useAuthContext from '@/app/_hooks/useAuthContext';
import useCartContext from '@/app/_hooks/useCartContext';
import React, { Suspense, useState } from 'react'
import CartDetailList from './CartDetailList';
import { useRouter } from 'next/navigation';

export default function CartDetail() {
    const {cart, updateCartItem, removeCartItem, createOrder} = useCartContext();
    const {user} = useAuthContext();
    const [localCart, setLocalCart] = useState(cart[0]);
    console.log("Accessing the cart from CartContext, inside cart details table",cart);
    const router = useRouter();
    const handleUpdateQuantity = async(itemId, newQuantity)=>{
        const prevLocalCart = localCart;

        setLocalCart((prevLocalCart) =>{
            const updatedItems = prevLocalCart.items.map(item=>(
                item.id === itemId? {
                    ...item,
                    quantity: newQuantity,
                    total_price: item.product.price * newQuantity
                }:item
            ));
            return {
                ...prevLocalCart,
                items:updatedItems,
                total_price : updatedItems.reduce((sum, item) => sum+ item.total_price, 0)
            }
        });

        try {
            await updateCartItem(itemId,newQuantity);

        } catch (error) {
            console.log(error);
            setLocalCart(prevLocalCart);
        }
    };
    const handleRemoveCartItem = async(itemId)=>{
        const prevLocalCart = localCart;

        setLocalCart((prevLocalCart)=>{
            const updatedItems = prevLocalCart.items.filter(item => (
                item.id != itemId
            ));
            return {
                ...prevLocalCart,
                items:updatedItems,
                total_price: updatedItems.reduce((sum, item)=> sum + item.total_price, 0)
            }
        })
        try {
            await removeCartItem(itemId);
        } catch (error) {
            console.log(error);
            setLocalCart(prevLocalCart);
        }
    };

    const handleCreateOrder = async()=>{
        try {
            const response = await createOrder();
            if(response.success)
            {
                router.replace("/orders");
            }
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div className='w-11/12 md:w-2/3 mx-auto bg-amber-50 rounded-md p-4'>
        <div className='text-2xl font-semibold my-8'>
            Hello,<span className='font-extrabold'> {user.first_name},</span> here is your Shopping cart
        </div>
        {/* <div className='grid grid-cols-6 bg-cyan-100 border-2 text-xl font-semibold my-4 py-4'>
            <div>Serial</div>
            <div>Product Name</div>
            <div>Quantity</div>
            <div>Rate</div>
            <div>Price</div>
            <div>Update</div>
        </div> */}
        <div className=''>
            <Suspense fallback = {<div className=''>Loading...</div>}>
                <CartDetailList 
                    localCart={localCart}
                    handleUpdateQuantity={handleUpdateQuantity}
                    handleRemoveCartItem={handleRemoveCartItem}/>
                
            </Suspense>
        </div>
        <div className='flex justify-end my-4'>
            <button 
                onClick={()=> handleCreateOrder()}
                className=' p-4 text-xl font-semibold rounded-md bg-cyan-500 hover:bg-cyan-600 shadow-xl'>
                Confirm Order
            </button>
        </div>
    </div>
  )
}
