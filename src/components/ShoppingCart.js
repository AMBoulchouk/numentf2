
import { shoppingReducer, shoppingInitialState } from "../components/reducer/shoppingReducer";
import { TYPES } from "./actions/shoppingActions";
import { useReducer } from "react";
import Product from "./Product";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {product, cart} = state

    const addToCart = () => {}

    const deleteFromCart = () => {}

    const clearCart = () => {}

return (
    <>
    <h2>Carrito de Compras</h2>
    <h3>Productos</h3>
        <div className="box grid-responsive">
            {products.map(product => <Product 
            
            key={product.id}
            data={product}
            addToCart={addToCart}
            
            />)}
        </div>
        <h3>Carrito</h3>
    <div className="box">

    {cart.map ((item, index )=> <CartItem key={index}
    data={item} deleteFromCart={deleteFromCart} />)}

    </div>
    <button>Limpiar Carrito</button>
    </>
    );
};
export default ShoppingCart;