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


    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems)
            {
            if(cartItems[item]>0)
                {
                let iteamInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount = totalAmount + iteamInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const getTotalCartIteam = ()=>{
        let totalIteam = 0;
        for(const iteam in cartItems){
            if(cartItems[iteam]>0){
                totalIteam+= cartItems[iteam]
            }
        }
        return totalIteam;
    }

    const addToCart = (iteamId)=>{
    setCartItems((prev)=>({...prev, [iteamId]:prev[iteamId]+1}))
    }

    const removefromCart = (iteamId)=>{
        setCartItems((prev)=>({...prev, [iteamId]:prev[iteamId]-1}))
        }


 const contextValue = { getTotalCartIteam, getTotalCartAmount, all_product, cartItems, addToCart, removefromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;