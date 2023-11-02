import React, { Component } from 'react'
import './Banner.css'

function Banner(props) {
  const { button1, button2 } = props
  return (
    <>
    <h1 className='banner-title'>LATEST NEWS...</h1>
    <div className='banner-container'>
      
        <div className="banner-buttons">
          <h2 className='article-title1'>Everything You Need to Know About the 2023 Met Gala</h2>
          <p className='article-paragraph'>On Monday, May 1st, the 2023 Met Gala will take place. This year’s Costume Institute exhibition, “Karl Lagerfeld: A Line of Beauty,” will celebrate the full work and life of Karl Lagerfeld. The dress code is, fittingly, “in honor of Karl.” As Lagerfeld designed for many houses—including his eponymous brand, Patou, Balmain, Chloé, Fendi, and Chanel—attendees will have no shortage of inspiration. Last year’s gala, which called for attendees to dress in “gilded glamor,” saw guests pay homage to a transformative era for America (notably, Blake Lively became a walking vision of patina glamor.) This year is sure to be a feast of memorable moments, too. </p>
          <button className="banner-button1"><a href="https://www.vogue.com/article/everything-to-know-met-gala-guide-2023" target="_blank">
            Read more</a>
          </button>
        </div>
      
      <div>
        <img src="https://www.chikoshoes.com/blog/wp-content/uploads/2016/07/Runway-shoes-haute-couture-fall-2016.jpg"  className="banner-image" alt="banner" />
      </div>
      <div className="banner-buttons">  
          <h2 className='article-title2'>Inside British Vogue’s 2023 Fashion & Film Party, in Partnership With Tiffany & Co.</h2>
         <p className='article-paragraph'>The A-list descended on Annabel’s last night, where British Vogue held its 2023 Fashion & Film party, in partnership with Tiffany & Co. The party, co-hosted by British Vogue’s editor-in-chief and Vogue’s European editorial director Edward Enninful, Anya Taylor-Joy, and Jourdan Dunn, went on into the small hours with a live performance from Gabriels, before DJs Tiffany Calver, Fat Tony, and Hale Zero kept the likes of Jamie Foxx, Little Simz and Letitia Wright glued to the dancefloor. Guests: Florence Pugh, Dame Joan Collins, Minnie Driver, Leonardo di Caprio, Kim Kardashian, Brad Pitt, George Clooney, Lady Gaga, Madonna, Backstreet Boys, and many more.</p>
          <button className="banner-button1"><a href="https://www.vogue.com/slideshow/british-vogue-tiffany-baftas-2023" target="_blank">
            Read more</a>
          </button>
        
        </div>
     </div>
    </>
  )
}

export default Banner
