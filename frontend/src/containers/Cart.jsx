import React from 'react'
import Bodycart from '../Components/Bodycart'
import { CartProvider } from '../Context/CartContext'

const Cart = () => {
  return (
  <CartProvider>
    <Bodycart/>
  </CartProvider>
  
  )
}

export default Cart