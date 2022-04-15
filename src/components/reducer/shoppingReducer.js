
import { TYPES } from "../actions/shoppingActions";


export const shoppingInitialState = {
products: [
    {
      id: '1',
      name: 'Cortado',
      price: 80,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '2',
      name: 'Americano',
      price: 80,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '3',
      name: 'Con leche',
      price: 80,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '4',
      name: 'Caramel',
      price: 200,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '5',
      name: 'Black',
      price: 80,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '6',
      name: 'Cappuccino',
      price: 160,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '7',
      name: 'Mocca',
      price: 150,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '8',
      name: 'Expresso',
      price: 70,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '9',
      name: 'Latte',
      price: 90,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
    {
      id: '10',
      name: 'Bonbom',
      price: 140,
      image: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_Square_0000.jpg67C2D82F-0B3D-4734-9E13-403E90F2728DLarge.jpg',
    },
  ],

cart: [],
};



export function shoppingReducer (state , action ) {
    switch ( action.type ) {
        case TYPES.ADD_TO_CART: {
                let newItem = state.products.find((product) => product.id === action.payload); //OK
            
                let ItemInCart = state.cart.find((item) => item.id === newItem.id);//OK

                return ItemInCart 
                ? {
                    ...state,
                    cart: state.cart.map(item => item.id === newItem.id //OK
                    ? {...item, quantity: item.quantity + 1}
                    :item
                    ), 
                }

                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1}], //OK
                }
                }
            

        case TYPES.REMOVE_ONE_PRODUCT: {
                let itemToDelete = state.cart.find(item => item.id === action.payload);

                return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload
                    ? {...item, quantity: item.quantity - 1}
                    : item 
                    ),
                }
                : {
                    ...state, 
                    cart: state.cart.filter(item => item.id !== action.payload)
                }

        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }
        default:
        return state;
    
    }
}