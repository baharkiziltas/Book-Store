import React, {useEffect} from 'react'
import '../style/Products.css'
import {useContext} from 'react'
import { BookContext } from '../context/BookContext'
import { useBasket } from '../context/BasketContext'
import Product from './Product'



export default function Products({id,title,imageURL,author,price }) {

    const {books} = useContext(BookContext)
    const {addtobasket} = useBasket();


  return (
   
<div className='container'>
        <div className='row mt-5 '>
        <div className="card-group ">
        {books.map((item, i) => (
          <Product key={item.id}></Product>
))}                             
    </div>
    </div>
    </div> 
  )
}
