import React, {useState} from 'react'
import './Banner.css'

export default function Banner() {
  const [banner,setBanner]= useState(true)
    return (<>
            { banner && <section className="banner text-center text-white bg-purple-800  flex-wrap justify-center sm:ease-in-out sm:delay-80" id="banner">
                <span>50% de descuento en tu segunda unidad</span>
                <button type='button' className="ml-2 hover:text-blue-500" onClick={()=> setBanner(false)}>[×]</button>
            </section>}
            </>
    )
}