import React, { Component } from 'react'
import './Title.css';


function Header() {
    return (
          <div className="nav-container">
            {/* <img src="https://o.remove.bg/downloads/e474b811-1334-4fbd-81ad-8adf85e2ae3b/24-247002_free-vector-high-heel-shoes-women-fashion-clip-removebg-preview.png" className='logo-image'  width="150" height="150" /> */}
            <img src="https://di2ponv0v5otw.cloudfront.net/posts/2023/02/14/63ec6820acf462f9a48c0c14/s_63ec6820acf462f9a48c0c15.jpg" className='logo-image' />
            
              <h1>C e s s a r</h1>
                <div className="banner">
                  <div className="banner-line">
                    <span>Fancy shoes</span>
                  </div>
                  <div className="banner-line">
                    <span>Make You Look</span>
                  </div>
                  <div className="banner-line">
                    <span>Nice &amp; Classy</span>
                  </div>
                </div>

            <ul className="nav-menu">
              <li className="nav-item">
                <a href="">Home</a>
              </li>
              <li className="nav-item">
                <a href="">Catalog</a>
              </li>
              <li className="nav-item">
                <a href="">New Trends</a>
              </li>
              <li className="nav-item">
                <a href="#footer">Contact Us</a>
              </li>
            </ul>
      </div>
    );
  }

export default Header;