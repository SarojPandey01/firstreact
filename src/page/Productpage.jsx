import React, { useState, useEffect } from "react";
import Card from "../Component/Card";
import axios from "axios";

const Productpage = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => 
        (setProduct(res.data)))
      .catch((err) => console.log(err));
  },[]);
  return (
    <>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((item,i) => (
            <Card data={item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productpage;
