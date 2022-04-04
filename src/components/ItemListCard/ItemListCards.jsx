import React from 'react'


import {Link} from "react-router-dom"
import "../ItemListCard/_ItemListCard.scss"



const ItemListCards = ({id,title,image,price,description}) => {

    

    return (
        <div className="d-flex justify-content-start">
            <div className='container-fluid '>
                <div className="card mx-auto col-md-3 col-10 mt-5"> <img className='mx-auto img-thumbnail' src={image} width="200px" height="auto" />
                    <div className="card-body text-center mx-auto">
                        <div className='cvp'>
                            <h3 className="card-title font-weight-bold">{title}</h3>
                            <h5 className="card-title font-weight-bold">{description}</h5>
                            <h5 className="card-title font-weight-bolder">{price}</h5>
                             <Link to={`/detail/${id}`}> <a href="#" class="btn cart px-auto">MORE DETAILS</a> </Link>  
                            
                        </div>
                    </div>
                </div>
            </div>
                 
        </div>

    )
}

export default ItemListCards

 