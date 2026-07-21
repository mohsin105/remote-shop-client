"use client";
import { createContext } from "react";
import useCart from "../_hooks/useCart";

const CartContext = createContext();

export const CartProvider = ({children, initialCart}) =>{
    const allValues = useCart(initialCart);

    return (
        <CartContext.Provider value={allValues}>{children}</CartContext.Provider>
    )
};

export default CartContext;