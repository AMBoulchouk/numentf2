import React from 'react'
import './Information.css'

export default function information() {
  return (
<section className="information" id="#">
    <h1 className="heading"><span>Información</span> </h1>
    <div className="grid grid-cols-6 gap-1 auto-rows-[minmax(20rem,_1fr)] box-container">
        <img src={'https://pbs.twimg.com/profile_images/1505885583931068419/cWb-cLJD_400x400.jpg'} className='h-48 rounded-full' alt="Full Coffee"/>
            <ul>
                <h3>Tipos de Cafe</h3>
                <li>Latte</li>
                <li>Espresso</li>
                <li>Mocca</li>
                <li>Americano</li>
                <li>Bonbom</li>
                <li>Cappuccino</li>
                <li>Cafe Negro</li>
                <li>Frappe</li>
                <li>Y más</li>
            </ul>
            <ul>
                <h3>Nuestras Categorias</h3>
                <li>Home</li>
                <li>Contact</li>
                <li>Menu</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Whatsapp</li>
            </ul>
            <ul>
                <h3>De interes</h3>
                <li>Plantas de Cafe</li>
                <li>Principales Productores</li>
                <li>Medio Oriente</li>
                <li>Vietnam</li>
                <li>Etiopia</li>
                <li>Indonesia</li>
                <li>India</li>
                <li>Colombia</li>
                <li>Medio Occidental</li>
                <li>Brasil</li>
                <li>Colombia</li>
                <li>Peru</li>
                <li>Nicaragua</li>
            </ul>
            <ul>
                <h3>Especiales</h3>
                <li>Crema</li>
                <li>Chocolate</li>
                <li>Canela</li>
                <li>Leche</li>
                <li>Caramelo</li>
            </ul>
            <ul>
                <h3>Noticias</h3>
                <li>Proximamente...</li>
            </ul>
    </div>

</section>
  )
}
