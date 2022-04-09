
import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
products: [
{ id: 1 , name: "Producto A", price: 10 },
{ id: 2 , name: "Producto B", price: 50 },
{ id: 3 , name: "Producto C", price: 100 },
{ id: 4 , name: "Producto D", price: 150 },
{ id: 5 , name: "Producto E", price: 200 },
],

cart: [],
};



export function shoppingReducer (state , action ) {
    switch ( action.type ) {
        case TYPES.ADD_TO_CART : {}
        case TYPES.REMOVE_ONE_PRODUCT : {}
        case TYPES.REMOVE_ALL_PRODUCTS : {}
        case TYPES.CLEAR_CART : {}
        default:
            return state;
    }
}