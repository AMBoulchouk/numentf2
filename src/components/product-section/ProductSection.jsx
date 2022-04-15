import './ProductSection.css';
import React from 'react';
import Carousel from './carousel/Carousel';

const ProductSection = () => {
  return (
    <section className="products" id="products">
      <h1 class="heading"><span>Productos</span></h1>
      <div className="flex justify-center">
        <Carousel />
       </div>
    </section>
  )
};

export default ProductSection;