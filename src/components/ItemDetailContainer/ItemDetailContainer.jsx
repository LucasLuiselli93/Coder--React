import React, {useState,useEffect } from 'react'
import { useParams} from 'react-router'
import { pedirDatos } from '../../data/pedirDatos'
// import spinnerGif from "../../img/spinner.gif"

import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item,setItem] = useState(null)
    const [loading, setloading]= useState(true)
    
    const {itemId} = useParams()
    console.log(itemId)

    useEffect(() => {
      setloading(true)
      pedirDatos()
            .then((res)=>{
                setItem(res.find((prod)=> prod.id === Number(itemId)))
            })
            setloading(false)
    }, [ ])

    return (
        <>
            
           {
               loading
                    ? <h2>Loading...</h2>
                    : <ItemDetail {...item} />
            } 
        </>
    )
}

export default ItemDetailContainer
