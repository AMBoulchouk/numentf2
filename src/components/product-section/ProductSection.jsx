import './ProductSection.css';
import React from 'react';
import Product from './product/Product';

function ProductSection(props) {
  return (

    <section className="products" id="products">

      <h1 className="heading"><span>Productos</span></h1>

      <div className="box-container">

        <Product />

      </div>
    </section>
  );
}

export default ProductSection;