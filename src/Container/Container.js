import React from 'react';
import ContainerList from './Container-List'
import Banner from './Banner'
import Carousel from './Carousel'
import './Container.css';
import contents from './content'

function Container() {
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdxMkrrR8dgAxps0Pi5RhIxmPyrOb24_b7Q&usqp=CAU",
    "https://picsum.photos/id/1033/900/400",
    "https://picsum.photos/id/1034/900/400",
    "https://picsum.photos/id/1035/900/400",
    "https://picsum.photos/id/1035/900/400",
    "https://picsum.photos/id/1036/900/400"
]
  return (
    <div>
      <Carousel slides ={slides} />
    
        <h1 className='newArrivals'>New Arrivals</h1>
      <div className='POPOSList'>
        
        {contents.map(contents => (
          <ContainerList 
            key={contents.id} 
            image={contents.image}
            name={contents.name}
            price={contents.price}
            rating={contents.rating}
            />
            
        ))}
      </div>
      <Banner />
    </div>
  )
}

export default Container
