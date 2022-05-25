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
 
        <div className="card" style={{width: "18rem"}} >
            
                <div >
                    <Link to={`/product/ ${item.id}`}>
                        <img src={item.imageURL} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}tl</p>
                        <button onClick={() => addtobasket(books, findBasketItem)} className="btn btn-primary">sepete ekle</button>
                    </div>
                </div>
        </div>


    )
}
