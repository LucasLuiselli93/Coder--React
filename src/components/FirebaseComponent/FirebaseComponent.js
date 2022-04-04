import React from 'react'
import {useEffect} from "react";
import {collection, doc, getDocs} from "firebase/firestore"
import {db} from "../../helpers/Firebase"






const FirebaseComponent = () => {

    useEffect(() => {
       const getData = async ()=>{
        const query = collection(db, "items")
        const response = await getDocs(query)
        console.log("respuesta", response)
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
