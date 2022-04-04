import React from 'react'
import {useContext} from "react"
import { CartContext,DataContext } from '../Context/CustomCartContext'
import { Link, Navigate } from "react-router-dom"



const Cart = () => {
    // const {productCart} = useContext(DataContext)
    //       // render si el cart está vacío
    //     if (productCart.length === 0) {
    //         return <div className="container my-4">
    //                     <h2>Tu carrito está vacío</h2>
    //                     <Link to="/" className="btn btn-primary">Volver</Link>
    //                 </div>
    //     }


    // return (
    //     <div>
    //         <p>Holaaa</p>
    //         {
    //                 productCart.map((item) => (
    //                     <div key={item.id}>
    //                         <h4>{item.title}</h4>
    //                         {/* <p>Cantidad: {item.counter}</p>
    //                         <p>Precio: ${item.cantidad * item.precio}</p> */}
    //                         {/* <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
    //                             <BsFillTrashFill/>
    //                         </button> */}
    //                     </div>
    //                 ))
    //             }
    //     </div>
    // )
}

export default Cart
