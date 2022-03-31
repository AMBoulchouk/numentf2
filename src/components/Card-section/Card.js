import React from 'react'
import './Card.css'

export default function card() {
  return (
<section className="menu" id="menu">

<h1 className="heading"><span>Menu</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={'https://w7.pngwing.com/pngs/721/224/png-transparent-coffee-cup-breakfast-cafe-coffee-tea-coffee-shop-happy-birthday-vector-images-thumbnail.png'} alt="Menu-1"/>
            <h3>Café Espresso</h3>
            <div className="price">$00.00 <span>00.00</span></div>
            <a href="#" className="btn">Comprar</a>
        </div>
    </div>    
</section>
  )
}

