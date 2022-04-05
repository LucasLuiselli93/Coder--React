import React from 'react'
import {useEffect, useState} from "react"
import ItemListCards from '../ItemListCard/ItemListCards'
import {pedirDatos} from "../../data/pedirDatos"
import { db } from '../../helpers/Firebase'
import { useParams } from 'react-router'
import { collection, getDocs, docs } from 'firebase/firestore';

const ItemList = () => {

    const [product, setProduct] = useState([])
    const [loading,setLoading] = useState(false)
    
    const {categoryId} =useParams()
    console.log(categoryId)

  
        
        
        useEffect(() => {
            getData()
            
             
         }, [])

         

         const getData = async ()=>{
            //referencia a la base de datos
         const query = collection(db, "items")

         //obtener documento dentro de la coleccion items
         const response = await getDocs(query)
         console.log("respuesta", response.docs)
         console.log("info", docs)
         // const newDoc ={
         //     id: doc.id,
         //     data:doc.data()
         // }
         const dataItems = response.docs.map(doc=>{return{id:doc.id, ...doc.data()}})
         console.log("data item", dataItems)
          setProduct(dataItems)
        }
        getData()



        // pedirDatos()
        //         .then((res)=>{
                    
                    
        //             const productsSelling = res.map(producto=>{
        //                 return{
        //                        id:producto.id,
        //                        title:producto.title,
        //                        price:producto.price,
        //                        description:producto.description,
        //                        image:producto.image,
        //                        category:producto.category
        //                        }
                   
        //             })
        //             if(!categoryId){
        //                 setProduct(productsSelling)
        //                 setLoading(false)
        //             }else{
        //                 setProduct(productsSelling.filter((prod)=>prod.category === categoryId))
        //                 setLoading(false)
        //             }
                    

              
                  
    //},[])
   // },[categoryId])


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
