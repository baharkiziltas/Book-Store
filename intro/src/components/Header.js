import React, { useEffect } from 'react'
import '../style/Header.css'
import { ShoppingBagIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { bookClick, addtoBook } from '../actions'
import { useDispatch } from 'react-redux'
import { Routes, Route, Link } from "react-router-dom";
import { useBasket } from '../context/BasketContext'

export default function Header() {

    const {items} = useBasket();


    const cart = useSelector(state => state.addtoBook)
    const dispatch = useDispatch()


    useEffect(() => {
        if (localStorage.getItem("carditems") !== null) {
            const getItem = JSON.parse(localStorage.getItem("carditems"))
            getItem.forEach(item => {
                dispatch(addtoBook(item))
            });
        }
    }, [])


    return (
        <div>
            <nav className="navbar navbar-light bg-light header">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex formitems">
                        <input className="form-control me-2" type="search" placeholder="Search the book" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className='cart' onClick={() => dispatch(bookClick())}><Link to="/cart"><ShoppingBagIcon className='bagicon'/></Link><div className='quantity'> {items.length >0 &&  <a>{items.length} </a>}</div></div>
                </div>
            </nav>
        </div>
    )
}
