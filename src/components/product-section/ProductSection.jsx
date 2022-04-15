import './ProductSection.css';
import React from 'react';
import Carousel from './carousel/Carousel';

const ProductSection = () => {
  return (
    <section className="products" id="products">
      <div className="flex justify-center">
        <Carousel />
       </div>
    </section>
  )
};

export default ProductSection;