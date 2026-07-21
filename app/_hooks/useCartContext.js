import React, { useContext } from 'react'
import CartContext from '../_context/CartContext'

export default function useCartContext() {
  return useContext(CartContext);
}
