import React from 'react'

import ItemCount from '../ItemCount/ItemCount'
import "../ItemDetail/_ItemDetail.scss"
import {useState,useContext} from "react"

import { Link } from "react-router-dom"
import { DataContext } from '../Context/CartContext'


const ItemDetails = ({id, stock, image,description,title,price, item} ) => {

    const cartContext = useContext(DataContext) // si desestructuro se me rompe el itemdetail ver por que
    console.log('carritoContext-itemDetail', cartContext);

    const [productAdded, setproductAdded] = useState(0);
    const [stockProduct, setStockProduct] = useState(5);

    const onAddFunction = (quantityToAdd)=>{
        setproductAdded(quantityToAdd)
        setStockProduct(stockProduct - quantityToAdd);
        cartContext.addItemToCart(item, quantityToAdd);
        
    }

    
    //  const handleAgregar = (counter) =>
    //  {
    //    const itemToCart = {
    //              id,title,price,image,stock, counter
    //          }
    //          console.log(itemToCart)
    //      }
        
        
    // }



    return (
        <div>
            <div className='container-fluid'>
                <div className="card mx-auto col-md-3 col-10 mt-5"> <img className='mx-auto img-thumbnail' src={image} width="500px" height="auto" />
                    <div className="card-body text-center mx-auto">
                        <div className='cvp'>
                            <h3 className="card-title font-weight-bold">{title}</h3>
                            <h4 className="card-title font-weight-bold">{description}</h4>
                            <h5 className="card-text font-weight-bold">{price}</h5>
                            
                            <h5 className="card-text font-weight-bold">{productAdded}</h5>
                            <h5 className="card-text font-weight-bold">{stock}</h5>   
                                <ItemCount 
                                    // stock={stockProduct} 
                                    initial={1} 
                                    onAdd={onAddFunction} />
                                       
                                       
                                       
                                        {
                                            productAdded>0 &&
                                            <Link to="/cart">
                                                <button className='btn btn-danger'>Terminar mi compra</button>
                                            </Link>
                                        }
                                         {
                                            productAdded>0 &&
                                            <Link to="/" className="m-3" >
                                            <button className='btn-warning'>Regresar al listado</button>
                                             </Link>
                                        }
                                        <hr />
                                        
                            


                            
                           
                           
                        </div>
                    </div>
                </div>
            </div>
                 
        </div>
    )
}

export default ItemDetails






