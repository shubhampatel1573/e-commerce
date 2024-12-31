import React from 'react'
import "./RelatedProduct.css"
import data_product from '../Assets/data'
import Iteam from '../Iteam/Iteam'
const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-iteam">
            {data_product.map((iteam, i)=>{
                return <Iteam key={i} id={iteam.id} name={iteam.name} new_price={iteam.new_price} old_price={iteam.old_price} image={iteam.image}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProduct