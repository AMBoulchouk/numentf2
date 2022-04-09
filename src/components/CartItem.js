import React from 'react';
import './Card.css';




const CartItem = () => {
    return (
    <div className ="cart-item">
        <h4>Name</h4>
        <h5>$ Price</h5>
        <button>Eliminar uno</button>
        <button>Eliminar todos</button>
    </div> 
    )
    }
    
    export default CartItem