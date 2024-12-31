import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Iteam from "../Components/Iteam/Iteam.jsx"
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 -12 </span> out of 36 product
        </p>
        <div className="shopcategory-sort">
          Sort by <img  src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((iteam, i)=>{
          if(props.category === iteam.category){
            return <Iteam key={i} id={iteam.id} name={iteam.name} new_price={iteam.new_price} old_price={iteam.old_price} image={iteam.image}/>
          } 
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
