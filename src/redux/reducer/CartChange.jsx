import React from 'react'
import { useDispatch } from 'react-redux'

const CartChange = () => {
    const dispatch = useDispatch()
    const add = ()=>(
        dispatch({type:'ADD_TO_CART'})
    )
    const remove =()=>(
        dispatch({type:'remove_cart'})
    )

  return (
    <>
        <div className="my-2">
            <div className="row d-flex justify-content-around">
                <div className="col-4">
                    <button className="btn btn-success " onClick={add}>Add</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-danger" onClick={remove}>Remove</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartChange