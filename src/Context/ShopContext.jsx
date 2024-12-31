import Reac, {createContext, useState} from "react";
import all_product from "../Components/Assets/all_product"

 export const ShopContext = createContext(null)

 const getDefaultCart= ()=>{
    let cart = {}
    for(let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

 const ShopContextProvider = (props) =>{

    const[cartItems, setCartItems] = useState(getDefaultCart);
    
    const addToCart = (iteamId)=>{
    setCartItems((prev)=>({...prev, [iteamId]:prev[iteamId]+1}))
    console.log(cartItems)
    }

    const removefromCart = (iteamId)=>{
        setCartItems((prev)=>({...prev, [iteamId]:prev[iteamId]-1}))
        }


 const contextValue = {all_product, cartItems, addToCart, removefromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;