import React, { Component } from 'react';
import './Hero.css'

class Hero extends Component {
    state = {
        beers: []
      }

      fetchBeers = (param) => {
        fetch(`https://api.punkapi.com/v2/beers?${param}`)
          .then(data => data.json())
          .then(beers => {
            this.setState({ beers });
          })
          .catch(error => {
            console.log(error);
        })
      }
  render() {
  let beers = this.state.beers.map(beer => <li style={styles}> {beer.name} </li>);
  return(
    <>
   <h1 className='catalog-container'>See all products in our catalog</h1>
      <div id="catalog" className="hero__buttons">
        <div className='buttons-container'>
        <button className="hero__button1" onClick={this.fetchBeers}> 
            All products
        </button>
        <button className="hero__button2" onClick={() => this.fetchBeers("food=taco") }> 
            Special Offers        
        </button>  
        </div>
        <div className='api-listContainer'>
          { beers }
        </div>
      </div>
      </>
  );
}
}
const styles = {
    font: '100%/1.5 monospace',
    color: '#222',
    fontWeight: 'bold'
  }
  export default Hero;
  