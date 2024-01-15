import axios from "axios";
import React, { useEffect } from "react";
// import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import ProductsUi from "./components/ProductsUi";
import ProductDetails from "./components/ProductDetails";
import CartItems from "./components/CartItems";

function App(){
  const dispatch = useDispatch()
  useEffect(()=>{
    axios.get("https://dummyjson.com/products?limit=100")
    .then((rej)=>{
      dispatch({
        type:"Adduser",
        payload:{
          data:rej.data.products
        }
      })
    }
    )
  })
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductsUi/>}></Route>
      <Route path="/product/:productId" element={<ProductDetails/>}></Route>
      <Route path="/cart" element={<CartItems/>}></Route>
    </Routes>
  </BrowserRouter>
  </div>
}
export default App;