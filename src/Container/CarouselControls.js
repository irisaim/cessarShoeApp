import React from 'react';

const CarouselControls = ({prev, next}) => {
    return(
        <div className='buttons-position'>
        <button className='carousel-control left' onClick={prev}>Prev</button>
        <button className='carousel-control right' onClick={next}>Next</button>
     </div>
    )

}

export default CarouselControls;