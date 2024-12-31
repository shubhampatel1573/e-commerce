import React from 'react'
import "./NewCollections.css"
import new_collection from "../Assets/new_collections"
import Iteam from '../Iteam/Iteam'
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collection.map((iteam, i)=>{
            return <Iteam key={i} id={iteam.id} name={iteam.name} new_price={iteam.new_price} old_price={iteam.old_price} image={iteam.image}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
