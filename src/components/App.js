import './App.css';
import Banner from './banner/Banner';
import Header from './header/Header';
import ProductSection from './product-section/ProductSection';
import ContactSection from './contact-section/ContactSection';
import React from 'react';
import Information from './Information-section/Information';
import ShoppingCart from './ShoppingCart';
import MainSection from './main-section/MainSection';


function App() {
  return (
    <>
    <div className="App">
      <Banner/>
      <Header/>
      <MainSection />
      <ProductSection/> 
      <section className="menu" id="menu">
        <h1 className="heading"><span>Menu</span></h1>
          <ShoppingCart/>
      </section> 
      <ContactSection/> 
      <Information/>
    </div>
    </>
  );
}

export default App;
