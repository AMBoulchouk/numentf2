import React from 'react';
import './App.css';
//import Card from './Card-section/Card';
import Information from './Information-section/Information';
import CartItem from './CartItem';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <section className="menu" id="menu">

        <h1 className="heading"><span>Menu</span></h1>
        <Product/>
    </section> 
      <Information/>
    </div>
  );
}

export default App;
