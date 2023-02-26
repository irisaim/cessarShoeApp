import React from 'react';
import ContainerList from './Container-List'
import Banner from './Banner'
import Carousel from './Carousel'
import './Container.css';
import contents from './content'

function Container() {
  const slides = [
    "https://www.brides.com/thmb/wR1PigNfpPo0tEJQqdNRao0lloo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jimmychoo-ad792710b4fa43d988436cf4ecc6611e.jpg",
    "https://assets.glamour.de/photos/627e40cab16db596b28c216e/16:9/w_2560%2Cc_limit/Schuhtrends-22-23-Aufmacher.jpg",
    "https://images.vs-static.com/pnHOO_9oNam5tWrP-sAkwniRRNw=/0x371:1080x979/750x0/194344065_808498170041594_6496246295321837314_n_b6c0056aaf/194344065_808498170041594_6496246295321837314_n_b6c0056aaf.jpg",
    "https://cdn.shopify.com/s/files/1/0266/4621/6739/products/image_bbbec49c-790d-4a57-bfde-dcb796a88fb8_large.png?v=1572014171",
    "https://images-prod.anothermag.com/1053/0-897-1053-702/azure/another-prod/350/4/354838.JPG",
    "https://cf.shopee.sg/file/sg-11134201-23020-0toytz2q2onv3f"
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
