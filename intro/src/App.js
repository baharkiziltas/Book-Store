import React, {  useState } from 'react'
import Header from './components/Header.js'
import Products from './components/Products.js'
import Product from './components/Products.js'
import Cart from './components/Cart.js'
import { Routes, Route, Link } from "react-router-dom";
// import { useSelector } from 'react-redux'
 import { v4 as uuidv4 } from 'uuid';
 import BookContextProvider from './context/BookContext.js'
 import ProductDetail from './components/productDetail'
 




export default function App() {
 

  // const [items, setitems] = useState ([])
  // let selectcart = useSelector(state => state.bookClick)
  // let cart = useSelector(state => state.addtoBook)

  //  const [cartitems, setcartitems] = useState ([])



  //  useEffect (()=>{
  //    const getdata = async() => {
  //      const data = await fetch ("http://localhost:3002/books")
  //      const result = await data.json()
  //      setitems(result)
  //    }
  //    getdata()
  //    setcartitems(cart)

  //  },[cart, cartitems])




  return (

    <BookContextProvider>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Products></Products>} />
        <Route path="/product/:product_id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </BookContextProvider>

  )
}

