import React from 'react'
import Bodymovie from '../Components/Bodymovie'
import { CartProvider } from '../Context/CartContext'

const Movie = () => {
  return (
    <div>
      <CartProvider>
      <Bodymovie/>
    </CartProvider>
    </div>
  )
}

export default Movie