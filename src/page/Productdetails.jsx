import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { json, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const Productdetails = () => {
    const [product,setProduct]=useState({})
    const params = useParams()
    const id = params.productId
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id])
    //add to card
    const addToCard=()=>{
        const cartItems = JSON.parse(localStorage.getItem('cardData')) || []
        const productItem=({
            id:product.id,
            title:product.title,
            price:product.price,
            description:product.description,
            image:product.image,
            quantity:1
        })
        //if the product present in the card or not 
        const existingItems = cartItems.find(item=>item.id===product.id )
        if (existingItems) {
            toast.error("product is already present in cart ")
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cardData', JSON.stringify(cartItems))
            toast.success(`${product.title} is added to cart`)
        }
    }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container">
        <div className="d-flex row justify-content-between my-3 ">
        <div className="col-md-3">
            <img src={product.image} alt={product.title} width={300} />

        </div>
        <div className="col-md-7 bg-secondary rounded pt-4 text-white">
            <h2>{product.title}</h2>
            <h2>Rs.{product.price}</h2>
            <p className="fw-bold">Description</p>
            <p>{product.description}</p>
            <p className="text-info text-uppercase">
            <strong>Category :</strong>{product.category}

            </p>
            <Link  to="/cart" >  <button className='btn btn-warning text-white' onClick={addToCard}>Add to Cart</button></Link>
          
        </div>

        </div>
    </div>
      

    </>
  )
}

export default Productdetails