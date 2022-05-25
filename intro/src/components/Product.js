import React from 'react'
import '../style/Product.css'
import { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { useBasket } from '../context/BasketContext'
import { Routes, Route, Link } from "react-router-dom";
import { useParams, } from 'react-router-dom'



export default function Product({ item }) {

    const { product_id } = useParams();
    const { books } = useContext(BookContext)
    const { addtobasket, items } = useBasket();
    const findBasketItem = items.find((element, item) => element.id === item.id);





    return (
        <ul class="cards">
        <li>
          <div  class="card">
          <Link to={`/product/${item.id}`}>
            <img src={item.imageURL} class="card__image" alt="" style={{weigth:100, height:400}}/>
            </Link>
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <span class="card__thumb" style={{color:"black", fontSize:"large", fontWeight:"bold"}}>{item.price} TL</span>
                <div class="card__header-text">
                  <h3 class="card__title">{item.title}</h3>  
                  <h3 class="card__title">{item.author}</h3>           
                  <button onClick={() => addtobasket(item, findBasketItem)} className="btn btn-primary">Sepete Ekle</button>
                </div>
              </div>
              <p class="card__description">{item.overview}</p>
            </div>
          </div>      
        </li>
       
        
      </ul>



        // <div className="card" style={{width: "18rem"}} >

        //         <div >
        //             <Link to={`/product/${item.id}`}>
        //                 <img src={item.imageURL} className="card-img-top" alt="..." />
        //             </Link>
        //             <div className="card-body">
        //                 <h5 className="card-title">{item.title}</h5>
        //                 <p className="card-text">{item.price}tl</p>
        //                 <button onClick={() => addtobasket(item, findBasketItem)} className="btn btn-primary">sepete ekle</button>
        //             </div>
        //         </div>
        // </div>


    )
}
