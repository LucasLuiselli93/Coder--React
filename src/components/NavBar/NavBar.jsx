import React, {useState} from 'react'
import "../NavBar/_navbar.scss"
import shoppingcart from "../../img/carrito.svg"
import CartWidget from '../CartWidget/CartWidget'
import {Link} from "react-router-dom"
import mate from "../../img/mate-logo.png"





const NavBar = (props) => {
    const [active,setActive] = useState("nav__menu")
    const [toggleIcon, setToggleIcon]= useState("nav__toggler")
    const navToggle = ()=>{
        active === "nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu")

        //toggler icon

        toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle"): setToggleIcon("nav__toggler")

    }

   

    return (
        <nav className="nav">
            <div className="d-flex align-items justify-content-xl-start">
                <Link to="/" ><img src={mate} alt="mate" width="33px"/></Link> 
                <Link to="/" className="nav__brand">  <h1>JAQUE MATE</h1> </Link>
            </div>
            
            <ul className={active}>
                 <Link className="nav__item" to="/productos/mates">    Mates</Link>
                 <Link className="nav__item" to="/productos/bombillas" >Bombillas</Link>
                 <Link className="nav__item" to="/productos/termos" >Termos</Link>
                 <Link className="nav__item" to="/firebase" >firebase</Link>
                 <CartWidget/>
                 
                
                 
                
                 
            </ul>
            
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
      </nav>
    )
}

export default NavBar
