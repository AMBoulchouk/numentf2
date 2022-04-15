import React from 'react';

import Information from './Information-section/Information';

import ShoppingCart from './ShoppingCart';


function App() {
  return (
    <>
    <div className="App">
      <section className="menu" id="menu">
        <h1 className="heading"><span>Menu</span></h1>
          <ShoppingCart/>
      </section> 
      <Information/>
    </div>
    </>
  );
}

export default App;
