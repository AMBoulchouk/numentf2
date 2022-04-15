import React from "react";


const CartItem = ({data, deleteFromCart}) => {

    const {id, name, price, image, quantity} = data;

    return (
        <div className="p-10 text-center">
            <img className="h-24 m-auto" src={image}/>
            <h3 className="text-2xl font-bold">{name}</h3>
            <div className='text-2xl price'>$ {price}.00 x {quantity} = $ {price * quantity}</div>
            <div>
            <button onClick={() => deleteFromCart(id)} className="mt-4 py-4 px-6 text-2xl text-white rounded-3xl bg-[#ddb17c] hover:text-black text-center" >Eliminar</button>
            </div>
            <div>
            <button onClick={() => deleteFromCart(id, true)}className="mt-4 py-4 px-6 text-2xl text-white rounded-3xl bg-[#ddb17c] hover:text-black">Eliminar todos</button>
            </div>
        </div> 
    )
}

export default CartItem