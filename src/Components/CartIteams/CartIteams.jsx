import React, { useContext } from 'react'
import "./CartIteams.css"
import { use } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
const CartIteams = () => {
    const { getTotalCartAmount, all_product, cartItems, addToCart, removefromCart } = useContext(ShopContext)
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
            {all_product.map((e, i) => {
                if (cartItems[e.id]>0) {
                    return <div key={i}>
                        <div className="cartiteams-format cartiteams-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartiteams-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartiteams-remove-icon' src={remove_icon} onClick={() => { removefromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartiteams-down">
                <div className="cartiteams-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartiteams-total-iteams">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartiteams-total-iteam">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartiteams-total-iteam">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PRECCED TO CHECKOUT</button>
                    </div>
                </div>
                <div className="cartiteams-promocode">
                    <p>if you have a promo code, Enter it here</p>
                    <div className="cartiteams-promobox" >
                        <input   type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartIteams