import React, { Component } from 'react'
import FreeShipping  from './Header/FreeShipping';
import Header from './Header/Header'
import SearchBar from './Header/SearchBar'
import Container from './Container/Container';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Faq from './Footer/Faq';
import Countdown from './CountdownTimer/CountdownTimer';


function App() {
  
    return (
      <div className="App">
        <FreeShipping />
        <Header />
        {/* <SearchBar /> */}
        <Countdown timeTillDate="09 24 2023, 6:00 am" 
		        timeFormat="MM DD YYYY, h:mm a" />
        <Container />
        <Hero />
        <Faq />
        <Footer />
      </div>
    );   
  }

export default App
