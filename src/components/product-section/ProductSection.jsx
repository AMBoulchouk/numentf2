import './ProductSection.css';
import React from 'react';
import Product from './product/Product';
import products from '../../db.json';

const productos = products.products;

const ProductSection = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading"><span>Productos</span></h1>
      <div className="box-container">
        {productos.map(product => (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            weight={product.weight}
            img_url={product.img_url}
            stock={product.stock} />
        ))}
      </div>
    </section>
  )
};

export default ProductSection;