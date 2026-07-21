"use client";
import apiFetch from '@/lib/apiFetch';
import React, { useState } from 'react'

export default function useCart(initialCart) {
    const [cart, setCart] = useState(initialCart);
    const [backendErrorMessage, setBackendErrorMessage] = useState("");

    const createCart = async()=>{
        try {
            console.log("Cart creating function");
            const response = await apiFetch("carts",{
                method: "POST"
            });
            console.log(response);
            const cart = await response.json();
            console.log("The cart object -> ",cart);
            console.log(cart);
            if(response.ok)
            {
                console.log("Cart creation successfull")
                setCart(cart);
            }
            return {"success":true, "message":"Cart Received Successfully"};
        } catch (error) {
            console.log(error);
            return {"success": false, "message":error};
        }
    };

    const addCartItem = async(payload) =>{
        try {
            console.log("Cart jesata");
            console.log(payload);
            console.log(cart[0].id);
            const response = await apiFetch(`cart/${cart[0].id}/items`, {
                method:"POST",
                body:JSON.stringify(payload)
            })
            console.log("CartItem response -> ", response);
            const result = await response.json();
            console.log("CartItem result-> ", result);
            await createCart();
        } catch (error) {
            console.log(error);
        }
    };

    const updateCartItem = async(itemId, newQuantity) =>{
        try {
            console.log("Cart jesata");
            const response = await apiFetch(`carts/${cart[0].id}/items/${itemId}`, {
                method:"PATCH",
                body:JSON.stringify({"quantity":newQuantity})
            })
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const removeCartItem = async(itemId) =>{
        try {
            console.log("Cart jesata");
            const response = await apiFetch(`carts/${cart[0].id}/items/${itemId}`,{
                method:"DELETE"
            })
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const createOrder = async() =>{
        try {
            console.log("Order jesata");
            console.log("Cart id-> ", cart[0].id);
            const response = await apiFetch("orders",{
                method:"POST",
                body: JSON.stringify({"cart_id":cart[0].id})
            })
            console.log("og Response",response);
            const result = await response.json();
            console.log(result);
            // if(response.ok)
            // {
            //     setCart(null);
            // }
            return {"success":true, "message":"Order Created Successfully"}
        } catch (error) {
            console.log(error);
            return {"success":false, "message": error};
        }
    };

    const updateOrderStatus = async()=>{
        try {
            console.log("Cart jesata");
        } catch (error) {
            console.log(error);
        }
    };
  return {
    cart,
    backendErrorMessage,
    createCart,
    addCartItem,
    updateCartItem,
    removeCartItem, 
    createOrder,
    updateOrderStatus
  }
}
