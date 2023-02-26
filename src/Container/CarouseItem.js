import React from 'react';
import { Carousel } from 'react-responsive-carousel';


const CarouselItem = ({slide, startSlide, stopSlide}) => {
    
return ( 
   <div className='carousel-item' onMouseEnter={stopSlide} onMouseOut={startSlide}>
    <img src={slide} className='carousel-item-image' alt='slide' />
    </div>
)
};

export default CarouselItem;