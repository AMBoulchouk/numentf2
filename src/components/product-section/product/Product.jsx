import React from 'react';

const Product = ({id, name, price, weight, img_url, stock }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={img_url} alt={name} />
      </div>
      <div className="product-info">
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{weight}</p>
        <p>{stock}</p>
      </div>
    </div>
  );
}

export default Product;