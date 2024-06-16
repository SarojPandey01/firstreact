import React from 'react'
import { useSelector } from 'react-redux'
import CartChange from './reducer/CartChange'

const CartItem = () => {
    const data = useSelector(store=>store)
  return (
    <>
        <h1 className='text-success text-center'>The Number if items in the cart is {data.cartInitial}</h1>
        <CartChange/>
    </>
  )
}

export default CartItem