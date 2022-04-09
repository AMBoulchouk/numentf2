import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
            <section className="banner text-center text-white bg-purple-800  flex-wrap justify-center sm:ease-in-out sm:delay-80" id="banner">
                <span>50% de descuento en tu segunda unidad</span>
                <button type='button' className="ml-2 hover:text-blue-500" onClick={() => {var x = document.getElementById("banner");
                if (x.style.display === "none") {
                  x.style.display = "block";
                } else {
                  x.style.display = "none";
                }} }>[×]</button>
            </section>
    )
}