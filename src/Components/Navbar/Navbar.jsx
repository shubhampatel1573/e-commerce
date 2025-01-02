import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import hamburger from "../Assets/hamburger.svg"
import cross from "../Assets/cross.svg"
const Navbar = () => {
    const{getTotalCartIteam} = useContext(ShopContext)
    const [menu, setMenu] = useState("")
    const navMenu = useRef(null)
    const navClose = useRef(null)
    const handleHanburger = ()=>{
       navMenu.current.style.display = "flex"
        sethanOpen("open")
    }


    return (
        <div className='navbar'>
            <div className="nav-hamburger">
                <img onClick={handleHanburger} src={hamburger} alt="" />
            </div>
            <div className="nav-logo">
               <Link to="/"> <img src={logo} alt="" />
                <p>SHOPPER</p>
                </Link>
            </div>
            <div className="nav-menu" >
                <li onClick={() => { setMenu("Shop") }}> <Link style={{textDecoration:"none"}} to="/"> Shop </Link>{menu === "Shop" ? <hr /> : ""}</li>
                <li onClick={() => { setMenu("Men") }}>  <Link style={{textDecoration:"none"}} to="/mens"> Men </Link>{menu === "Men" ? <hr /> : ""}</li>
                <li onClick={() => { setMenu("Women") }}> <Link style={{textDecoration:"none"}} to="/womens"> Women </Link>{menu === "Women" ? <hr /> : ""}</li>
                <li onClick={() => { setMenu("Kids") }}> <Link style={{textDecoration:"none"}} to="/kids"> Kids </Link>  {menu === "Kids" ? <hr /> : ""}</li>
            </div>
            <div className='nav-login-cart'>
            <div className="nav-login">
            <Link to="/login"><button>Login</button></Link>
            </div>
            <div className="nav-cart">
                <Link to="cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count"> {getTotalCartIteam()} </div>
            </div>
            </div>
            <div className="hamburger" ref={navMenu}>

                <div onClick={()=>{navMenu.current.style.display="none"}} className="cross"><img src={cross} alt="" /></div>

            <div className="nav-logo">
               <Link onClick={()=>{navMenu.current.style.display="none"}} to="/"> <img src={logo} alt="" />
                <p>SHOPPER</p>
                </Link>
            </div>
                <Link onClick={()=>{navMenu.current.style.display="none"}} to="/">Shop</Link>
                <Link onClick={()=>{navMenu.current.style.display="none"}} to="/mens"> Men</Link>
                <Link onClick={()=>{navMenu.current.style.display="none"}} to="/womens">Women</Link>
                <Link onClick={()=>{navMenu.current.style.display="none"}} to="/kids">Kids</Link>
            </div>
        </div>
    )
}

export default Navbar
