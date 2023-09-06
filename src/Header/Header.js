import React, { Component } from 'react'
import './Title.css';


function Header() {
    return (
          <div className="nav-container">
            <img src='https://media.aldoshoes.com/v3/product/barbiepltfm/660-003-032/barbiepltfm_pink_660-003-032_look-part_sq_nt_1200x1200.jpg' />
            
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
                <a href="#catalog">Catalog</a>
              </li>
              <li className="nav-item">
                <a href="#trends">New Trends</a>
              </li>
              <li className="nav-item">
                <a href="#footer">Contact Us</a>
              </li>
            </ul>
      </div>
    );
  }

export default Header;
