


const Product = ({data, addToCart}) => {

    const {id, name, price, image} = data;

    return (
        <div className='py-20 text-center hover:scale-125'>
            <img className='h-32 m-auto' src={image}/>
            <h3 className='px-0 py-4 text-4xl text-white' >{name}</h3>
            <div className='px-0 py-2 text-4xl text-white price'>$ {price}.00</div>
            <button onClick={() => addToCart(id) } className="btn">Agregar</button>
        </div> 
)
}

export default Product