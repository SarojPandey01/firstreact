import React,{useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';




const Cart = () => {
    const[product,setProduct]=useState([])
    useEffect(()=>{
        const sartData = JSON.parse(localStorage.getItem('cardData'))||[]
        setProduct(sartData)})
        //increase quantity of the product
        const increaseQty= id=>{
            const updateProduct = product.map(item=>{
                if(item.id === id){
                    return {...item, quantity:item.quantity+1}
                }
                return item
            })
            setProduct(updateProduct)
            localStorage.setItem('cardData', JSON.stringify(updateProduct))

        }
        const decreaseQty=id=>{
            const updateProduct = product.map(item=>{
                if (item.id === id && item.quantity>1) {
                    return{...item,quantity:item.quantity-1}
                }
                return item
            })
            setProduct(updateProduct)
            
            localStorage.setItem('cardData', JSON.stringify(updateProduct))
        }
        //remove cart data
        const removeCartHandler=(id,title)=>{
            const conform = window.confirm("Are you sure want to delete")

            if (conform) {
                const filterCart = product.filter(item=>item.id !=id)
                localStorage.setItem('cardData',JSON.stringify(filterCart))
                setProduct(filterCart)
                toast.success(`${title} removed successfully.`)
            }
        }
  return (
    <>
        <ToastContainer theme='colored' position='top-center'/>
        <div className="container">
            <div className="row d-flex justify-content-between my-3">
            {product.length===0?
            <h2 className='text-center'>Your Cart is Empty</h2>
            :(
                <>
                <h2 className='text-center'>Your Cart item</h2>
                <div className="col-md-8 shadow-lg ">
                {product.map((item,i)=>(
                <div key={i}>

                    <div className="row justify-content-cnter d-flex py-2 pe-3">
                        <div className="col-2">
                            <img src={item.image} alt={item.title} width={50} />
                        </div>
                        <div className="col-3">
                            <strong>{item.title}</strong>
                        </div>
                        <div className="col-2 text-warning">
                            <span>${item.price}</span>
                        </div>
                        <div className="col-3"><button className="btn btn-primary" onClick={()=>increaseQty(item.id)}>+</button>&nbsp;
                        <span>{item.quantity}</span>&nbsp;
                        <button className='btn btn-secondary' onClick={()=>decreaseQty(item.id)}>-</button>

                        
                        </div>
                        <div className="col-1">
                            <button className='btn btn-danger' onClick={()=>removeCartHandler(item.id,item.title)}><FaTrash/></button>
                        </div>
                    </div>
                    <hr />
                </div>)
                
                )}

                </div>
                <div className="col-md-3">
                    <div className="shadow py-2">
                        <h2>Cart Summary:</h2>
                        <p><strong>Unit:</strong>
                        {product.reduce((a,item)=>(a+Number(item.quantity)),0)}
                        </p>
                        <p><strong>Total:</strong>$
                        {product.reduce((a,item)=>(a+parseFloat(item.price*item.quantity)),0)}
                        </p>
                        <hr />
                        <button className="btn btn-success">Check Out</button>
                    </div>
                </div>
                    
                </>
            )
            }

            </div>
        </div>



    </>
  )
}

export default Cart