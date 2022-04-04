import React from 'react'
import "../NavBar/NavBar"
import shoppingcart from "../../img/carrito.svg"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {

    const carritoContext = useContext(CartContext);
    return (
        <div>
            <li className="nav__item" >
                <Link to="/" className="nav__link">
                     <img src={shoppingcart} width="30px" alt="carrito" />
                     
                </Link>
            
            </li>
        </div>
    )
}

export default CartWidget
