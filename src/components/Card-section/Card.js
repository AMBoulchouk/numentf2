import React from 'react'
import './Card.css'

export default function Card() {
  return (
<section className="menu" id="menu">

<h1 className="heading"><span>Menu</span> </h1>

    <div className="grid grid-cols-3 gap-1 auto-rows-[minmax(20rem,_1fr)] box-container">

        <div className="p-20 text-center box">
            <img src={'https://scontent.faep15-1.fna.fbcdn.net/v/t39.30808-6/277164234_7588019724571301_2820656686782256509_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHz9gdEMVrzVnb3ADsw6euEAITS7bNXnWgAhNLts1edaCvP9yPExFt5ZDyebBPU9USZLkjQIz1--ZGrRO97LXJ9&_nc_ohc=xCPiT3uCuzEAX9mcqpU&_nc_ht=scontent.faep15-1.fna&oh=00_AT-LTWcXNgeZGxhfCF2ez43DpEH5dHK-SBhW1GmPl1fzgg&oe=624E5CCB'} alt="Menu-1"/>
            <h3>Café Espresso</h3>
            <div className="price">$00.00 <span>00.00</span></div>
            <a href="#" className="btn">Comprar</a>
        </div>

    </div>    
</section>
  )
}

