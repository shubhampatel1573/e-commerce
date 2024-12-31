import React, { useContext } from 'react'
import "./CartIteams.css"
import { use } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
const CartIteams = () => {
    const { all_product, cartItems, addToCart, removefromCart } = useContext(ShopContext)
    return (
        <div className='cartiteams'>
            <div className="cartiteams-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id > 0]) {
                    return <div>
                        <div className="cartiteams-format">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartiteams-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => { removefromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
            })}
        </div>
    )
}

export default CartIteams