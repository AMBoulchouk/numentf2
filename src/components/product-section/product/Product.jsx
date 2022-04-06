import React from 'react';

function Product(props) {
    return(
        <div className="box">
          <div className="image">
            <img src={require('../../../img/cup.jpg')} alt="" />
          </div>
        </div>
    );
}

export default Product;