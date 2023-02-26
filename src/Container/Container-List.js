import React, { Component } from 'react'
import './Container-List.css'
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';

function ContainerList(props) {
  return (
  <div className='productList'>
      <div key={props.id} className='productCard'>
          <img src={props.image} alt='product-image' className='productImage'/>

          <FaShoppingCart className={'productCard__cart'} />
          <FaHeart className={'productCard__wishlist'} />

          <div className='productCard__content'>
              <h3 className='productName'>{props.name}</h3>
              <div className='displayStack__1'>
                  <div className='productPrice'>${props.price}</div>
              </div>
              <div className='displayStack__2'>
                  <div className='productRating'>
                      {[...Array(props.rating)].map((index) => (
                          <FaStar id={index +1} key={index} />
                      ))}
                  </div>
              </div>
      </div>
  </div>
</div>
  )
}

export default ContainerList
