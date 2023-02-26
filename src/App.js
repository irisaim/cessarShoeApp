import React, { Component } from 'react'
import Header from './Header/Header'
import Container from './Container/Container';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Countdown from './CountdownTimer/CountdownTimer';
// import Banner from 'react-js-banner';


function App() {
    return (
      <div className="App">
        <Header />
        <Countdown timeTillDate="05 26 2019, 6:00 am" 
		timeFormat="MM DD YYYY, h:mm a" />
        <Container />
        <Hero />
        <Footer />
      </div>
    );   
  }

export default App
