import React from 'react'
import {useEffect, useState} from "react"
import ItemListCards from '../ItemListCard/ItemListCards'
import {pedirDatos} from "../../data/pedirDatos"
import { useParams } from 'react-router'




const ItemList = () => {

    const [product, setProduct] = useState([])
    const [loading,setLoading] = useState(false)
    
    const {categoryId} =useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
                .then((res)=>{
                    
                    
                    const productsSelling = res.map(producto=>{
                        return{
                               id:producto.id,
                               title:producto.title,
                               price:producto.price,
                               description:producto.description,
                               image:producto.image,
                               category:producto.category
                               }
                   
                    })
                    if(!categoryId){
                        setProduct(productsSelling)
                        setLoading(false)
                    }else{
                        setProduct(productsSelling.filter((prod)=>prod.category === categoryId))
                        setLoading(false)
                    }
                    

                })
                .catch((error)=>{
                    console.log(error)
                })      

    },[categoryId])


    return (
        <div >
            { 
                 loading
                    ? <h2>Loading...</h2>
                    
                    :product.map( producto =>(
                    <ItemListCards {...producto}/>
        
                
               ))
            }
           
        </div>
    )
}

export default ItemList
