import React from 'react'
import './Information.css'

export default function information() {
  return (
<section className="information" id="#">
    <h1 className="heading"><span>Información</span> </h1>
    <div className="box-container">
        <img src={''} alt="Full Coffee"/>
            <ul>
                <h3>Occasions</h3>
                <li>Occasions</li>
                <li>Working From Home</li>
                <li>Snack Time</li>
                <li>Breakfast</li>
                <li>Vegan Life</li>
                <li>Baking</li>
                <li>Girts n' Bundles</li>
                <li>Easy Cooking</li>
                <li>All Products</li>
            </ul>
            <ul>
                <h3>All Categories</h3>
                <li>Baking</li>
                <li>Breakfast</li>
                <li>Condiments</li>
                <li>Drinks</li>
                <li>Heat Things Up</li>
                <li>Meal Solutions</li>
                <li>Pantry Staples</li>
                <li>Simmer Sauces</li>
                <li>Snacks</li>
                <li>Spice Up Your Cooking</li>
                <li>Sweet tooth</li>
                <li>Wine n' Cheese</li>
            </ul>
            <ul>
                <h3>Gifts n' Bundles</h3>
                <li>Sweet tooth Special</li>
                <li>Discoverd Local</li>
                <li>Baking Box</li>
                <li>Spicy Heat Lover's Box</li>
                <li>Sensations</li>
            </ul>
            <ul>
                <h3>Special</h3>
            </ul>
            <ul>
                <h3>News</h3>
            </ul>
    </div>

</section>
  )
}
