import React from 'react'
import '../styles/card.css'

export default function Card({item,handleClick}) {

    const {title,author,price,img}=item;
  return (
    <div className='cards'>
        <div className="image-box">
        <img src={img} alt="image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price-${price}</p>
            <button onClick={()=>handleClick(item)}>Add to cart</button>
        </div>
    </div>
  )
}
