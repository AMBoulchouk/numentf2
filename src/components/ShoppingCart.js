
import { shoppingReducer, shoppingInitialState } from "../components/reducer/shoppingReducer";
import { TYPES } from "./actions/shoppingActions";
import { useReducer } from "react";
import CartItem from "./CartItem";
import Product from "./Product";


const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {products, cart} = state

    const addToCart = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
    }

    const deleteFromCart = (id, all = false) => {
        if (all) {
            dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
        } else {
            dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})
        }
  
    }

    const clearCart = () => {
        dispatch({types: TYPES.CLEAR_CART})
    }

return (
    <>
        <div className='box-container mb-8 bg-no-repeat bg-cover bg-[url(https://p4.wallpaperbetter.com/wallpaper/363/368/20/dark-wood-texture-wallpaper-preview.jpg)]'>
    
            {products.map(product => <Product 
                key={product.id}
                data={product}
                addToCart={addToCart}
                />)} 
        </div>
        <section className="border-2 border-orange-100 border-solid">
        <h1 className="heading"><span className="text-white">Carrito</span> del Cafe</h1>
        <div className="bg-white box-container">
            
            {cart.map((item, index) => <CartItem 
            key={index}
            data={item} deleteFromCart={deleteFromCart}/>
            )}

        </div>
        <div className="flex-1 text-center">
            <button onClick={() => clearCart()} className="text-center mt-4 py-4 px-6 text-2xl text-white rounded-3xl bg-[#ddb17c] hover:text-black">Limpiar Carrito</button>
        </div>
        </section>

    </>
    );
};
export default ShoppingCart;