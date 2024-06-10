import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './page/Homepage'
import Layouts from './Component/Layouts'
import Productpage from "./page/Productpage"
import Productdetails from "./page/Productdetails";
import Cart from "./page/Cart";
import Register from "./Register";



const Myrouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layouts/>}>
            <Route index element={<Homepage/>}/>
            <Route path="/products" element={<Productpage/>}/>
            <Route path="/productdetails/:productId" element={<Productdetails/>}/>
           <Route path="/cart" element={<Cart/>}/>  
           <Route path="/register" element={<Register/>} />       

            </Route>
        </Routes>
    </Router>
  )
}

export default Myrouter