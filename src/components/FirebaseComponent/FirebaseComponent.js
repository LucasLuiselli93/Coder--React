import React from 'react'
import {useEffect} from "react";
import { collection, getDocs, docs } from 'firebase/firestore';
import {db} from "../../helpers/Firebase"






const FirebaseComponent = () => {

    useEffect(() => {
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
        
       }
       getData()
        
    }, [])


    return(
        <div>
            <p>firebase components</p>
        </div> 
    )

  
}

export default FirebaseComponent
