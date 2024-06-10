import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const{id, image, title, price}=props.data
  return (
    <>
  <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5>Rs.{price}</h5>
        <Link to={`/productdetails/${id}`} className='btn btn-success' >View Details</Link>
      </div>
    </div>
  </div>
 
 
    </>
  )
}

export default Card