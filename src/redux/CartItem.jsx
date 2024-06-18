import React from 'react'
import { useSelector } from 'react-redux'
import Student from './Student'
import StudentForm from './StudentForm'
import CartChange from './CartChange'

const CartItem = () => {
    const data = useSelector(store=>store)
  return (
    <>
        <h1 className='text-success text-center'>The Number if items in the cart is {data.cartInitial}</h1>
        <CartChange/>
          <Student/>
          <StudentForm/>
    </>
    
  )
}

export default CartItem