import React, { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";

import ProductList from './product/ProductList';


export default function Carousel() {
  return (
    <div className="container mx-auto">
      <ProductList />
    </div>
  );
}